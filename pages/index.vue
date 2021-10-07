<template>
  <div>
    <Banner/>
    <Partner/>
    <Feature/>
    <About/>
    <Challenge/>
    <Team/>
    <Touch/>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import Partner from "../components/Partner";
import Feature from "../components/Feature";
import About from "../components/About";
import Challenge from "../components/Challenge";
import Team from "../components/Team";
import Touch from "../components/Touch";

export default {
  components: {Touch, Team, Challenge, About, Feature, Partner, Banner}
}
</script>
