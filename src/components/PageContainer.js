import { Box } from 'rebass'
import styled from 'styled-components'
import media from 'ui/media'

const PageContainer = styled(Box)`
  margin: 0 auto;
  flex: 1;
  width: 100%;

  ${p =>
    !p.fullWidth &&
    `
    padding: 32px 18px;
    max-width: 960px;

    ${media.mobile} {
      padding: 24px 12px;
    }
  `}
`

export default PageContainer
