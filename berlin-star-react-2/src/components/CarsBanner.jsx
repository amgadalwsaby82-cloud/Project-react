export default function CarsBanner({ onBook }) {
  return (
    //قسم السيارات
    <section id="cars">
      <div className="container">
        <div className="cars">
          <div>
            <h2>سيارات مريحة وحديثة</h2>
            <p>اختر النقل الخاص إذا كنت تريد سيارة مخصصة لك ولعائلتك.</p>
          </div>
          
          <img
            src="br.png"
            alt="برادو"
          />
          <img src="hil.png" alt="هايلوكس" />
              <img src="forsh.png" alt="فورش" />
              <img src="pra.png" alt="rr" />
        </div>
      </div>
    </section>
  );
}
