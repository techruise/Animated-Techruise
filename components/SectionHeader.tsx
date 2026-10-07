import { ReactNode } from 'react';

interface SectionHeaderProps {
  label?: string;
  labelColor?: string;
  title: ReactNode;
  description?: string;
  centered?: boolean;
  maxDescWidth?: string;
}

/** Reusable label → heading → description block used in every section */
export default function SectionHeader({
  label,
  labelColor = 'text-cyan-400',
  title,
  description,
  centered = true,
  maxDescWidth = 'max-w-2xl',
}: SectionHeaderProps) {
  return (
    <div className={`mb-14 md:mb-18 ${centered ? 'text-center' : ''}`}>
      {label && (
        <p className={`section-label ${labelColor}`}>{label}</p>
      )}
      <h2 className="text-h2 font-display text-white mt-1 mb-4">{title}</h2>
      {description && (
        <p
          className={`text-body-lg text-gray-400 ${centered ? `mx-auto ${maxDescWidth}` : maxDescWidth}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
