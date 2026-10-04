import { NewsItem } from "@/lib/types";

export const newsItems: NewsItem[] = [
  {
    slug: "wellbeing-vol2-boshu-kaishi",
    category: "wellbeing",
    date: "2026-09-10",
    title: "Wellbeing留学第2期が終了しました",
    body: [
      { type: "text", text: "ベトナム・ダナンで開催したWellbeing留学 第2期（8/26〜9/8）が、9名の参加者とともに無事終了しました。" },
      { type: "text", text: "今回は大学1年生の19歳から、26歳の方が参加してくださいました。" },
      { type: "text", text: "第2期の様子は公式インスタグラムにて掲載していますので、そちらをご確認ください。" },
      { type: "link", href: "https://www.instagram.com/wellbeing_ryugaku", label: "@wellbeing_ryugaku（公式Instagram）" },
    ],
  },
  {
    slug: "koukousei-summit-toudan",
    category: "ryugaku",
    date: "2026-07-12",
    title: "代表取締役島添が高校生サミットに登壇しました",
    body: [
      { type: "text", text: "代表取締役の島添が高校生サミットに登壇し、海外挑戦や自分らしいキャリアの選択について講演しました。" },
      { type: "image", src: "/images/news-summit-1.jpg", alt: "高校生サミットでの登壇の様子1" },
      { type: "image", src: "/images/news-summit-2.jpg", alt: "高校生サミットでの登壇の様子2" },
    ],
  },
  {
    slug: "kikuyo-machocho-houmon",
    category: "ryugaku",
    date: "2026-04-28",
    title: "菊陽町長を表敬訪問しました",
    body: [
      { type: "text", text: "くまもと留学相談室の地域連携の取り組みとして、菊陽町長を表敬訪問しました。" },
    ],
  },
  {
    slug: "sns-pr-jisseki-koushin",
    category: "sns",
    date: "2026-03-18",
    title: "SNS PR事業の実績を更新しました",
    body: [
      { type: "text", text: "ベトナムでネイルサロンを紹介した動画が20万回再生を達成しました。" },
      { type: "text", text: "SNSの最新実績につきましては、以下のインスタグラムアカウントをご確認ください。" },
      { type: "link", href: "https://www.instagram.com/hikari_wabitabi", label: "@hikari_wabitabi（公式Instagram）" },
    ],
  },
  {
    slug: "wellbeing-vol1-report",
    category: "wellbeing",
    date: "2026-02-10",
    title: "「Wellbeing留学」第1期（ダナン）活動レポートを公開しました",
    body: [
      { type: "text", text: "第1期は、全国から9名の学生が参加してくれました。" },
      { type: "text", text: "参加者の体験談は公式インスタグラムからご確認ください。" },
      { type: "reel", id: "DWvpx42AekT" },
    ],
  },
];
