import { Eyebrow } from "./Eyebrow";

interface Props {
  eyebrow: string;
  title: string;
  intro?: string;
}

export function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <header className="mx-auto max-w-[1200px] px-6 pt-16 pb-8 md:pt-24 md:pb-12">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-3 text-display-l font-black tracking-tight md:text-display-xl">
        {title}
      </h1>
      {intro && <p className="mt-4 max-w-[60ch] text-body-l text-taupe">{intro}</p>}
    </header>
  );
}
