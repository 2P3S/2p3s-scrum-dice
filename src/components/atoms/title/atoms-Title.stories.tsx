import { Title } from './Title';

import type { TitleProps } from './Title';
import type { Story } from '@ladle/react';

export const h1: Story<TitleProps> = () => <Title headingLevel="h1">h1 : text-5xl</Title>;
export const h2: Story<TitleProps> = () => <Title headingLevel="h2">h2 : text-4xl</Title>;
export const h3: Story<TitleProps> = () => <Title headingLevel="h3">h2 : text-3xl</Title>;
export const EmojiWithTitle: Story<TitleProps> = ({ emoji }) => (
  <Title headingLevel="h3" emoji={emoji}>
    h2 : text-3xl
  </Title>
);

EmojiWithTitle.args = {
  emoji: '😎',
};
