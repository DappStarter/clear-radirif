require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame tone strong cost museum comic harvest cover army gaze'; 
let testAccounts = [
"0xd87778884857714dc25fb303903c62c8d1b5471ef3d115bbc764d7febc4cb8ea",
"0x219d16b4533ae9fb4cbac6d1b90ac7946b59c0e7861324cd784576f163a3e266",
"0x076b66074b7def7e4579a13216c86e2b4849ce3f7e77ca2dd08dd652c60c93d6",
"0x0348e565e486adcb363e7a9c1e0b63d822c639c53567cdf7dbb9ba603f866a65",
"0x6214c1e381bbdfad777e80b966781aaf8f42ee4156fd9b4ad3a331ed5905d91a",
"0xe55a7735655bab54b9d302f917b286ace28b2efe7f0f26b836a070af4d0e8af4",
"0x7c84e17e64c10a4b0b83094ead6cabb7e7b67a037d35abf2e49c0b1e37188ee3",
"0xfa3566f0f45972a339348263ba83aa0591012379622661a4d4696347e526aec6",
"0x6af0fdbe8d7b69a0aae75be27a584f7bfb975a80ca92ed6a5e346b7d5449f9bf",
"0x04edc7a86e919bea84097fcbc903a5800ade950d24483b9b10003b3d15115e21"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
