import { trips } from "../data/trips";
//قسم الرحلات
export default function Trips({ onBook }) {
  return (
    <section id="trips">
      <div className="container">
        <div className="title"><h2>الوجهات المتاحة</h2></div>

        <div className="cards">
          {trips.map((trip) => (
            <div className="card" key={trip.destination}>
              <img src={trip.image} alt={trip.title} />
              <div className="cardbody">
                <h3>{trip.title}</h3>
                <p>رحلات يومية منتظمة</p>
                <button className="book" onClick={() => onBook(trip.destination)}>
                  احجز الآن
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
