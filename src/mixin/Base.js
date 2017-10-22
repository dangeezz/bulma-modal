export default {
  props: {
    showModal: Boolean,
    disable: {
      type: Boolean,
      default: false,
    },
    animation: {
      type: Object,
      default() {
        return {
          enter: 'fadeIn',
          leaveTo: 'fadeOut',
        };
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    closable() {
      return !this.disable;
    },
  },
  methods: {
    closeModal() {
      if (this.closable) {
        this.$emit('close');
      }
    },
    beforeEnter() {
      this.$emit('opening');
    },
    afterEnter() {
      this.$emit('open');
    },
    beforeLeave() {
      this.$emit('closing');
    },
    afterLeave() {
      this.$emit('close');
    },
  },
};
