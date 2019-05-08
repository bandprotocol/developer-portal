import React from 'react'
import { Flex, Box, Text } from 'rebass'

export default props => (
  <Flex flexDirection="column" alignItems="center">
    <Box my={4}>
      <Text fontWeight={600} fontSize={24}>
        404: It's a shame!
      </Text>
    </Box>

    <Box>
      <Text fontSize={16}>We don't have anything here</Text>
    </Box>
  </Flex>
)
