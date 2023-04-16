import { AnchorHTMLAttributes, ReactElement } from 'react';
import Link from 'next/link';
import classnames from 'classnames';

import { ButtonProps } from './Button';

type LinkButtonProps = ButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'href'> & {
    href: string;
    target?: '_blank' | '_self';
  };

export const LinkButton = ({
  children,
  className,
  href,
  target = '_self',
  ...props
}: LinkButtonProps): ReactElement => (
  <Link href={href} target={target} className={classnames(className, 'btn')} role="button" {...props}>
    {children}
  </Link>
);
