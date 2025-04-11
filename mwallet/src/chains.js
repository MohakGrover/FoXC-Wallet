const Ethereum = {
    hex: '0x1',
    name: 'Ethereum Mainnet',
    rpcUrl: '',
    ticker: "ETH"
};

const EthereumSepolia = {
    hex: '0xaa36a7',
    name: 'Ethereum Sepolia',
    rpcUrl: '',
    ticker: "ETH"
};

const PolygonMainnet = {
    hex: '0x89',
    name: 'Polygon Mainnet',
    rpcUrl: '',
    ticker: "MATIC"
};

const MumbaiTestnet = {
    hex: '0x13881',
    name: 'Mumbai Testnet',
    rpcUrl: '',
    ticker: "MATIC"
};

const BSChain = {
    hex: '0x38',
    name: 'Binance Smart Chain Mainnet',
    rpcUrl: '',
    ticker: "BNB"
};

export const CHAINS_CONFIG = {
    "0x1": Ethereum,
    "0xaa36a7": EthereumSepolia,
    "0x89": PolygonMainnet,
    "0x13881": MumbaiTestnet,
    "0x38": BSChain,
};