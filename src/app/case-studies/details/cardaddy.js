// CarDaddy: copy AW-CS-05 | CarPlanet: CarDaddy + Buyer Portal (generated from the Word doc, text as supplied).
// Sharing permission: Confirm with Tasleem before publishing
// TODO (from the doc, not published): INTERNAL: Confirm sharing permission with Tasleem before publishing. Client quote still needed.
const carDaddy = {
  "slug": "cardaddy",
  "name": "CarDaddy",
  "badge": "Client Story — CarDaddy",
  "title": "From private seller to CarPlanet inventory. Automated.",
  "subtitle": "CarDaddy manages the entire car acquisition pipeline: valuation, scheduling, pickup. No manual bottlenecks.",
  "description": "CarDaddy manages the entire car acquisition pipeline: valuation, scheduling, pickup. No manual bottlenecks.",
  "stats": [
    {
      "value": 7057,
      "label": "leads processed per month"
    },
    {
      "value": 74,
      "label": "screened out automatically, no agent involved",
      "suffix": "%"
    },
    {
      "text": "0.59s",
      "label": "median time from enquiry to valuation"
    },
    {
      "value": 85,
      "label": "cars acquired per month"
    },
    {
      "value": 33,
      "label": "year-on-year lead growth",
      "prefix": "+",
      "suffix": "%"
    },
    {
      "value": 181726,
      "label": "all-time leads processed"
    }
  ],
  "client": [
    "CarPlanet does not just sell used cars. They buy them directly from private sellers to stock their own inventory. That acquisition process is its own operation: leads, valuations, buyer visits, deals, pickups. Before CarDaddy, it ran on spreadsheets, calls, and WhatsApp with no system behind it."
  ],
  "problem": [
    "CarPlanet’s buying team was working without infrastructure. Leads came in from multiple sources with no central place to manage them. Every vehicle had to be manually assessed for eligibility. Valuations were calculated by hand and sent individually. Buyers had no system to plan their day or manage their routes. Once a deal was done, coordinating the pickup was yet another manual process.",
    "At scale, the operation could not hold. Every stage leaked time, and errors in valuation directly hit margin."
  ],
  "builtIntro": "CarDaddy connects two products: a seller-facing valuation website and an internal buyer portal.",
  "features": [
    {
      "title": "CarDaddy’s — the seller-facing website",
      "body": [
        "Private sellers enter their registration and mileage and receive a valuation. Before a human ever sees the lead, the system screens the vehicle automatically against CarPlanet’s buying criteria.",
        "Vehicles are rejected instantly if they fall outside the parameters: mileage over 100,000 or under 10,000, older than 10 years, last keeper under 6 months, valuation outside £7,000 to £20,000, retail value over £20,000, electric, red paint, write-off category S, Jaguar diesel, Land Rover, or the seller more than 90 miles from head office. If the car does not qualify, it does not proceed. No agent time wasted."
      ]
    },
    {
      "title": "Automated valuation",
      "body": [
        "Qualifying vehicles are valued using an internal pricing matrix built on AutoTrader’s retail pricing and ratings data. The system calculates a CarDaddy offer price in a median of 0.59 seconds. Call agents can adjust based on condition and the conversation. The final offer goes to the seller via WhatsApp."
      ]
    },
    {
      "title": "Competitive benchmarking",
      "body": [
        "An internal microservice benchmarks every qualifying lead against WeBuyAnyCar, Motorway, and Carwow in real time. Agents know what the customer has been quoted elsewhere before picking up the phone."
      ]
    },
    {
      "title": "Call system integration",
      "body": [
        "Agents work directly from the platform. Telephony is built in — calls are placed within the portal, logs and recordings captured automatically. WhatsApp is handled through SuperChat, which manages message volume to protect CarPlanet’s account rating."
      ]
    },
    {
      "title": "Buyer Portal",
      "body": [
        "Once a seller accepts an offer, the buyer team takes over. The Buyer Portal gives them a map view of all scheduled pickups, drag-and-drop booking cards, and a scheduling system with up to four two-hour slots per day per buyer. Bookings on the same route are grouped automatically. Buyers visit the seller, inspect the car, and complete the purchase."
      ]
    },
    {
      "title": "Pickup and inventory flow",
      "body": [
        "After a car is purchased, it moves into AutoGrid, drivers pick it up via Route Portal, and it appears in CarPlanet’s purchased inventory. Lead to stock, tracked in one system."
      ]
    }
  ],
  "outcome": [
    "7,057 leads a month. 74% screened out automatically — no agent involved. About 1,840 clear screening. Of those, roughly 85 become purchased cars.",
    "There is no AI in this system. The filtering is a deterministic rules engine: same decision every time, under a second, no model to tune, no edge cases to guard against. That is deliberate. When the rules are clear, rules are better.",
    "Agents spend time on leads that have already been qualified. Valuations land in under a second. The buyer team has a structured daily schedule. When a deal closes, the car moves directly into the fleet system. The manual coordination that held this operation together is gone."
  ],
  "facts": [
    [
      "Product",
      "CarDaddy + Buyer Portal — Car Acquisition Platform"
    ],
    [
      "Status",
      "Live (frontend rebuild in progress)"
    ],
    [
      "Core stack",
      "Node.js · TypeScript · Express · MongoDB · Socket.IO · JWT · AWS EC2 · PM2"
    ],
    [
      "Frontend",
      "CRA + React 18 (live) · Next.js + Tailwind (in flight)"
    ],
    [
      "Integrations",
      "AutoTrader · WeBuyAnyCar · Motorway · Carwow · Gamma Horizon · Xbee · SwitchboardFREE · SuperChat (WhatsApp) · Stream Chat · Twilio · Elastic Email · AutoGrid · Route Portal"
    ]
  ]
};

export default carDaddy;
