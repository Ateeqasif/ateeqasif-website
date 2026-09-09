<?php
/**
 * Server-side contact-form handler for the static (Hostinger) deployment.
 * Uses PHP's built-in mail() function, which Hostinger shared hosting
 * enables by default, no third-party API key or account required.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

function respond(int $status, array $body): never {
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'message' => 'Method not allowed.']);
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
    respond(400, ['ok' => false, 'message' => 'Invalid request body.']);
}

function field(array $data, string $key): string {
    return isset($data[$key]) && is_string($data[$key]) ? trim($data[$key]) : '';
}

// Strip characters that could be used for email header injection.
function clean_header_value(string $value): string {
    return trim(preg_replace('/[\r\n]+/', ' ', $value));
}

$name = clean_header_value(field($data, 'name'));
$email = clean_header_value(field($data, 'email'));
$organization = clean_header_value(field($data, 'organization'));
$reason = clean_header_value(field($data, 'reason'));
$message = field($data, 'message');
$consent = isset($data['consent']) && $data['consent'] === true;
$honeypot = field($data, 'company_website');

// Honeypot: real visitors never fill this in. Pretend success, do not send.
if ($honeypot !== '') {
    respond(200, ['ok' => true]);
}

$allowedReasons = ['Partnership', 'Investment', 'Business Advisory', 'Media', 'Other'];

$errors = [];
if ($name === '') {
    $errors['name'] = 'Enter your full name.';
}
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Enter a valid email address.';
}
if (!in_array($reason, $allowedReasons, true)) {
    $errors['reason'] = 'Select a reason for contacting.';
}
if (mb_strlen(trim($message)) < 30) {
    $errors['message'] = 'Add a little more detail (at least 30 characters).';
}
if (!$consent) {
    $errors['consent'] = 'Consent is required to send your message.';
}

if (!empty($errors)) {
    respond(422, ['ok' => false, 'message' => 'Please correct the highlighted fields.', 'errors' => $errors]);
}

$toAddress = 'ateeqasif1168@gmail.com';
$fromAddress = 'noreply@ateeqasif.com';
$subject = 'From Ateeq Website - New Contact';

$bodyLines = [
    'New message from ateeqasif.com',
    '',
    "Name: {$name}",
    "Email: {$email}",
    'Organization: ' . ($organization !== '' ? $organization : 'Not provided'),
    "Reason: {$reason}",
    '',
    'Message:',
    $message,
];
$body = implode("\r\n", $bodyLines);

$headers = [
    'From: Ateeq Asif Website <' . $fromAddress . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=utf-8',
];

$sent = @mail($toAddress, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    respond(502, ['ok' => false, 'message' => 'Something went wrong while sending your message.']);
}

respond(200, ['ok' => true, 'delivery' => 'sent']);
