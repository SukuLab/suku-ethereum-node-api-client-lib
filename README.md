# SUKU Ethereum Node API Client Lib

![Publish NPM Package](https://github.com/SukuLab/suku-ethereum-node-api-client-lib/workflows/Publish%20NPM%20Package/badge.svg)

This is the SUKU Ethereum Node API Client Lib that can be used to handle REST calls to the [SUKU Ethereum Node API](https://github.com/SukuLab/suku-ethereum-node-api).

## Getting Started
Before using this library you should have a running instance of the Node API. If you do not have a running instance yet, please start by deploying the [SUKU Ethereum Node API](https://github.com/SukuLab/suku-ethereum-node-api).

## Using the library
```js
import NodeManager from '@suku/suku-ethereum-node-api-client-lib';
const nodeManagerUrl = "http://bc-node-manager-url:3000";
const privateKey = "<private key here>";

let nodeManager = new NodeManager(nodeManagerUrl, privateKey);
```

## Sending a transaction
```js
let tx = yourSmartContract.methods.addSomething(parameter);
let txObject = {
    data: tx.encodeABI(),
    to: yourSmartContract.options.address
}
let predictedTxHash = await nodeManager.sendTx(txObject);
```

## Calling a function
```js
let encodedAbi : string = await yourSmartContract.methods.getSomething(parameter).encodeABI();
let tx : Transaction = {
    data: encodedAbi,
    to: yourSmartContract.options.address,
};
let response = await this.nodeManager.callFunction(tx);
```

# Contributing & Community
If you find things that you'd like to improve in this repo feel free to create a PR or an issue. Please read our [Contribution Guidelines](CONTRIBUTING.md) before submitting an issue or a PR. 
- [Slack](https://sukudevs.slack.com)
- [Reddit](https://www.reddit.com/r/SUKUecosystem/)
