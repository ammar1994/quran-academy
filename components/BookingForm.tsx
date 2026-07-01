"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function BookingForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", phone: "", note: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const { error } = await supabase.from("bookings").insert({
      name: form.name,
      phone: form.phone,
      note: form.note
    });

    if (error) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setForm({ name: "", phone: "", note: "" });
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-sage/40 bg-sage/10 p-6 text-center text-sm text-ink">
        تم استلام طلبك بنجاح، سنتواصل معك قريبًا لتحديد موعد الحصة التجريبية.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-ink">الاسم</label>
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded-lg border border-ink/20 bg-white/60 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-ink">رقم الهاتف / واتساب</label>
        <input
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full rounded-lg border border-ink/20 bg-white/60 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-ink">ملاحظات (اختياري)</label>
        <textarea
          value={form.note}
          onChange={(e) => setForm({ ...form, note: e.target.value })}
          rows={3}
          className="w-full rounded-lg border border-ink/20 bg-white/60 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-clay">حدث خطأ أثناء إرسال الطلب، حاول مرة أخرى.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-gold px-6 py-3 font-medium text-ink transition hover:bg-gold/90 disabled:opacity-60"
      >
        {status === "loading" ? "جارٍ الإرسال..." : "احجز الآن"}
      </button>
    </form>
  );
}
