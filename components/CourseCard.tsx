import Link from "next/link";

type CourseCardProps = {
  id: string;
  title: string;
  level: string;
  duration: string;
  price: string;
};

export default function CourseCard({ id, title, level, duration, price }: CourseCardProps) {
  return (
    <Link
      href={`/courses/${id}`}
      className="group block overflow-hidden rounded-2xl border border-ink/10 bg-white/40 transition hover:border-gold/60 hover:shadow-lg"
    >
      <div className="geo-corner h-24 bg-ink/5" />
      <div className="p-6">
        <span className="rounded-full bg-sage/20 px-3 py-1 text-xs font-medium text-sage">
          {level}
        </span>
        <h3 className="mt-3 font-display text-lg font-bold text-ink group-hover:text-gold">
          {title}
        </h3>
        <div className="mt-4 flex items-center justify-between text-sm text-ink/60">
          <span>{duration}</span>
          <span className="font-medium text-ink">{price}</span>
        </div>
      </div>
    </Link>
  );
}
