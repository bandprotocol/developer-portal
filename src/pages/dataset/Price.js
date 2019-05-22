import React from 'react'
import colors from 'ui/colors'
import styled from 'styled-components'
import moment from 'moment'
import { Flex, Box, Text, Card, Image, Button, Heading } from 'rebass'
import PageStructure from 'components/PageStructure'
import PageContainer from 'components/PageContainer'
import Snippet from 'components/Snippet'
import PriceGraph from 'components/PriceGraph'
import DataPoint from 'components/DataPoint'
import FlipMove from 'react-flip-move'
import DatasetTab from 'components/DatasetTab'
import {
  PriceCountByTypeFetcher,
  CurrentPriceFetcher,
  PricePairFetcher,
  formatPricePairsForGraph,
} from 'data/fetcher/PriceFetcher'
import PriceTable from 'components/table/PriceTable'
import Loading from 'components/Loading'

import PriceHeaderSrc from 'image/dataset-price-header.svg'
import HeaderBGSrc from 'image/header-bg.svg'

// Image
import SoccerSrc from 'image/dataset-fiat.jpg'
import BasketballSrc from 'image/dataset-commodity.jpg'
import AmericanFootballSrc from 'image/dataset-stock.jpg'
import BaseballSrc from 'image/dataset-crypto.jpg'

const renderDataPoints = pairs => (
  <React.Fragment>
    <Flex>
      <Heading>{pairs.length} Ðata Points</Heading>
      <Box ml="auto" mr={3}>
        <Text fontSize={26}>
          <ion-icon name="md-search" />
        </Text>
      </Box>
    </Flex>
    <Box mt={3}>
      <FlipMove>
        {pairs.map(({ pair, value, lastUpdate }) => (
          <DataPoint
            key={pair}
            label={pair}
            k={pair}
            v={() => (
              <Card
                flex="0 0 auto"
                bg={colors.grey.dark}
                py={2}
                px={3}
                borderRadius="4px"
              >
                <Text
                  ml="auto"
                  fontFamily="code"
                  fontSize={14}
                  fontWeight="bold"
                  color="white"
                >
                  {value.toLocaleString('en-US', {
                    currency: 'USD',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </Text>
              </Card>
            )}
            updatedAt={lastUpdate}
          >
            <PricePairFetcher pair={pair} from={moment(1556150400000)}>
              {({ fetching, data }) =>
                fetching ? (
                  <Loading
                    height={514}
                    width={922}
                    rects={[
                      [24, 24, 922 - 48, 300 - 48],
                      [24, 300, 922 - 48, 36, 8],
                      [24, 300 + 36 + 8 + 4, 922 - 48, 32 - 8, 8],
                      [24, 300 + 36 + 8 + 4 + 32, 922 - 48, 32 - 8, 8],
                      [24, 300 + 36 + 8 + 4 + 32 * 2, 922 - 48, 32 - 8, 8],
                      [24, 300 + 36 + 8 + 4 + 32 * 3, 922 - 48, 32 - 8, 8],
                      [24, 300 + 36 + 8 + 4 + 32 * 4, 922 - 48, 32 - 8, 8],
                    ]}
                  />
                ) : (
                  <React.Fragment>
                    <PriceGraph data={formatPricePairsForGraph(data)} />
                    <PriceTable mb={2} data={data} />
                  </React.Fragment>
                )
              }
            </PricePairFetcher>
          </DataPoint>
        ))}
      </FlipMove>
    </Box>
  </React.Fragment>
)

export default class PricePage extends React.Component {
  state = { type: 'CRYPTO' }

  render() {
    return (
      <PageStructure
        renderHeader={() => (
          <Flex alignItems="center">
            <Box flex={1}>
              <Text fontSize="36px" fontWeight="900">
                Price Feed
              </Text>
              <Text fontSize="20px" mt={3}>
                Get current prices of any trading currency pairs
              </Text>
            </Box>
            <Image src={PriceHeaderSrc} height="110px" mb="-20px" />
          </Flex>
        )}
      >
        <PageContainer>
          <Flex mt="-100px" mx="-8px">
            <PriceCountByTypeFetcher type="CRYPTO">
              {({ fetching, data }) => (
                <DatasetTab
                  mx="8px"
                  title="Cryptocurrency"
                  subtitle={fetching ? 'Loading ...' : `${data} Pairs`}
                  src={BaseballSrc}
                  active={this.state.type === 'CRYPTO'}
                  onClick={() => this.setState({ type: 'CRYPTO' })}
                />
              )}
            </PriceCountByTypeFetcher>
            <PriceCountByTypeFetcher type="FX">
              {({ fetching, data }) => (
                <DatasetTab
                  mx="8px"
                  title="Fiat Currency"
                  subtitle={fetching ? 'Loading ...' : `${data} Pairs`}
                  src={SoccerSrc}
                  active={this.state.type === 'FX'}
                  onClick={() => this.setState({ type: 'FX' })}
                />
              )}
            </PriceCountByTypeFetcher>
            <PriceCountByTypeFetcher type="COMMODITY">
              {({ fetching, data }) => (
                <DatasetTab
                  mx="8px"
                  title="Commodity"
                  subtitle={fetching ? 'Loading ...' : `${data} Pairs`}
                  src={BasketballSrc}
                  active={this.state.type === 'COMMODITY'}
                  onClick={() => this.setState({ type: 'COMMODITY' })}
                />
              )}
            </PriceCountByTypeFetcher>
            <PriceCountByTypeFetcher type="STOCK">
              {({ fetching, data }) => (
                <DatasetTab
                  mx="8px"
                  title="Stock"
                  subtitle={fetching ? 'Loading ...' : `${data} Pairs`}
                  src={AmericanFootballSrc}
                  active={this.state.type === 'STOCK'}
                  onClick={() => this.setState({ type: 'STOCK' })}
                />
              )}
            </PriceCountByTypeFetcher>
          </Flex>
          <Box mt="24px">
            <Snippet dataset="price" />
          </Box>
          <Box mt={5}>
            <CurrentPriceFetcher type={this.state.type}>
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
            </CurrentPriceFetcher>
          </Box>
        </PageContainer>
      </PageStructure>
    )
  }
}
