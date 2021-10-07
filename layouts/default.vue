<template>
  <div>
<!--    <Head/>-->
    <Header/>
    <Nuxt/>
    <Footer/>
  </div>
</template>
<script>
import Head from "../components/Head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  components: {Footer, Header, Head}
}
</script>
