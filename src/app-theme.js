import chroma from 'chroma-js';

const colors = {
  primary: '#03A9F4',
  blue: '#435769',
  lightBlue: '#607D8B',
  lightestBlue: '#F7FCFE',
  red: '#F44336',
  lightRed: '#F48794',
  orange: '#FF9800',
  primaryGlow: 'rgba(3, 169, 244, .15)',
  background: '#F2F2F2',
  white: '#fff',
  gray100: '#FAFAFA',
  gray200: '#F2F2F2',
  gray300: '#E5E5E5',
  gray400: '#C4C4C4',
  gray500: '#A7A7A7',
  gray600: '#808080',
  gray700: '#4F4F4F',
  gray800: '#010202',
  black: '#000',
};

const breakpoints = {
  tabletPortrait: `@media (min-width: 600px)`,
  tabletLandscape: `@media (min-width: 900px)`,
  desktop: `@media (min-width: 1200px)`,
};

const buttonTypes = {
  primary: {
    backgroundColor: colors.primary,
    hoverBackgroundColor: chroma(colors.primary)
      .darken()
      .hex(),
    color: colors.white,
    hoverColor: colors.white,
    borderColor: 'transparent',
    minWidth: '160px',
  },
  plain: {
    backgroundColor: 'transparent',
    hoverBackgroundColor: 'transparent',
    color: colors.gray500,
    hoverColor: chroma(colors.gray500)
      .darken()
      .hex(),
    borderColor: 'transparent',
    minWidth: 0,
  },
  plainLink: {
    backgroundColor: 'transparent',
    hoverBackgroundColor: 'transparent',
    color: colors.primary,
    hoverColor: chroma(colors.primary)
      .darken()
      .hex(),
    borderColor: 'transparent',
    minWidth: 0,
  },
  plainDelete: {
    backgroundColor: 'transparent',
    hoverBackgroundColor: 'transparent',
    color: colors.red,
    hoverColor: chroma(colors.red)
      .darken()
      .hex(),
    borderColor: 'transparent',
    minWidth: 0,
  },
  icon: {
    backgroundColor: 'transparent',
    hoverBackgroundColor: 'transparent',
    color: colors.gray400,
    hoverColor: chroma(colors.gray400)
      .darken()
      .hex(),
    borderColor: 'transparent',
    minWidth: 0,
  },
};

const typography = {
  sans: '"Karla", "Helvetica Neue", sans-serif',
  mono: '"Source Code Pro", monospace',
  headingColor: colors.gray600,
  bodyColor: colors.gray800,
  anchorColor: colors.primary,
  fontBase: '1rem',
};

const globalText = {};

const globalContainer = {
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
};

const globalBorderRadius = '3px';

const globalBoxShadow = '0 2px 4px 0 rgba(0,0,0,0.15)';

const globalPadding = {
  padding: '12px',
  [breakpoints.tabletPortrait]: {
    padding: '16px',
  },
  [breakpoints.tabletLandscape]: {
    padding: '20px',
  },
  [breakpoints.desktop]: {
    padding: '32px',
  },
};

export default {
  breakpoints,
  buttonTypes,
  colors,
  typography,
  globalText,
  globalContainer,
  globalBorderRadius,
  globalBoxShadow,
  globalPadding,
};
