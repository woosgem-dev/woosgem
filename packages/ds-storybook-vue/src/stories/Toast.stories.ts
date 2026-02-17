import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Toast, ToastContainer, useToast } from '@woosgem/ds-vue';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'Visual variant indicating the type of message',
      table: { category: 'Style' },
    },
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'],
      description: 'Position where toast appears on screen',
      table: { category: 'Layout' },
    },
    duration: {
      control: 'number',
      description: 'Auto-dismiss duration in milliseconds (0 = no auto-dismiss)',
      table: { category: 'Behavior' },
    },
    closable: {
      control: 'boolean',
      description: 'Whether to show close button',
      table: { category: 'Behavior' },
    },
    visible: {
      control: 'boolean',
      description: 'Whether toast is visible',
      table: { category: 'State' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'info',
    position: 'top-right',
    duration: 0,
    closable: true,
    visible: true,
  },
  render: (args) => ({
    components: { Toast },
    setup() { return { args }; },
    template: '<Toast v-bind="args">This is a toast notification.</Toast>',
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { Toast },
    setup() {
      const visibleToasts = ref({
        info: true,
        success: true,
        warning: true,
        error: true,
      });
      const resetAll = () => {
        visibleToasts.value = { info: true, success: true, warning: true, error: true };
      };
      return { visibleToasts, resetAll };
    },
    template: `
      <div style="position: relative; width: 400px; height: 600px">
        <div style="display: flex; flex-direction: column; gap: 12px">
          <Toast
            v-if="visibleToasts.info"
            variant="info"
            position="top-right"
            :duration="0"
            :visible="true"
            @close="visibleToasts.info = false"
          >Info: Check your email for verification.</Toast>
          <Toast
            v-if="visibleToasts.success"
            variant="success"
            position="top-right"
            :duration="0"
            :visible="true"
            @close="visibleToasts.success = false"
          >Success: Your changes have been saved.</Toast>
          <Toast
            v-if="visibleToasts.warning"
            variant="warning"
            position="top-right"
            :duration="0"
            :visible="true"
            @close="visibleToasts.warning = false"
          >Warning: This action cannot be undone.</Toast>
          <Toast
            v-if="visibleToasts.error"
            variant="error"
            position="top-right"
            :duration="0"
            :visible="true"
            @close="visibleToasts.error = false"
          >Error: Failed to connect to server.</Toast>
        </div>
        <button
          @click="resetAll"
          style="margin-top: 16px; padding: 8px 16px; border: 1px solid #ccc; border-radius: 4px; cursor: pointer"
        >Reset All Toasts</button>
      </div>
    `,
  }),
};

export const Positions: Story = {
  name: 'All Positions',
  render: () => ({
    components: { Toast },
    setup() {
      const positions = ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'] as const;
      const visiblePositions = ref<Record<string, boolean>>(
        positions.reduce((acc, pos) => ({ ...acc, [pos]: true }), {} as Record<string, boolean>)
      );
      const resetAll = () => {
        positions.forEach((pos) => { visiblePositions.value[pos] = true; });
      };
      return { positions, visiblePositions, resetAll };
    },
    template: `
      <div style="position: relative; width: 600px; height: 400px; border: 2px dashed #ccc">
        <template v-for="position in positions" :key="position">
          <Toast
            v-if="visiblePositions[position]"
            variant="info"
            :position="position"
            :duration="0"
            :visible="true"
            @close="visiblePositions[position] = false"
          >{{ position }}</Toast>
        </template>
        <div style="text-align: center; margin-top: 150px">
          <button
            @click="resetAll"
            style="padding: 8px 16px; border: 1px solid #ccc; border-radius: 4px; cursor: pointer"
          >Reset All Positions</button>
        </div>
      </div>
    `,
  }),
};

export const WithClose: Story = {
  name: 'With Close Button',
  render: () => ({
    components: { Toast },
    setup() {
      const visible = ref(true);
      return { visible };
    },
    template: `
      <div style="position: relative; width: 400px; height: 200px">
        <Toast
          v-if="visible"
          variant="success"
          position="top-right"
          :duration="0"
          :closable="true"
          :visible="true"
          @close="visible = false"
        >You can close this toast by clicking the close button.</Toast>
        <button
          v-if="!visible"
          @click="visible = true"
          style="margin-top: 16px; padding: 8px 16px; border: 1px solid #ccc; border-radius: 4px; cursor: pointer"
        >Show Toast</button>
      </div>
    `,
  }),
};

