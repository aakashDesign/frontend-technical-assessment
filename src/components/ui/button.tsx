import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { Button as BaseButton } from '@base-ui-components/react/button';
import { cn } from '../../lib/cn';
import './button.css';

export type ButtonVariant =
  | 'default'
  | 'outline'
  | 'ghost'
  | 'destructive'
  | 'secondary'
  | 'link';

export type ButtonSize =
  | 'default'
  | 'xs'
  | 'sm'
  | 'lg'
  | 'icon'
  | 'icon-xs'
  | 'icon-sm'
  | 'icon-lg';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  children?: ReactNode;
}

export const buttonVariants = ({
  variant = 'default',
  size = 'default',
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) =>
  cn(
    'ui-button',
    `ui-button--${variant}`,
    `ui-button--size-${size}`,
    className,
  );

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'default', size = 'default', className, type = 'button', children, ...props },
  ref,
) {
  return (
    <BaseButton
      ref={ref as React.Ref<HTMLElement>}
      type={type}
      className={buttonVariants({ variant, size, className })}
      {...props}
    >
      {children}
    </BaseButton>
  );
});
