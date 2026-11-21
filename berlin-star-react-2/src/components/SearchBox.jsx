import { useEffect, useState } from "react";
//مربع البحث

const cities = ["صنعاء", "جدة", "الرياض", "الدمام", "عدن"];

export default function SearchBox({ transport, setTransport, onSearch }) {
  const [from, setFrom] = useState("صنعاء");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("1");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setDate((old) => old || today);
  }, []);

  return (
    <div className="search">
      <div className="container">
        <div className="box">
          <div className="field">
            <label className="amj">من</label>
            <select value={from} onChange={(e) => setFrom(e.target.value)}>
              {cities.map((city) => <option>{city}</option>)}
            </select>
          </div>

          <div className="field">
            <label className="amj">إلى</label>
            <select value={to} onChange={(e) => setTo(e.target.value)}>
              <option>اختر الوجهة</option>
              {cities.map((city) => <option>{city}</option>)}
            </select>
          </div>
          <div className="field">
            <label className="amj">نوع النقل</label>
            <div className="toggle">
              <button
                className={transport === "shared" ? "active" : ""}
                onClick={() => setTransport("shared")}><o>تشاركي </o></button>
              
              <button
                className={transport === "private" ? "active" : ""}
                onClick={() => setTransport("private")} > <o>خاص</o></button>
            </div>
          </div>

          <div className="field">
            <label className="amj">تاريخ الرحلة</label>
            <input type="date"
              min={new Date().toISOString().split("T")[0]}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="field">
            <label className="amj">عدد الركاب</label>
            <select value={passengers} onChange={(e) => setPassengers(e.target.value)}>
              {[1,2,3,4,5,6].map((n) => <option>{n}</option>)}
            </select>
          </div>

          <button
            className="go"
            onClick={() => onSearch({ from, to, date, passengers })}
          >
            <i className="fa-solid fa-plane"></i> احجز الآن 
          </button>
        </div>
      </div>
    </div>
  );
}
