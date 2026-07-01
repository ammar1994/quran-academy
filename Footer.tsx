export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-parchment">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg font-bold text-gold">أكاديمية حفظ القرآن</p>
            <p className="mt-2 text-sm text-parchment/70">
              تعليم القرآن الكريم واللغة العربية أونلاين، بإشراف مدرسين مجازين بالسند.
            </p>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold text-parchment">روابط سريعة</p>
            <ul className="space-y-1 text-sm text-parchment/70">
              <li>الكورسات</li>
              <li>المدرسون</li>
              <li>الباقات والأسعار</li>
            </ul>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold text-parchment">تواصل معنا</p>
            <p className="text-sm text-parchment/70">احجز حصة تجريبية مجانية من صفحة الكورسات</p>
          </div>
        </div>
        <p className="mt-8 border-t border-parchment/10 pt-6 text-center text-xs text-parchment/50">
          © {new Date().getFullYear()} أكاديمية حفظ القرآن الكريم. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
