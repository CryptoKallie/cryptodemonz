import Navbar from "./layout/Navbar";
import TabbedContent from "./modules/TabbedContent";

import { useWeb3React } from "@web3-react/core";
import { injected } from "./utils/connectors.js";
import Web3 from "web3";

function App() {
    const { active, account, library, connector, activate, deactivate } =
        useWeb3React();
    const web3 = new Web3(
        "https://goerli.infura.io/v3/23d7ffac33de4db4bafbf70d24cb10f6"
    );

    const connectMetamask = async () => {
        await activate(injected);
    };

    const deactivateMetamask = async () => {
        await deactivate(injected);
    };

    return (
        <div>
            <Navbar
                active={active}
                account={account}
                connectMetamask={connectMetamask}
                deactivateMetamask={deactivateMetamask}
            />
            <div className="container container-body">
                <TabbedContent account={account} />
            </div>
        </div>
    );
}

export default App;
