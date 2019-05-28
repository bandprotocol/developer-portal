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
import {
  LotteryCountByTypeFetcher,
  LotteryByTypeFetcher,
  LotteryProvidersByTypeTimeFetcher,
} from 'data/fetcher/LotteryFetcher'
import LotteryTable from 'components/table/LotteryTable'
import DatasetTab from 'components/DatasetTab'
import Loading from 'components/Loading'

import MmnSrc from 'image/dataset-megamillions.png'
import PwbSrc from 'image/dataset-powerball.png'

const pad = n => `0${n}`.slice(-2)

const Ball = styled(Text).attrs(p => ({
  mr: p.mr || 2,
  fontSize: 15,
  fontFamily: 'code',
  fontWeight: '700',
  color: 'white',
}))`
  height: 36px;
  width: 36px;
  line-height: 36px;
  background: ${p => (p.red ? colors.gradient.purple : '#6a6b81')};
  border-radius: 50%;
  text-align: center;
`

const renderDataPoints = (type, lotteries) => (
  <React.Fragment>
    <Flex>
      <Heading>{lotteries.length} Ðata Points</Heading>
      <Box ml="auto" mr={3}>
        <Text fontSize={26}>
          <ion-icon name="md-search" />
        </Text>
      </Box>
    </Flex>
    <Box mt={3}>
      <FlipMove>
        {lotteries.map(
          ({
            time,
            lastUpdate,
            redBall,
            whiteBall1,
            whiteBall2,
            whiteBall3,
            whiteBall4,
            whiteBall5,
            mul,
            keyOnChain,
          }) => (
            <DataPoint
              key={time.valueOf()}
              label={time.format('ddd, MMMM DD YYYY')}
              keyOnChain={keyOnChain}
              k={time}
              v={() => (
                <Flex alignItems="center" mr="-8px">
                  <Ball>{pad(whiteBall1)}</Ball>
                  <Ball>{pad(whiteBall2)}</Ball>
                  <Ball>{pad(whiteBall3)}</Ball>
                  <Ball>{pad(whiteBall4)}</Ball>
                  <Ball>{pad(whiteBall5)}</Ball>
                  <Ball>{pad(whiteBall5)}</Ball>
                  <Ball mr={3} red>
                    {pad(redBall)}
                  </Ball>
                  <Card
                    borderRight="solid 1px #DBDAFF"
                    style={{ height: '36px' }}
                    mr={3}
                  />
                  <Text
                    color="purple"
                    fontSize={16}
                    fontFamily="code"
                    fontWeight="900"
                  >
                    {mul}x
                  </Text>
                </Flex>
              )}
              updatedAt={lastUpdate}
            >
              <LotteryProvidersByTypeTimeFetcher
                type={type}
                time={time.format('YYYYMMDD')}
              >
                {({ fetching, data }) =>
                  fetching ? (
                    <Loading
                      height={214}
                      width={922}
                      rects={[
                        [24, 6, 922 - 48, 28, 8],
                        [24, 36 + 8 + 4, 922 - 48, 32 - 8, 8],
                        [24, 36 + 8 + 4 + 32, 922 - 48, 32 - 8, 8],
                        [24, 36 + 8 + 4 + 32 * 2, 922 - 48, 32 - 8, 8],
                        [24, 36 + 8 + 4 + 32 * 3, 922 - 48, 32 - 8, 8],
                        [24, 36 + 8 + 4 + 32 * 4, 922 - 48, 32 - 8, 8],
                      ]}
                    />
                  ) : (
                    <React.Fragment>
                      <LotteryTable mb={2} data={data} />
                    </React.Fragment>
                  )
                }
              </LotteryProvidersByTypeTimeFetcher>
            </DataPoint>
          ),
        )}
      </FlipMove>
    </Box>
  </React.Fragment>
)

export default class LotteryPage extends React.Component {
  state = { type: 'PWB' }

  render() {
    return (
      <PageStructure
        renderHeader={() => (
          <Flex alignItems="center">
            <Box>
              <Text fontSize="36px" fontWeight="900">
                Lottery
              </Text>
              <Text fontSize="20px" mt={3}>
                Get winning numbers of lotteries all around the world
              </Text>
            </Box>
          </Flex>
        )}
      >
        <PageContainer>
          <Flex mt="-100px" mx="-8px">
            <LotteryCountByTypeFetcher type="PWB">
              {({ fetching, data }) => (
                <DatasetTab
                  mx="8px"
                  title="Powerball"
                  subtitle={fetching ? 'Loading ...' : `${data} Rounds`}
                  src={PwbSrc}
                  active={this.state.type === 'PWB'}
                  onClick={() => this.setState({ type: 'PWB' })}
                />
              )}
            </LotteryCountByTypeFetcher>
            <LotteryCountByTypeFetcher type="PWB">
              {({ fetching, data }) => (
                <DatasetTab
                  mx="8px"
                  title="Mega Millions"
                  subtitle={fetching ? 'Loading ...' : `${data} Rounds`}
                  src={MmnSrc}
                  active={this.state.type === 'MMN'}
                  onClick={() => this.setState({ type: 'MMN' })}
                />
              )}
            </LotteryCountByTypeFetcher>
          </Flex>
          <Box mt="24px">
            <Snippet dataset="lottery" />
          </Box>
          <Box mt={5}>
            <LotteryByTypeFetcher type={this.state.type}>
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
                  renderDataPoints(this.state.type, data)
                )
              }
            </LotteryByTypeFetcher>
          </Box>
        </PageContainer>
      </PageStructure>
    )
  }
}
