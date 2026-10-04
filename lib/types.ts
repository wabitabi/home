export type BusinessCategory = "wellbeing" | "ryugaku" | "sns";

export const BUSINESS_CATEGORY_LABEL: Record<BusinessCategory, string> = {
  wellbeing: "Wellbeing留学",
  ryugaku: "くまもと留学相談室",
  sns: "SNS PR事業",
};

// お知らせ本文を構成するブロック（段落・リンク・画像・Instagramリール）
export type NewsBlock =
  | { type: "text"; text: string }
  | { type: "link"; href: string; label: string }
  | { type: "image"; src: string; alt: string }
  | { type: "reel"; id: string };

export interface NewsItem {
  slug: string;
  category: BusinessCategory;
  date: string;
  title: string;
  body: NewsBlock[];
}

export interface ResultItem {
  slug: string;
  category: BusinessCategory;
  date: string;
  title: string;
  summary: string;
  body: string;
}
