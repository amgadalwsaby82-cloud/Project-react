export default function Footer() {
  //اسفل الموقع
  return (
    <footer id="contact">
      <div className="container foot">
        <div>
          <h3>برلين ستار الرحلات</h3>
          <p>مكتب متخصص في النقل البري بين اليمن والمملكة العربية السعودية، مع رحلات تشاركية وخاصة.</p>
        </div>

        <div>
          <h3>روابط</h3>
          <div className="footlinks">
            <a href="#trips">الرحلات</a>
            <a href="#cars">السيارات</a>
            <a href="#services">الخدمات</a>
          </div>
        </div>
        <div>
          <h3>تواصل معنا</h3>
          <div className="footlinks">
            <span>776684150</span>
            <span>واتساب متاح للحجز</span>
            <span>صنعاء - الستين الجنوبي</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
