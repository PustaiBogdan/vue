import Assigment from "./Assigment.js";

export default {
  components: { Assigment },
  template: `
  <section class="mt-8">
  <h2 class="font-bold mb-2" v-show="assigments.length">
    {{ title }}
  </h2>
    <ul>
            <Assigment 
            v-for="assigment in assigments" 
            :assigment="assigment"
            :key="assigment.id"/>
    </ul>
</section>
    `,
  props: {
    assigments: Array,
    title: String,
  },
};
