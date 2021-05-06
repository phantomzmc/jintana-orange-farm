import './content.css'

function Content(params) {
    return (
        <section id="contact">
            <div class="container">
                <div class="section-header">
                    <h3 class="section-title">ติดต่อสอบถาม</h3>
                    <p class="section-description">สามารถสั่งซื้อสินค้าหรือติดต่อสอบถามได้ที่</p>
                </div>
            </div>
            {/* <iframe
                src="https://www.google.com/maps/place/19%C2%B055'19.1%22N+99%C2%B006'20.6%22E/@19.9219638,99.1035266,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d19.9219588!4d99.1057153"
                width="100%" height="380" frameborder="0" style="border:0" allowfullscreen></iframe> */}

            <div class="container mt-12">
                <div class="row justify-content-center">

                    <div class="col-lg-12 col-md-12">

                        <div class="info">
                            <div>
                                <i class="bi bi-geo-alt"></i>
                                <p>511 หมู่ 9 ตำบลม่อนปิ่น อำเภอฝาง จังหวัดเชียงใหม่ 50110<br /></p>
                            </div>

                            <div>
                                <i class="bi bi-envelope"></i>
                                <p>jintanaorangefarm@gmail.com</p>
                            </div>

                            <div>
                                <i class="bi bi-phone"></i>
                                <p>+66802612880<br />+66972277770</p>
                            </div>
                        </div>

                        <div class="social-links">
                            {/* <a href="#" class="twitter"><i class="bi bi-twitter"></i></a> */}
                            <a href="https://www.facebook.com/orangejin25/" class="facebook"><i class="bi bi-facebook"></i></a>
                            {/* <a href="#" class="line"><i class="bi bi-line"></i></a> */}
                            <a href="https://www.instagram.com/orangejin25/" class="instagram"><i class="bi bi-instagram"></i></a>
                            {/* <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a> */}
                        </div>

                    </div>

                    {/* <div class="col-lg-5 col-md-8">
                        <div class="form">
                            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                                <div class="form-group">
                                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                                </div>
                                <div class="form-group mt-3">
                                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                                </div>
                                <div class="form-group mt-3">
                                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div>
                                <div class="form-group mt-3">
                                    <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                </div>
                                <div class="my-3">
                                    <div class="loading">Loading</div>
                                    <div class="error-message"></div>
                                    <div class="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div class="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div> */}

                </div>

            </div>
        </section>
    );

}

export default Content;