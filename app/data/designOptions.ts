import {
  Sparkles,
  User,
  Layout,
  Palette,
  Building,
  CreditCard,
} from "lucide-react";

export const designOptions = [
  {
    value: "modern",
    label: "Modern",
    icon: Sparkles,
    description: "Clean with colored accents",
  },
  {
    value: "classic",
    label: "Classic",
    icon: User,
    description: "Traditional professional",
  },
  {
    value: "minimal",
    label: "Minimal",
    icon: Layout,
    description: "Simple and clean",
  },
  {
    value: "creative",
    label: "Creative",
    icon: Palette,
    description: "Colorful and vibrant",
  },
  {
    value: "corporate",
    label: "Corporate",
    icon: Building,
    description: "Formal business style",
  },
  {
    value: "card",
    label: "Card",
    icon: CreditCard,
    description: "Business card layout",
  },
];
