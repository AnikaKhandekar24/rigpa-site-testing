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
    { label: "How We Work", href: "#how" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Technology & Privacy Law",
    title: "Counsel for technology that crosses borders.",
    ledeBefore: "Technology, artificial intelligence, and data — ",
    ledeEmphasis: "India-qualified, internationally fluent.",
    ledeAfter:
      " Engagements with defined scope, defined timelines, and counsel of record on the legal work.",
    ctas: [
      { label: "Get in touch", href: "#contact", variant: "primary" },
      { label: "How we work", href: "#how", variant: "secondary" },
    ],
  },
  practice: {
    marker: "§ 01",
    markerLabel: "Practice",
    eyebrow: "Three lines",
    title: "We work where global technology meets local regulation.",
    dekBefore:
      "The work spans technology, artificial intelligence, and data — for companies whose products do not stop at a single jurisdiction. ",
    dekEmphasis: "India-qualified, internationally fluent.",
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
          "Cross-border privacy programmes for companies with users in many places at once. The GDPR, the CCPA, India’s Digital Personal Data Protection Act, and the wider modern privacy stack — read together, advised on as one engagement. Counsel of record for in-house teams; fractional engagements where there is no in-house team yet.",
        scope:
          "Privacy programme design, cross-border data transfers, data processing agreements, privacy notices, breach response, Data Protection Officer engagements, regulator-facing submissions.",
      },
    ],
  },
  how: {
    marker: "§ 02",
    markerLabel: "How",
    eyebrow: "How we work",
    title: "Defined scope. Defined timeline. No hourly meter.",
    dekBefore: "We work in three directions — ",
    dekEmphasis: "technology and product, AI and emerging tech, and global privacy",
    dekAfter:
      " — for companies whose products do not stop at a single border. Each engagement has a defined scope and a defined timeline, agreed in writing before work begins. The legal work is signed by counsel of record.",
    items: [
      {
        label: "Where to begin",
        title: "Diagnostic Lite",
        body: [
          "A short, free readiness check. Answer a handful of questions and you get a general sense of where an organisation like yours tends to stand, and what is usually worth looking at next.",
          "It is a signal, not advice — generic, not tailored. When you want a view on your actual situation, that begins with a Triage.",
        ],
      },
    ],
  },
  ways: {
    marker: "§ 03",
    markerLabel: "Modes",
    eyebrow: "Ways to work together",
    title: "Most engagements take one of these shapes.",
    dek:
      "The right structure depends on where you are and what you need. We settle that on a short discovery call, then confirm it in writing before work begins.",
    items: [
      {
        label: "Triage",
        title: "A week. The usual first serious step.",
        body: [
          "A diagnostic read of where you stand, the issues that matter most, and a roadmap for addressing them.",
        ],
      },
      {
        label: "Programme",
        title: "Three to five weeks. A full build.",
        body: [
          "The notices, agreements, policies, and workflows a product actually needs to operate — delivered ready to use.",
        ],
      },
      {
        label: "Audit",
        title: "Six to eight weeks. Audit-grade build.",
        body: [
          "A structured review with an evidence binder, for companies preparing for a fundraise, an acquisition, a certification, or a regulator.",
        ],
      },
      {
        label: "Counsel",
        title: "Ongoing support, sized to stage.",
        body: [
          "A retainer for teams that need a lawyer they can call — from early-stage foundations to a mature programme. Monthly, with a clear scope.",
        ],
      },
      {
        label: "Single Artefact",
        title: "One contract. One opinion. One review.",
        body: ["For when you know exactly what you need."],
      },
    ],
  },
  special: {
    marker: "§ 04",
    markerLabel: "Special",
    eyebrow: "Special formats",
    title: "Training where it helps. Incident support where it matters.",
    items: [
      {
        label: "Training and simulation",
        title: "Workshops and tabletop exercises for working teams.",
        body: [
          "Privacy fundamentals, AI Act obligations, breach simulations — education and practice, delivered to your team.",
          "Not legal advice on your specific situation; a way to build your team’s own judgement.",
        ],
      },
      {
        label: "Incident support",
        title: "Limited-availability support for defined incidents.",
        body: [
          "A data breach, a regulator inquiry, a takedown — where capacity and panel coverage permit. Available first to existing clients.",
          "Because incident work depends on understanding your systems, clearing conflicts, and confirming availability, we confirm scope and whether we can act before any clock starts.",
        ],
      },
    ],
  },
  process: {
    marker: "§ 05",
    markerLabel: "Process",
    eyebrow: "How an engagement runs",
    title: "Short path in. Clear path through.",
    steps: [
      {
        number: "1",
        title: "You write to us.",
        body: "A short note about what you are building and what you need.",
      },
      {
        number: "2",
        title: "A discovery call.",
        body:
          "Thirty minutes. A conversation about whether the practice fits your actual problem — not a sales pitch.",
      },
      {
        number: "3",
        title: "A scoping memo.",
        body:
          "The line, the shape of the engagement, the deliverables, the timeline, the fee, and what is not included. One page.",
      },
      {
        number: "4",
        title: "An engagement letter.",
        body: "Signed before work begins.",
      },
      {
        number: "5",
        title: "Delivery.",
        body:
          "On the agreed timeline. Every legal artefact reviewed and signed by counsel of record.",
      },
      {
        number: "6",
        title: "Handover.",
        body:
          "A written note and a call, so your team can operate what has been built. A thirty-day window for questions follows.",
      },
    ],
  },
  limits: {
    marker: "§ 06",
    markerLabel: "Limits",
    eyebrow: "What we don’t do",
    title: "Boundaries are part of the practice.",
    items: [
      {
        body: [
          "We do not bill by the hour. We do not litigate or appear in court. We do not take general corporate, employment, tax, or criminal work — we will point you to someone who does.",
          "And we do not take engagements where the client wants a sign-off without a real programme behind it. The sign-off is the point; it has to mean something.",
        ],
      },
    ],
  },
  contact: {
    marker: "§ 07",
    markerLabel: "Contact",
    eyebrow: "Inquiries",
    title: "Tell us what you are building.",
    body:
      "Every inquiry is reviewed. Where an engagement is a fit, we follow up with a short discovery call and a written scope. Where it is not, we say so directly and, where we can, point to someone better suited.",
  },
  footer: {
    tag: "Technology & privacy law · India-qualified, internationally fluent",
    disclosureBefore: " is the website of ",
    disclosureMiddle:
      ", an Indian private company providing non-legal advisory, technology, and operations services. Legal advisory services are provided separately by an India-qualified Advocate, in personal capacity, under a distinct engagement letter. The company is not a law firm and does not hold itself out as one. This site is informational; nothing on it constitutes legal advice or solicitation of work. For grievances under the Digital Personal Data Protection Act, 2023, write to ",
  },
} as const;

export type PracticeItem = (typeof siteContent.practice.items)[number];
