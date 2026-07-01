const teachers = [
  {
    name: "الشيخ أحمد المصري",
    specialty: "إجازة بالسند المتصل، تخصص تجويد",
    experience: "12 سنة خبرة في التدريس"
  },
  {
    name: "الأستاذة سارة عبد الله",
    specialty: "متخصصة في تحفيظ الأطفال",
    experience: "8 سنوات خبرة"
  },
  {
    name: "الشيخ يوسف حسن",
    specialty: "إجازة بالقراءات العشر",
    experience: "15 سنة خبرة"
  }
];

export default function TeachersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl font-bold text-ink">مدرسونا</h1>
      <p className="mt-2 max-w-2xl text-ink/70">
        نخبة من المدرسين المجازين، مؤهلين للتدريس للأطفال والكبار على حد سواء.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teachers.map((teacher) => (
          <div key={teacher.name} className="rounded-2xl border border-ink/10 bg-white/40 p-6">
            <div className="geo-corner mb-4 h-20 w-20 rounded-full bg-ink/10" />
            <h3 className="font-display text-lg font-bold text-ink">{teacher.name}</h3>
            <p className="mt-1 text-sm text-gold">{teacher.specialty}</p>
            <p className="mt-2 text-sm text-ink/70">{teacher.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
