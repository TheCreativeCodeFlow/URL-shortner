import {
  Activity,
  BarChart3,
  BriefcaseBusiness,
  Clock3,
  DatabaseZap,
  Fingerprint,
  Gauge,
  Globe2,
  Layers3,
  Link2,
  LockKeyhole,
  QrCode,
  Radar,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow
} from "lucide-react";
import type { LinkRecord, Metric, NavItem, PricingPlan, TimelineItem, Workspace } from "@/types";

export const marketingNav = [
  { label: "Features", href: "/#features" },
  { label: "Workspaces", href: "/workspaces" },
  { label: "Analytics", href: "/analytics" },
  { label: "Security", href: "/security" },
  { label: "Pricing", href: "/pricing" }
];

export const appNav: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: Gauge },
  { label: "Workspaces", href: "/workspaces", icon: Layers3 },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Security", href: "/security", icon: ShieldCheck },
  { label: "Settings", href: "/settings", icon: Fingerprint }
];

export const metrics: Metric[] = [
  { label: "Resolved clicks", value: "8.42M", delta: "+12.8%", tone: "success" },
  { label: "Active links", value: "42,918", delta: "+1,204", tone: "neutral" },
  { label: "Protected routes", value: "3,742", delta: "+18.2%", tone: "success" },
  { label: "Risk events", value: "27", delta: "-9.1%", tone: "warning" }
];

export const links: LinkRecord[] = [
  {
    id: "lnk_42a8",
    destination: "universal-link-platform.com/enterprise/launch",
    shortUrl: "ulp.run/launch",
    workspace: "Marketing",
    clicks: 128420,
    status: "Live",
    expires: "Never"
  },
  {
    id: "lnk_81f2",
    destination: "docs.universal-link-platform.com/security",
    shortUrl: "ulp.run/sec",
    workspace: "Security",
    clicks: 46218,
    status: "Protected",
    expires: "14 days"
  },
  {
    id: "lnk_7cd1",
    destination: "universal-link-platform.com/resume/rahul",
    shortUrl: "ulp.run/rsv",
    workspace: "Resume",
    clicks: 10432,
    status: "Expiring",
    expires: "36 hours"
  },
  {
    id: "lnk_209c",
    destination: "campaigns.universal-link-platform.com/q2",
    shortUrl: "ulp.run/q2",
    workspace: "Projects",
    clicks: 87903,
    status: "Live",
    expires: "90 days"
  },
  {
    id: "lnk_9b21",
    destination: "temporary-drop.universal-link-platform.com",
    shortUrl: "ulp.run/drop",
    workspace: "Temporary",
    clicks: 7814,
    status: "Paused",
    expires: "Paused"
  }
];

export const workspaces: Workspace[] = [
  {
    name: "Personal",
    description: "Identity, portfolio, private references, and long-lived links.",
    links: 118,
    clicks: "89K",
    risk: "Low",
    accent: "bg-accent-primary",
    members: 1
  },
  {
    name: "Projects",
    description: "Product workstreams, prototypes, handoffs, and staged releases.",
    links: 742,
    clicks: "1.8M",
    risk: "Medium",
    accent: "bg-status-warning",
    members: 8
  },
  {
    name: "Marketing",
    description: "Campaign links, QR placements, attribution, and launch surfaces.",
    links: 1292,
    clicks: "5.2M",
    risk: "Low",
    accent: "bg-status-success",
    members: 14
  },
  {
    name: "Resume",
    description: "Credential sharing, gated documents, and temporary routes.",
    links: 36,
    clicks: "18K",
    risk: "Low",
    accent: "bg-accent-secondary",
    members: 2
  },
  {
    name: "Temporary",
    description: "Expiring links, event drops, vendor access, and one-off campaigns.",
    links: 214,
    clicks: "204K",
    risk: "High",
    accent: "bg-status-danger",
    members: 5
  }
];

