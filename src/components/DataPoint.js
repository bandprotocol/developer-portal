import React from 'react'
import styled from 'styled-components'
import { Flex, Box, Text, Card, Image, Button, Heading } from 'rebass'
import colors from 'ui/colors'
import AutoDate from 'components/AutoDate'

const DataPointContainer = styled(Card).attrs(p => ({
  variant: 'primary',
  borderRadius: 10,
  p: 0,
}))`
  width: 100%;
  transition: all 250ms;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    box-shadow: ${colors.shadow.lightActive};
  }
`

const ExpandableCard = styled(Card)`
  max-height: 0;
  opacity: 0;

  ${p =>
    p.expand &&
    `
    transition: max-height 1500ms ease-out, opacity 500ms;
    max-height: 1000px;
    opacity: 1;
  `}
`

export default class DataPoint extends React.Component {
  state = { expand: false }

  onCopy() {}

  render() {
    const { children, label, k, v, updatedAt } = this.props
    return (
      <DataPointContainer mb="20px">
        <Flex
          onClick={() => this.setState({ expand: !this.state.expand })}
          px="28px"
          alignItems="center"
          style={{ height: '60px' }}
        >
          <Flex flex="0 0 130px" alignItems="center">
            <Text fontFamily="code" fontSize={13} color="light">
              <AutoDate>{updatedAt}</AutoDate>
            </Text>
          </Flex>
          <Box flex="1">
            <Text fontFamily="code" fontSize={15} fontWeight="700">
              {label}
            </Text>
          </Box>
          {v()}
        </Flex>
        {children && (
          <ExpandableCard
            borderTop="solid 1px #EDEDED"
            expand={this.state.expand}
          >
            {this.state.expand && children}
          </ExpandableCard>
        )}
      </DataPointContainer>
    )
  }
}
