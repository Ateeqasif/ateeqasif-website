import type { Recommendation } from "@/lib/types";

// Verbatim excerpts and headline text from LinkedIn recommendations on
// https://pk.linkedin.com/in/ateeqasif. Each recommendation is longer on
// LinkedIn itself (truncated there with "...more"); the excerpt below is
// the full text visible on the profile, ending where LinkedIn's own
// truncation does. sourceUrl links to the recommender's own profile.
export const recommendations: Recommendation[] = [
  {
    name: "Fayez Kharbat",
    title:
      "Founder & CEO | Entrepreneur | Board Member | Industry Speaker | Oil & Gas | EdTech | Artificial Intelligence | Digital Transformation | Strategy & Investment | Partnership | Advanced Solutions | Knowledge Management",
    relationship: "Fayez was Ateeq's client",
    excerpt:
      "I had the pleasure of working closely with Ateeq for several years, just before he founded Zapta to support entrepreneurs in developing their platforms and solutions. Ateeq is highly understanding, dependable, and consistently committed to excellence. He delivers on time, manages projects with precision, and always strives to exceed expectations. His strong grasp of technology and his ability to apply it strategically to drive real value for clients sets him apart as a true leader in his field…",
    sourceLabel: "LinkedIn recommendation · Excerpt",
    sourceUrl: "https://www.linkedin.com/in/fayezkharbat/",
  },
  {
    name: "Saber Sinan",
    title:
      "Development & Projects Executive | Project Director | Owner Representation | Portfolio & Commercial Management | Founder & CEO, MawadOnline",
    relationship: "Saber worked with Ateeq on the same team",
    excerpt:
      "I have had the pleasure of working with Ateeq Asif for nearly a year through our collaboration with Zapta Technologies, where he consistently impressed me with his commitment, professionalism, and outstanding project management skills. Ateeq is a proactive leader who ensures his team operates smoothly and efficiently. He is remarkable at handling multiple complex projects and delivering results on time, even under tight deadlines. His approach to managing projects is structured, clear, and methodical, and he…",
    sourceLabel: "LinkedIn recommendation · Excerpt",
    sourceUrl: "https://www.linkedin.com/in/sabersinan/",
  },
  {
    name: "Nasir Ali Joiya",
    title:
      "Co-Founder & CEO @ ZAPTA Technologies | Startups & SMEs Tech Partner in AI & Digital Transformation | Supporting Founders to Build MVPs in 6-8 Weeks | Building Teams to Deliver Product with Speed, Scale & Intelligence.",
    relationship: "Nasir worked with Ateeq on the same team",
    excerpt:
      "It's been more than 5 years, that I have been working with Ateeq, He has great skills and experience in business analysis and project management. He has been leading multiple teams and projects teams for big projects worldwide. I would highly recommend him.",
    sourceLabel: "LinkedIn recommendation",
    sourceUrl: "https://www.linkedin.com/in/nasir-ali-joiya/",
  },
];
