import AssigmentList from "./AssigmentList.js";
import AssigmentCreate from "./AssigmentCreate.js";

export default {
  components: { AssigmentList, AssigmentCreate },
  template: `
  <section class="space-y-6">
    <assigment-list :assigments="filters.inProgress" title="in progress"></assigment-list>
    <assigment-list :assigments="filters.completed" title="Completed"></assigment-list>
    <assigment-create @add="addItem"></assigment-create>
 </section>
 `,
  data() {
    return {
      assigments: [
        { name: "finished project 1", completed: false, id: 1 },
        { name: "finished project 2", completed: false, id: 2 },
        { name: "finished project 3", completed: true, id: 3 },
      ],
    };
  },
  computed: {
    filters() {
      return {
        inProgress: this.assigments.filter((assigment) => !assigment.completed),
        completed: this.assigments.filter((assigment) => assigment.completed),
      };
    },
  },

  methods: {
    addItem(name) {
      this.assigments.push({
        name: name,
        completed: false,
        id: this.assigments.length + 1,
      });
      this.newAssigment = "";
    },
  },
};
