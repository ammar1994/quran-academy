import Link from "next/link";

const links = [
  { href: "/courses", label: "الكورسات" },
  { href: "/teachers", label: "المدرسون" },
  { href: "/pricing", label: "الباقات والأسعار" },
  { href: "/profile", label: "حسابي" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-parchment/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="font-display text-xl font-bold text-ink">
          أكاديمية <span className="text-gold">حفظ القرآن</span>
        </Link>

        <nav className="hidden gap-6 text-sm font-medium text-ink/80 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-gold">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/login"
          className="rounded-full bg-ink px-5 py-2 text-sm font-medium text-parchment transition hover:bg-ink/90"
        >
          تسجيل الدخول
        </Link>
      </div>
      <div className="geo-divider" />
    </header>
  );
}
