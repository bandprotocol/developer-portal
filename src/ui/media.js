export default {
  mobile: '@media only screen and (max-width: 640px)',
  tablet: '@media only screen and (max-width: 960px)',
}

export const isMobile = () => window.innerWidth <= 640
