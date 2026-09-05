export function SectionHeading({
  kicker,
  title,
  copy,
  light = false,
}: {
  kicker: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className={`mx-auto max-w-3xl text-center ${light ? "text-charcoal" : ""}`}>
      <p className={`stamp mx-auto mb-4 inline-block px-3 py-1 text-[10px] ${light ? "border-blood text-blood" : ""}`}>
        {kicker}
      </p>
      <h2 className="font-display text-4xl tracking-[0.06em] uppercase sm:text-5xl">{title}</h2>
      <div className="rule mx-auto mt-5 w-40" />
      {copy ? (
        <p className={`mx-auto mt-5 max-w-2xl text-base leading-8 ${light ? "text-charcoal/75" : "text-muted"}`}>
          {copy}
        </p>
      ) : null}
    </div>
  );
}
