import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@woosgem/ds-react';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Whether one or multiple items can be open at a time',
      table: { category: 'Behavior' },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the accordion',
      table: { category: 'Style' },
    },
    variant: {
      control: 'select',
      options: ['outline', 'filled', 'ghost'],
      description: 'Visual variant of the accordion',
      table: { category: 'Style' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'single',
    size: 'md',
    variant: 'outline',
  },
  render: (args) => (
    <div style={{ width: '500px' }}>
      <Accordion {...args}>
        <AccordionItem open>
          <AccordionTrigger>What is WooSGem?</AccordionTrigger>
          <AccordionContent>
            WooSGem is a multi-framework design system that provides consistent UI components
            across React, Vue, and Lit. It uses the Color Set Protocol to generate design tokens
            from minimal input.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>How do I install it?</AccordionTrigger>
          <AccordionContent>
            Install the package for your framework using your preferred package manager.
            For React, run pnpm add @woosgem-dev/react. Then import components directly.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. All components follow WAI-ARIA patterns and support keyboard navigation.
            Accordion triggers are focusable, and content regions are properly associated
            with their triggers.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '500px' }}>
      <div>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginBottom: '8px' }}>Outline</div>
        <Accordion variant="outline">
          <AccordionItem open>
            <AccordionTrigger>Outline item</AccordionTrigger>
            <AccordionContent>Content with outline variant styling.</AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionTrigger>Another item</AccordionTrigger>
            <AccordionContent>More content here.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginBottom: '8px' }}>Filled</div>
        <Accordion variant="filled">
          <AccordionItem open>
            <AccordionTrigger>Filled item</AccordionTrigger>
            <AccordionContent>Content with filled variant styling.</AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionTrigger>Another item</AccordionTrigger>
            <AccordionContent>More content here.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginBottom: '8px' }}>Ghost</div>
        <Accordion variant="ghost">
          <AccordionItem open>
            <AccordionTrigger>Ghost item</AccordionTrigger>
            <AccordionContent>Content with ghost variant styling.</AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionTrigger>Another item</AccordionTrigger>
            <AccordionContent>More content here.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '500px' }}>
      <div>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginBottom: '8px' }}>Small</div>
        <Accordion size="sm">
          <AccordionItem open>
            <AccordionTrigger>Small accordion item</AccordionTrigger>
            <AccordionContent>Compact content area for dense layouts.</AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionTrigger>Another small item</AccordionTrigger>
            <AccordionContent>More compact content.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginBottom: '8px' }}>Medium</div>
        <Accordion size="md">
          <AccordionItem open>
            <AccordionTrigger>Medium accordion item</AccordionTrigger>
            <AccordionContent>Default comfortable spacing for content.</AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionTrigger>Another medium item</AccordionTrigger>
            <AccordionContent>More content with standard spacing.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginBottom: '8px' }}>Large</div>
        <Accordion size="lg">
          <AccordionItem open>
            <AccordionTrigger>Large accordion item</AccordionTrigger>
            <AccordionContent>Spacious content area for emphasis and readability.</AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionTrigger>Another large item</AccordionTrigger>
            <AccordionContent>More content with generous spacing.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
};

export const SingleType: Story = {
  name: 'Single Type',
  render: () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
      <div style={{ width: '500px' }}>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginBottom: '8px' }}>
          Only one item can be open at a time. Click a trigger to switch.
        </div>
        <Accordion type="single">
          {['First section', 'Second section', 'Third section'].map((title, i) => (
            <AccordionItem key={title} open={openIndex === i}>
              <AccordionTrigger onClick={() => setOpenIndex(openIndex === i ? -1 : i)}>
                {title}
              </AccordionTrigger>
              <AccordionContent>
                This is the content for the {title.toLowerCase()}.
                When you open another item, this one will close automatically.
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div style={{
          marginTop: '16px',
          padding: '12px',
          background: 'var(--wg-color-background-muted, #f5f5f5)',
          borderRadius: '8px',
          fontSize: '13px',
          color: 'var(--wg-color-text-muted, #666)',
        }}>
          Currently open: {openIndex >= 0 ? `Section ${openIndex + 1}` : 'None'}
        </div>
      </div>
    );
  },
};

