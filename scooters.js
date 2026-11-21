// scooters.js — Multi-brand EV showroom data layer
// Every scooter carries a `brand` field so new brands can be added effortlessly.
// Zero speed figures, no promotional clutter, no outdated battery chemistry.

const SCOOTER_BRANDS = [
  { id: "nij", name: "NIJ", brand: "NIJ", tagline: "Premium Electric Mobility" },
  // Future brands can be added here, e.g.:
  // { id: "hero", name: "Hero", brand: "Hero Electric", tagline: "..." },
];

const SCOOTERS = [
  {
    id: "nij-r14",
    brand: "NIJ",
    name: "NIJ R 14",
    image: "./images/r14.png",
    variants: [
      { label: "48V 25Ah", volts: 48, ah: 25, range: "45-50 km", price: 65000 },
      { label: "48V 30Ah", volts: 48, ah: 30, range: "55-60 km", price: 70000 }
    ],
    defaultVariant: 0,
    colors: ["Black", "White", "Blue", "Grey", "Maroon"],
    colorNote: null,
    brakes: "Front Disc / Rear Drum",
    tyres: "Front 90/90-12, Rear 90/90-10 Tubeless Alloy",
    kerbWeight: "82 kg",
    groundClearance: "175 mm",
    loadCapacity: "150 kg",
    motor: "Waterproof BLDC Hub Motor",
    suspension: "Telescopic Front / Hydraulic Rear",
    charging: "4-5 hrs",
    highlights: ["Waterproof BLDC Hub Motor", "Telescopic Front + Hydraulic Rear Suspension", "Charging 4-5 hrs"]
  },
  {
    id: "nij-accelero",
    brand: "NIJ",
    name: "NIJ ACCELERO+",
    image: "./images/accelero.png",
    variants: [
      { label: "48V 25Ah", volts: 48, ah: 25, range: "45-50 km", price: 68000 },
      { label: "48V 30Ah", volts: 48, ah: 30, range: "55-60 km", price: 72000 }
    ],
    defaultVariant: 0,
    colors: ["Matte Green", "Blue", "Red", "Purple"],
    colorNote: null,
    brakes: "Front Disc / Rear Drum",
    tyres: "Front 90/90-12, Rear 90/90-10 Tubeless Alloy",
    kerbWeight: "85 kg",
    groundClearance: "180 mm",
    loadCapacity: "150 kg",
    motor: "Waterproof BLDC Hub Motor",
    suspension: "Telescopic Front / Dual Hydraulic Rear",
    charging: "4-5 hrs",
    highlights: ["Waterproof BLDC Hub Motor", "Telescopic Front + Dual Hydraulic Rear Suspension", "Charging 4-5 hrs"]
  },
  {
    id: "nij-n9",
    brand: "NIJ",
    name: "NIJ N9",
    image: "./images/n9.png",
    variants: [
      { label: "60V 25Ah", volts: 60, ah: 25, range: "60-70 km", price: 75000 },
      { label: "60V 30Ah", volts: 60, ah: 30, range: "70-80 km", price: 80000 }
    ],
    defaultVariant: 0,
    colors: ["Navy Blue", "Red", "Silver", "Black", "Deep Green", "Blue"],
    colorNote: null,
    brakes: "Double Disc (Front & Rear Disc)",
    tyres: "Front 90/90-12, Rear 90/90-12 Tubeless Alloy",
    kerbWeight: "88 kg",
    groundClearance: "180 mm",
    loadCapacity: "150 kg",
    motor: "High-Torque BLDC Hub Motor",
    suspension: "Telescopic Front / Hydraulic Rear",
    charging: "4-5 hrs",
    highlights: ["High-Torque BLDC Hub Motor", "Double Disc Brakes (Front & Rear)", "Charging 4-5 hrs"]
  },
  {
    id: "nij-captiva",
    brand: "NIJ",
    name: "NIJ CAPTIVA 5G",
    image: "./images/captiva-5g.png",
    variants: [
      { label: "60V 25Ah", volts: 60, ah: 25, range: "60-70 km", price: 80000 },
      { label: "60V 35Ah", volts: 60, ah: 35, range: "80-90 km", price: 85000 }
    ],
    defaultVariant: 0,
    colors: ["Black", "Blue", "White", "Grey", "Green"],
    colorNote: null,
    brakes: "Double Disc (Front & Rear Disc)",
    tyres: "Front 90/90-12, Rear 90/90-12 Tubeless Alloy",
    kerbWeight: "90 kg",
    groundClearance: "180 mm",
    loadCapacity: "150 kg",
    motor: "High-Torque BLDC Hub Motor",
    suspension: "Telescopic Front / Hydraulic Rear",
    charging: "4-5 hrs",
    highlights: ["High-Torque BLDC Hub Motor", "Full Steel Guard Kit", "Keyless Remote + Anti-Theft Alarm"]
  },
  {
    id: "nij-ae4",
    brand: "NIJ",
    name: "NIJ AE4",
    image: "./images/ae4.png",
    variants: [
      { label: "60V 35Ah", volts: 60, ah: 35, range: "80-90 km", price: 88000 },
      { label: "60V 45Ah", volts: 60, ah: 45, range: "100-120 km", price: 98000 }
    ],
    defaultVariant: 0,
    colors: ["Black", "Grey", "White", "Red", "Green"],
    colorNote: "All Dual Tone",
    brakes: "Double Disc (Front & Rear Disc)",
    tyres: "Front 90/90-12, Rear 90/90-12 Tubeless Alloy",
    kerbWeight: "92 kg",
    groundClearance: "185 mm",
    loadCapacity: "150 kg",
    motor: "High-Efficiency BLDC Hub Motor",
    suspension: "Telescopic Front / Hydraulic Rear",
    charging: "4-5 hrs",
    highlights: ["High-Efficiency BLDC Hub Motor", "Projector LED Headlamp", "Reverse Mode + Auto-Repair Switch"]
  },
  {
    id: "nij-iq",
    brand: "NIJ",
    name: "NIJ IQ",
    image: "./images/iq.png",
    variants: [
      { label: "60V 25Ah", volts: 60, ah: 25, range: "60-70 km", price: 85000 },
      { label: "60V 35Ah", volts: 60, ah: 35, range: "80-90 km", price: 95000 }
    ],
    defaultVariant: 0,
    colors: ["Black", "Blue", "White", "Maroon", "Bronze"],
    colorNote: "All Dual Tone",
    brakes: "Double Disc (Front & Rear Disc)",
    tyres: "Front 90/90-12, Rear 90/90-12 Tubeless Alloy",
    kerbWeight: "86 kg",
    groundClearance: "180 mm",
    loadCapacity: "150 kg",
    motor: "BLDC Hub Motor",
    suspension: "Telescopic Front / Hydraulic Rear",
    charging: "4-5 hrs",
    highlights: ["BLDC Hub Motor", "Digital Meter", "Anti-Theft Lock"]
  },
  {
    id: "nij-lc",
    brand: "NIJ",
    name: "NIJ LC",
    image: "./images/lc.png",
    variants: [
      { label: "60V 25Ah", volts: 60, ah: 25, range: "60-70 km", price: 80000 },
      { label: "60V 35Ah", volts: 60, ah: 35, range: "80-90 km", price: 90000 }
    ],
    defaultVariant: 0,
    colors: ["Black", "Blue", "White", "Maroon"],
    colorNote: "All Dual Tone",
    brakes: "Double Disc (Front & Rear Disc)",
    tyres: "Front 90/90-12, Rear 90/90-12 Tubeless Alloy",
    kerbWeight: "88 kg",
    groundClearance: "180 mm",
    loadCapacity: "150 kg",
    motor: "BLDC Hub Motor",
    suspension: "Telescopic Front / Hydraulic Rear",
    charging: "4-5 hrs",
    highlights: ["BLDC Hub Motor", "Twin-Pod LED Headlamp", "USB Charging Port"]
  },
  {
    id: "nij-loader",
    brand: "NIJ",
    name: "NIJ LOADER",
    image: "./images/loader.png",
    variants: [
      { label: "60V 35Ah", volts: 60, ah: 35, range: "60-70 km", price: 105000 },
      { label: "60V 45Ah", volts: 60, ah: 45, range: "80-90 km", price: 115000 }
    ],
    defaultVariant: 0,
    colors: ["Black"],
    colorNote: null,
    brakes: "Double Disc (Front & Rear Disc)",
    tyres: "Front 90/90-12, Rear 90/90-12 Reinforced Tubeless",
    kerbWeight: "110 kg",
    groundClearance: "185 mm",
    loadCapacity: "350 kg",
    motor: "Heavy-Duty High-Torque BLDC Motor",
    suspension: "Heavy-Duty Double-Spring Rear Suspension",
    charging: "4-5 hrs",
    highlights: ["Heavy-Duty High-Torque BLDC Motor", "Heavy-Duty Double-Spring Rear Suspension", "Front Metal Basket + Rear Flatbed Carrier", "Loading Capacity 350 kg"]
  }
];
