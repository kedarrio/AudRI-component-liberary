export const colors = {
  primary: '#F58550',
  primaryHover: '#E5723D',
  primaryActive: '#D4611E',
  primarySubtle: '#FDF1EA',
  primaryMuted: '#FDDCC8',
  primaryMid: '#F5A07A',
  
  bg: '#FAFAF9',
  surface: '#FFFFFF',
  surfaceRaised: '#F5F4F2',
  surfaceOverlay: '#EFEFED',
  border: '#E8E6E2',
  borderStrong: '#D1CEC9',

  textPrimary: '#18171A',
  textSecondary: '#5C5A60',
  textTertiary: '#9A9898',
  textDisabled: '#C4C2BE',
  textInverse: '#FFFFFF',
  textBrand: '#F58550',

  success: {
    base: '#1E8E3E',
    subtle: '#E6F4EA',
    border: '#CEEAD6',
    text: '#137333',
  },
  warning: {
    base: '#F9AB00',
    subtle: '#FEF7E0',
    border: '#FEEFC3',
    text: '#915D05', // Deep amber for better brand consistency
  },
  danger: {
    base: '#D93025',
    subtle: '#FCE8E6',
    border: '#FAD2CF',
    text: '#A50E0E',
  },
  info: {
    base: '#1A73E8',
    subtle: '#E8F0FE',
    border: '#D2E3FC',
    text: '#174EA6',
  }
} as const;

export const spacing = {
  1: '2px',
  2: '4px',
  3: '6px',
  4: '8px',
  5: '10px',
  6: '12px',
  7: '14px',
  8: '16px',
  10: '20px',
  12: '24px',
  14: '28px',
  16: '32px',
  20: '40px',
  24: '48px',
  32: '64px',
  40: '80px',
  48: '96px',
  56: '112px',
} as const;

export const radius = {
  sm: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  full: '9999px',
} as const;

export const shadows = {
  xs: '0 1px 2px rgba(0,0,0,0.05)',
  sm: '0 1px 3px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.04)',
  md: '0 4px 8px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.04)',
  lg: '0 8px 24px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
  xl: '0 16px 48px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)',
  brand: '0 4px 16px rgba(245,133,80,0.24)',
} as const;

export const durations = {
  instant: '60ms',
  fast: '120ms',
  snappy: '250ms',
  normal: '300ms',
  moderate: '400ms',
  slow: '600ms',
  lazy: '800ms',
} as const;

export const easing = {
  standard: 'cubic-bezier(0.2, 0, 0, 1)',
  decelerate: 'cubic-bezier(0, 0, 0.2, 1)',
  accelerate: 'cubic-bezier(0.4, 0, 1, 1)',
  spring: 'cubic-bezier(0.32, 2.0, 0.44, 1)',
  outExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
  crisp: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  sharp: 'cubic-bezier(0.12, 0, 0.39, 0)',
} as const;
