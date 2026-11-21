const features = [
  ["fa-shield-halved", "أمان وموثوقية", "سائقون محترفون"],
  ["fa-calendar-days", "رحلات منتظمة", "على مدار الأسبوع"],
  ["fa-tags", "أسعار مناسبة", "خيارات متعددة"],
  ["fa-headset", "دعم سريع", "تواصل مباشر"]
];
//المميزات
export default function Features() {
  return (
    <div className="container" id="services">
      <div className="features">
        {features.map(([icon, title, sub]) => (
          <div className="feature">
            <div className="ico"><i className={`fa-solid ${icon}`}></i></div>
            <div><strong>{title}</strong><small>{sub}</small></div>
          </div>
        ))}
      </div>
    </div>
  );
}
