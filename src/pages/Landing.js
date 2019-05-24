import React from 'react'
import styled from 'styled-components'
import { Flex, Box, Text, Card, Image, Button, Heading } from 'rebass'
import { Link } from 'react-router-dom'
import colors from 'ui/colors'
import PageStructure from 'components/PageStructure'
import CommunitySrc from 'image/landing-community.svg'
import PageContainer from 'components/PageContainer'
import Snippet from 'components/Snippet'

import { LotteryCountAllFetcher } from 'data/fetcher/LotteryFetcher'
import { CurrentPriceFetcher } from 'data/fetcher/PriceFetcher'
import { SportCountAllFetcher } from 'data/fetcher/SportFetcher'
import { IdentityCountFetcher } from 'data/fetcher/IdentityFetcher'

import LotterySrc from 'image/dataset-lottery.svg'
import PriceSrc from 'image/dataset-price.svg'
import SportSrc from 'image/dataset-sport.svg'
import IdentitySrc from 'image/dataset-Identity.png'

import GithubSrc from 'image/github.svg'
import ArrowRightSrc from 'image/arrow-right.svg'
import ArrowRightDarkSrc from 'image/arrow-right-dark.svg'
import ProviderSrc from 'image/providers.png'

const DataCard = ({ title, k, v, style = {} }) => (
  <Card
    borderRadius="10px"
    p="12px 16px"
    bg="#ffffff"
    style={{ color: colors.text.normal, width: 240, ...style }}
  >
    <Text fontSize={12} color="light">
      {title}
    </Text>
    <Flex mt={1} style={{ letterSpacing: '0.05em' }}>
      <Text fontFamily="code" fontSize={16} fontWeight="700">
        {k}
      </Text>
      <Text fontFamily="code" ml="auto" fontSize={16} fontWeight="700">
        {v}
      </Text>
    </Flex>
  </Card>
)

const DataPreview = props => (
  <Box ml={4} style={{ position: 'relative' }}>
    <DataCard
      title="Price Feed"
      k="LTC / USD"
      v="32.06"
      style={{
        position: 'absolute',
        top: -35,
        right: -50,
        opacity: 0.6,
        zIndex: 0,
        transform: 'scale(0.92)',
      }}
    />
    <DataCard
      title="Price Feed"
      k="ETH / USD"
      v="132.43"
      style={{ zIndex: 2, position: 'relative', transform: 'scale(1.05)' }}
    />
    <DataCard
      title="Price Feed"
      k="BTC / USD"
      v="5,335.32"
      style={{
        position: 'absolute',
        opacity: 0.6,
        bottom: -45,
        left: -35,
        zIndex: 0,
        transform: 'scale(0.95)',
      }}
    />
  </Box>
)

const DatasetStack = styled(Box).attrs(p => ({
  mx: 3,
  my: 3,
  flex: 1,
}))`
  position: relative;
  transition: all 250ms;
  transform: perspective(0) rotateX(0) scale(1);
  min-width: 285px;
  max-width: 285px;

  &:hover {
    transform: perspective(100em) rotateX(9deg) scale(1.04) translateY(-3%);
    z-index: 10;

    :after {
      transform: perspective(90em) rotateX(6deg) translateY(7%) scale(0.95);
    }
    :before {
      transform: perspective(80em) rotateX(3deg) translateY(14%) scale(0.9);
    }
  }

  & > * {
    position: relative;
    z-index: 2;
  }

  :after {
    content: '';
    transition: all 250ms;
    border-radius: 10px;
    background: #ffffff;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 1;
    opacity: 0.6;
    transform: translateY(7px) scaleX(0.98);
  }

  :before {
    content: '';
    transition: all 250ms;
    border-radius: 10px;
    background: #ffffff;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 0;
    opacity: 0.4;
    transform: translateY(14px) scaleX(0.96);
  }
`

const DatasetContainer = styled(Card).attrs(p => ({
  variant: 'primary',
  borderRadius: 10,
}))`
  box-shadow: none;
  height: 190px;
  display: flex;
  flex-direction: column;
`

