export const brand = {
  name: "Jimmy's Smokey Pit BarBecue",
  shortName: "The Smokey Pit",
  handle: "thesmokeypit31",
  instagramUrl: "https://www.instagram.com/thesmokeypit31/",
  instagramLabel: "@thesmokeypit31",
  tagline: "Low. Slow. Butcher-cut. Pit-smoked.",
  description:
    "Jimmy's Smokey Pit BarBecue is a rustic pit and meat counter — smoked brisket, ribs, pork, and butcher-style cuts with charcoal energy and smokehouse soul.",
  logo: "/assets/ig-profile.jpg",
  instagramNote:
    "Official mark pulled from @thesmokeypit31. The public grid had no posts yet — food stills stay licensed until the pit publishes plates.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "The Counter" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "The Pit" },
  { href: "/contact", label: "Find Us" },
] as const;

export const categories = [
  { slug: "brisket", name: "Brisket", image: "/assets/cut-brisket.jpg", blurb: "Bark, smoke ring, sliced thick." },
  { slug: "ribs", name: "Ribs", image: "/assets/hero-ribs.jpg", blurb: "St. Louis style, lacquered glaze." },
  { slug: "pork", name: "Pulled Pork", image: "/assets/cut-pork.jpg", blurb: "Shoulder, pulled by hand." },
  { slug: "chicken", name: "Chicken", image: "/assets/cut-chicken.jpg", blurb: "Pit bird, crisp skin." },
  { slug: "sausage", name: "Links", image: "/assets/cut-sausage.jpg", blurb: "Smokehouse sausage & wings." },
  { slug: "steak", name: "Steaks", image: "/assets/pit-plate.jpg", blurb: "Butcher-cut, fire-finished." },
] as const;

type Offering = {
  id: string;
  name: string;
  category: string;
  badge?: string;
  image: string;
  note: string;
  description: string;
};

export const offerings: readonly Offering[] = [
  {
    id: "brisket",
    name: "Pit Brisket",
    category: "Beef",
    badge: "Pit Favorite",
    image: "/assets/cut-brisket.jpg",
    note: "Signature item — inspired by the smoke we post at @thesmokeypit31.",
    description: "Long-smoked beef with a pepper bark and a clean slice. The house centerpiece.",
  },
  {
    id: "ribs",
    name: "Glazed Spare Ribs",
    category: "Pork",
    badge: "From the Pit",
    image: "/assets/hero-ribs.jpg",
    note: "Signature item — inspired by the smoke we post at @thesmokeypit31.",
    description: "Meat-shop ribs with a sticky glaze and a tug off the bone.",
  },
  {
    id: "platter",
    name: "Butcher Board",
    category: "Platters",
    badge: "Feed the Table",
    image: "/assets/hero-platter.jpg",
    note: "Signature item — inspired by the smoke we post at @thesmokeypit31.",
    description: "A counter spread of smoked meats, pickles, and sauce — shop-style, not plated fancy.",
  },
  {
    id: "pork",
    name: "Hand-Pulled Pork",
    category: "Pork",
    image: "/assets/cut-pork.jpg",
    note: "Signature item — inspired by the smoke we post at @thesmokeypit31.",
    description: "Boston butt taken to bark, pulled coarse, finished with a vinegar kiss.",
  },
  {
    id: "chicken",
    name: "Smokehouse Chicken",
    category: "Poultry",
    image: "/assets/cut-chicken.jpg",
    note: "Signature item — inspired by the smoke we post at @thesmokeypit31.",
    description: "Whole bird energy: bronzed skin, juicy meat, pit rub.",
  },
  {
    id: "steak",
    name: "Fire-Finished Steak",
    category: "Beef",
    image: "/assets/pit-plate.jpg",
    note: "Signature item — inspired by the smoke we post at @thesmokeypit31.",
    description: "Butcher-cut steak, seared hard, rested like the counter would serve it.",
  },
  {
    id: "wings",
    name: "Pit Wings",
    category: "Poultry",
    image: "/assets/cut-sausage.jpg",
    note: "Signature item — inspired by the smoke we post at @thesmokeypit31.",
    description: "Smoked then kissed on the fire. Sauce on the side, always.",
  },
  {
    id: "dinner",
    name: "Pit Plate",
    category: "Platters",
    image: "/assets/pit-plate.jpg",
    note: "Signature item — inspired by the smoke we post at @thesmokeypit31.",
    description: "Meat, bread, and a heavy plate — the weekday counter special.",
  },
];

export const gallery = [
  { src: "/assets/hero-brisket.jpg", alt: "Sliced smoked beef with a dark bark", caption: "The slice" },
  { src: "/assets/hero-ribs.jpg", alt: "Rack of barbecue ribs with glaze", caption: "The rack" },
  { src: "/assets/hero-platter.jpg", alt: "Barbecue platter with meats and sides", caption: "The board" },
  { src: "/assets/butcher-counter.jpg", alt: "Raw butcher cuts ready for the pit", caption: "The counter" },
  { src: "/assets/cut-pork.jpg", alt: "Grilled meat over open fire", caption: "The fire" },
  { src: "/assets/gallery-01.jpg", alt: "A generous smoked-meat spread", caption: "The spread" },
  { src: "/assets/gallery-ribs.jpg", alt: "Close-up barbecue ribs", caption: "Close heat" },
  { src: "/assets/about-smoke.jpg", alt: "Barbecue cooking over smoke", caption: "Low & slow" },
  { src: "/assets/pit-plate.jpg", alt: "Steak dinner plate from the pit", caption: "The plate" },
  { src: "/assets/gallery-02.jpg", alt: "Finely plated restaurant meat dish", caption: "Finish" },
  { src: "/assets/gallery-06.jpg", alt: "Stacked burger with smoked energy", caption: "Stacked" },
  { src: "/assets/gallery-08.jpg", alt: "Rustic meat and comfort food", caption: "Comfort" },
] as const;

export const reasons = [
  { title: "Butcher first", copy: "Cuts treated like a meat shop, not a diner special — trimmed, rubbed, and shown on the counter." },
  { title: "The long smoke", copy: "Low heat, hardwood, and patience. Bark before sauce. Always." },
  { title: "Pit energy", copy: "Charcoal, cream paper, red stamps. A shop you can smell through the screen." },
  { title: "Cater the fire", copy: "Boards, trays, and drop-offs for crews and family tables. DM the pit to book." },
] as const;
