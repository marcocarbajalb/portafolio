import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export default function Container({ className, children, ...rest }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-6xl px-6 sm:px-8', className)} {...rest}>
      {children}
    </div>
  );
}