export const activity: TimelineItem[] = [
  { title: "Password rule enforced", detail: "42 protected links inherited the enterprise policy.", time: "3m ago", tone: "success" },
  { title: "Unusual country spike", detail: "Singapore traffic increased 44% for Marketing.", time: "18m ago", tone: "warning" },
  { title: "QR batch generated", detail: "Resume workspace created 12 campaign-ready QR assets.", time: "46m ago" },
  { title: "Expiry automation staged", detail: "17 temporary links will archive within 48 hours.", time: "2h ago", tone: "danger" }
];

export const featureBlocks = [
  { title: "Smart Links", icon: Link2, detail: "Aliases, rules, expiry, protection, routing, and QR surfaces in one compact creation flow." },
  { title: "Analytics", icon: Activity, detail: "Traffic intelligence with workspace comparisons, devices, browsers, geography, and anomalies." },
  { title: "Workspaces", icon: BriefcaseBusiness, detail: "Segment link operations by personal, project, campaign, resume, and temporary contexts." },
  { title: "QR Operations", icon: QrCode, detail: "Generate and track QR surfaces with the same lifecycle, policies, and attribution as links." },
  { title: "Security", icon: LockKeyhole, detail: "Password protection, access rules, audit trails, expiry policies, and risk scoring by default." },
  { title: "Future AI Layer", icon: Sparkles, detail: "Prepared for recommendations, anomaly summaries, alias suggestions, and workflow copilots." }
];

export const workflow = [
  { title: "Create", detail: "Paste a target, define alias, workspace, QR, password, and expiry in seconds." },
  { title: "Govern", detail: "Apply workspace policy, risk tier, access rules, and audit requirements." },
  { title: "Observe", detail: "Read trends, attribution, geography, devices, and anomalies from one analytics plane." },
  { title: "Automate", detail: "Let policies archive, rotate, notify, and escalate without manual maintenance." }
];

export const securityRows = [
  { rule: "Password-protected destinations", scope: "Security workspace", events: "1,284", status: "Healthy" },
  { rule: "Expiry policy drift", scope: "Temporary workspace", events: "17", status: "Review" },
  { rule: "Unrecognized geography", scope: "Marketing campaign", events: "9", status: "Watch" },
  { rule: "Paused legacy routes", scope: "All workspaces", events: "38", status: "Contained" }
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    price: "$0",
    description: "Personal link control for lightweight publishing.",
    features: ["100 active links", "Basic QR", "7-day analytics", "One workspace"]
  },
  {
    name: "Core",
    price: "$12",
    description: "Small teams managing public links and launch assets.",
    features: ["2,500 active links", "Workspace policies", "90-day analytics", "Protected links"]
  },
  {
    name: "Pro",
    price: "$29",
    description: "Advanced link operations with analytics and governance.",
    features: ["Unlimited links", "Advanced analytics", "Risk scoring", "Audit records", "Priority support"],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Security, controls, and scale for regulated organizations.",
    features: ["Custom retention", "SAML-ready UI", "Dedicated workspaces", "Policy templates", "Enterprise review"]
  }
];

export const chartSeries = [34, 42, 38, 58, 64, 71, 69, 84, 78, 96, 102, 118];

export const countryRows: Array<[string, string, string]> = [
  ["United States", "41.8%", "+8.4"],
  ["India", "18.2%", "+12.1"],
  ["Germany", "9.6%", "-2.3"],
  ["Singapore", "7.4%", "+44.0"],
  ["United Kingdom", "6.8%", "+1.7"]
];

export const deviceRows: Array<[string, string, string]> = [
  ["Mobile", "58%", "4.9M"],
  ["Desktop", "36%", "3.0M"],
  ["Tablet", "6%", "504K"]
];

export const browserRows: Array<[string, string, string]> = [
  ["Chrome", "48%", "4.0M"],
  ["Safari", "29%", "2.4M"],
  ["Edge", "13%", "1.1M"],
  ["Firefox", "10%", "842K"]
];

export const platformHighlights = [
  { label: "Edge ready", value: "39ms", icon: DatabaseZap },
  { label: "Policy checks", value: "18.6M", icon: Radar },
  { label: "Expiry queue", value: "1,204", icon: Clock3 },
  { label: "Members", value: "284", icon: UsersRound },
  { label: "Regions", value: "52", icon: Globe2 },
  { label: "Workflows", value: "96", icon: Workflow }
];
