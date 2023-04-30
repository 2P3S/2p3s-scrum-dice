import { Button as ButtonComponent } from './Button';
import { CountDownButton as CountDownButtonComponent } from './CountDownButton';
import { LinkButton as LinkButtonComponent } from './LinkButton';

import type { ButtonProps, CountDownButtonProps, LinkButtonProps } from './index';
import type { Story } from '@ladle/react';

export const Button: Story<ButtonProps> = props => <ButtonComponent {...props}>button</ButtonComponent>;
export const CountDownButton: Story<CountDownButtonProps> = props => <CountDownButtonComponent {...props} />;
export const LinkButton: Story<LinkButtonProps> = props => (
  <LinkButtonComponent {...props}>{props.href}</LinkButtonComponent>
);

Button.args = {
  disabled: false,
  loading: false,
};

Button.argTypes = {
  state: {
    options: ['info', 'success', 'warning', 'error'],
    control: { type: 'inline-radio' },
    defaultValue: 'info',
  },
};

CountDownButton.argTypes = {
  counter: {
    control: { type: 'range', min: 1, max: 180, step: 1 },
    defaultValue: 90,
  },
};

LinkButton.args = {
  href: 'https://www.google.com/',
};

LinkButton.argTypes = {
  target: {
    options: ['_blank', '_self'],
    control: { type: 'inline-radio' },
    defaultValue: '_blank',
  },
};
