export interface Product {
  slug: string;
  name: string;
  category: string;
  categoryLabel: string;
  tagline: string;
  image: string;
  gallery?: string[];
  overview: string;
  features: string[];
  specs: [string, string][];
  applications: string[];
  industries: string[];
  benefits: string[];
  deliverables: string[];
  amazon: string;
}

export interface NavItem {
  label: string;
  to: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

export interface Industry {
  name: string;
  img: string;
}

export interface CommitmentItem {
  title: string;
  desc: string;
}

export interface ProductCategory {
  id: string;
  label: string;
}
