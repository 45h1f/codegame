<template>
  <div>
    <Breadcrumbs page="FAQ"/>


    <section class="faq-area white-bg ptb-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="faq-img">
              <img src="static/img/faq-img.png" alt="Image">
            </div>
          </div>
          <div class="col-lg-6">
            <div class="faq-accordion">
              <div class="faq-title">
                <h2>Frequently asked questions</h2>
                <span>Just find your answers below</span>
              </div>
              <ul class="accordion">
                <li class="accordion-item" v-for="(question, index) in questions" :key="index"
                    @click="itemActive(question.id)">

                  <a class="accordion-title" :class="{ active: question.id === activeQuestion}"
                     href="javascript:void(0)">
                    <i class="bx bx-plus"></i>
                    {{ question.qus }}
                  </a>
                  <div class="accordion-content" :class="{ show: question.id === activeQuestion}">
                    <p>{{ question.ans }}</p>
                  </div>
                </li>


              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="faq-right-shape shape-three">
        <img src="static/img/faq-right-shape.png" alt="Image">
      </div>
    </section>


    <Touch/>
  </div>
</template>

<script>
import Touch from "../components/Touch";
import Breadcrumbs from "../components/Breadcrumbs";


export default {
  name: "faq",
  components: {Breadcrumbs, Touch},
  data() {
    return {
      activeQuestion: 1,
      questions: [
        {id: 1, qus: 'Something qus 1', ans: 'Something Ans1 '},
        {id: 2, qus: 'Something qus 2', ans: 'Something Ans 2'},
      ],
    }
  }, methods: {
    itemActive(questionId) {
      this.activeQuestion = questionId;
    }
  },
}
</script>

<style scoped>

</style>
