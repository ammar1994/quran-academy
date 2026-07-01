"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Student = {
  id: string;
  full_name: string;
  email: string;
};

export default function ProfilePage() {
  const router = useRouter();
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      const { data: sessionData } = await supabase.auth.getUser();
      if (!sessionData.user) {
        router.push("/login");
        return;
      }

      const { data } = await supabase
        .from("students")
        .select("id, full_name, email")
        .eq("id", sessionData.user.id)
        .single();

      setStudent(data);
      setLoading(false);
    }
    loadProfile();
  }, [router]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/");
  }

  if (loading) {
    return <div className="mx-auto max-w-3xl px-4 py-20 text-center text-ink/60">جارٍ التحميل...</div>;
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-ink">حسابي</h1>
        <button
          onClick={handleLogout}
          className="rounded-full border border-ink/20 px-4 py-2 text-sm text-ink/70 hover:border-gold hover:text-gold"
        >
          تسجيل الخروج
        </button>
      </div>

      <div className="mt-8 rounded-2xl border border-ink/10 bg-white/40 p-6">
        <p className="text-sm text-ink/60">الاسم</p>
        <p className="mt-1 font-medium text-ink">{student?.full_name ?? "-"}</p>
        <p className="mt-4 text-sm text-ink/60">البريد الإلكتروني</p>
        <p className="mt-1 font-medium text-ink">{student?.email ?? "-"}</p>
      </div>

      <div className="geo-divider my-10" />

      <h2 className="font-display text-xl font-bold text-ink">كورساتي</h2>
      <p className="mt-4 rounded-2xl border border-dashed border-ink/20 p-6 text-center text-sm text-ink/60">
        لا يوجد لديك اشتراك حاليًا. تصفّح الكورسات المتاحة وابدأ رحلتك.
      </p>
    </div>
  );
}
