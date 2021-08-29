import { useWeb3React } from '@web3-react/core';
import { injected } from './connectors.js';

const ConnectMetamask = () => {
    const { active, account, library, connector, activate, deactivate } = useWeb3React();
    

    const connectMetamask = async () => {
        await activate(injected)
        
    }

    const deactivateMetamask = async () => {
        await deactivate(injected);
    }

    return (
        <div>
            <button onClick={connectMetamask}>Connect</button> 
            {active ? <span>Connected with <b>{account}</b></span> : <span>not connected</span>}
            <button onClick={deactivateMetamask}>Disconnect</button>
        </div>
    )
}

export default ConnectMetamask;