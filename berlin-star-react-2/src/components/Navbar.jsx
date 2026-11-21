//شريط التنقل
export default function Navbar({ onBook }) {
  return (
    <nav>
      <div className="container navin">
        <div className="logo">
          <div className="logoicon"><img src="ico.png" alt="برلين ستار" /></div>
          <div>
            <h2>برلين ستار</h2>
            <small className="smTop">للنقل والسفريات</small>
          </div>
        </div>

        <div className="links">
          <a href="#" >الرئيسية</a>
          <a href="#trips" >الرحلات</a>
          <a href="#cars" >السيارات</a>
          <a href="#services" >الخدمات</a>
          <a href="#contact" >اتصل بنا</a>
        </div>
        <button className="navbtn" onClick={onBook}>احجز رحلتك</button>
      </div>
    </nav>
  );
}
