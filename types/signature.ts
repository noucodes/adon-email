// Defines allowed design keys
export type DesignType = "design1" | "design2" | "adonworkforce";

// Data entered by the user in the form
export interface SignatureData {
  name: string;
  title: string;
  phone?: string;
  website1?: string;
  website2?: string;
  linkedin?: string;
  twitter?: string;
}
