import { defineComponent, h, Teleport } from 'vue';

export const Portal = defineComponent({
  name: 'Portal',
  props: {
    to: { type: String, default: 'body' },
  },
  setup(props, { slots }) {
    return () => h(Teleport as any, { to: props.to }, slots.default?.());
  },
});
