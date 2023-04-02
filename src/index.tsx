import React from 'react';
import ReactDOM from "react-dom/client";
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { mainnet } from "wagmi/chains";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import App from './App';
import {slice} from './useStore'
import './Theme/theme.scss';
import config from './config.json'

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const chains = [ mainnet ];
const projectId = config.walletConnectProjectId

const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider
})

const ethereumClient = new EthereumClient(wagmiClient, chains)

root.render(
	<>
        <WagmiConfig client={wagmiClient}>
            {/* <Provider> */}
                <App />
                <ToastContainer />
            {/* </Provider> */}
        </WagmiConfig>
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
);
