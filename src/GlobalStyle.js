import { createGlobalStyle } from 'styled-components'
import colors from 'ui/colors'

export default createGlobalStyle`
  @font-face {
    font-family: 'Avenir';
    src: url('/fonts/Avenir.ttf');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Avenir';
    src: url('/fonts/Avenir-Oblique.ttf');
    font-style: italic;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Avenir';
    src: url('/fonts/Avenir-Medium.ttf');
    font-style: normal;
    font-weight: 500;
  }

  @font-face {
    font-family: 'Avenir';
    src: url('/fonts/Avenir-Bold.ttf');
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: 'Avenir';
    src: url('/fonts/Avenir-Black.ttf');
    font-style: normal;
    font-weight: 900;
  }

  @font-face {
    font-family: 'Avenir';
    src: url('/fonts/Avenir-Light.ttf');
    font-style: normal;
    font-weight: 300;
  }

  /** Reset */
  
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1.4;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }
  a,
  a:hover,
  a:active {
    color: inherit;
    text-decoration: none;
  }

  * {
    font-family: 'Avenir';
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* Firefox Scrollbar*/
    scrollbar-color: #9faed8 #bfc8e4;
    scrollbar-width: thin;
  }

  button {
    outline: none;
  }

  #root {
    // overflow-x: hidden;
  }

  #modal-root {
    position: relative;
    z-index: 999;
  }

  html, body {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    color: ${colors.text.normal};
    background-color: ${colors.background};
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }


  ::-webkit-scrollbar { width: 10px; height: 3px;}
  ::-webkit-scrollbar-button {  display: none; }
  ::-webkit-scrollbar-track {  background-color: #4d4e68; }
  ::-webkit-scrollbar-track-piece { background-color: #31314C; padding: 1px;}
  ::-webkit-scrollbar-thumb { background-color: #4d4e68; border-radius: 5px; transition: all 100ms; }
  ::-webkit-scrollbar-thumb:hover { background-color: #767790; }
  ::-webkit-scrollbar-corner { background-color: #31314C; }
  ::-webkit-resizer { background-color: #4d4e68;}
`
