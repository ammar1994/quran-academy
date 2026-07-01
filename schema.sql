-- شغّل هذا الملف كامل من Supabase Dashboard -> SQL Editor -> New query

create table if not exists students (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  email text not null,
  created_at timestamp with time zone default now()
);

create table if not exists teachers (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  specialty text,
  experience text,
  created_at timestamp with time zone default now()
);

create table if not exists courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  level text,
  duration text,
  price text,
  description text,
  created_at timestamp with time zone default now()
);

create table if not exists bookings (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  note text,
  created_at timestamp with time zone default now()
);

-- تفعيل الحماية على مستوى الصفوف (RLS)
alter table students enable row level security;
alter table bookings enable row level security;
alter table teachers enable row level security;
alter table courses enable row level security;

-- الطالب يقدر يشوف ويعدّل بياناته هو بس
create policy "students can view own row"
  on students for select
  using (auth.uid() = id);

create policy "students can insert own row"
  on students for insert
  with check (auth.uid() = id);

-- أي حد يقدر يرسل حجز حصة تجريبية (فورم عام بدون تسجيل دخول)
create policy "anyone can insert booking"
  on bookings for insert
  with check (true);

-- المدرسون والكورسات بيانات عامة، أي حد يقدر يقرأها
create policy "public can read teachers"
  on teachers for select using (true);

create policy "public can read courses"
  on courses for select using (true);

-- ملاحظة مهمة: صفحة /admin في الكود الحالي بتقرأ من جدول bookings و students
-- مباشرة من المتصفح. عشان الأدمن بس يقدر يشوفها، لازم تعمل واحد من اثنين:
-- 1) تضيف عمود is_admin على جدول students وتربط policy بيه، أو
-- 2) تحمي صفحة /admin بكلمة مرور/تسجيل دخول منفصل قبل ما تدخل الإنتاج.
