import Link from "next/link";
import CourseCard from "@/components/CourseCard";

const featuredCourses = [
  {
    id: "1",
    title: "حفظ جزء عم للمبتدئين",
    level: "مبتدئ",
    duration: "3 أشهر",
    price: "40$ / شهريًا"
  },
  {
    id: "2",
    title: "تجويد وأحكام التلاوة",
    level: "متوسط",
    duration: "شهرين",
    price: "35$ / شهريًا"
  },
  {
    id: "3",
    title: "برنامج الحفظ والمراجعة الشامل",
    level: "كل المستويات",
    duration: "12 شهرًا",
    price: "50$ / شهريًا"
  }
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="geo-corner relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="mb-4 font-body text-sm font-medium tracking-wide text-clay">
            بسم الله الرحمن الرحيم
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            احفظ القرآن الكريم، آية بعد آية،
            <span className="text-gold"> بصحبة مدرّس يرافقك خطوة بخطوة</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">
            أكاديمية أونلاين لتعليم القرآن الكريم واللغة العربية، تجمعك بنخبة من
            المدرسين المجازين، بجدول مرن يناسبك من أي مكان.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/courses"
              className="rounded-full bg-gold px-7 py-3 font-medium text-ink transition hover:bg-gold/90"
            >
              تصفّح الكورسات
            </Link>
            <Link
              href="/courses#trial"
              className="rounded-full border border-ink px-7 py-3 font-medium text-ink transition hover:bg-ink hover:text-parchment"
            >
              احجز حصة تجريبية مجانية
            </Link>
          </div>
        </div>
      </section>

      <div className="geo-divider" />

      {/* Why us */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl font-bold text-ink">لماذا أكاديميتنا؟</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {[
            { title: "مدرسون مجازون", desc: "كل مدرس معتمد بالسند، ومتخصص في تعليم الأطفال والكبار." },
            { title: "خطة مخصصة لك", desc: "نضع لك خطة حفظ ومراجعة تناسب مستواك ووقتك المتاح." },
            { title: "متابعة مستمرة", desc: "تقارير دورية عن تقدمك، ومراجعة منتظمة لما تم حفظه." }
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-ink/10 bg-white/40 p-6">
              <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="geo-divider" />

      {/* Featured courses */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-2xl font-bold text-ink">كورسات مقترحة</h2>
          <Link href="/courses" className="text-sm font-medium text-gold hover:underline">
            عرض كل الكورسات ←
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </section>
    </div>
  );
}
