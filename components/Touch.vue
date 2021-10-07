<template>


  <section class="get-in-touch-area get-in-touch-area-two bg-color ptb-100">
    <div class="container">
      <div class="section-title">
        <span>Get In Touch</span>
        <h2>Contact Us Today To Speak With An Expert About Your Needs</h2>
      </div>
      <form class="get-in-touch-form" @submit="submitForm"
            action="https://vuejs.org/"
            method="post">

        <div class="row" v-if="errors.length">
          <div class="col-md-12">
            <b>Please correct the following error(s):</b>
            <ul>
              <li class="text-warning" v-for="error in errors">{{ error }}</li>
            </ul>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 col-sm-6">
            <div class="form-group">
              <label>Name</label>
              <input type="text" class="form-control" id="First-Name" v-model='name'>
            </div>
          </div>
          <div class="col-lg-6 col-sm-6">
            <div class="form-group">
              <label>Email</label>
              <input type="email" class="form-control" id="Email" v-model='email'>
            </div>
          </div>
          <div class="col-lg-6 col-sm-6">
            <div class="form-group">
              <label>Phone</label>
              <input type="text" class="form-control" id="Number" v-model='phone'>
            </div>
          </div>
          <div class="col-lg-6 col-sm-6">
            <div class="form-group">
              <label>Company</label>
              <input type="text" class="form-control" id="Company" v-model='company'>
            </div>
          </div>
        </div>
        <button type="submit" class="default-btn">
          <span>Consultation</span>
        </button>
      </form>
    </div>
    <div class="get-in-touch-shape">
      <img src="static/img/get-in-touch-shape.png" alt="Image">
    </div>
  </section>

</template>

<script>
export default {
  name: "Touch",
  data() {
    return {
      errors: [],
      name: null,
      email: null,
      phone: null,
      company: null
    }
  },
  methods: {
    submitForm: function (e) {
      if (this.name && this.email) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push('Name Field required.');
      }
      if (!this.age) {
        this.errors.push('Email field required.');
      }

      e.preventDefault();
    }
  }
}
</script>

<style scoped>

</style>
