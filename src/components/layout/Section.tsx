import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import Container from './Container';

type SectionProps = HTMLAttributes<HTMLElement>;

export default function Section({ className, children, ...rest }: SectionProps) {
  return (
    <section className={cn('scroll-mt-24 py-20 md:py-32', className)} {...rest}>
      <Container>{children}</Container>
    </section>
  );
}