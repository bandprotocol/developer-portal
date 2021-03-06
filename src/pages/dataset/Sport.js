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
  SportCountByTypeFetcher,
  SportByTypeFetcher,
  SportProvidersByTypeTimeTeamFetcher,
} from 'data/fetcher/SportFetcher'
import SportTable from 'components/table/SportTable'
import DatasetTab from 'components/DatasetTab'
import Loading from 'components/Loading'

import SoccerSrc from 'image/dataset-soccer.png'
import BasketballSrc from 'image/dataset-basketball.png'
import AmericanFootballSrc from 'image/dataset-americanfootball.png'
import BaseballSrc from 'image/dataset-baseball.png'

const renderDataPoints = (type, matches) => (
  <React.Fragment>
    <Flex>
      <Heading>{matches.length} Ðata Points</Heading>
      <Box ml="auto" mr={3}>
        <Text fontSize={26}>
          <ion-icon name="md-search" />
        </Text>
      </Box>
    </Flex>
    <Box mt={3}>
      <FlipMove>
        {matches.map(
          ({
            lastUpdate,
            time,
            hasStartTime,
            home,
            away,
            scoreHome,
            scoreAway,
            keyOnChain,
          }) => (
            <DataPoint
              key={time.valueOf()}
              keyOnChain={keyOnChain}
              label={`${time.format(
                hasStartTime ? 'YYYY/MM/DD hh:mm a' : 'YYYY/MM/DD',
              )}: ${home} - ${away}`}
              k={time}
              v={() => (
                <Flex mr="-20px">
                  <Card flex="0 0 auto" py={2} px={3}>
                    <Text
                      ml="auto"
                      fontFamily="code"
                      fontSize={15}
                      fontWeight="bold"
                      textAlign="right"
                      style={{ width: 30 }}
                    >
                      {home}
                    </Text>
                  </Card>
                  <Card
                    flex="0 0 auto"
                    bg="#6A6B81"
                    px={1}
                    borderRadius="3px"
                    style={{ lineHeight: '36px' }}
                  >
                    <Text
                      fontFamily="code"
                      fontSize={14}
                      fontWeight="bold"
                      textAlign="center"
                      color="white"
                      style={{ width: 88 }}
                    >
                      {scoreHome} - {scoreAway}
                    </Text>
                  </Card>
                  <Card flex="0 0 auto" py={2} px={3}>
                    <Text
                      ml="auto"
                      fontFamily="code"
                      fontSize={15}
                      fontWeight="bold"
                      textAlign="left"
                      style={{ width: 30 }}
                    >
                      {away}
                    </Text>
                  </Card>
                </Flex>
              )}
              updatedAt={lastUpdate}
            >
              <SportProvidersByTypeTimeTeamFetcher
                type={type}
                time={time.format('YYYYMMDD')}
                home={home}
                away={away}
                startTime={hasStartTime ? time.format('HHmm') : '9999'}
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
                      <SportTable mb={2} data={data} />
                    </React.Fragment>
                  )
                }
              </SportProvidersByTypeTimeTeamFetcher>
            </DataPoint>
          ),
        )}
      </FlipMove>
    </Box>
  </React.Fragment>
)

export default class SportPage extends React.Component {
  state = { type: 'EPL' }

  render() {
    return (
      <PageStructure
        renderHeader={() => (
          <Flex alignItems="center">
            <Box>
              <Text fontSize="36px" fontWeight="900">
                Sport Events
              </Text>
              <Text fontSize="20px" mt={3}>
                Accurate live scores from soccer, basketball, American football
                and baseball.
              </Text>
            </Box>
          </Flex>
        )}
      >
        <PageContainer>
          <Flex mt="-100px" mx="-8px">
            <SportCountByTypeFetcher type="EPL">
              {({ fetching, data }) => (
                <DatasetTab
                  mx="8px"
                  title="Soccer"
                  subtitle={fetching ? 'Loading ...' : `${data} Matches`}
                  src={SoccerSrc}
                  active={this.state.type === 'EPL'}
                  onClick={() => this.setState({ type: 'EPL' })}
                />
              )}
            </SportCountByTypeFetcher>
            <SportCountByTypeFetcher type="NBA">
              {({ fetching, data }) => (
                <DatasetTab
                  mx="8px"
                  title="Basketball"
                  subtitle={fetching ? 'Loading ...' : `${data} Matches`}
                  src={BasketballSrc}
                  active={this.state.type === 'NBA'}
                  onClick={() => this.setState({ type: 'NBA' })}
                />
              )}
            </SportCountByTypeFetcher>
            <SportCountByTypeFetcher type="NFL">
              {({ fetching, data }) => (
                <DatasetTab
                  mx="8px"
                  title="American Football"
                  subtitle={fetching ? 'Loading ...' : `${data} Matches`}
                  src={AmericanFootballSrc}
                  active={this.state.type === 'NFL'}
                  onClick={() => this.setState({ type: 'NFL' })}
                />
              )}
            </SportCountByTypeFetcher>
            <SportCountByTypeFetcher type="MLB">
              {({ fetching, data }) => (
                <DatasetTab
                  mx="8px"
                  title="Baseball"
                  subtitle={fetching ? 'Loading ...' : `${data} Matches`}
                  src={BaseballSrc}
                  active={this.state.type === 'MLB'}
                  onClick={() => this.setState({ type: 'MLB' })}
                />
              )}
            </SportCountByTypeFetcher>
          </Flex>
          <Box mt="24px">
            <Snippet dataset="sport" />
          </Box>
          <Box mt={5}>
            <SportByTypeFetcher type={this.state.type}>
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
            </SportByTypeFetcher>
          </Box>
        </PageContainer>
      </PageStructure>
    )
  }
}
