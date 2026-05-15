interface Props {
  eyebrow: string;
  title: string;
  intro?: string;
}

export function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <header className="mx-auto max-w-[1280px] px-6 pt-24 pb-12 md:pt-40 md:pb-20">
      <div className="grid items-end gap-10 md:grid-cols-12">
        <p className="text-caption uppercase tracking-[0.22em] text-taupe md:col-span-3">
          {eyebrow}
        </p>
        <h1 className="text-display-xl font-medium tracking-tight text-charcoal md:col-span-9">
          {title}
        </h1>
        {intro && (
          <p className="text-body-l text-taupe md:col-span-9 md:col-start-4 md:max-w-[58ch]">
            {intro}
          </p>
        )}
      </div>
    </header>
  );
}
