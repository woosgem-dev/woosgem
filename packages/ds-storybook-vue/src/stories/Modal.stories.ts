import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '@woosgem/ds-vue';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the modal is open',
      table: { category: 'State' },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Modal size',
      table: { category: 'Style' },
    },
    closable: {
      control: 'boolean',
      description: 'Whether the modal can be closed via close button or ESC key',
      table: { category: 'Behavior' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    size: 'md',
    closable: true,
  },
  render: (args) => ({
    components: { Modal, ModalBody },
    setup() { return { args }; },
    template: `
      <div style="min-height: 100vh; padding: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
        <div style="max-width: 600px; margin: 0 auto; padding: 32px; background: rgba(255, 255, 255, 0.95); border-radius: 12px">
          <h2 style="margin-top: 0; color: #333">Modal Demo</h2>
          <p style="color: #666; line-height: 1.6">This is the main page content. Click the button to open the modal.</p>
        </div>
        <Modal v-bind="args" title="Default Modal">
          <ModalBody>
            <p style="margin: 0">
              This is the default modal with basic content.
              You can close it by clicking the overlay, pressing ESC, or using the close button if a header is present.
            </p>
          </ModalBody>
        </Modal>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  name: 'All Sizes',
  render: () => ({
    components: { Modal, ModalBody },
    setup() {
      const openSize = ref<string | null>(null);
      const sizes = ['sm', 'md', 'lg', 'xl', 'full'] as const;
      return { openSize, sizes };
    },
    template: `
      <div style="min-height: 100vh; padding: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
        <div style="max-width: 800px; margin: 0 auto; padding: 32px; background: rgba(255, 255, 255, 0.95); border-radius: 12px">
          <h2 style="margin-top: 0; margin-bottom: 24px; color: #333">Modal Sizes</h2>
          <div style="display: flex; flex-wrap: wrap; gap: 12px">
            <button
              v-for="size in sizes"
              :key="size"
              @click="openSize = size"
              style="padding: 12px 24px; font-size: 16px; font-weight: 600; color: white; background: #667eea; border: none; border-radius: 8px; cursor: pointer; text-transform: uppercase"
            >{{ size }}</button>
          </div>
        </div>
        <Modal v-if="openSize" :open="true" @close="openSize = null" :size="openSize" :title="openSize + ' Modal'">
          <ModalBody>
            <h3 style="margin-top: 0">Size: {{ openSize?.toUpperCase() }}</h3>
            <p>This modal is displayed with size="{{ openSize }}".</p>
            <button @click="openSize = null" style="margin-top: 16px; padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 6px; cursor: pointer">Close Modal</button>
          </ModalBody>
        </Modal>
      </div>
    `,
  }),
};

export const WithHeader: Story = {
  name: 'With Header',
  render: () => ({
    components: { Modal, ModalHeader, ModalBody },
    setup() {
      const open = ref(false);
      return { open };
    },
    template: `
      <div style="min-height: 100vh; padding: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
        <div style="max-width: 600px; margin: 0 auto; padding: 32px; background: rgba(255, 255, 255, 0.95); border-radius: 12px">
          <button @click="open = true" style="padding: 12px 24px; font-size: 16px; font-weight: 600; color: white; background: #667eea; border: none; border-radius: 8px; cursor: pointer">Open Modal</button>
        </div>
        <Modal :open="open" @close="open = false" title="Modal with Header">
          <ModalHeader @close="open = false">Confirmation</ModalHeader>
          <ModalBody>
            <p>This modal includes a header with a title and close button.</p>
          </ModalBody>
        </Modal>
      </div>
    `,
  }),
};

export const FullStructure: Story = {
  name: 'Full Structure (Header + Body + Footer)',
  render: () => ({
    components: { Modal, ModalHeader, ModalBody, ModalFooter },
    setup() {
      const open = ref(false);
      return { open };
    },
    template: `
      <div style="min-height: 100vh; padding: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
        <div style="max-width: 600px; margin: 0 auto; padding: 32px; background: rgba(255, 255, 255, 0.95); border-radius: 12px">
          <button @click="open = true" style="padding: 12px 24px; font-size: 16px; font-weight: 600; color: white; background: #667eea; border: none; border-radius: 8px; cursor: pointer">Open Modal</button>
        </div>
        <Modal :open="open" @close="open = false" size="lg" title="Complete Modal">
          <ModalHeader @close="open = false">Delete Account</ModalHeader>
          <ModalBody>
            <h4 style="margin-top: 0; color: #333">Are you sure?</h4>
            <p style="color: #666; line-height: 1.6">
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </p>
            <div style="margin-top: 16px; padding: 16px; background: #fff3cd; border: 1px solid #ffc107; border-radius: 8px">
              <strong style="color: #856404">Warning:</strong>
              <p style="margin: 8px 0 0; color: #856404">All your projects, settings, and personal information will be lost.</p>
            </div>
          </ModalBody>
          <ModalFooter>
            <button @click="open = false" style="padding: 10px 20px; margin-right: 8px; background: transparent; color: #667eea; border: 1px solid #667eea; border-radius: 6px; cursor: pointer">Cancel</button>
            <button @click="open = false" style="padding: 10px 20px; background: #dc3545; color: white; border: none; border-radius: 6px; cursor: pointer">Delete Account</button>
          </ModalFooter>
        </Modal>
      </div>
    `,
  }),
};

export const NonClosable: Story = {
  name: 'Non-Closable (closable=false)',
  render: () => ({
    components: { Modal, ModalHeader, ModalBody, ModalFooter },
    setup() {
      const open = ref(false);
      return { open };
    },
    template: `
      <div style="min-height: 100vh; padding: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
        <div style="max-width: 600px; margin: 0 auto; padding: 32px; background: rgba(255, 255, 255, 0.95); border-radius: 12px">
          <button @click="open = true" style="padding: 12px 24px; font-size: 16px; font-weight: 600; color: white; background: #667eea; border: none; border-radius: 8px; cursor: pointer">Open Modal</button>
          <p style="margin-top: 16px; font-size: 14px; color: #666">This modal cannot be closed by clicking the overlay or pressing ESC.</p>
        </div>
        <Modal :open="open" :closable="false" title="Non-Closable Modal">
          <ModalHeader :showClose="false">Important Action Required</ModalHeader>
          <ModalBody>
            <p>This modal has closable=false, which means the user must take explicit action.</p>
          </ModalBody>
          <ModalFooter>
            <button @click="open = false" style="padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 6px; cursor: pointer">I Understand</button>
          </ModalFooter>
        </Modal>
      </div>
    `,
  }),
};

export const ScrollableBody: Story = {
  name: 'Scrollable Body',
  render: () => ({
    components: { Modal, ModalHeader, ModalBody, ModalFooter },
    setup() {
      const open = ref(false);
      return { open };
    },
    template: `
      <div style="min-height: 100vh; padding: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
        <div style="max-width: 600px; margin: 0 auto; padding: 32px; background: rgba(255, 255, 255, 0.95); border-radius: 12px">
          <button @click="open = true" style="padding: 12px 24px; font-size: 16px; font-weight: 600; color: white; background: #667eea; border: none; border-radius: 8px; cursor: pointer">Open Modal</button>
        </div>
        <Modal :open="open" @close="open = false" size="md" title="Terms and Conditions">
          <ModalHeader @close="open = false">Terms and Conditions</ModalHeader>
          <ModalBody :scrollable="true">
            <h3 style="margin-top: 0">1. Introduction</h3>
            <p style="line-height: 1.6; color: #666">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <h3>2. User Agreement</h3>
            <p style="line-height: 1.6; color: #666">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h3>3. Privacy Policy</h3>
            <p style="line-height: 1.6; color: #666">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <h3>4. Data Collection</h3>
            <p style="line-height: 1.6; color: #666">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h3>5. Cookies</h3>
            <p style="line-height: 1.6; color: #666">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
            <h3>6. Third-Party Services</h3>
            <p style="line-height: 1.6; color: #666">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.</p>
            <h3>7. Termination</h3>
            <p style="line-height: 1.6; color: #666">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
            <h3>8. Changes to Terms</h3>
            <p style="line-height: 1.6; color: #666">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</p>
          </ModalBody>
          <ModalFooter>
            <button @click="open = false" style="padding: 10px 20px; margin-right: 8px; background: transparent; color: #667eea; border: 1px solid #667eea; border-radius: 6px; cursor: pointer">Decline</button>
            <button @click="open = false" style="padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 6px; cursor: pointer">Accept</button>
          </ModalFooter>
        </Modal>
      </div>
    `,
  }),
};
