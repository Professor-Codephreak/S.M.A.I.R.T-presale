# install foundry
```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

```bash
cd S.M.A.I.R.T-presale/UIUX
forge init --force
anvil --chain-id 11155111


```
# install metamask
<a href="https://metamask.io/download/">https://metamask.io/download/</a><br />
# add ANVIL to metamask
```bash
Adding Custom Network to MetaMask
Open MetaMask and go to Settings > Networks > Add Network.
Fill in the details:
Network Name: ANVIL (Custom)
RPC URL: http://127.0.0.1:8545
Chain ID: 11155111
Currency Symbol: ETHVIL
click Save
```

# ANVIL creates 10 developer wallets
that are the same for everyone. do not add actual funds. choose the private key for wallet 0 and import into metamask</a>

```bash
Available Accounts
==================

(0) 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000.000000000000000000 ETH)
(1) 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 (10000.000000000000000000 ETH)
(2) 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC (10000.000000000000000000 ETH)
(3) 0x90F79bf6EB2c4f870365E785982E1f101E93b906 (10000.000000000000000000 ETH)
(4) 0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65 (10000.000000000000000000 ETH)
(5) 0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc (10000.000000000000000000 ETH)
(6) 0x976EA74026E726554dB657fA54763abd0C3a0aa9 (10000.000000000000000000 ETH)
(7) 0x14dC79964da2C08b23698B3D3cc7Ca32193d9955 (10000.000000000000000000 ETH)
(8) 0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f (10000.000000000000000000 ETH)
(9) 0xa0Ee7A142d267C1f36714E4a8F75612F20a79720 (10000.000000000000000000 ETH)

Private Keys
==================

(0) 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
(1) 0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d
(2) 0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a
(3) 0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6
(4) 0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a
(5) 0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba
(6) 0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e
(7) 0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356
(8) 0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97
(9) 0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6
```
# import private key 0 into metamask<br />

0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80<br /><br />
metamask account1 tab --> Add account or hardware wallet --> Import Account --> Enter your private key string here:<br />

done correctly you will see 10000 ETHVIL testnet tokens. Add other developer private keys as necessary<br />


# Run Tests Using Foundry
```bash
forge test
```

Deploying to Sepolia via Alchemy using forge
```bash
forge create --rpc-url https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY --private-key YOUR_PRIVATE_KEY src/YourPresaleContract.sol:YourPresaleContract
Replace YOUR_PRIVATE_KEY with your private key.
Replace src/YourPresaleContract.sol:YourPresaleContract with the correct path and contract name
```
