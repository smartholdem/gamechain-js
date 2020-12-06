/** @module networks */

module.exports = {
    /** @type {Network} */
    smartholdem: {
        messagePrefix: '\x18SmartHoldem Signed Message:\n',
        bip32: {
            public: 0x2bf496f, // base58 will have a prefix 'pub'
            private: 0x2bf4537 // base58Priv will have a prefix 'priv'
        },
        pubKeyHash: 0x3f, // Addresses will begin with 'S'
        // 	BIP44 coin type is from https://github.com/satoshilabs/slips/blob/master/slip-0044.md - 255 SmartHoldem
        wif: 0xff // Network prefix for wif generation
    },
    /** @type {Network} */
    gamechain: {
        messagePrefix: "GameChain message:\n",
        bip32: {
            public: 0x2bf4970,
            private: 0x2bf4538
        },
        nethash: '574abe1d458d74d62012eda7f2dfb9266dc23395afb5b789c3041cad83b35fd0',
        token: 'CHIPS',
        symbol: 'CHIPS',
        pubKeyHash: 0x1c,
        wif: 0x01,
        explorer: "http://localhost:7100"
    }
}
