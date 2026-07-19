// ─── Data ────────────────────────────────────────────────────────────────────
 
// ─── Types ───────────────────────────────────────────────────────────────────
export type Severity = "Critical" | "High" | "Medium" | "Low";
export type Status   = "Open" | "In Progress" | "Resolved" | "Closed";
export type PassFail = "Pass" | "Fail" | "Pending" | "Blocked";


export enum Store {
  ACCESS_TOKEN = "a15e952b-cf46-4bf9-8524-38542acffc5a"
}

export const menFashion = [
  "Clothing",
  "Shoes",
  "Accessories",
  "Underwear & Sleepwear",
  "Traditional & Cultural Wear",
  "T-Shirts",
  "Polo Shirts",
  "Trousers & Chinos",
  "Sneakers",
  "Jewelry",
];

export const womenFashion = [
  "Clothing",
  "Shoes",
  "Accessories",
  "Underwear & Sleepwear",
  "Handbags & Wallets",
  "Maternity",
  "Dresses",
  "Traditional",
  "Sneakers",
  "Beach & Swimwear",
];

export const accessories = ["Men's Watch", "Women's Watch", "Men's Glasses", "Women's Glasses"];

export const kidsFashion = ["Boy's Fashion", "Girl's Fashion"];

export const topBrands = ["Addidas", "Nike", "Puma", "Fendi", "Louis Vuitton", "Dior", "Gucci", "Citizen"];

export function slugify(label: string) {
  return label.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}


export type TeamMember = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  color: string;
};

export type Task = {
  id: number;
  title: string;
  status: string;
  assignee: string;
  dueDate: string;
};

export type Activity = {
  id: number;
  user: string;
  action: string;
  target: string;
  time: string;
};

export type FileItem = {
  id: number;
  name: string;
  size: string;
};

export type Project = {
  id: string
  name: string
  description: string
  status: string
  yourRole: string
  memberCount: number
  priority: string
  projectStartDate: string
  projectDueDate: string
  tags: string[]
  createdAt: string
};