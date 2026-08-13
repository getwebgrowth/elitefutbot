export interface CompetitorData {
  slug: string;
  competitorName: string;
  competitorType: "cloud" | "local" | "extension" | "web-app";
  tagline: string;
  verdict: string;
  publishedDate: string;
  modifiedDate: string;
  fc27SupportNote: string;
  
  keyStatistics: {
    label: string;
    value: string;
    source?: string;
  }[];

  citations: {
    label: string;
    url: string;
  }[];

  comparisonRows: {
    feature: string;
    elite: string | boolean;
    competitor: string | boolean;
    winner: "elite" | "competitor" | "tie";
  }[];

  faqs: { question: string; answer: string }[];
  reviewQuotes: { text: string; author: string; platform: string }[];
}
