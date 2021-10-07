<template>
  <div>
    <header class="header-area">

      <div class="top-header top-header-five">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-sm-6">
              <ul class="header-left-content">
                <li>
                  <i class="bx bx-phone-call"></i>
                  <a href="tel:+88 (017) 23 50 55 27">+88 (017) 23 50 55 27</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-6 col-sm-6">
              <ul class="header-right-content">
                <li>
                  <a href="#" target="_blank">
                    <i class="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i class="bx bxl-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i class="bx bxl-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i class="bx bxl-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div class="navbar-area navbar-area-five">
        <div class="mobile-nav">
          <div class="container">
            <a href="" class="logo ">
              <img class="logo-img" src="" alt="Logo">
            </a>
          </div>
        </div>
        <div class="main-nav">
          <div class="container">
            <nav class="navbar navbar-expand-md">
              <a class="navbar-brand" href="">
                <img class="logo-img" src="" alt="Logo">
              </a>
              <div class="collapse navbar-collapse mean-menu">
                <ul class="navbar-nav m-auto">
                  <li class="nav-item">
                    <NuxtLink to="/" class="nav-link">Home</NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/services" class="nav-link">Services</NuxtLink>
                  </li>


                  <li class="nav-item">
                    <NuxtLink to="/team" class="nav-link">Team</NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/about" class="nav-link">About Us</NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/contact" class="nav-link">Contact Us</NuxtLink>
                  </li>

                  <li class="nav-item">
                    <NuxtLink to="/faq" class="nav-link">FAQ</NuxtLink>
                  </li>


                </ul>
                <div class="others-option">
                  <div class="get-quote">
                    <a href="#" class="default-btn">
                      <span>Get a Quote</span>
                    </a>
                  </div>

                </div>
              </div>
            </nav>
          </div>
        </div>
        <div class="others-option-for-responsive">
          <div class="container">
            <div class="dot-menu">
              <div class="inner">
                <div class="circle circle-one"></div>
                <div class="circle circle-two"></div>
                <div class="circle circle-three"></div>
              </div>
            </div>
            <div class="container">
              <div class="option-inner">
                <div class="others-option justify-content-center d-flex align-items-center">
                  <div class="get-quote">
                    <a href="#" class="default-btn">
                      <span>Get a Quote</span>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </header>

  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
