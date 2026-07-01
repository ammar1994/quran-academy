"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Student = { id: string; full_name: string; email: string; created_at: string };
type Booking = { id: string; name: string; phone: string; note: string; created_at: string };

export default function AdminPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const [studentsRes, bookingsRes] = await Promise.all([
        supabase.from("students").select("*").order("created_at", { ascending: false }),
        supabase.from("bookings").select("*").order("created_at", { ascending: false })
      ]);
      setStudents(studentsRes.data ?? []);
      setBookings(bookingsRes.data ?? []);
      setLoading(false);
    }
    loadData();
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl font-bold text-ink">لوحة الأدمن</h1>
      <p className="mt-2 text-ink/70">عرض المشتركين وطلبات الحصص التجريبية.</p>

      {loading ? (
        <p className="mt-10 text-ink/60">جارٍ التحميل...</p>
      ) : (
        <>
          <section className="mt-10">
            <h2 className="font-display text-xl font-bold text-ink">
              الطلاب المسجّلون ({students.length})
            </h2>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-ink/10">
              <table className="w-full text-right text-sm">
                <thead className="bg-ink text-parchment">
                  <tr>
                    <th className="px-4 py-3">الاسم</th>
                    <th className="px-4 py-3">البريد الإلكتروني</th>
                    <th className="px-4 py-3">تاريخ التسجيل</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((s) => (
                    <tr key={s.id} className="border-t border-ink/10 bg-white/40">
                      <td className="px-4 py-3">{s.full_name}</td>
                      <td className="px-4 py-3">{s.email}</td>
                      <td className="px-4 py-3">{new Date(s.created_at).toLocaleDateString("ar-EG")}</td>
                    </tr>
                  ))}
                  {students.length === 0 && (
                    <tr>
                      <td colSpan={3} className="px-4 py-6 text-center text-ink/50">
                        لا يوجد طلاب مسجلون بعد
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          <div className="geo-divider my-12" />

          <section>
            <h2 className="font-display text-xl font-bold text-ink">
              طلبات الحصص التجريبية ({bookings.length})
            </h2>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-ink/10">
              <table className="w-full text-right text-sm">
                <thead className="bg-ink text-parchment">
                  <tr>
                    <th className="px-4 py-3">الاسم</th>
                    <th className="px-4 py-3">الهاتف</th>
                    <th className="px-4 py-3">ملاحظات</th>
                    <th className="px-4 py-3">التاريخ</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b) => (
                    <tr key={b.id} className="border-t border-ink/10 bg-white/40">
                      <td className="px-4 py-3">{b.name}</td>
                      <td className="px-4 py-3">{b.phone}</td>
                      <td className="px-4 py-3">{b.note || "-"}</td>
                      <td className="px-4 py-3">{new Date(b.created_at).toLocaleDateString("ar-EG")}</td>
                    </tr>
                  ))}
                  {bookings.length === 0 && (
                    <tr>
                      <td colSpan={4} className="px-4 py-6 text-center text-ink/50">
                        لا يوجد طلبات بعد
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
