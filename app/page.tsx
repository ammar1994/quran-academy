"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (mode === "signup") {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: { data: { full_name: form.name } }
      });
      if (signUpError) {
        setError(signUpError.message);
        setLoading(false);
        return;
      }
      if (data.user) {
        await supabase.from("students").insert({
          id: data.user.id,
          full_name: form.name,
          email: form.email
        });
      }
    } else {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password
      });
      if (signInError) {
        setError(signInError.message);
        setLoading(false);
        return;
      }
    }

    setLoading(false);
    router.push("/profile");
  }

  return (
    <div className="mx-auto max-w-md px-4 py-20 sm:px-6">
      <h1 className="font-display text-2xl font-bold text-ink">
        {mode === "login" ? "تسجيل الدخول" : "إنشاء حساب جديد"}
      </h1>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        {mode === "signup" && (
          <div>
            <label className="mb-1 block text-sm font-medium text-ink">الاسم الكامل</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-ink/20 bg-white/60 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
            />
          </div>
        )}
        <div>
          <label className="mb-1 block text-sm font-medium text-ink">البريد الإلكتروني</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-lg border border-ink/20 bg-white/60 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-ink">كلمة المرور</label>
          <input
            type="password"
            required
            minLength={6}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full rounded-lg border border-ink/20 bg-white/60 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
          />
        </div>

        {error && <p className="text-sm text-clay">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-gold px-6 py-3 font-medium text-ink transition hover:bg-gold/90 disabled:opacity-60"
        >
          {loading ? "جارٍ التحميل..." : mode === "login" ? "دخول" : "إنشاء الحساب"}
        </button>
      </form>

      <button
        onClick={() => setMode(mode === "login" ? "signup" : "login")}
        className="mt-4 text-sm text-ink/70 hover:text-gold"
      >
        {mode === "login" ? "ليس لديك حساب؟ أنشئ واحدًا" : "لديك حساب بالفعل؟ سجّل الدخول"}
      </button>
    </div>
  );
}
