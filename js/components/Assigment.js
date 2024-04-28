export default {
  template: `
        <li>
            <label>
                {{ assigment.name }}
                <input v-model="assigment.completed" type="checkbox" />
            </label>
        </li>
    `,
  props: {
    assigment: Object,
  },
};
