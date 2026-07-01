# أكاديمية حفظ القرآن الكريم — موقع الويب

## 1) رفع المشروع على GitHub من الموبايل
1. سجّل دخول على github.com وأنشئ Repository جديد فاضي (بدون README) باسم مثلاً `quran-academy`.
2. افتح تطبيق/موقع GitHub وارفع الملفات:
   - إما عن طريق "Add file → Upload files" ورفع كل الملفات والمجلدات دفعة واحدة (اسحب مجلد المشروع كامل).
   - أو عن طريق Spck Editor: اربطه بحساب GitHub، اعمل Clone للـ repo الفاضي، الصق الملفات، ثم Commit → Push.

## 2) ربط المشروع بـ Supabase
1. سجّل دخول على supabase.com وأنشئ مشروع جديد.
2. من Project Settings → API خذ القيم: `Project URL` و `anon public key`.
3. من SQL Editor، شغّل محتوى ملف `supabase/schema.sql` كامل — ده هيجهز الجداول والصلاحيات.
4. لما تنشر الموقع على Vercel (الخطوة الجاية)، حط القيمتين دول كـ Environment Variables.

## 3) النشر على Vercel
1. سجّل دخول على vercel.com بنفس حساب GitHub.
2. Add New → Project → اختار الـ repo `quran-academy`.
3. في خطوة Environment Variables ضيف:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. اضغط Deploy. أي تعديل تعمله وترفعه (Push) على GitHub بعد كده هيتحدث على الموقع تلقائيًا.

## ملاحظات مهمة قبل التسليم
- صفحة `/admin` حاليًا بتعرض بيانات المشتركين لأي حد يفتح الرابط. قبل التسليم النهائي لازم تتحمى (تسجيل دخول أدمن منفصل، أو التحقق من عمود `is_admin`).
- الأسعار والكورسات والمدرسين حاليًا بيانات تجريبية داخل الكود (mock data) — الخطوة الجاية إنك تربطها بجداول `courses` و `teachers` في Supabase بدل ما تكون ثابتة.
- الخطوط والألوان في `tailwind.config.ts` — لو حبيت تغيّر الهوية البصرية (الشعار، الألوان) عدّل من هنا.
