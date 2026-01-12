export type MediaType = "image" | "video";

export interface PortfolioItem {
  id: string;
  src: string;
  type: MediaType;
  title: string;
  scope: string[];
  category: string[];
  industry: string[];
  size: "regular" | "wide" | "tall" | "large";
}
