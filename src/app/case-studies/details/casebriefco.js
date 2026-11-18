// CaseBriefCo: copy AW-CS-03 | CaseBriefCo (generated from the Word doc, text as supplied).
// Sharing permission: Confirm with client before publishing
// TODO (from the doc, not published): Still needed: client name (if willing), subscriber count, client quote. Confirm sharing permission.
const caseBriefCo = {
  "slug": "casebriefco",
  "name": "CaseBriefCo",
  "badge": "Client Story — CaseBriefCo",
  "title": "A library of legal knowledge. Now online, searchable, and powered by AI.",
  "subtitle": "CaseBriefCo turned a lawyer’s physical archive into a subscription platform used by law students across the US.",
  "description": "CaseBriefCo turned a lawyer’s physical archive into a subscription platform used by law students across the US.",
  "stats": [
    {
      "value": 2,
      "label": "websites built and live"
    },
    {
      "value": 5,
      "label": "content categories on the study platform"
    },
    {
      "text": "AI research tool",
      "label": "built into the subscription"
    },
    {
      "text": "$14/month or $90/year",
      "label": "subscription pricing"
    }
  ],
  "client": [
    "A US-based lawyer and law tutor who had spent years building a private library of legal case studies, outlines, and exam materials. He was tutoring students in person. The content was valuable. The distribution was not."
  ],
  "problem": [
    "Everything lived in physical form. Students who wanted access had to come to him. The material could not scale. He was trading time for money, one student at a time, when the content itself could be serving thousands.",
    "He needed to digitise the archive, put it online, and build a subscription model around it. He also wanted AI built into the platform so students could research cases the way lawyers do: by asking questions, not scrolling through an index."
  ],
  "builtIntro": "Aripra built two websites for this client.",
  "features": [
    {
      "title": "CaseBriefCo — the subscription study platform",
      "body": [
        "A structured legal study platform for law students preparing for the Bar exam. Content is organised across five categories: Case Briefs, Outlines, Exam Writing, Flash Cards, and a Legal Dictionary. Case briefs are searchable by subject area (Administrative Law, Criminal Law, Oil and Gas, and more), by year of law school, and alphabetically. Subscriptions are managed through Stripe at $14 per month or $90 per year. US-only geo-targeting was configured to keep the audience focused."
      ]
    },
    {
      "title": "AI legal research tool",
      "body": [
        "Built directly into the platform. Students query a case — name, citation, or subject — and get an AI-generated response from the platform’s knowledge base. For cases requiring verified citations, the tool switches to live lookup and returns sourced results. It works the way legal research actually works: ask a question, get an answer, verify the source."
      ]
    },
    {
      "title": "Book e-commerce site",
      "body": [
        "A separate website for selling the client’s physical books — the same material, in print. Standard purchase flow with postal and courier integration for US delivery. Books priced individually. Both sites share the same content architecture but serve different buyer intents."
      ]
    }
  ],
  "outcome": [
    "Both sites are live. The physical library that could only reach students in a room now reaches anyone preparing for the Bar. The AI research tool gives students something no textbook can: a way to interrogate the material rather than just read it."
  ],
  "facts": [
    [
      "Product",
      "CaseBriefCo — Legal Study Platform + Book E-commerce"
    ],
    [
      "Geography",
      "USA"
    ],
    [
      "Status",
      "Live"
    ],
    [
      "Core stack",
      "React · Node.js · Stripe"
    ],
    [
      "Integrations",
      "AI research integration · Postal/courier API"
    ]
  ]
};

export default caseBriefCo;
