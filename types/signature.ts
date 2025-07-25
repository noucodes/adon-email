// Defines allowed design keys
export type DesignType = "modern" | "classic";

// Data entered by the user in the form
export interface SignatureData {
  name: string;
  title: string;
  phone?: string;
  website?: string;
  website1?: string;
  website2?: string;
  linkedin?: string;
  twitter?: string;
}
