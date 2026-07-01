import CourseCard from "@/components/CourseCard";
import BookingForm from "@/components/BookingForm";

const courses = [
  { id: "1", title: "حفظ جزء عم للمبتدئين", level: "مبتدئ", duration: "3 أشهر", price: "40$ / شهريًا" },
  { id: "2", title: "تجويد وأحكام التلاوة", level: "متوسط", duration: "شهرين", price: "35$ / شهريًا" },
  { id: "3", title: "برنامج الحفظ والمراجعة الشامل", level: "كل المستويات", duration: "12 شهرًا", price: "50$ / شهريًا" },
  { id: "4", title: "تحسين النطق ومخارج الحروف", level: "مبتدئ", duration: "شهر", price: "25$ / شهريًا" },
  { id: "5", title: "حفظ القرآن كاملًا (مسار مكثف)", level: "متقدم", duration: "24 شهرًا", price: "60$ / شهريًا" },
  { id: "6", title: "العربية للناطقين بغيرها", level: "مبتدئ", duration: "6 أشهر", price: "30$ / شهريًا" }
];

export default function CoursesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl font-bold text-ink">الكورسات المتاحة</h1>
      <p className="mt-2 max-w-2xl text-ink/70">
        اختر الكورس المناسب لمستواك وهدفك، وابدأ رحلتك مع القرآن الكريم بخطى ثابتة.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>

      <div className="geo-divider my-16" />

      <div id="trial" className="mx-auto max-w-xl scroll-mt-24">
        <h2 className="font-display text-2xl font-bold text-ink">احجز حصة تجريبية مجانية</h2>
        <p className="mt-2 text-sm text-ink/70">
          عرّفنا على مستواك وسنرشح لك أنسب مدرّس وكورس، مجانًا وبدون التزام.
        </p>
        <div className="mt-6">
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
