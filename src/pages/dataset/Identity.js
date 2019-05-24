import React from 'react'
import colors from 'ui/colors'
import styled from 'styled-components'
import moment from 'moment'
import { Flex, Box, Text, Card, Image, Button, Heading } from 'rebass'
import PageStructure from 'components/PageStructure'
import PageContainer from 'components/PageContainer'
import Snippet from 'components/Snippet'
import DataPoint from 'components/DataPoint'
import FlipMove from 'react-flip-move'
import { IdentityFetcher } from 'data/fetcher/IdentityFetcher'
import Loading from 'components/Loading'
import { ModalConsumer } from 'context/modal'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'
import IdentityIconSrc from 'image/icon-identity.svg'

const renderDataPoints = persons => (
  <React.Fragment>
    <Flex>
      <Heading>{persons.length} Identities</Heading>
      <Box ml="auto" mr={3}>
        <Text fontSize={26}>
          <ion-icon name="md-search" />
        </Text>
      </Box>
    </Flex>
    <Box mt={3}>
      <FlipMove>
        {persons.map(({ timestamp, userAddress, keyOnChain }) => (
          <DataPoint
            key={userAddress}
            keyOnChain={userAddress}
            label={userAddress}
            k={timestamp}
            v={() => <div />}
            Logo={() => (
              <Flex alignItems="center" mr={2}>
                <Jazzicon
                  diameter={30}
                  seed={jsNumberForAddress(userAddress)}
                />
              </Flex>
            )}
            updatedAt={timestamp}
          />
        ))}
      </FlipMove>
    </Box>
  </React.Fragment>
)

class Identity extends React.Component {
  render() {
    return (
      <PageStructure
        renderHeader={() => (
          <Flex alignItems="center" justifyContent="space-between">
            <Box>
              <Text fontSize="36px" fontWeight="900">
                Identity Verification
              </Text>
              <Text fontSize="20px" mt={3}>
                Prevent Sybil attack on your DApps via Band Identity Service
              </Text>
            </Box>
            <Button
              width="240px"
              py="14px"
              onClick={() => this.props.setModal('apply/identity')}
              style={{
                cursor: 'pointer',
                backgroundImage: 'linear-gradient(103deg, #fd8f59, #f6387b)',
              }}
            >
              <Flex
                flexDirection="row"
                alignItems="center"
                width="100%"
                justifyContent="space-between"
              >
                <Text fontSize="16px" fontWeight="900" color="white">
                  Apply for an Identity
                </Text>
                <Image src={IdentityIconSrc} />
              </Flex>
            </Button>
          </Flex>
        )}
      >
        <PageContainer>
          <Box mt="-100px">
            <Snippet dataset="identity" />
          </Box>
          <Box mt={5}>
            {/* TODO */}
            <IdentityFetcher>
              {({ fetching, data }) =>
                fetching ? (
                  <Loading
                    height={281}
                    width={924}
                    rects={[
                      [0, 0, 120, 32],
                      [880, 0, 32, 32],
                      [0, 52, 924, 61],
                      [0, 135, 924, 61],
                      [0, 218, 924, 61],
                    ]}
                  />
                ) : (
                  renderDataPoints(data)
                )
              }
            </IdentityFetcher>
          </Box>
        </PageContainer>
      </PageStructure>
    )
  }
}

export default props => (
  <ModalConsumer>
    {({ setModal }) => <Identity setModal={setModal} {...props} />}
  </ModalConsumer>
)
