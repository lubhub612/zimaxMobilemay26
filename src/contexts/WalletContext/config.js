const walletConfig = {
  chainId: '0x38',
  networkName: 'Binance Smart Chain',
  nativeCurrency: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18,
  },

  // Moralis stopped 1 september rpcUrls: ['https://speedy-nodes-nyc.moralis.io/129fb60c557f500721cfea1f/bsc/mainnet'],
  rpcUrls: [
    'https://nd-461-294-505.p2pify.com/f650b9565ca279681e9615d9e41766a6',
  ],

  blockUrls: ['https: //bscscan.com/']

  // chainId: '0x61',
  // networkName: 'bsc testnet',
  // nativeCurrency: {
  //   name: 'BNB',
  //   symbol: 'BNB',
  //   decimals: 18,
  // },
  // rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
  // // rpcUrls: ['https://speedy-nodes-nyc.moralis.io/bfaf7a5a5cd9975318f411e4/bsc/testnet'],
  // blockUrls: ['https://testnet.bscscan.com/'],

  // chainId: '0x539',
  // networkName: 'localhost',
  // nativeCurrency: {
  //     name: 'ETH',
  //     symbol: 'ETH',
  //     decimals: 18
  // },
  // rpcUrls: ['http://127.0.0.1:8545'],
  // blockUrls: ['']
};

export default walletConfig;
