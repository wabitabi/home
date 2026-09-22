interface InstagramReelProps {
  /** リールのショートコード（例: DbK6xSYRRjJ） */
  id: string;
  className?: string;
}

/**
 * Instagramリールを埋め込む（静的書き出し対応のiframe方式）。
 * 追加スクリプト不要で、/embed エンドポイントをそのまま表示する。
 */
export function InstagramReel({ id, className }: InstagramReelProps) {
  return (
    <div className={`mx-auto w-full max-w-[360px] ${className ?? ""}`}>
      <div className="relative w-full overflow-hidden border border-sand bg-paper" style={{ aspectRatio: "9 / 16" }}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.instagram.com/reel/${id}/embed/`}
          title={`Instagramリール ${id}`}
          loading="lazy"
          scrolling="no"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