const Dataset = ({ children, title, subtitle, to, src }) => (
  <DatasetStack>
    <Link to={to} style={{ display: 'block' }}>
      <DatasetContainer>
        <Flex
          px="24px"
          alignItems="center"
          style={{ lineHeight: '52px', borderBottom: 'solid 1px #E5E6F5' }}
        >
          <Text fontSize={16} fontWeight="bold">
            {title}
          </Text>
          <Text ml="auto" fontSize={14} color="light">
            {subtitle}
          </Text>
        </Flex>
        <Flex flex={1} alignItems="center" justifyContent="center" px={4}>
          <Image src={src} style={{ width: '100%' }} />
        </Flex>
      </DatasetContainer>
    </Link>
  </DatasetStack>
)

const ExampleStack = styled(Box).attrs(p => ({
  mx: 3,
  flex: 1,
}))`
  position: relative;
  transition: all 250ms;
  transform: perspective(0) rotateX(0) scale(1);
  box-shadow: 0 -3px 10px 0 rgba(49, 49, 66, 0.1);
  border-radius: 10px;

  &:hover {
    transform: perspective(100em) rotateX(9deg) scale(1.04) translateY(-3%);
    z-index: 10;
  }
`
const Example = ({ children, title, to, src }) => (
  <ExampleStack>
    <Link to={to} style={{ display: 'block' }}>
      <DatasetContainer>
        <Flex flex={1} alignItems="center" justifyContent="center" px={4}>
          <Image src={src} style={{ width: '100%' }} />
        </Flex>
        <Flex
          px="24px"
          alignItems="center"
          style={{ lineHeight: '52px', borderTop: 'solid 1px #E5E6F5' }}
        >
          <Text fontSize={16} fontWeight="bold">
            {title}
          </Text>
          <Text ml="auto" fontSize={14}>
            >
          </Text>
        </Flex>
      </DatasetContainer>
    </Link>
  </ExampleStack>
)

