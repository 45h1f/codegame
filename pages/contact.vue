<template>
  <div>
    <Breadcrumbs page="Contact Us"/>

    <section class="main-contact-area ptb-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <div class="contact-wrap">
              <div class="contact-form">
                <div class="contact-title">
                  <h2>Contact Us</h2>
                </div>
                <form id="contactForm">
                  <div class="row">
                    <div class="col-lg-6 col-sm-6">
                      <div class="form-group">
                        <label>Name</label>
                        <input type="text" name="name" id="name" class="form-control" required
                               data-error="Please enter your name">
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-sm-6">
                      <div class="form-group">
                        <label>Email Address</label>
                        <input type="email" name="email" id="email" class="form-control" required
                               data-error="Please enter your email">
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label>Subject</label>
                        <input type="text" name="msg_subject" id="msg_subject" class="form-control"
                               required data-error="Please enter your subject">
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label>Message</label>
                        <textarea name="message" class="form-control" id="message" cols="30"
                                  rows="10" required data-error="Write your message"></textarea>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <button type="submit" class="default-btn btn-two">
                        <span>Send Message</span>
                      </button>
                      <div id="msgSubmit" class="h3 text-center hidden"></div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="contact-info">
              <h3>Our contact details</h3>
              <p>Detaild contact informetion of CodeGame</p>
              <ul class="address">
                <li class="location">
                  <i class="bx bxs-location-plus"></i>
                  <span>Address</span>
                  Dhaka, Bangladesh
                </li>
                <li>
                  <i class="bx bxs-phone-call"></i>
                  <span>Phone</span>
                  <a href="tel:+1-(514)-312-5678">+88 (017) 23 50 55 27</a>
                  <!-- <a href="tel:+1-(514)-312-6677">+1 (514) 312-6677</a> -->
                </li>
                <li>
                  <i class="bx bxs-envelope"></i>
                  <span>Email</span>
                  <a href="https://templates.envytheme.com/cdn-cgi/l/email-protection#d1b9b4bdbdbe91a2b4a0a5a8ffb2bebc"><span
                    class="__cf_email__"
                    data-cfemail="19717c757576596a7c686d60377a7674">[email&#160;protected]</span></a>
                  <a href="#">skype: live:a.m.ashiful_1</a>
                </li>
              </ul>
              <div class="sidebar-follow-us">
                <h3>Follow us:</h3>
                <ul class="social-wrap">
                  <li>
                    <a href="#" target="_blank">
                      <i class="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i class="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i class="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i class="bx bxl-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <div class="map-area">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.822391377!2d90.27923731743151!3d23.7808874568017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1629025908156!5m2!1sen!2sbd"></iframe>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "../components/Breadcrumbs";
export default {
  name: "contact",
  components: {Breadcrumbs}
}
</script>

<style scoped>

</style>
