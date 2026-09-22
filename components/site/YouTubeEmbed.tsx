interface YouTubeEmbedProps {
  id: string;
  title: string;
  className?: string;
}

/** YouTube動画を16:9レスポンシブで埋め込む（静的書き出し対応のiframe方式） */
export function YouTubeEmbed({ id, title, className }: YouTubeEmbedProps) {
  return (
    <div className={`relative w-full overflow-hidden bg-ink/5 ${className ?? ""}`} style={{ aspectRatio: "16 / 9" }}>
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