export default props => (
  <PageStructure
    renderHeader={() => (
      <React.Fragment>
        <Flex alignItems="center" pt="70px" pb="100px">
          <Card borderLeft="solid 8px #66F7F6" pl="30px" ml="5px">
            <Text
              fontFamily="code"
              fontSize="32px"
              fontWeight="600"
              lineHeight="0.85em"
            >
              ÐApps{' '}
              <Text
                fontSize="32px"
                fontWeight="900"
                color="#66F7F6"
                style={{ display: 'inline-block' }}
              >
                ×
              </Text>{' '}
              Real World Ðata
            </Text>
            <Text fontSize="20px" mt={4}>
              Connecting ÐApps with trusted off-chain information,
              <br />
              powered by decentralized network of curators.
            </Text>
          </Card>
          <Flex justifyContent="center" flex={1}>
            <DataPreview />
          </Flex>
        </Flex>

        <Box mt={4}>
          <Flex alignItems="center">
            <Card
              borderRadius="50%"
              mr={2}
              bg={colors.green.light}
              style={{
                height: '10px',
                width: '10px',
              }}
            />
            <Text color="#D6FFEB">Live on Rinkeby</Text>
          </Flex>
        </Box>
        <Text fontFamily="code" fontSize="28px" fontWeight="600" mb={4} mt={1}>
          Ðecentralized Ðatasets
        </Text>

        <Flex
          mx="-16px"
          style={{ color: colors.text.normal }}
          flexDirection="row"
          flexWrap="wrap"
        >
          <CurrentPriceFetcher type="ALL">
            {({ fetching, data }) => (
              <Dataset
                title="Price Feed"
                subtitle={fetching ? `... Pairs` : `${data.length} Pairs`}
                src={PriceSrc}
                to="/dataset/price"
              />
            )}
          </CurrentPriceFetcher>

          <SportCountAllFetcher>
            {({ fetching, data }) => (
              <Dataset
                title="Sport Events"
                subtitle={fetching ? `... Matches` : `${data} Matches`}
                src={SportSrc}
                to="/dataset/sport"
              />
            )}
          </SportCountAllFetcher>
          <LotteryCountAllFetcher>
            {({ fetching, data }) => (
              <Dataset
                title="Lottery"
                subtitle={fetching ? `... Rounds` : `${data} Rounds`}
                src={LotterySrc}
                to="/dataset/lottery"
              />
            )}
          </LotteryCountAllFetcher>
          <IdentityCountFetcher>
            {({ fetching, data }) => (
              <Dataset
                title="Identity"
                subtitle={fetching ? `... Identities` : `${data} Identities`}
                src={IdentitySrc}
                to="/dataset/identity"
              />
            )}
          </IdentityCountFetcher>
        </Flex>

        <Box mt={6}>
          <Flex alignItems="center">
            <Image src={GithubSrc} width="22px" mr={2} />
            <Text color="#FFECA6">Available Now</Text>
          </Flex>
        </Box>
        <Text fontFamily="code" fontSize="28px" fontWeight="600" mb={4} mt={1}>
          Integrate with ÐApp in Minutes
        </Text>

        <Box mb="-150px">
          <Snippet dataset="price" />
        </Box>
      </React.Fragment>
    )}
  >
    <Box
      style={{
        background: 'linear-gradient(#f5f6ff 10%, #e9edff 100%)',
      }}
    >
      <PageContainer>
        <Flex mt="150px" mb={6}>
          <Box flex={1} py={4} pr={4}>
            <Text color="light" fontSize={22} fontWeight="700">
              Token-curated
            </Text>
            <Text fontFamily="code" fontSize={32} fontWeight="600">
              Ðata Providers
            </Text>
            <Text mt={4} fontSize={18} fontWeight="400" lineHeight={1.6}>
              Token holders collectively curate trustworthy data providers. By
              staking their tokens, they earn a portion of fee from the
              providers. The more people stake, the more secure the data
              endpoint becomes.
            </Text>

            <Text mt={5} ml={2} color="red" fontWeight="600" fontSize={13}>
              Coming Soon ...
            </Text>
            <Button
              mt={2}
              variant="red"
              borderRadius="8px"
              style={{
                paddingLeft: 12,
                paddingRight: 12,
                background: 'linear-gradient(135deg,#eca886 0%,#cc5b83 100%)',
              }}
            >
              <Flex>
                Stake and Earn Tokens
                <Image src={ArrowRightSrc} ml={3} />
              </Flex>
            </Button>
          </Box>
          <Card
            flex={1}
            variant="blue"
            borderRadius="12px"
            height="20px"
            p="74px"
          >
            <Image width="100%" src={ProviderSrc} />
          </Card>
        </Flex>
      </PageContainer>
    </Box>

    <Card pb={5} style={{ background: colors.gradient.dark }}>
      <PageContainer>
        {/* <Flex mt="-200px" mb={4} alignItems="flex-end">
          <Box flex={1} pr={4}>
            <Text color="light" fontSize={20} fontWeight="700">
              ÐApp Reimagined
            </Text>
            <Text fontFamily="code" fontSize={28} fontWeight="600" mt={1}>
              Buidl with Trusted Ðata
            </Text>
          </Box>

          <Button
            ml="auto"
            variant="purple2"
            borderRadius="8px"
            style={{ paddingLeft: 12, paddingRight: 12 }}
          >
            <Flex>
              Technical Doc
              <Image src={ArrowRightSrc} ml={5} />
            </Flex>
          </Button>
        </Flex> */}
        {/* 
        <Flex mx="-24px" style={{ color: colors.text.normal }}>
          <Example
            title="Ðecentralized Finance"
            src={PriceSrc}
            to="/dataset/price"
          />
          <Example title="Sport Betting" src={SportSrc} to="/dataset/sport" />
          <Example
            title="Fair Lotteries"
            src={LotterySrc}
            to="/dataset/lottery"
          />
        </Flex> */}

        <Flex
          justifyContent="center"
          mt={5}
          style={{ textAlign: 'center', color: '#ffffff' }}
        >
          <Box style={{ maxWidth: 600 }}>
            <Text fontSize={22} fontWeight="700" color="#85EEBB" lineHeight={2}>
              Join our testnet
            </Text>
            <Card
              borderLeft="solid 8px #85EEBB"
              mx={3}
              style={{
                background:
                  'linear-gradient(90deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.00) 100%)',
              }}
            >
              <Text
                fontFamily="code"
                fontSize={30}
                fontWeight="600"
                lineHeight={1.8}
              >
                Ðecentralizing World’s Ðata
              </Text>
            </Card>
            <Flex mt={5} style={{ textAlign: 'left ' }}>
              <Card flex="0 0 auto" mr="24px">
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  style={{
                    height: 36,
                    width: 36,
                    borderRadius: '50%',
                    background: '#85EEBB',
                    boxShadow: colors.shadow.dark,
                  }}
                >
                  <Text color="#3F3F5A" fontWeight="700" fontSize={20}>
                    1
                  </Text>
                </Flex>
              </Card>
              <Box>
                <Text lineHeight="40px" fontWeight="700" fontSize={18}>
                  Get BAND testnet tokens
                </Text>
                <Text mt={3} lineHeight={1.8}>
                  The Band Protocol token BAND is the native token of Band
                  Protocol. It represents the collective ownership across all
                  curation communities. During the testnet, BAND token is
                  available for free via faucet.
                </Text>

                <a href="https://faucet.bandprotocol.com" target="_blank">
                  <Button
                    mt={4}
                    variant="green"
                    borderRadius="6px"
                    style={{
                      paddingLeft: 12,
                      paddingRight: 12,
                      color: '#3E3E59',
                    }}
                  >
                    <Flex>
                      BAND Faucet
                      <Image src={ArrowRightDarkSrc} ml={5} />
                    </Flex>
                  </Button>
                </a>
              </Box>
            </Flex>

            <Flex mt={5} style={{ textAlign: 'left ' }}>
              <Card flex="0 0 auto" mr="24px">
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  style={{
                    height: 36,
                    width: 36,
                    borderRadius: '50%',
                    background: '#85EEBB',
                    boxShadow: colors.shadow.dark,
                  }}
                >
                  <Text color="#3F3F5A" fontWeight="700" fontSize={20}>
                    2
                  </Text>
                </Flex>
              </Card>
              <Box>
                <Text lineHeight="40px" fontWeight="700" fontSize={18}>
                  Buy community tokens
                </Text>
                <Text mt={3} lineHeight={1.8}>
                  Band Protocol utilizes the concept of Continuous Bonding Curve
                  to control community token supply and ensure that the token
                  always have concrete value backed. You can buy and sell
                  community tokens anytime through BAND Community Portal.
                </Text>

                <a
                  href="https://app-wip.rinkeby.bandprotocol.com"
                  target="_blank"
                >
                  <Button
                    mt={4}
                    variant="green"
                    borderRadius="6px"
                    style={{
                      paddingLeft: 12,
                      paddingRight: 12,
                      color: '#3E3E59',
                    }}
                  >
                    <Flex>
                      BAND Community Portal
                      <Image src={ArrowRightDarkSrc} ml={5} />
                    </Flex>
                  </Button>
                </a>
              </Box>
            </Flex>

            <Flex mt={5} style={{ textAlign: 'left ' }}>
              <Card flex="0 0 auto" mr="24px">
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  style={{
                    height: 36,
                    width: 36,
                    borderRadius: '50%',
                    background: '#85EEBB',
                    boxShadow: colors.shadow.dark,
                  }}
                >
                  <Text color="#3F3F5A" fontWeight="700" fontSize={20}>
                    3
                  </Text>
                </Flex>
              </Card>
              <Box>
                <Text lineHeight="40px" fontWeight="700" fontSize={18}>
                  Participate in Token Curated DataSource
                </Text>
                <Text mt={3} lineHeight={1.8}>
                  Token Curate DataSource (TCD) is a method for a community to
                  collectively curate data. Community members elect data
                  providers by staking their token in the name of the candidates
                  and earn a portion of data source’s revenue. Data providers
                  have the authority to provide data to the public, and earn a
                  portion of fees collected from data query.
                </Text>
                <a
                  href="https://developer.bandprotocol.com/docs/tcd.html"
                  target="_blank"
                >
                  <Button
                    mt={4}
                    variant="green"
                    borderRadius="6px"
                    style={{
                      paddingLeft: 12,
                      paddingRight: 12,
                      color: '#3E3E59',
                    }}
                  >
                    <Flex>
                      Learn more about TCD
                      <Image src={ArrowRightDarkSrc} ml={5} />
                    </Flex>
                  </Button>
                </a>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </PageContainer>
    </Card>

    <PageContainer>
      <Flex py={4} flexDirection="column" alignItems="center">
        <Text color="light" fontSize={20} fontWeight="700">
          Have cool ideas to build with Band Protocol?
        </Text>
        <Text fontFamily="code" fontSize={32} fontWeight="600" mt={2}>
          Work with us!
        </Text>
        <a href="mailto:connect@bandprotocol.com">
          <Button mt={4} variant="purple2" borderRadius="8px" px={4}>
            Connect with our team
          </Button>
        </a>
      </Flex>
    </PageContainer>

    <Box style={{ background: colors.gradient.purple }}>
      <PageContainer>
        <Flex flexDirection="column" alignItems="center">
          <Text color="white" fontSize={16} fontWeight="600">
            Band Protocol 2018 - 2019
          </Text>
        </Flex>
      </PageContainer>
    </Box>
  </PageStructure>
)
