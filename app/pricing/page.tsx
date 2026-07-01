const plans = [
  {
    name: "الباقة الأساسية",
    price: "25$",
    period: "شهريًا",
    features: ["حصتان أسبوعيًا", "مدة الحصة 30 دقيقة", "متابعة أسبوعية"]
  },
  {
    name: "الباقة المميزة",
    price: "40$",
    period: "شهريًا",
    features: ["3 حصص أسبوعيًا", "مدة الحصة 45 دقيقة", "تقرير تقدّم شهري", "مدرّس ثابت"],
    highlighted: true
  },
  {
    name: "الباقة الشاملة",
    price: "60$",
    period: "شهريًا",
    features: ["4 حصص أسبوعيًا", "مدة الحصة 60 دقيقة", "خطة حفظ ومراجعة مخصصة", "مدرّس ثابت + متابعة يومية"]
  }
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl font-bold text-ink">الباقات والأسعار</h1>
      <p className="mt-2 max-w-2xl text-ink/70">قارن بين الباقات واختر ما يناسب وقتك وهدفك.</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border p-6 ${
              plan.highlighted ? "border-gold bg-ink text-parchment" : "border-ink/10 bg-white/40 text-ink"
            }`}
          >
            <h3 className="font-display text-lg font-bold">{plan.name}</h3>
            <p className="mt-3 text-3xl font-bold">
              {plan.price}
              <span className="text-sm font-normal opacity-70"> / {plan.period}</span>
            </p>
            <ul className="mt-6 space-y-2 text-sm opacity-90">
              {plan.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <button
              className={`mt-6 w-full rounded-full px-6 py-3 text-sm font-medium transition ${
                plan.highlighted
                  ? "bg-gold text-ink hover:bg-gold/90"
                  : "bg-ink text-parchment hover:bg-ink/90"
              }`}
            >
              اشترك الآن
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
