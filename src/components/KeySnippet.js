import React from 'react'
import { Flex, Text } from 'rebass'
import styled from 'styled-components'

const QueryBox = styled(Flex).attrs({
  alignItems: 'center',
  bg: '#6A6B81',
  px: '8px',
  ml: '5px',
  mr: '10px',
})`
  border-radius: 3px;
`

const Container = styled(Flex).attrs({
  flexDirection: 'row',
  py: '5px',
  pr: '20px',
  alignItems: 'center',
})`
  border-radius: 4px;
  border: 1px solid #e5e6f5;
  height: 40px;
  min-width: 400px;
`

export default class KeySnippet extends React.Component {
  state = {
    copied: false,
  }

  handleShowCopied(e) {
    console.warn('asjdajsdj')
    this.setState(
      {
        copied: true,
      },
      () => {
        setTimeout(
          this.setState({
            copied: false,
          }),
          500,
        )
      },
    )
    e.stopPropagation()
  }
  render() {
    const { keyOnChain } = this.props
    return (
      <Container>
        <QueryBox>
          <Text fontSize="14px" color="white" fontWeight="700">
            Key
          </Text>
        </QueryBox>
        <Text fontFamily="code" fontSize="14px" fontWeight="500">
          {keyOnChain}
        </Text>
        {/* <Text
          fontSize="14px"
          color="#9C9B9B"
          mx="4px"
          onClick={this.handleShowCopied.bind(this)}
        >
          {this.state.copied ? 'Copied' : 'Click to copy'}
        </Text> */}
      </Container>
    )
  }
}
