export default {
  price: {
    solidity: `
interface DataSource {
  function getQueryPrice() external view returns (uint256);
  function getAsNumber(bytes32 key) external payable returns (uint256);
}

contract PriceFeedContract {
  DataSource public constant dataSource =
    DataSource(0x8B3dBb2Db70120Cf4D24c739E1c296DE98644238);

  function checkBTCPrice() internal {
    uint256 bitcoinPrice =
      dataSource.getAsNumber.value(dataSource.getQueryPrice())("BTC/USD");
    assert (bitcoinPrice == 5579.13e18);  // Price is 5,579.13 USD per Bitcoin
  }
}`,
    graphql: `
query {
  allDataPriceFeeds(condition: { pair: "BTC/USD" }) {
    nodes {
      value
    }
  }
}`,
  },
  sport: {
    solidity: `
interface DataSource {
  function getQueryPrice() external view returns (uint256);
  function getAsBytes32(bytes32 key) external payable returns (bytes32);
}

contract SportResultContract {
  DataSource public constant dataSource =
    DataSource(0x7d19771a15c1314be9Bd436092A727A70Edc6482);

  function checkNBAResult() internal {
    bytes32 sportResult = dataSource
      .getAsBytes32
      .value(dataSource.getQueryPrice())("NBA2019/20190427/LAC-GSW");
    assert (uint8(sportResult[0]) == 110); // The Clippers scored 110
    assert (uint8(sportResult[1]) == 129); // The Warriors scored 129
  }
}`,
    graphql: `
query {
  allDataSportFeeds(
    condition: {
      sportType: "NBA"
      sportTime: "20190427"
      home: "LAC"
      away: "GSW"
    }
  ) {
    nodes {
      sportType
      sportTime
      home
      away
      scoreHome
      scoreAway
    }
  }
}`,
  },
  lottery: {
    solidity: `
interface DataSource {
  function getQueryPrice() external view returns (uint256);
  function getAsBytes32(bytes32 key) external payable returns (bytes32);
}

contract LottoResultContract {
  DataSource public constant dataSource =
    DataSource(0x6863019Ec1A5f675ce64699020A338Ee2256B981);

  function checkLottoResult() internal {
    bytes32 powerballResult = dataSource
      .getAsBytes32
      .value(dataSource.getQueryPrice())("PWB/20190420");
    assert (uint8(powerballResult[0]) == 3);   // White Ball #1
    assert (uint8(powerballResult[1]) == 27);  // White Ball #2
    assert (uint8(powerballResult[2]) == 30);  // White Ball #3
    assert (uint8(powerballResult[3]) == 63);  // White Ball #4
    assert (uint8(powerballResult[4]) == 65);  // White Ball #5
    assert (uint8(powerballResult[5]) == 1);   // Power Ball #1
    assert (uint8(powerballResult[6]) == 3);   // Power Play Multiplier
  }
}`,
    graphql: `
query {
  allDataLotteryFeeds(
    condition: { lotteryType: "PWB", lotteryTime: "20190420" }
  ) {
    nodes {
      whiteBall1
      whiteBall2
      whiteBall3
      whiteBall4
      whiteBall5
      redBall
      mul
    }
  }
}`,
  },
}
