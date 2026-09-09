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

function h(string $value): string {
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

function email_row(string $label, string $valueHtml): string {
    return '<tr>'
        . '<td style="padding:10px 0;border-bottom:1px solid #eef0f4;font-size:13px;font-weight:600;color:#6b7280;width:140px;vertical-align:top;">'
        . h($label) . '</td>'
        . '<td style="padding:10px 0;border-bottom:1px solid #eef0f4;font-size:15px;color:#111827;vertical-align:top;">'
        . $valueHtml . '</td>'
        . '</tr>';
}

function build_html_email(string $name, string $email, string $organization, string $reason, string $message, string $domain): string {
    $messageHtml = nl2br(h($message));
    $rows = email_row('Name', h($name))
        . email_row('Email', '<a href="mailto:' . h($email) . '" style="color:#2563eb;text-decoration:none;">' . h($email) . '</a>')
        . email_row('Organization', $organization !== '' ? h($organization) : 'Not provided')
        . email_row('Reason', h($reason));

    return '<!doctype html><html><body style="margin:0;padding:0;background-color:#f4f5f7;font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif;">'
        . '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f5f7;padding:32px 16px;"><tr><td align="center">'
        . '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">'
        . '<tr><td style="background:linear-gradient(135deg,#38bdf8,#8b5cf6);padding:28px 32px;">'
        . '<p style="margin:0;font-size:13px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:rgba(255,255,255,0.85);">New Contact Form Submission</p>'
        . '<p style="margin:6px 0 0;font-size:22px;font-weight:700;color:#ffffff;">' . h($domain) . '</p>'
        . '</td></tr>'
        . '<tr><td style="padding:28px 32px 8px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">' . $rows . '</table></td></tr>'
        . '<tr><td style="padding:8px 32px 28px;">'
        . '<p style="margin:20px 0 8px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em;">Message</p>'
        . '<div style="background-color:#f8f9fb;border:1px solid #eef0f4;border-radius:10px;padding:16px 18px;font-size:15px;line-height:1.6;color:#111827;">'
        . $messageHtml . '</div>'
        . '</td></tr>'
        . '<tr><td style="padding:18px 32px;background-color:#f8f9fb;border-top:1px solid #eef0f4;">'
        . '<p style="margin:0;font-size:12px;color:#9ca3af;">Sent from the contact form on '
        . '<a href="https://' . h($domain) . '" style="color:#6b7280;">' . h($domain) . '</a>. '
        . 'Reply to this email to respond directly to ' . h($name) . '.</p>'
        . '</td></tr>'
        . '</table></td></tr></table></body></html>';
}

$toAddress = 'ateeqasif1168@gmail.com';
$fromAddress = 'hello@ateeqasif.com';
$subject = 'From Ateeq Website - New Contact';
$domain = 'ateeqasif.com';

$textBody = implode("\r\n", [
    "New message from {$domain}",
    '',
    "Name: {$name}",
    "Email: {$email}",
    'Organization: ' . ($organization !== '' ? $organization : 'Not provided'),
    "Reason: {$reason}",
    '',
    'Message:',
    $message,
]);

$htmlBody = build_html_email($name, $email, $organization, $reason, $message, $domain);

$boundary = 'bnd_' . bin2hex(random_bytes(12));
$mimeBody = "--{$boundary}\r\n"
    . "Content-Type: text/plain; charset=utf-8\r\n"
    . "Content-Transfer-Encoding: 8bit\r\n\r\n"
    . $textBody . "\r\n\r\n"
    . "--{$boundary}\r\n"
    . "Content-Type: text/html; charset=utf-8\r\n"
    . "Content-Transfer-Encoding: 8bit\r\n\r\n"
    . $htmlBody . "\r\n\r\n"
    . "--{$boundary}--";

$headers = [
    'From: Ateeq Asif Website <' . $fromAddress . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: multipart/alternative; boundary="' . $boundary . '"',
];

$headerString = implode("\r\n", $headers);

// Some shared hosts restrict or reject the extra -f (envelope sender)
// parameter outright, which makes mail() fail even though a plain call
// would have worked. Try with it first, then fall back without it.
$sent = @mail($toAddress, $subject, $mimeBody, $headerString, '-f' . $fromAddress);
if (!$sent) {
    $sent = @mail($toAddress, $subject, $mimeBody, $headerString);
}

if (!$sent) {
    respond(502, ['ok' => false, 'message' => 'Something went wrong while sending your message.']);
}

respond(200, ['ok' => true, 'delivery' => 'sent']);
