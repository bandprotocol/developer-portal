import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import Navbar from 'components/Navbar'
import PageContainer from 'components/PageContainer'
import colors from 'ui/colors'

const Header = styled(Box)`
  background: ${colors.gradient.purple};
  color: ${colors.white};
`

export default ({ children, renderHeader = () => null }) => (
  <Box>
    <Header>
      <PageContainer>
        <Navbar />
        <Box mt="60px" mb="85px">
          {renderHeader()}
        </Box>
      </PageContainer>
    </Header>
    {children}
  </Box>
)
