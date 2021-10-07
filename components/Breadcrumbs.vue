<template>
  <div>
    <div class="page-title-area page-title-style-two">
      <div class="container">
        <div class="page-title-content">
          <h2>{{ page }}</h2>
          <ul>
            <li>
              <a href="">
                <i class="bx bx-home"></i>
                Home
              </a>
            </li>
            <li class="active">{{ page }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs",
  props: {
    page: {
      type: String,
      default: 'Default'
    }
  }
}
</script>

<style scoped>

</style>
