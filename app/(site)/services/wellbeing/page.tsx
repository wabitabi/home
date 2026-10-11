import Link from "next/link";
import { wbBusinessPhoto, wbWellnessPhoto, wbTeamPhoto, Photo } from "@/lib/photos";
import { Eyebrow } from "@/components/site/Eyebrow";
import { SmartImage } from "@/components/site/SmartImage";
import { YouTubeEmbed } from "@/components/site/YouTubeEmbed";

export const metadata = {
  title: "Wellbeing留学｜自分らしく生きる 10日間のキャリアプログラム｜株式会社WABITABI",
  description:
    "全国から集まる25歳以下の女性が、ベトナム・ダナンでSNS発信と商品開発ビジネスに挑戦。自分らしく生きるを見つける、人生が変わる10日間のキャリアプログラムです。",
};

// 申込フォーム（外部）— URL確定後はここだけ差し替え
const WELLBEING_FORM_URL = "/contact";
const INSTAGRAM_URL = "https://www.instagram.com/wellbeing_ryugaku";

const empathy = [
  "「本当にやりたいこと」が、まだ分からない",
  "まわりと比べて、焦りや不安を感じてしまう",
  "就活の“正解”に、自分を合わせようとしている",
  "環境を変えて、一歩を踏み出す勇気がほしい",
];

const points: { no: string; en: string; title: string; photo: Photo; body: string }[] = [
  {
    no: "01",
    en: "BUSINESS",
    title: "主体的に考え、動き、作る",
    photo: wbBusinessPhoto,
    body:
      "プログラムでは、2つのビジネスに挑戦します。SNS研修では、総フォロワー6万人超の現役インフルエンサーが、運用の知識・企画・撮影・編集・仕事への繋げ方まで包み隠さず指導。個人ワークでは一人ひとりが企画から編集までを手がけ、講師からフィードバックを受けます。商品開発インターンでは、ダナンのお土産Tシャツをチームで作り、社長の方々へプレゼン。「誰に・何を・どう届けるか」——ビジネスで0→1を生む考え方を、実践の中で身につけます。",
  },
  {
    no: "02",
    en: "WELLBEING",
    title: "心も身体も、healthyに",
    photo: wbWellnessPhoto,
    body:
      "生きるうえで一番大切なのは、“健康”であること。それは身体だけでなく、「毎朝起きるのが楽しみ」「自分の人生が好き」と感じられる心の健康も含みます。身体は毎朝のWellness class（ヨガ・ラン・ワークアウト）で、心は毎日のグループジャーナリングと、自己理解を深めるライフデザイン・ワークショップで整える。慌ただしい日常で後回しにしがちな“自分”に、まっすぐ向き合う時間です。",
  },
  {
    no: "03",
    en: "TEAM",
    title: "お互いを高め合える、最高の仲間",
    photo: wbTeamPhoto,
    body:
      "全国から集まるのは、最高に素敵な仲間たち。異国の地で10日間、さまざまなことに一緒に挑戦する中で、帰国後もずっと続く一生もののつながりが生まれます。商品開発インターンではチームで一つのものを作り上げるからこそ、相手を信じ、自分をさらけ出し、本物の人間関係を築いていけます。",
  },
];

const preTraining = [
  "第1回：オリエンテーション",
  "第2回：SNS研修（運用の基礎知識／編集講座）",
  "第3回：ビジネス研修①（マーケティング）",
  "第4回：ビジネス研修②（チーム話し合い）",
];

