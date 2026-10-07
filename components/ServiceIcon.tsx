import React from 'react';

interface IconProps {
  name: string;
  color?: string;
  size?: number;
}

export default function ServiceIcon({ name, color = '#7C3AED', size = 32 }: IconProps) {
  const icons: Record<string, React.ReactNode> = {
    strategy: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <path d="M16 4L28 10V22L16 28L4 22V10L16 4Z" stroke={color} strokeWidth="1.5" fill="none"/>
        <path d="M16 4V28M4 10L28 22M28 10L4 22" stroke={color} strokeWidth="1" opacity="0.4"/>
        <circle cx="16" cy="16" r="3" fill={color}/>
      </svg>
    ),
    code: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <path d="M9 11L4 16L9 21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 11L28 16L23 21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 7L13 25" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    automation: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="10" stroke={color} strokeWidth="1.5"/>
        <path d="M12 13L16 16L20 13" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 16V21" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="8" cy="8" r="2" fill={color} opacity="0.6"/>
        <circle cx="24" cy="8" r="2" fill={color} opacity="0.6"/>
        <circle cx="16" cy="4" r="2" fill={color} opacity="0.6"/>
        <path d="M8 8L12 13M24 8L20 13M16 4V11" stroke={color} strokeWidth="1" strokeDasharray="2 2" opacity="0.4"/>
      </svg>
    ),
    chat: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <path d="M4 6C4 4.9 4.9 4 6 4H26C27.1 4 28 4.9 28 6V20C28 21.1 27.1 22 26 22H18L12 28V22H6C4.9 22 4 21.1 4 20V6Z" stroke={color} strokeWidth="1.5" fill="none"/>
        <path d="M9 12H23M9 16H17" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    generative: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <path d="M16 4L20 14H30L22 20L25 30L16 24L7 30L10 20L2 14H12L16 4Z" stroke={color} strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    analytics: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <path d="M3 24L10 16L16 19L22 10L29 15" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 28H29" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <circle cx="10" cy="16" r="2" fill={color}/>
        <circle cx="16" cy="19" r="2" fill={color}/>
        <circle cx="22" cy="10" r="2" fill={color}/>
      </svg>
    ),
    vision: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <ellipse cx="16" cy="16" rx="13" ry="7" stroke={color} strokeWidth="1.5"/>
        <circle cx="16" cy="16" r="5" stroke={color} strokeWidth="1.5"/>
        <circle cx="16" cy="16" r="2" fill={color}/>
        <path d="M8 8L24 24M24 8L8 24" stroke={color} strokeWidth="1" opacity="0.2"/>
      </svg>
    ),
    cloud: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <path d="M8 22C6 22 4 20.2 4 18C4 16 5.6 14.2 7.8 14C8.2 11.2 10.8 9 14 9C16 9 17.8 9.8 19 11.2C19.8 10.4 20.8 10 22 10C24.2 10 26 11.8 26 14C27.2 14.4 28 15.6 28 17C28 18.6 26.8 20 25 20H8V22Z" stroke={color} strokeWidth="1.5" fill="none"/>
        <path d="M16 18V28M12 24L16 28L20 24" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    product: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="18" rx="2" stroke={color} strokeWidth="1.5"/>
        <path d="M4 8H28" stroke={color} strokeWidth="1" opacity="0.4"/>
        <circle cx="7" cy="6" r="0.8" fill={color}/>
        <circle cx="10" cy="6" r="0.8" fill={color}/>
        <circle cx="13" cy="6" r="0.8" fill={color}/>
        <path d="M4 22H28V26C28 27.1 27.1 28 26 28H6C4.9 28 4 27.1 4 26V22Z" stroke={color} strokeWidth="1.5"/>
        <path d="M9 14H16M9 11H23M9 17H20" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    security: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <path d="M16 4L6 8V16C6 21.5 10.4 26.6 16 28C21.6 26.6 26 21.5 26 16V8L16 4Z" stroke={color} strokeWidth="1.5" fill="none"/>
        <path d="M11 16L14 19L21 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  };

  return <>{icons[name] || icons.strategy}</>;
}
