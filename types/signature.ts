// Defines allowed design keys
export type DesignType = "modern" | "classic";

// Data entered by the user in the form
export interface SignatureData {
  name: string;
  title: string;
  company: string;
  email: string;
  phone?: string;
  website?: string;
  linkedin?: string;
  twitter?: string;
}
