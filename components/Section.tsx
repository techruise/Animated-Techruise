import { ReactNode } from 'react';
import Container from './Container';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

/** Consistent vertical rhythm for every section */
export default function Section({ id, children, className = '', containerClassName = '' }: SectionProps) {
  return (
    <section id={id} className={`py-24 md:py-32 relative ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
