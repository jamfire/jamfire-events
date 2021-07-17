import Typography from 'typography';

const typography = new Typography({
  includeNormalize: true,

  baseFontSize: '16px',
  baseLineHeight: 1.666,

  scaleRatio: 3,

  headerFontFamily: ['Work Sans', 'sans-serif'],
  headerColor: 'hsla(0,0%,0%,0.9)',
  headerWeight: '600',

  bodyFontFamily: ['Quattrocento Sans', 'sans-serif'],
  bodyColor: 'hsla(0,0%,0%,0.8)',
  bodyWeight: 400,
  boldWeight: 700,

  blockMarginBottom: 1,
});

export default typography;