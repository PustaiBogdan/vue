export default {
  template: `
    <form @submit.prevent="add">
        <div class="border border-gray-600">
            <input v-model="newAssigment" type="text"  placeholder="Add something..."/>
            <button class="bg-white p-2 border-l " type="submit">Add</button>
        </div>
    </form>
    `,
  data() {
    return {
      newAssigment: "",
    };
  },
  methods: {
    add() {
      this.$emit("add", this.newAssigment);
      this.newAssigment = "";
    },
  },
};
