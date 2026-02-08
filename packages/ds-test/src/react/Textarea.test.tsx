import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Textarea } from '@woosgem/ds-react';
import { Textarea as TextareaDef } from '@woosgem-dev/core';

describe('Textarea', () => {
  describe('Core ?¼ì¹˜ ê²€ì¦?, () => {
    it('TC-R100: ê¸°ë³¸ propsê°€ core mapPropsToAttrs ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = TextareaDef.mapPropsToAttrs({});

      render(<Textarea data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toHaveAttribute('data-variant', coreAttrs['data-variant']);
      expect(textarea).toHaveAttribute('data-size', coreAttrs['data-size']);
      expect(textarea).toHaveAttribute('data-resize', coreAttrs['data-resize']);
      expect(textarea).toHaveClass(coreAttrs.class);
    });

    it('TC-R101: variant prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = TextareaDef.mapPropsToAttrs({ variant: 'filled' });

      render(<Textarea variant="filled" data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toHaveAttribute('data-variant', coreAttrs['data-variant']);
    });

    it('TC-R102: size prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = TextareaDef.mapPropsToAttrs({ size: 'lg' });

      render(<Textarea size="lg" data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toHaveAttribute('data-size', coreAttrs['data-size']);
    });

    it('TC-R103: resize prop??core ê²°ê³¼?€ ?¼ì¹˜?œë‹¤', () => {
      const coreAttrs = TextareaDef.mapPropsToAttrs({ resize: 'both' });

      render(<Textarea resize="both" data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toHaveAttribute('data-resize', coreAttrs['data-resize']);
    });
  });

  describe('Variant ë³€??, () => {
    it('TC-C110: variant: outline???ìš©?œë‹¤', () => {
      render(<Textarea variant="outline" data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-C111: variant: filledê°€ ?ìš©?œë‹¤', () => {
      render(<Textarea variant="filled" data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveAttribute('data-variant', 'filled');
    });
  });

  describe('Size ë³€??, () => {
    it('TC-C120: size: sm???ìš©?œë‹¤', () => {
      render(<Textarea size="sm" data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveAttribute('data-size', 'sm');
    });

    it('TC-C121: size: mdê°€ ?ìš©?œë‹¤', () => {
      render(<Textarea size="md" data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveAttribute('data-size', 'md');
    });

    it('TC-C122: size: lgê°€ ?ìš©?œë‹¤', () => {
      render(<Textarea size="lg" data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveAttribute('data-size', 'lg');
    });
  });

  describe('Resize ë³€??, () => {
    it('TC-C130: resize: none???ìš©?œë‹¤', () => {
      render(<Textarea resize="none" data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveAttribute('data-resize', 'none');
    });

    it('TC-C131: resize: vertical???ìš©?œë‹¤', () => {
      render(<Textarea resize="vertical" data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveAttribute('data-resize', 'vertical');
    });

    it('TC-C132: resize: horizontal???ìš©?œë‹¤', () => {
      render(<Textarea resize="horizontal" data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveAttribute('data-resize', 'horizontal');
    });

    it('TC-C133: resize: bothê°€ ?ìš©?œë‹¤', () => {
      render(<Textarea resize="both" data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveAttribute('data-resize', 'both');
    });
  });

  describe('?íƒœ ë³€??, () => {
    it('TC-S100: disabled ?íƒœê°€ ?ìš©?œë‹¤', () => {
      render(<Textarea disabled data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toHaveAttribute('data-state', 'disabled');
      expect(textarea).toBeDisabled();
    });

    it('TC-S101: error ?íƒœê°€ ?ìš©?œë‹¤', () => {
      render(<Textarea error data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toHaveAttribute('data-state', 'error');
      expect(textarea).toHaveAttribute('aria-invalid', 'true');
    });

    it('TC-S102: disabledê°€ errorë³´ë‹¤ ?°ì„ ?œë‹¤', () => {
      render(<Textarea disabled error data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toHaveAttribute('data-state', 'disabled');
      expect(textarea).toBeDisabled();
    });
  });

  describe('ê¸°ë³¸ê°?, () => {
    it('TC-C010: variant ê¸°ë³¸ê°’ì? outline?´ë‹¤', () => {
      render(<Textarea data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveAttribute('data-variant', 'outline');
    });

    it('TC-C011: size ê¸°ë³¸ê°’ì? md?´ë‹¤', () => {
      render(<Textarea data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveAttribute('data-size', 'md');
    });

    it('TC-C012: resize ê¸°ë³¸ê°’ì? vertical?´ë‹¤', () => {
      render(<Textarea data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveAttribute('data-resize', 'vertical');
    });
  });

  describe('React ?„ìš© props', () => {
    it('TC-R200: placeholderê°€ ?ìš©?œë‹¤', () => {
      render(<Textarea placeholder="Enter text..." data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveAttribute('placeholder', 'Enter text...');
    });

    it('TC-R201: rowsê°€ ?ìš©?œë‹¤', () => {
      render(<Textarea rows={5} data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveAttribute('rows', '5');
    });

    it('TC-R202: valueê°€ ?ìš©?œë‹¤', () => {
      render(<Textarea defaultValue="Hello" data-testid="textarea" />);
      expect(screen.getByTestId('textarea')).toHaveValue('Hello');
    });
  });

  describe('?´ë²¤???¸ë“¤??, () => {
    it('TC-O150: onChange ?¸ë“¤?¬ê? ?¸ì¶œ?œë‹¤', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(<Textarea onChange={handleChange} data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      await user.type(textarea, 'Hello');

      expect(handleChange).toHaveBeenCalled();
    });

    it('TC-O151: onFocus ?¸ë“¤?¬ê? ?¸ì¶œ?œë‹¤', async () => {
      const user = userEvent.setup();
      const handleFocus = vi.fn();

      render(<Textarea onFocus={handleFocus} data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      await user.click(textarea);

      expect(handleFocus).toHaveBeenCalled();
    });

    it('TC-O152: disabled ?íƒœ?ì„œ onChangeê°€ ?¸ì¶œ?˜ì? ?ŠëŠ”??, async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(<Textarea disabled onChange={handleChange} data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      await user.type(textarea, 'Hello');

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('ì»¤ìŠ¤?°ë§ˆ?´ì¦ˆ ?¤ë²„?¼ì´??, () => {
    it('TC-O100: className ì¶”ê? ??ë³‘í•©?œë‹¤', () => {
      render(<Textarea className="custom-textarea" data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toHaveClass('textarea');
      expect(textarea).toHaveClass('custom-textarea');
    });

    it('TC-O110: style ?¸ë¼???ìš©', () => {
      render(<Textarea style={{ minHeight: 100 }} data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toHaveStyle({ minHeight: '100px' });
    });

    it('TC-O130: ë³´í˜¸ ?ì„± data-variant ?¤ë²„?¼ì´??ì°¨ë‹¨', () => {
      // @ts-expect-error - ë³´í˜¸ ?ì„± ?¤ë²„?¼ì´???œë„
      render(<Textarea data-variant="custom" variant="filled" data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toHaveAttribute('data-variant', 'filled');
    });

    it('TC-O160: id ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(<Textarea id="description" data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toHaveAttribute('id', 'description');
    });

    it('TC-O161: aria-label ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(<Textarea aria-label="Description" data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toHaveAttribute('aria-label', 'Description');
    });

    it('TC-O162: aria-describedby ?ì„± ?„ë‹¬ ?ˆìš©', () => {
      render(<Textarea aria-describedby="error-msg" data-testid="textarea" />);
      const textarea = screen.getByTestId('textarea');

      expect(textarea).toHaveAttribute('aria-describedby', 'error-msg');
    });
  });
});
