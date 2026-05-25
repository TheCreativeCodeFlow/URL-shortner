import type { LucideIcon } from "lucide-react";

export type MetricTone = "neutral" | "success" | "warning" | "danger";

export type Metric = {
  label: string;
  value: string;
  delta: string;
  tone: MetricTone;
};

export type LinkRecord = {
  id: string;
  destination: string;
  shortUrl: string;
  workspace: string;
  clicks: number;
  status: "Live" | "Protected" | "Expiring" | "Paused";
  expires: string;
};

export type Workspace = {
  name: string;
  description: string;
  links: number;
  clicks: string;
  risk: "Low" | "Medium" | "High";
  accent: string;
  members: number;
};

export type TimelineItem = {
  title: string;
  detail: string;
  time: string;
  tone?: MetricTone;
};

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};
