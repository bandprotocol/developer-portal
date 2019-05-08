import colors from './colors'

export default {
  breakpoints: ['640px', '960px'],
  fontSizes: [14, 15, 16, 18, 20, 26, 32, 36],
  colors: {
    text: colors.text.normal,
    light: colors.text.light,
    white: colors.white,
    purple: colors.purple.normal,
    red: colors.red.normal,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: 'Avenir',
    code: 'Source Code Pro',
  },
  shadows: {
    large: colors.shadow.light,
  },
  buttons: {
    purple: {
      fontFamily: 'Avenir',
      fontWeight: 400,
      fontSize: '0.9em',
      padding: '0.6em 2em',
      cursor: 'pointer',
      color: '#fff',
      background: colors.gradient.purple2,
      transition: 'all 250ms',
      '&:hover': {
        background: 'linear-gradient(-45deg, #786bff -50%, #89c9ff 100%)',
      },
    },
    purple2: {
      fontFamily: 'Avenir',
      fontWeight: 400,
      fontSize: '0.9em',
      padding: '0.6em 2em',
      cursor: 'pointer',
      color: '#fff',
      background: colors.gradient.purple3,
      transition: 'all 250ms',
      '&:hover': {
        background: 'linear-gradient(-45deg, #786bff -50%, #89c9ff 100%)',
      },
    },
    red: {
      fontFamily: 'Avenir',
      fontWeight: 400,
      fontSize: '0.9em',
      padding: '0.6em 2em',
      cursor: 'pointer',
      color: '#fff',
      background: colors.gradient.red,
      boxShadow: colors.shadow.dark,
      transition: 'all 250ms',
      '&:hover': {
        background: 'linear-gradient(135deg,#fdc359 0%,#F6387B 150%)',
      },
    },
    green: {
      fontFamily: 'Avenir',
      fontWeight: 400,
      fontSize: '0.9em',
      padding: '0.6em 2em',
      cursor: 'pointer',
      color: '#fff',
      background: 'linear-gradient(135deg, #71C495 0%, #5EC9DC 100%)',
      boxShadow: colors.shadow.darkLarge,
      transition: 'all 250ms',
      '&:hover': {
        background: 'linear-gradient(135deg,#76e47e 0%,#5ed0dc 100%)',
      },
    },
  },
  cards: {
    primary: {
      background: colors.white,
      border: colors.border.light,
      boxShadow: colors.shadow.light,
    },
    outline: {
      background: colors.white,
      border: colors.border.light,
    },
    blue: {
      background: colors.gradient.purple3,
      boxShadow: colors.shadow.darkLarge,
    },
  },
}
