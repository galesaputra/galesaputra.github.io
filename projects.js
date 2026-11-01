// Edit this list to add, remove or reorder projects.
// type: "mobile" | "web"   shots: images in assets/work   links: store / live URLs
window.PROJECTS = [
  {
    name: "Bunji",
    type: "mobile",
    client: "Singapore",
    summary: "Social app for bikers. I was the sole fullstack developer.",
    did: [
      "Facebook, Google and Apple sign‑in",
      "Bike clubs and event management",
      "Map of events within a radius of the user, with polylines",
      "Real‑time comments with Firestore streams",
      "Push notifications (FCM) and deep links"
    ],
    stack: ["Flutter", "Firebase"],
    shots: ["bunji-1.jpg"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/sg/app/bunji/id1590793023" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.bunjiapp" }
    ]
  },
  {
    name: "Bountie",
    type: "mobile",
    client: "Singapore",
    summary: "Tournament platform for online games.",
    did: [
      "Join, create and follow tournaments, single and team brackets",
      "Leaderboards",
      "Authentication"
    ],
    stack: ["Flutter", "GetX"],
    shots: ["bountie-2.jpg", "bountie-3.jpg"]
  },
  {
    name: "Pondok Indah Hospital",
    type: "web",
    client: "Indonesia",
    summary: "Patient portal and hospital management CMS for RSPI.",
    did: [
      "Find a doctor, profile management and appointment booking",
      "CMS for doctors, patients, bookings and users",
      "Pixel‑accurate slicing from design"
    ],
    stack: ["React", "TypeScript", "Next.js", "Tailwind"],
    shots: ["rspi-1.jpg"]
  },
  {
    name: "Maxi",
    type: "mobile",
    client: "Indonesia",
    summary: "Community app for a mental health service.",
    did: [
      "Community feed: post, comment, like, filter and flag content",
      "Facebook, Google and Apple sign‑in",
      "Push notifications with OneSignal",
      "Play Store and App Store release"
    ],
    stack: ["Flutter", "OneSignal"],
    shots: ["maxi-1.jpg"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/id/app/maxi-think-perform-better/id1632571529?l=en" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.rebelworks.maxi_app_prod&hl=en&gl=US" }
    ]
  },
  {
    name: "Saham Rakyat",
    type: "mobile",
    client: "Indonesia",
    summary: "App for buying and selling shares.",
    did: [
      "Registration and portfolio monitoring",
      "Screens built from Figma",
      "Bug fixing across Android and iOS"
    ],
    stack: ["Flutter", "Provider"],
    shots: ["saham-1.jpg", "saham-2.jpg"],
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.twiscode.sahamrakyat&hl=en&gl=US" }
    ]
  },
  {
    name: "Komunal",
    type: "mobile",
    client: "Indonesia",
    summary: "P2P lending and deposits for rural banks (BPR).",
    did: [
      "Built Depositoku, the member savings feature",
      "Mentored junior developers on Flutter and the codebase"
    ],
    stack: ["Flutter", "Provider"],
    shots: ["komunal-1.jpg", "komunal-2.jpg"],
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=id.co.komunal" }
    ]
  },
  {
    name: "AdaJalans",
    type: "mobile",
    client: "Indonesia",
    summary: "Banking app for a BPR, for the public and registered members.",
    did: [
      "Authentication with biometrics",
      "P2P lending and savings",
      "Server‑driven flows that change with backend config"
    ],
    stack: ["Flutter", "Provider", "GetX"],
    shots: ["adajalans-2.jpg", "adajalans-3.jpg"]
  },
  {
    name: "Rekalaba",
    type: "web",
    client: "Indonesia",
    summary: "Online cashier and store management, built in Flutter for the web.",
    did: [
      "Cart, item grid, auth and payments",
      "Different ordering flows per restaurant",
      "Hand‑off to GoPay"
    ],
    stack: ["Flutter Web"],
    shots: ["rekalaba-1.jpg"]
  },
  {
    name: "AST",
    type: "mobile",
    client: "Singapore",
    summary: "Tablet panel where visitors rate and review toilets.",
    did: [
      "Toilet temperature monitoring",
      "Fixed‑screen kiosk layout for a shared device"
    ],
    stack: ["Flutter", "Provider"],
    shots: ["ast-1.jpg"]
  }
];

// Projects without screenshots, shown as a compact list.
window.MORE_PROJECTS = [
  { name: "Mall wayfinding website", type: "web", client: "Singapore", text: "Responsive mall site with routes to stores and amenities, plus content posts.", stack: "React, Tailwind" },
  { name: "Kantor Imigrasi Soekarno‑Hatta", type: "web", client: "Indonesia", text: "News, immigration rules, statistics and gallery sections.", stack: "React" },
  { name: "Mira Mobile", type: "mobile", client: "USA", text: "Warehouse and branch store app: cart, store management, auth and transactions.", stack: "Flutter, Provider" },
  { name: "Techanic", type: "mobile", client: "Indonesia", text: "App for technicians. Built screens and wired them to view models.", stack: "Flutter, Bloc" }
];
