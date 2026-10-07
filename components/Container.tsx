import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/** Max-width 1280px, centred, responsive side padding */
export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div
      className={`w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}
