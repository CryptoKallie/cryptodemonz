import { useWeb3React } from '@web3-react/core';
import { injected } from './connectors.js';
import Web3 from 'web3'

const ConnectMetamask = () => {
    const { active, account, library, connector, activate, deactivate } = useWeb3React();
    const web3 = new Web3("https://goerli.infura.io/v3/23d7ffac33de4db4bafbf70d24cb10f6")

    const connectMetamask = async () => {
        await activate(injected)
        
    }

    const deactivateMetamask = async () => {
        await deactivate(injected);
    }

    return active ? (
        <div>
            <span>{account}</span>
            <a className="nav-link meta-connect" href="/#" onClick={deactivateMetamask}>Disconnect</a>
        </div>
    ) : (
        <div>
            <a className="nav-link meta-connect" href="/#" onClick={connectMetamask}>Connect to Metamask</a> 
        </div>
    )
}

export default ConnectMetamask;