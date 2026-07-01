import BookingForm from "@/components/BookingForm";

const courses: Record<string, { title: string; level: string; duration: string; price: string; description: string }> = {
  "1": {
    title: "حفظ جزء عم للمبتدئين",
    level: "مبتدئ",
    duration: "3 أشهر",
    price: "40$ / شهريًا",
    description:
      "كورس مخصص للمبتدئين وللأطفال، يركّز على حفظ جزء عمّ بطريقة ميسّرة مع تصحيح النطق ومخارج الحروف تدريجيًا."
  },
  "2": {
    title: "تجويد وأحكام التلاوة",
    level: "متوسط",
    duration: "شهرين",
    price: "35$ / شهريًا",
    description:
      "كورس يركز على أحكام التجويد العملية (المدود، الإدغام، القلقلة وغيرها) مع تطبيق مباشر على آيات من القرآن."
  },
  "3": {
    title: "برنامج الحفظ والمراجعة الشامل",
    level: "كل المستويات",
    duration: "12 شهرًا",
    price: "50$ / شهريًا",
    description:
      "خطة سنوية متكاملة للحفظ مع نظام مراجعة دوري يضمن ثبات المحفوظ، ويناسب من يريد إتمام حفظ القرآن كاملًا."
  }
};

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = courses[params.id] ?? {
    title: "كورس غير متاح حاليًا",
    level: "-",
    duration: "-",
    price: "-",
    description: "هذا الكورس غير موجود أو تم إزالته، تصفّح باقي الكورسات المتاحة."
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <span className="rounded-full bg-sage/20 px-3 py-1 text-xs font-medium text-sage">
        {course.level}
      </span>
      <h1 className="mt-4 font-display text-3xl font-bold text-ink">{course.title}</h1>

      <div className="mt-4 flex gap-6 text-sm text-ink/70">
        <span>المدة: {course.duration}</span>
        <span>السعر: {course.price}</span>
      </div>

      <p className="mt-6 max-w-2xl leading-relaxed text-ink/80">{course.description}</p>

      <div className="geo-divider my-12" />

      <div className="mx-auto max-w-xl">
        <h2 className="font-display text-xl font-bold text-ink">هل تريد تجربة قبل الاشتراك؟</h2>
        <p className="mt-2 text-sm text-ink/70">احجز حصة تجريبية مجانية مع أحد مدرسينا.</p>
        <div className="mt-6">
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