export const AutoDismiss: Story = {
  name: 'Auto-Dismiss with Duration',
  render: () => ({
    components: { Toast },
    setup() {
      const visible = ref(true);
      const countdown = ref(5);
      let interval: ReturnType<typeof setInterval> | null = null;

      const handleShow = () => {
        visible.value = true;
        countdown.value = 5;
        if (interval) clearInterval(interval);
        interval = setInterval(() => {
          countdown.value--;
          if (countdown.value <= 0) {
            if (interval) clearInterval(interval);
          }
        }, 1000);
      };

      const handleClose = () => {
        visible.value = false;
        countdown.value = 0;
        if (interval) clearInterval(interval);
      };

      return { visible, countdown, handleShow, handleClose };
    },
    template: `
      <div style="position: relative; width: 400px; height: 200px">
        <Toast
          v-if="visible"
          variant="info"
          position="top-center"
          :duration="5000"
          :closable="true"
          :visible="true"
          @close="handleClose"
        >This toast will auto-dismiss in {{ countdown }} seconds.</Toast>
        <button
          v-if="!visible"
          @click="handleShow"
          style="margin-top: 16px; padding: 8px 16px; border: 1px solid #ccc; border-radius: 4px; cursor: pointer"
        >Show Toast (5s auto-dismiss)</button>
      </div>
    `,
  }),
};

export const Interactive: Story = {
  name: 'Interactive with useToast',
  render: () => ({
    components: { ToastContainer },
    setup() {
      const { toasts, addToast, removeToast, clearAll } = useToast({
        maxToasts: 5,
        defaultDuration: 5000,
        defaultPosition: 'top-right',
      });
      return { toasts, addToast, removeToast, clearAll };
    },
    template: `
      <div style="position: relative; width: 600px; min-height: 400px">
        <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 16px">
          <button
            @click="addToast('Info notification', { variant: 'info' })"
            style="padding: 8px 16px; border: 1px solid #0066cc; background: #e6f3ff; border-radius: 4px; cursor: pointer"
          >Show Info</button>
          <button
            @click="addToast('Operation successful!', { variant: 'success' })"
            style="padding: 8px 16px; border: 1px solid #00aa44; background: #e6ffe6; border-radius: 4px; cursor: pointer"
          >Show Success</button>
          <button
            @click="addToast('Warning: Please review', { variant: 'warning' })"
            style="padding: 8px 16px; border: 1px solid #ff9900; background: #fff3e6; border-radius: 4px; cursor: pointer"
          >Show Warning</button>
          <button
            @click="addToast('Error: Something went wrong', { variant: 'error' })"
            style="padding: 8px 16px; border: 1px solid #cc0000; background: #ffe6e6; border-radius: 4px; cursor: pointer"
          >Show Error</button>
          <button
            @click="addToast('Bottom center toast', { variant: 'info', position: 'bottom-center', duration: 3000 })"
            style="padding: 8px 16px; border: 1px solid #666; background: #f0f0f0; border-radius: 4px; cursor: pointer"
          >Show at Bottom</button>
          <button
            @click="addToast('No auto-dismiss', { variant: 'warning', duration: 0 })"
            style="padding: 8px 16px; border: 1px solid #ff9900; background: #fff3e6; border-radius: 4px; cursor: pointer"
          >No Auto-Dismiss</button>
          <button
            @click="clearAll"
            style="padding: 8px 16px; border: 1px solid #cc0000; background: #ffe6e6; border-radius: 4px; cursor: pointer"
          >Clear All</button>
        </div>
        <div style="padding: 12px; background: #f5f5f5; border-radius: 4px; font-size: 14px; color: #666">
          Active toasts: {{ toasts.length }} / 5 (max)
        </div>
        <ToastContainer :toasts="toasts" @dismiss="removeToast" />
      </div>
    `,
  }),
};

export const MultipleToasts: Story = {
  name: 'Multiple Toasts in Container',
  render: () => ({
    components: { ToastContainer },
    setup() {
      const { toasts, addToast, removeToast } = useToast({
        maxToasts: 3,
        defaultDuration: 0,
      });
      const addMultiple = () => {
        addToast('First toast', { variant: 'info' });
        setTimeout(() => addToast('Second toast', { variant: 'success' }), 200);
        setTimeout(() => addToast('Third toast', { variant: 'warning' }), 400);
      };
      return { toasts, addMultiple, removeToast };
    },
    template: `
      <div style="position: relative; width: 500px; min-height: 400px">
        <button
          @click="addMultiple"
          style="padding: 8px 16px; border: 1px solid #0066cc; background: #e6f3ff; border-radius: 4px; cursor: pointer; margin-bottom: 16px"
        >Add 3 Toasts</button>
        <ToastContainer :toasts="toasts" @dismiss="removeToast" position="top-right" />
      </div>
    `,
  }),
};

export const WithoutClosable: Story = {
  name: 'Without Close Button',
  render: () => ({
    components: { Toast },
    setup() {
      const visible = ref(true);
      return { visible };
    },
    template: `
      <div style="position: relative; width: 400px; height: 200px">
        <Toast
          v-if="visible"
          variant="info"
          position="top-center"
          :duration="5000"
          :closable="false"
          :visible="true"
          @close="visible = false"
        >This toast has no close button. It will auto-dismiss in 5 seconds.</Toast>
        <button
          v-if="!visible"
          @click="visible = true"
          style="margin-top: 16px; padding: 8px 16px; border: 1px solid #ccc; border-radius: 4px; cursor: pointer"
        >Show Toast</button>
      </div>
    `,
  }),
};
