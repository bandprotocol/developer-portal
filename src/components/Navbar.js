import React from 'react'
import { Flex, Text, Image } from 'rebass'
import Link from 'components/Link'
import colors from 'ui/colors'
import LogoSrc from 'image/logo.svg'

const NavLink = ({ children, ...props }) => (
  <Text ml={4} fontSize="15px" fontWeight="700">
    <Link hover="#ffffff" {...props}>
      {children}
    </Link>
  </Text>
)

export default props => (
  <Flex
    height="40px"
    alignItems="center"
    style={{
      color: colors.white,
      letterSpacing: '0.05em',
      textShadow: '0 4px 12px rgba(0,0,0,0.1)',
    }}
  >
    <Link to="/" style={{ height: '32px', display: 'block' }}>
      <Image src={LogoSrc} height="36px" />
    </Link>
    <Flex ml="auto">
      <NavLink href="https://bandprotocol.com" target="_blank">
        Band Protocol
      </NavLink>
      <NavLink href="https://developer.bandprotocol.com" target="_blank">
        Doc
      </NavLink>
      <NavLink href="https://github.com/bandprotocol" target="_blank">
        Github
      </NavLink>
    </Flex>
  </Flex>
)
