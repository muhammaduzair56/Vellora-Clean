// Vellora Clean style reminder: content is concise, calm and specific; never invent unverified service claims.
export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  { title: "Regular domestic cleaning", description: "A reliable recurring rhythm for busy homes and households." },
  { title: "One-off deep cleaning", description: "A detailed reset for kitchens, bathrooms, bedrooms and living spaces." },
  { title: "End-of-tenancy cleaning", description: "A thorough clean for tenants, landlords and property handovers." },
  { title: "Move-in & move-out cleaning", description: "A fresh start before moving in or after moving out." },
  { title: "Airbnb & serviced accommodation", description: "Guest-ready presentation between stays, subject to availability." },
  { title: "Office & commercial cleaning", description: "Thoughtful cleaning for local workspaces and business premises." },
  { title: "Window cleaning", description: "Clear, bright and streak-free glass surfaces." },
];

export const serviceAreas: string[] = [
  "West Midlands",
  "Northamptonshire",
  "Leicestershire",
  "Nottinghamshire",
  "Derbyshire",
];
