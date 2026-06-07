/**
 * Edit this file to update the site's public copy and identity details.
 * Keeping content here avoids hunting through layout and styling files.
 */
export const siteContent = {
  identity: {
    name: "Rigpa",
    companyName: "Rigpa Services Private Limited",
    email: "practice@rigpa.co",
    domain: "https://rigpa.co",
    copyrightYear: 2026,
    profile: null as null | {
      name: string;
      title: string;
      bio: string;
      imageUrl?: string;
    },
  },
  navigation: [
    { label: "Practice", href: "#practice" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Technology & Privacy Law",
    title: "Counsel for technology that crosses borders.",
    ledeBefore: "Technology, artificial intelligence, and data — ",
    ledeEmphasis: "India-qualified, internationally fluent.",
    ledeAfter:
      " Engagements with clear scope, clear timelines, and counsel of record on the legal work.",
    cta: "Get in touch",
  },
  practice: {
    marker: "§ 01",
    markerLabel: "Practice",
    eyebrow: "Three lines",
    title: "We work where global technology meets local regulation.",
    dekBefore:
      "The work spans technology, artificial intelligence, and data — for companies whose products do not stop at a single jurisdiction. ",
    dekEmphasis: "Indian counsel, working in international company.",
    items: [
      {
        number: "I",
        title: "Technology & Product",
        body:
          "Counsel across the lifecycle of a technology product. SaaS subscription agreements on either side of the table, technology and data licensing, API and platform partnerships, content moderation policy, intermediary safe-harbour, and product counsel that engineering and product teams can actually call.",
        scope:
          "Tech transactions, terms of service, developer agreements, marketplace and platform liability, pre-launch product review, open-source licence audits, privacy and technology diligence on M&A.",
      },
      {
        number: "II",
        title: "AI & Emerging Tech",
        body:
          "Governance frameworks, model card legal review, training-data audits, and compliance mapping across the EU AI Act, US state AI laws, and the regulatory frameworks taking shape in India and elsewhere. Built for companies whose AI products are global by design.",
        scope:
          "Responsible-AI policy, model risk assessments, AI vendor diligence, algorithmic accountability frameworks, pre-launch model review, cross-jurisdiction AI compliance mapping.",
      },
      {
        number: "III",
        title: "Global Privacy",
        body:
          "Cross-border privacy programmes for companies with users in many places at once. The GDPR, the CCPA, India's Digital Personal Data Protection Act, and the wider modern privacy stack — read together, advised on as one engagement. Counsel-of-record to in-house teams; fractional engagements where there is no in-house team yet.",
        scope:
          "Privacy programme design, cross-border data transfers, data processing agreements, privacy notices, breach response, Data Protection Officer engagements, regulator-facing submissions.",
      },
    ],
  },
  contact: {
    marker: "§ 02",
    markerLabel: "Contact",
    eyebrow: "Inquiries",
    title: "Tell us what you are building.",
    body:
      "We respond to every inquiry. Where an engagement is a fit, we follow up with a short discovery call and a written scope within five working days. Where it is not, we will say so directly and, where we can, point to someone better suited.",
  },
  footer: {
    tag: "Technology & privacy law · India-qualified, internationally fluent",
    disclosureBefore:
      " is the website of ",
    disclosureMiddle:
      ", an Indian private company providing non-legal advisory, technology, and operations services. Legal advisory services are provided separately by an India-qualified Advocate, in personal capacity, under a distinct engagement letter. The company is not a law firm and does not hold itself out as one. This site is informational; nothing on it constitutes legal advice or solicitation of work. For grievances under the Digital Personal Data Protection Act, 2023, write to ",
  },
} as const;

export type PracticeItem = (typeof siteContent.practice.items)[number];
