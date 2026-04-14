export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-8">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
          {eyebrow}
        </p>
      ) : null}

      {title ? (
        <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">
          {title}
        </h2>
      ) : null}

      {subtitle ? (
        <p className="mt-3 max-w-2xl text-slate-600">{subtitle}</p>
      ) : null}
    </div>
  );
}
