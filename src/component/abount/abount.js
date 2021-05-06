import './abount.css'

function AbountMe(params) {
    return (
        <section id="about">
      <div class="container" data-aos="fade-up">
        <div class="row about-container">

          <div class="col-lg-12 content order-lg-1 order-2">
            <h2 class="title">ทำไมต้องสวนส้มจินตนา ?</h2>
            <p>
              " หลายคนอาจจะสงสัยว่า ส้มสายน้ำผึ้งที่อร่อยและรสชาติหวานอมเปรี้ยวที่จริงแล้วเป็นยังไง ?
              แล้วทำไมต้องเป็นส้มจากสวนส้มจินตนา "
            </p>
            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div class="icon"><i class="bi bi-chevron-right"></i></div>
              <h4 class="title"><a href="">รสชาติที่เป็นเอกลักษณ์</a></h4>
              <p class="description">รสชาติหวาน อมเปรี้ยวที่เป็นเอกลักษณ์ เนื้อเยอะ เปลือกบาง</p>
            </div>

            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div class="icon"><i class="bi bi-droplet"></i></div>
              <h4 class="title"><a href="">น้ำจากธรรมชาติ ไม่ใช้สารเคมี</a></h4>
              <p class="description">ทางสวนใช้น้ำธรรมชาติ น้ำที่เกิดจากธรรมชาติของ อำเภอฝาง</p>
            </div>

            <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div class="icon"><i class="bi bi-heart-fill"></i></div>
              <h4 class="title"><a href="">ส้มผิวสวย เหมาะสำหรับนำเป็นของฝาก</a></h4>
              <p class="description">สามารถนำเป็นของฝากเพื่อคนที่คุณรักได้ เพราะทางสวนมีการคัดที่ดีจากคนที่มีประสบการณ์นาน 10 ปี</p>
            </div>

          </div>

           <div class="col-lg-6 background order-lg-2 order-1" data-aos="fade-left" data-aos-delay="100"></div> 
        </div>

      </div>
    </section>
    )

}

export default AbountMe