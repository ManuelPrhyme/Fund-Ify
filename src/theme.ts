// Theme configuration with colors from the provided image
export const theme = {
  colors: {
    primary: {
      DEFAULT: '#FF7A22',
      light: '#FF9A52',
      dark: '#E05E00',
    },
    secondary: {
      DEFAULT: '#53234F',
      light: '#6D3769',
      dark: '#3B1937',
    },
    tertiary: {
      DEFAULT: '#BAD7E9',
      light: '#D3E6F2',
      dark: '#94BDD7',
    },
    neutral: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
    success: '#4CAF50',
    warning: '#FFC107',
    error: '#F44336',
  },
  spacing: {
    // 8px spacing system
    0: '0px',
    1: '8px',
    2: '16px',
    3: '24px',
    4: '32px',
    5: '40px',
    6: '48px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  lineHeights: {
    heading: '120%',
    body: '150%',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  // Animation durations
  animation: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
};

export default theme;