const localPrograms: { label: string; en: string; steps: { t: string; d: string }[] }[] = [
  {
    label: "商品開発インターン",
    en: "PRODUCT",
    steps: [
      { t: "キックオフ", d: "ファーストプレゼンと、現地学生との国際交流からスタート。" },
      { t: "フィールドリサーチ", d: "現地でインタビューやアンケートを実施。需要や課題をヒアリングし、リアルな声とデータを集めます。" },
      { t: "サンプル制作", d: "商品デザインを確定し、現地の会社でサンプルを作成します。" },
      { t: "マーケティング戦略", d: "作った商品を、誰に・どのように販売していくかを考えます。" },
      { t: "社長プレゼン", d: "サンプルが実際に商品化されるよう、社長の方々へプレゼンテーション。" },
    ],
  },
  {
    label: "SNS研修",
    en: "SNS",
    steps: [
      { t: "紹介コンテンツ", d: "レストラン・カフェ・スパ・お店・アクティビティから1つ選び、その場所を紹介するコンテンツを作成。" },
      { t: "PRコンテンツ動画（TシャツPR）", d: "商品開発インターンで作ったお土産Tシャツを、PRする動画コンテンツに仕上げます。" },
    ],
  },
  {
    label: "ライフデザイン",
    en: "LIFE DESIGN",
    steps: [
      { t: "自己理解", d: "これまでの自分、今の自分と徹底的に向き合い、自分について深く知ります。" },
      { t: "他者から見る自分 ＆ Life Goals", d: "グループで自分を深掘り、一人では気づけない強みを発見。6分野（キャリア/健康/人間関係/お金/成長/自由）で理想の状態を描きます。" },
      { t: "起業体験", d: "架空の会社を作りプレゼン。ミッションやサービスを考える中で、自分のやりたいこと・自分の軸を見つけます。" },
    ],
  },
  {
    label: "Others",
    en: "OTHERS",
    steps: [
      { t: "Wellness class", d: "毎朝、一日の始まりに身体を動かします。ヨガ・ワークアウト・ランなど多彩。参加は任意で、楽しみながら健康習慣が身につきます。" },
      { t: "ジャーナリング", d: "頭に浮かんだ思考や感情を紙に書き出す心理的アプローチ。思考の可視化やメンタルケアに役立つ、心を整える小さな習慣を身につけます。" },
      { t: "起業家セミナー", d: "学生時代にSNS発信を始め、早稲田大学卒業と同時に新卒カードを捨てて株式会社WABITABIを立ち上げた同世代の女性起業家（24歳）が、起業までのリアルな葛藤とステップを語ります。" },
      { t: "国際交流", d: "ベトナム人学生やEnglishコミュニティイベントでの交流を通じ、国際的なつながりを。ノマドワーカーが世界中から集まるダナンで、外国人の友達もできます。" },
    ],
  },
];

