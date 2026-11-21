export default function Toast({ message }) {
  return <div className={`toast ${message ? "show" : ""}`}>{message}</div>;
}
//رسالة تظهر في الموقع مثل تم تم الحجز بنجاح