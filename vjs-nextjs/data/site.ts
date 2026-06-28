import type { NavItem, Stat, Service, Industry, CommitmentItem } from "@/types";

export const COMPANY = {
  name: "VJS Smart Systems",
  short: "VJS",
  tagline: "Engineering Smart Automation for Modern Industries",
  description:
    "Delivering Industrial Automation, IoT Monitoring, Control Panels, Wireless Communication Systems, Robotics, and Industry 4.0 Solutions for manufacturing and process industries.",
  email: "info@vjssmartsystems.com",
  phone: "+91 00000 00000",
  whatsapp: "+910000000000",
  address: "Plot No. 00, Industrial Estate, Hyderabad, Telangana, India",
  hours: "Monday – Saturday, 9:00 AM – 6:00 PM",
  mapsEmbed:
    "https://www.google.com/maps?q=Hyderabad%20industrial%20estate&output=embed",
};

export const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Contact", to: "/contact" },
];

export const STATS: Stat[] = [
  { value: 12, suffix: "+", label: "Years of Engineering" },
  { value: 250, suffix: "+", label: "Projects Executed" },
  { value: 10, suffix: "+", label: "Industries Served" },
  { value: 99, suffix: "%", label: "Customer Satisfaction" },
];

export const SERVICES: Service[] = [
  {
    id: "industrial-automation",
    title: "Industrial Automation",
    desc: "PLC programming, machine automation, process control, and smart manufacturing solutions.",
    icon: "Cpu",
  },
  {
    id: "scada-hmi",
    title: "SCADA & HMI Development",
    desc: "Real-time monitoring, visualization, alarm management, and reporting systems.",
    icon: "MonitorCog",
  },
  {
    id: "industrial-iot",
    title: "Industrial IoT Solutions",
    desc: "Cloud-connected monitoring systems with real-time dashboards and analytics.",
    icon: "Radio",
  },
  {
    id: "wireless-monitoring",
    title: "Wireless Monitoring Systems",
    desc: "LoRa-based remote monitoring and control solutions for distributed assets.",
    icon: "Wifi",
  },
  {
    id: "control-panel",
    title: "Control Panel Manufacturing",
    desc: "Customized industrial control panels designed for various applications.",
    icon: "SquareTerminal",
  },
  {
    id: "robotics-mechatronics",
    title: "Robotics & Mechatronics",
    desc: "Advanced automation solutions integrating sensors, actuators, and robotics.",
    icon: "Bot",
  },
  {
    id: "industry-4",
    title: "Industry 4.0 Integration",
    desc: "Digital transformation, predictive maintenance, and intelligent manufacturing systems.",
    icon: "Factory",
  },
];

export const WHY_CHOOSE_US: string[] = [
  "Customized Engineering Solutions",
  "Experienced Automation Professionals",
  "Industry 4.0 Expertise",
  "End-to-End Project Execution",
  "Reliable Technical Support",
  "Scalable and Future-Ready Systems",
  "Cloud and Mobile Monitoring Access",
  "Cost-Effective Automation Solutions",
];

export const INDUSTRIES: Industry[] = [
  { name: "Manufacturing", img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1600&auto=format&fit=crop" },
  { name: "Chemical", img: "https://images.unsplash.com/photo-1605063074489-be6ba5e0c44a?q=80&w=1600&auto=format&fit=crop" },
  { name: "Water Treatment", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1600&auto=format&fit=crop" },
  { name: "Food Processing", img: "https://images.unsplash.com/photo-1565194481104-39d1ccf6cf2c?q=80&w=1600&auto=format&fit=crop" },
  { name: "Pharmaceutical", img: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1600&auto=format&fit=crop" },
  { name: "Textile", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1600&auto=format&fit=crop" },
  { name: "Oil & Gas", img: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=1600&auto=format&fit=crop" },
  { name: "Smart Agriculture", img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1600&auto=format&fit=crop" },
  { name: "Solar Pump Monitoring", img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop" },
  { name: "Infrastructure & Utilities", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1600&auto=format&fit=crop" },
];

export const CORE_EXPERTISE: string[] = [
  "Industrial Automation",
  "PLC Programming",
  "SCADA Development",
  "Industrial IoT Solutions",
  "Wireless Monitoring Systems",
  "Control Panel Manufacturing",
  "Robotics & Mechatronics",
  "Industry 4.0 Integration",
];

export const COMMITMENT: CommitmentItem[] = [
  { title: "Quality Engineering", desc: "Rigorous design, build and testing protocols across every deliverable." },
  { title: "Customer-Centric Approach", desc: "Solutions architected around your plant, processes and people." },
  { title: "Technical Excellence", desc: "Deep specialization in PLC, SCADA, IoT and Industry 4.0 stacks." },
  { title: "Long-Term Partnerships", desc: "Lifecycle support that scales with your operations." },
  { title: "Continuous Innovation", desc: "Predictive maintenance, edge intelligence and cloud-native monitoring." },
];

export const IMAGES = {
  heroPrimary: "https://images.pexels.com/photos/34207359/pexels-photo-34207359.jpeg",
  heroSecondary: "https://images.pexels.com/photos/25819964/pexels-photo-25819964.jpeg",
  aboutMission: "https://images.pexels.com/photos/32845692/pexels-photo-32845692.jpeg",
  aboutFloor: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2000&auto=format&fit=crop",
  ctaBanner: "https://images.pexels.com/photos/29320998/pexels-photo-29320998.jpeg",
  iot: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2000&auto=format&fit=crop",
  panel: "https://images.pexels.com/photos/32529354/pexels-photo-32529354.jpeg",
};
