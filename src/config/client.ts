export const client = {
  // Business Details
  name: "Esse Landscapes",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Copthorne.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "01342 714095",
  email: "",
  website: "",

  // Location
  address: "Copthorne",
  city: "Copthorne",
  county: "",
  postcode: "",
  basedIn: "Copthorne",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "5",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Rachel Goozee", rating: 5, text: "It’s been an absolute pleasure working with Esse landscapes over the past six months. Professional and an absolute delight on site thank you so much. ", date: "2 months ago" },
    { name: "Nick H", rating: 5, text: "Steve and the whole team at Esse landscapes are fantastic to work with. They were really helpful in developing detail plans for our garden and the team on the ground were great - focused on delivering a high standard of work (in …  ", date: "2 years ago" },
    { name: "Jenni Seltzer", rating: 5, text: "Highly recommend  Esse landscapes on every level. Extremely professional, courteous and pleasant to deal with. You only have to look at their award winning landscaping to see the impeccable …  ", date: "8 years ago" },
    { name: "adam heslop", rating: 5, text: "A new courtyard, electric gate, drive, parking, turfing and fencing expertly delivered and integrated into our existing landscaping by the Esse team, seamlessly coordinated by Steve. Highly recommended. ", date: "6 years ago" },
    { name: "Chris Archibald", rating: 5, text: "Steve, Bobby, Jamie, Pat and the rest of the team were very easy to work with and delivered a very high standard of work. Recommended! ", date: "8 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Esse Landscapes | Landscaper in Copthorne",
    description: "Professional landscaper in Copthorne. 5.0-star rated on Google. Call for a free quote.",
  },
};
