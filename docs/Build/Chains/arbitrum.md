---
Title: Arbitrum
id: arbitrum
---

# Arbitrum

Arbitrum RPC is available on the [Ankr Protocol App](https://www.ankr.com/protocol/public/arbitrum/)

**Arbitrum** is a suite of Ethereum scaling solutions that enable high-throughput, low cost smart contracts while remaining trustlessly secure.&#x20;

Arbitrum has three modes: **AnyTrust Channels**, **AnyTrust Sidechains,** and **Arbitrum Rollup**.

## **Quick Links**

[**Arbitrum**](https://arbitrum.io) ​

[**Docs**](https://developer.offchainlabs.com/docs/frontend\_integration)**​**

[**Github**](https://github.com/OffchainLabs)

---

## Connect Wallet

Here's how to set up your  **MetaMask wallet** to connect to Arbitrum RPC. You can then perform transactions and interact with the network.

### Get Started

1. Open your **MetaMask wallet** and click the '_**Network**_' drop down menu at the top.
2. Select '_**Custom RPC**_'.
3. Enter the settings below:



|   Chain  | Custom RPC Category |                             Details                             |
| :------: | :-----------------: | :-------------------------------------------------------------: |
| Arbitrum |    NETWORK NAME:    |                           Arbitrum RPC                          |
|          |     NEW RPC URL:    | [https://rpc.ankr.com/arbitrum](https://rpc.ankr.com/avalanche) |
|          |      CHAIN ID:      |                              42161                              |
|          |       SYMBOL:       |                               AETH                              |
|          |   BLOCK EXPLORER:   |            [https://arbiscan.io](https://arbiscan.io)           |


## Integrate

### clientVersion

```
https://rpc.ankr.com/arbitrum
```



### Example Request

```shell
curl https://rpc.ankr.com/arbitrum \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}'
```

### Example Response

```javascript
{"jsonrpc":"2.0","id":1,"result":"arb-rpc-node/v0.8.0"}
```


