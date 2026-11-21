import { useEffect, useState } from "react";
//نافذة الحجز
const cities = ["صنعاء", "جدة", "الرياض", "الدمام", "عدن"];

export default function BookingModal({
  open, booking, setBooking, transport, setTransport, onClose, showToast
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [from, setFrom] = useState("صنعاء");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("1");

  useEffect(() => {
    if (!open) return;
    setFrom(booking.from || "صنعاء");
    setTo(booking.to || "");
    setDate(booking.date || "");
    setPassengers(booking.passengers || "1");
  }, [open, booking]);

  if (!open) return null;

  const confirmBooking = () => {
    if (!name.trim()) return showToast("اكتب الاسم الكامل");
    if (!phone.trim()) return showToast("اكتب رقم الهاتف");
    if (!to) return showToast("اختر الوجهة");
    if (from === to) return showToast("مدينة الانطلاق والوصول يجب أن تكون مختلفة");
    if (!date) return showToast("اختر تاريخ الرحلة");

    const type = transport === "shared" ? "نقل تشاركي" : "نقل خاص";
    const formattedDate = new Date(date).toLocaleDateString("ar-SA");

    const msg = `السلام عليكم 👋
أريد حجز رحلة من موقع برلين ستار للسفريات 🚐

👤 الاسم: ${name}
📱 الهاتف: ${phone}
📍 من: ${from}
📍 إلى: ${to}
📅 التاريخ: ${formattedDate}
👥 الركاب: ${passengers}
🚐 نوع النقل: ${type}

أرجو تأكيد توفر الرحلة والسعر النهائي.`;

    window.open(
      `https://wa.me/776684150?text=${encodeURIComponent(msg)}`,
      "_blank"
    );

    onClose();
    showToast("تم تجهيز طلب الحجز وفتح واتساب");
  };

  return (
    <div className="modal show" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modalbox">
        <button className="close" onClick={onClose}>×</button>
        <h2>تأكيد طلب الحجز</h2>

        <div className="row">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="الاسم الكامل" />
          <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="رقم الهاتف" />
        </div>

        <div className="row">
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            {cities.map((city) => <option key={city}>{city}</option>)}
          </select>
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="">اختر الوجهة</option>
            {cities.map((city) => <option key={city}>{city}</option>)}
          </select>
        </div>

        <div className="row">
          <input
            type="date"
            min={new Date().toISOString().split("T")[0]}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <select value={passengers} onChange={(e) => setPassengers(e.target.value)}>
            {[1,2,3,4,5,6].map((n) => <option key={n}>{n}</option>)}
          </select>
        </div>

        <select value={transport} onChange={(e) => setTransport(e.target.value)}>
          <option value="shared">نقل تشاركي</option>
          <option value="private">نقل خاص</option>
        </select>

        <button className="confirm" onClick={confirmBooking}>
          <i className="fa-brands fa-whatsapp"></i> تأكيد وإرسال الطلب عبر واتساب
        </button>
      </div>
    </div>
  );
}
