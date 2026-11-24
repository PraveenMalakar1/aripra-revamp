// Route Portal: copy AW-CS-02 | CarPlanet: Route Portal (generated from the Word doc, text as supplied).
// 2026-11-24: synced to the updated AW-CS-02 doc (CarPlanet version); fraud framing removed (outcome stat, problem, "AI job verification", outcome), per the updated doc.
// Sharing permission: Open
// TODO (from the doc, not published): Still needed: Tasleem quote. Confirm exact figures before publishing.
const routePortal = {
  "slug": "route-portal",
  "name": "Route Portal",
  "badge": "Client Story — Route Portal",
  "title": "Every driver. Tracked. Every job. Verified.",
  "subtitle": "AI catches what managers can’t watch. Route Portal closed the gaps in CarPlanet’s transport operation.",
  "description": "AI catches what managers can’t watch. Route Portal closed the gaps in CarPlanet’s transport operation.",
  "stats": [
    {
      "value": 169,
      "label": "active drivers on the platform"
    },
    {
      "value": 4000,
      "label": "jobs processed per week",
      "prefix": "~"
    },
    {
      "value": 60000,
      "label": "saved per month on driver payments",
      "prefix": "£"
    },
    {
      "value": 96,
      "label": "job completion rate",
      "suffix": "%"
    },
    {
      "text": "2.6×",
      "label": "growth in 7 months"
    },
    {
      "value": 3,
      "label": "irregular billing patterns caught and closed automatically"
    },
    {
      "value": 0,
      "label": "manual payment calculations"
    }
  ],
  "client": [
    "CarPlanet is one of the UK’s leading used car marketplaces. Behind the showroom is a logistics operation that moves hundreds of cars between branches, auction houses, and collection points every week. 153 drivers. Multiple sites. Cars that need to be in the right place when a customer is waiting."
  ],
  "problem": [
    "CarPlanet’s transport operation was running on trust. Drivers created their own jobs, managers approved them, and payments were calculated by hand. Nobody was watching closely enough.",
    "The system had no way to verify whether jobs were completed correctly. Duplicate submissions, passengers listed on multiple jobs simultaneously, photos of the wrong vehicles — none of it was visible from the top.",
    "Driver pay was calculated by the hour, regardless of how efficiently a driver worked. The business was paying for shift time, not output. There was no live visibility into where the fleet was, which cars were arriving where, or how long branches would be waiting."
  ],
  "builtIntro": "Route Portal manages every stage of CarPlanet’s transport operation, from job creation to payment.",
  "features": [
    {
      "title": "Per-trip driver payments",
      "body": [
        "Drivers were previously paid by the shift at an hourly rate. Route Portal replaced the hourly model entirely. It calculates the time each trip should take using live map data, then pays the driver a per-minute rate for that trip. A driver who takes longer than the route requires is not paid more for it. CarPlanet saves approximately £15,000 per week. Around £60,000 per month."
      ]
    },
    {
      "title": "Live fleet tracking",
      "body": [
        "Every driver’s location streams in real time over Socket.IO. Branch dashboards update the moment a position changes. Staff see exactly which car is inbound, where it is on the route, and how far away it is. Customers get a real wait time, not a guess."
      ]
    },
    {
      "title": "Vehicle condition documentation",
      "body": [
        "Drivers record video of each car at the point of collection and again at delivery. Management can pull up both recordings for any job. Disputes are resolved against evidence, not memory."
      ]
    },
    {
      "title": "AI job verification, three ways",
      "body": [
        "The first catches duplicate submissions. Every photo a driver uploads is geo-tagged and timestamped. If the location doesn’t match the job, or the job completes faster than the map-predicted time allows, the system raises a flag.",
        "The second catches scheduling conflicts. If a driver or passenger is already on an active job, they cannot be assigned to another one at the same time.",
        "The third catches wrong-car photos. Gemini reads the vehicle registration number from every car photo and checks it against the job. A mismatch triggers an immediate warning."
      ]
    },
    {
      "title": "AI fuel receipt processing",
      "body": [
        "Drivers photograph their fuel receipt and upload it. Gemini reads the data automatically: amount, litres, date. No manual entry. Reimbursement limits are set per job based on mileage."
      ]
    },
    {
      "title": "Automated weekly invoicing",
      "body": [
        "At the end of each week, Route Portal generates a payment invoice per driver: jobs completed, amounts earned, any penalties deducted, net pay. Invoices are emailed to the driver and the finance team. No spreadsheets. No manual calculation."
      ]
    }
  ],
  "outcome": [
    "Replacing shift-hour billing with per-minute trip pricing saves CarPlanet £15,000 a week. £60,000 a month. Across 153 drivers processing 4,000 jobs a week, the difference compounds fast.",
    "Three categories of billing irregularity that were previously invisible are now caught automatically. Duplicate submissions don’t get approved. Scheduling conflicts are blocked at assignment. Wrong vehicles can’t be submitted.",
    "The manual payment process is gone. Every weekly invoice is generated by the system. Managers have live visibility into every car in transit. Branches can tell customers exactly how long to wait."
  ],
  "facts": [
    [
      "Product",
      "Route Portal — Driver Operations and Transport Management"
    ],
    [
      "Geography",
      "UK"
    ],
    [
      "Engagement",
      "Dedicated engineering team"
    ],
    [
      "Status",
      "Live"
    ],
    [
      "Stack",
      "Node.js · TypeScript · MongoDB · Next.js · Socket.IO · Gemini · Google Maps API · AWS · OAuth 2.1 · MCP analytics servers"
    ]
  ]
};

export default routePortal;
