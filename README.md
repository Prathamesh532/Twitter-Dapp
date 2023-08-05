# Twitter-Dapp
Twitter Dapp made using Solidity , web3 js and react js
# Twitter DApp README

## Description

This repository contains the source code for a decentralized Twitter-like application (DApp) built on the Ethereum blockchain. The DApp allows users to post tweets, send messages, follow other users, and manage permissions through smart contracts deployed on the Ethereum network.

## Project Structure

The project is organized as follows:

- `contracts/`: Contains the Solidity smart contract code.
- `twitter/`: Contains the React web application code.
  - `components/`: Contains React components for different features of the DApp.
  - `App.js`: Main entry point for the React application.
- `public/`: Contains public assets used in the web application.
- `test/`: Contains unit tests for the smart contract.
- `migrations/`: Contains the migration scripts to deploy the smart contract.
- `truffle-config.js`: Truffle configuration file for deployment and testing.

## Prerequisites

- Node.js (version >= 14.0.0)
- Truffle (version >= 5.0.0)
- Ganache or any Ethereum client for local development/testing
- MetaMask or any Ethereum wallet extension for web3 integration

## Getting Started

1. Clone this repository:

```bash
git clone https://github.com/your-username/twitter-dapp.git
```

2. Install dependencies For Front-End:

```bash
cd twitter-dapp
cd twitter
npm install
```
3. Install dependencies for Truffle
   
```bash
npm install
```

4. Start local development blockchain (Ganache):

Ensure you have Ganache running on your local machine, or configure Truffle to connect to your preferred Ethereum client.

4. Compile and deploy smart contract:

```bash
truffle complie
truffle migrate --reset
```

5. Start the React web application:

```bash
cd twitter
npm start
```

6. Open your web browser and navigate to `http://localhost:3000/` to access the Twitter DApp.

## Usage

The Twitter DApp provides the following functionalities:

- **Tweet**: Users can post tweets on the Ethereum blockchain by submitting text content.
- **Create Tweets**: Users can create and post tweets on the platform. Each tweet is associated with the author's Ethereum address, ensuring transparency and accountability.
- **Message**: Users can send messages to other users by providing the recipient's Ethereum address and the message content.
- **Follow and Unfollow**: Users can follow other users to receive updates on their tweets and activities. They can also unfollow users at any time.
- **Latest Tweets Feed**: The platform displays the latest tweets from the users the current user is following, creating a personalized timeline for each user.
- **Allow**: Users can give permission to certain addresses to perform actions on their behalf (e.g., tweet, send messages).

## Smart Contract

The smart contract code is located in the `contracts/` directory. The contract is written in Solidity and contains functions for the Twitter DApp functionalities.

## Testing

Unit tests for the smart contract are located in the `test/` directory. To run the tests, use the following command:

```bash
truffle test
```

## Deployment

To deploy the smart contract to a public Ethereum network, modify the `truffle-config.js` file to include your network configuration (e.g., Infura API key, account mnemonic), and then run:

```bash
truffle migrate --network <network-name>
```

Replace `<network-name>` with the desired network (e.g., `ropsten`, `rinkeby`, `mainnet`).


## Acknowledgments


## Contributors

- Your Name (email@example.com)

If you would like to contribute to this project, feel free to open issues and submit pull requests.

## Contact

For any questions or inquiries, please contact the project maintainers:

- Your Prathamesh kalekar (prathameshkalekar0532@gmail.com)

Happy DApp development!