function CtaButton({ children, variant = "solid" }: { children: React.ReactNode; variant?: "solid" | "outline" }) {
  const external = /^https?:\/\//.test(WELLBEING_FORM_URL);
  const base =
    variant === "solid"
      ? "border border-ink bg-ink text-paper hover:bg-paper hover:text-ink"
      : "border border-gold text-ink hover:bg-gold hover:text-paper";
  return (
    <a
      href={WELLBEING_FORM_URL}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-block px-12 py-4 text-sm tracking-[0.2em] transition ${base}`}
    >
      {children}
    </a>
  );
}

export default function WellbeingLpPage() {
  return (
    <>
      {/* 0. HERO */}
      <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden">
        <img
          src="/images/wellbeingryugaku.jpg"
          alt="ベトナム・ダナンでのWellbeing留学"
          className="animate-hero-zoom absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative mx-auto max-w-2xl px-6 py-24 text-center text-paper">
          <p className="animate-tracking-in text-[10px] uppercase tracking-[0.5em] text-paper/80 md:text-xs">
            Wellbeing Ryugaku
          </p>
          <h1 className="animate-fade-up animation-delay-300 mt-6 text-3xl font-light leading-[1.6] tracking-[0.15em] md:text-5xl">
            自分らしく生きる
          </h1>
          <div className="animate-fade-up animation-delay-600 mx-auto mt-10 max-w-xl space-y-2 text-sm leading-[2.2] text-paper/90 md:text-base">
            <p>いきいきと輝いている人には、ある共通点があります。</p>
            <p>それは、“自分軸”で生きているということ。</p>
            <p>「こうすべき」「これが正解」と、誰かが決めた道ではなく</p>
            <p>「こうありたい」「これがやりたい」と、自分で人生の舵を取る。</p>
            <p>あなたも、その一歩を踏み出してみませんか。</p>
          </div>
          <p className="animate-fade-up animation-delay-600 mt-10 text-sm tracking-[0.2em] text-gold">
            人生が変わる10日間を、ベトナム・ダナンで。
          </p>
          <div className="animate-fade-up animation-delay-600 mt-10">
            <a
              href={WELLBEING_FORM_URL}
              {...(/^https?:\/\//.test(WELLBEING_FORM_URL) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-block border border-paper bg-paper/0 px-12 py-4 text-sm tracking-[0.2em] text-paper transition hover:bg-paper hover:text-ink"
            >
              無料説明会に参加する
            </a>
          </div>
        </div>
      </section>

      {/* 1. 共感 */}
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Eyebrow className="mb-10">Message</Eyebrow>
          <h2 className="text-xl font-light leading-[1.9] tracking-wide md:text-2xl">
            こんな想い、ありませんか？
          </h2>
          <ul className="mx-auto mt-12 max-w-xl space-y-4 text-left">
            {empathy.map((t) => (
              <li key={t} className="flex items-start gap-4 border-b border-sand pb-4 text-sm leading-relaxed text-taupe">
                <span className="mt-1 text-gold">✓</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-sm leading-[2.2] text-ink">
            ——もし一つでも当てはまったら。<br />
            ここでの10日間が、あなたの答えを見つけるきっかけになります。
          </p>
        </div>
      </section>

      {/* 2. プログラム概要 */}
      <section className="border-t border-sand bg-linen py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Eyebrow className="mb-8">About</Eyebrow>
          <h2 className="text-xl font-light tracking-wide md:text-2xl">プログラム概要</h2>
          <div className="mt-10 flex items-center justify-center gap-3 text-sm tracking-[0.2em] text-gold md:gap-6 md:text-base">
            <span>環境</span>
            <span className="text-taupe/50">×</span>
            <span>人間関係</span>
            <span className="text-taupe/50">×</span>
            <span>挑戦</span>
          </div>
          <div className="mt-10 space-y-5 text-left text-sm leading-[2.2] text-taupe">
            <p>
              Wellbeing留学は、“自分らしく生きる”を見つけるキャリアプログラム。全国から集まる25歳以下の女性が、
              ベトナム・ダナンで「SNS発信」と「商品開発ビジネス」に挑戦します。社長の方々へのプレゼンや、
              現役インフルエンサーの実践指導を通して、SNSを使った仕事や起業につながるリアルな経験を積むことができます。
            </p>
            <p>
              さらに、起業家セミナーや現地学生・ノマドワーカーとの交流など、普段は出会えない人と関わる時間が、
              あなたの価値観を広げ、将来のキャリアの選択肢を大きく広げます。
            </p>
          </div>
        </div>
      </section>

      {/* 3. 3つのPOINT */}
      <section className="border-t border-sand py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Eyebrow className="mb-16 text-center">3 Points</Eyebrow>
          <div className="space-y-20">
            {points.map((p, i) => (
              <div
                key={p.no}
                className={`flex flex-col items-center gap-10 md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <SmartImage photo={p.photo} className="w-full max-w-sm object-cover" />
                <div className="flex-1">
                  <p className="text-[11px] tracking-[0.3em] text-gold">
                    POINT {p.no} — {p.en}
                  </p>
                  <h3 className="mt-3 text-xl font-light leading-relaxed tracking-wide md:text-2xl">{p.title}</h3>
                  <p className="mt-6 text-sm leading-[2.1] text-taupe">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 中間CTA */}
      <section className="bg-ink py-20 text-center text-paper">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-lg font-light tracking-wide md:text-xl">まずは、話を聞いてみませんか。</h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-loose text-paper/80">
            参加が自分に合っているか、無料のオンライン説明会でお確かめください。
          </p>
          <div className="mt-10">
            <a
              href={WELLBEING_FORM_URL}
              {...(/^https?:\/\//.test(WELLBEING_FORM_URL) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-block border border-paper bg-paper px-12 py-4 text-sm tracking-[0.2em] text-ink transition hover:bg-transparent hover:text-paper"
            >
              無料説明会に参加する
            </a>
          </div>
        </div>
      </section>

      {/* 5. SCHEDULE */}
      <section className="border-t border-sand bg-linen py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Eyebrow className="mb-4 text-center">Schedule</Eyebrow>
          <h2 className="text-center text-xl font-light tracking-wide md:text-2xl">プログラムの全体像</h2>

          {/* タイムライン */}
          <ol className="mx-auto mt-16 max-w-2xl space-y-10 border-l border-gold/40 pl-8">
            <li className="relative">
              <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border border-gold bg-paper" />
              <p className="text-[11px] tracking-[0.25em] text-gold">STEP 01</p>
              <h3 className="mt-1 text-base font-light tracking-wide">説明会の参加・申込</h3>
              <p className="mt-2 text-sm leading-[2] text-taupe">
                今の自分が挑戦したいことに、Wellbeing留学が合っているか。まずは説明会でご検討ください。
              </p>
            </li>
            <li className="relative">
              <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border border-gold bg-paper" />
              <p className="text-[11px] tracking-[0.25em] text-gold">STEP 02 — 1ヶ月前</p>
              <h3 className="mt-1 text-base font-light tracking-wide">事前研修START（全4回）</h3>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-taupe">
                {preTraining.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </li>
            <li className="relative">
              <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border border-gold bg-gold" />
              <p className="text-[11px] tracking-[0.25em] text-gold">STEP 03 — 現地（ダナン・10日間）</p>
              <h3 className="mt-1 text-base font-light tracking-wide">現地プログラムSTART</h3>
              <p className="mt-2 text-sm leading-[2] text-taupe">
                4つの柱で、ビジネスと自己理解の両面から“自分らしさ”を育てます。
              </p>
            </li>
          </ol>

          {/* 現地プログラム 4領域カード */}
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {localPrograms.map((prog) => (
              <div key={prog.label} className="border border-sand bg-paper p-7">
                <p className="text-[10px] tracking-[0.3em] text-gold">{prog.en}</p>
                <h4 className="mt-2 text-base font-light tracking-wide">{prog.label}</h4>
                <ol className="mt-5 space-y-4">
                  {prog.steps.map((s, i) => (
                    <li key={s.t} className="flex gap-3">
                      <span className="shrink-0 text-xs tracking-widest text-gold">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <p className="text-sm text-ink">{s.t}</p>
                        <p className="mt-1 text-xs leading-[1.9] text-taupe">{s.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 過去の様子 */}
      <section className="border-t border-sand py-24">
        <div className="mx-auto max-w-2xl px-6">
          <Eyebrow className="mb-10 text-center">Gallery</Eyebrow>
          <h2 className="text-center text-xl font-light tracking-wide md:text-2xl">過去の様子</h2>

          <div className="mt-12">
            <p className="mb-4 text-center text-[10px] tracking-[0.3em] text-gold">Wellbeing留学のリアルな声</p>
            <YouTubeEmbed id="xOsfOva1kVE" title="Wellbeing留学のリアルな声" />
          </div>

          <div className="mt-12">
            <p className="mb-4 text-center text-[10px] tracking-[0.3em] text-gold">Digest Movie</p>
            <YouTubeEmbed id="9azHd81WNfw" title="Wellbeing留学ダイジェスト" />
          </div>

          <div className="mt-12 text-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-b border-gold pb-1 text-sm tracking-[0.2em] text-ink transition hover:text-gold"
            >
              もっと見る ＠wellbeing_ryugaku（公式Instagram）
            </a>
          </div>
        </div>
      </section>

      {/* 7. 最終CTA */}
      <section className="bg-ink py-24 text-center text-paper">
        <div className="mx-auto max-w-2xl px-6">
          <p className="text-[10px] uppercase tracking-[0.5em] text-gold">Join Us</p>
          <h2 className="mt-6 text-2xl font-light leading-relaxed tracking-[0.15em] md:text-3xl">
            一歩を、ここから。
          </h2>
          <p className="mx-auto mt-8 max-w-md text-sm leading-loose text-paper/80">
            “自分らしく生きる”の入り口は、小さな勇気から。まずは無料のオンライン説明会でお会いしましょう。
          </p>
          <div className="mt-10">
            <a
              href={WELLBEING_FORM_URL}
              {...(/^https?:\/\//.test(WELLBEING_FORM_URL) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-block border border-paper bg-paper px-14 py-4 text-sm tracking-[0.2em] text-ink transition hover:bg-transparent hover:text-paper"
            >
              無料オンライン説明会に参加する
            </a>
          </div>
          <div className="mt-8">
            <Link href="/services" className="text-xs tracking-[0.2em] text-paper/60 transition hover:text-paper">
              ← サービス一覧へ戻る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