export const MultipleType: Story = {
  name: 'Multiple Type',
  render: () => {
    const [openItems, setOpenItems] = useState<Set<number>>(new Set([0, 2]));

    const toggleItem = (index: number) => {
      setOpenItems((prev) => {
        const next = new Set(prev);
        if (next.has(index)) {
          next.delete(index);
        } else {
          next.add(index);
        }
        return next;
      });
    };

    return (
      <div style={{ width: '500px' }}>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginBottom: '8px' }}>
          Multiple items can be open simultaneously. Click triggers independently.
        </div>
        <Accordion type="multiple">
          {['Account settings', 'Notification preferences', 'Privacy controls'].map((title, i) => (
            <AccordionItem key={title} open={openItems.has(i)}>
              <AccordionTrigger onClick={() => toggleItem(i)}>
                {title}
              </AccordionTrigger>
              <AccordionContent>
                Configure your {title.toLowerCase()} here.
                Opening or closing this item does not affect other items.
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div style={{
          marginTop: '16px',
          padding: '12px',
          background: 'var(--wg-color-background-muted, #f5f5f5)',
          borderRadius: '8px',
          fontSize: '13px',
          color: 'var(--wg-color-text-muted, #666)',
        }}>
          Open items: {openItems.size > 0 ? [...openItems].map((i) => i + 1).join(', ') : 'None'}
        </div>
      </div>
    );
  },
};

export const DisabledItem: Story = {
  name: 'Disabled Item',
  render: () => (
    <div style={{ width: '500px' }}>
      <Accordion>
        <AccordionItem open>
          <AccordionTrigger>Available section</AccordionTrigger>
          <AccordionContent>
            This section is fully interactive and accessible.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem disabled>
          <AccordionTrigger>Disabled section</AccordionTrigger>
          <AccordionContent>
            This content is hidden because the item is disabled.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>Another available section</AccordionTrigger>
          <AccordionContent>
            This section works normally alongside the disabled one.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const FAQ: Story = {
  name: 'FAQ Section',
  render: () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqItems = [
      {
        question: 'How do I reset my password?',
        answer: 'Go to the login page and click "Forgot password." Enter your email address and follow the instructions in the reset email. The link expires after 24 hours.',
      },
      {
        question: 'Can I change my subscription plan?',
        answer: 'Yes. Navigate to Settings > Billing and select your new plan. Changes take effect at the start of your next billing cycle. Downgrades retain access until the current period ends.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept Visa, Mastercard, American Express, and PayPal. For enterprise plans, we also support bank transfers and invoicing with NET 30 terms.',
      },
      {
        question: 'How do I cancel my account?',
        answer: 'Open Settings > Account and scroll to the bottom. Click "Delete account" and confirm. Your data will be retained for 30 days before permanent deletion. You can reactivate during this period.',
      },
      {
        question: 'Is there a free trial available?',
        answer: 'All new accounts start with a 14-day free trial of the Pro plan. No credit card required. After the trial, you can choose to subscribe or continue with the free tier.',
      },
    ];

    return (
      <div style={{ width: '600px' }}>
        <h3 style={{ margin: '0 0 16px', fontSize: '18px', fontWeight: 600 }}>Frequently Asked Questions</h3>
        <Accordion type="single" variant="ghost">
          {faqItems.map((item, i) => (
            <AccordionItem key={item.question} open={openIndex === i}>
              <AccordionTrigger onClick={() => setOpenIndex(openIndex === i ? -1 : i)}>
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <p style={{ margin: 0, lineHeight: 1.6, color: 'var(--wg-color-text-secondary, #666)' }}>
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  },
};
