module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      transparent: 'transparent',
      peppermint: "#54BAB3",
      darkteal: "#308278",
      brightteal: "#BAE3E0",
      black: '#000',
      coalblack: "#1A262E",
      white: '#fff',
      alertred: "#B40000",
      coalgray: "#272A33",
      textgray: "#40434D",
      normalgray: "#40434D",
      midtonegray: "#6D6E74",
      lightgray: "#D8DEE5",
      lighttonegray: "#D8DEE5",
      gold: "#87764E",
      eveninggold: "#6C5E3E",
      arcticsilver: "#EAEFF5",
    },
    spacing: {
      px: '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7' : '1.75rem',
      '8': '2rem',
      '9' : '2.25rem',
      '10': '2.5rem',
      '11' : '2.75rem',
      '12': '3rem',
      '13': '3.25rem',
      '14': '3.5rem',
      '15' : '3.75rem',
      '16': '4rem',
      '17' : '4.25rem',
      '18' : '4.5rem',
      '19' : '4.75rem',
      '20': '5rem',
      '22' : '5.625rem',
      '24': '6rem',
      '26': '6.5rem',
      '28': '7rem',
      '30': '7.5rem',
      '32': '8rem',
      '34': '8.5rem',
      '36': '9rem',
      '38': '9.5rem',
      '40': '10rem',
      '44': '11rem',
      '48': '12rem',
      '50' : '13rem',
      '56': '14rem',
      '60' : '15rem',
      '64': '16rem',
      '68' : '17rem',
      '72' : '18rem',
      '75' : '18.75rem',
      '80' : '20rem',
      '93' : '375px',
      '100': '25rem',
      '120' : '30rem',
      '130' : '32.5rem',
      '160' : '40rem',
      '180' : '45rem',
      '1/2' : '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '1/5' : '20%',
      '2/5' : '40%',
      '1/8' : '12.5%',
      '1/10' : '10%',
      '1/20' : '5%',
      '-1/2' : '-50%',
      '-1/4': '-25%',
      '-1/5' : '-20%',
      '-1/8' : '-12.5%',
      '-1/10' : '-10%',
      '-1/20' : '-5%',
      'gutter' : '20px',
      'full' : '100%',
      
    },
    backgroundColor: theme => theme('colors'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      fill: "100% 100%",
    },
    borderColor: theme => ({
      ...theme('colors'),
      default: theme('colors.gray.300', 'currentColor'),
    }),
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      default: '0.25rem',
      lg: '0.5rem',
      full: '9999px',
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px',
    },
    boxShadow: {
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
    },
    container: {},
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
    },
    fill: {
      current: 'currentColor',
    },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexGrow: {
      '0': '0',
      default: '1',
    },
    flexShrink: {
      '0': '0',
      default: '1',
    },
    fontFamily: {
      sans: [
        "Tiempos Headline",
        "Tiempos Text",
        "Roboto Condensed"
      ],
      serif: [
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
      body: [
        "Tiempos Text"
      ],
    },
    fontSize: {
      xxs: '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2rem',
      '5xl': '2.5rem',
      '5xl2': '3rem',
      '6xl': '4rem',
      '7xl': '6rem',
      '8xl': '8rem',
      '8xl2': '8.5rem',
    },
    fontWeight: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),
    inset: {
      '0': '0',
      '1/1' : '100%',
      "1/2" : "50%",
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '1/5': '20%',
      '2/5' : '40%',
      '3/5' : '60%',
      '4/5' : '80%',
      '1/8': '12.5%',
      '1/10' : '10%',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.85rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '14' : '3.5rem',
      '15' : '3.75rem',
      '16' : '4rem',
      '18' : '4.5rem',
      '20': '5rem',
      '22' : '5.625rem',
      '24': '6rem',
      '30': '7.5rem',
      '32': '8rem',
      '34': '8.5rem',
      '36': '9rem',
      '38' : '9.5rem',
      '40': '10rem',
      '44': '11rem',
      '48': '12rem',
      "-1/2" : "-50%",
      '-1/3': '-33.333333%',
      '-2/3': '-66.666667%',
      '-1/4': '-25%',
      '-1/5': '-20%',
      '-1/8': '-12.5%',
      '-1/10' : '-10%',
      '-1': '-0.25rem',
      '-2': '-0.5rem',
      '-3': '-0.75rem',
      '-4': '-1rem',
      '-5': '-1.25rem',
      '-6': '-1.5rem',
      '-8': '-2rem',
      '-10': '-2.5rem',
      '-12': '-3rem',
      '-14' : '-3.5rem',
      '-16': '-4rem',
      '-17': '-4.25rem',
      '-18': '-4.5rem',
      '-19': '-4.75rem',
      '-20': '-5rem',
      '-24': '-6rem',
      '-30': '-7.5rem',
      '-32': '-8rem',
      '-34': '-8.5rem',
      '-36': '-9rem',
      '-40' : '-10rem',
      '-44': '-11rem',
      '-48': '-12rem',
      '-52': '-13rem',
      auto: 'auto',
      'full' : '100%',
      '100vw': '100vw',
      '100vh': '100vh',
      'gutter' : '29px',
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeight: {
      negative: '0.8',
      none: '1',
      tight: '1.31',
      snug: '1.38',
      normal: '1.5',
      relaxed: '1.8',
      loose: '2'
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    maxHeight: {
      none: 'none',
      full: '100%',
      screen: '100vh',
    },
    maxWidth: {
      none: 'none',
      xxs: '350px',
      xxs2: '380px',
      xxs3: '280px',
      xs: '450px',
      sm: '540px',
      sm2: '500px',
      md: '760px',
      md2: '818px',
      lg: '960px',
      xl: '1120px',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      full: '100%',
    },
    minHeight: {
      auto : 'auto',
      '0': '0',
      full: '100%',
      screen: '100vh',

    },
    minWidth: {
      auto: 'auto',
      '0': '0',
      '100px' : '100px',
      '108px' : '108px',
      '128px' : '128px',
      full: '100%',
    },
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    opacity: {
      '0': '0',
      '25': '0.25',
      '50': '0.5',
      '75': '0.75',
      '100': '1',
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
    },
    padding: theme => theme('spacing'),
    placeholderColor: theme => theme('colors'),
    stroke: {
      current: 'currentColor',
    },
    textColor: theme => theme('colors'),
    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
      screen: '100vw',
    }),
    zIndex: {
      auto: 'auto',
      "-1" : "-1",
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50',
    },
    transform: { // defaults to this value
      'none': 'none',
    },
    transformOrigin: { // defaults to these values
      't': 'top',
      'tr': 'top right',
      'r': 'right',
      'br': 'bottom right',
      'b': 'bottom',
      'bl': 'bottom left',
      'l': 'left',
      'tl': 'top left',
    },
    translate: { // defaults to {}
      '-1/2' : "-50%",
      'center' : ['-50%', '-50%'], 
      '1/2': '50%',
      'full': '100%',
      'right-up': ['100%', '-100%'],
      '3d': ['40px', '-60px', '-130px'],
    },
    scale: { // defaults to {}
      '90': '0.9',
      '100': '1',
      '110': '1.1',
      '-100': '-1',
      'stretched-x': ['2', '0.5'],
      'stretched-y': ['0.5', '2'],
      '3d': ['0.5', '1', '2'],
    },
    rotate: { // defaults to {}
      '90': '90deg',
      '180': '180deg',
      '270': '270deg',
      '3d': ['0', '1', '0.5', '45deg'],
    },
    skew: { // defaults to {}
      '-5': '-5deg',
      '5': '5deg',
    },
    perspective: { // defaults to {}
      'none': 'none',
      '250': '250px',
      '500': '500px',
      '750': '750px',
      '1000': '1000px',
    },
    perspectiveOrigin: { // defaults to these values
      't': 'top',
      'tr': 'top right',
      'r': 'right',
      'br': 'bottom right',
      'b': 'bottom',
      'bl': 'bottom left',
      'l': 'left',
      'tl': 'top left',
    },
  },
  variants: {
    accessibility: ['responsive', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    cursor: ['responsive'],
    display: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'hover', 'focus'],
    order: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    placeholderColor: ['responsive', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    stroke: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive'],
    transform: ['responsive'],
    transformOrigin: ['responsive'],
    translate: ['responsive'],
    scale: ['responsive'],
    rotate: ['responsive'],
    skew: ['responsive'],
    perspective: ['responsive'],
    perspectiveOrigin: ['responsive'],
    transformStyle: ['responsive'],
    backfaceVisibility: ['responsive'],
    transformBox: ['responsive'],
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require('tailwind-bootstrap-grid')({
      gridColumns: 12,
      gridGutterWidth: '40px',
      containerMaxWidths : { sm: '540px', md: '720px', lg: '960px', xl: '1344px' },

    }),
    require('tailwindcss-transforms')({
      '3d': false, // defaults to false
    }),
    require('@tailwindcss/custom-forms'),
  ],
}
