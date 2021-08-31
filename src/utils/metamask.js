
const ConnectMetamask = ({
    active,
    account,
    connectMetamask,
    deactivateMetamask,
}) => {
    return active ? (
        <div>
            <a
                className="nav-link meta-connect"
                href="/spawn/#"
                onClick={deactivateMetamask}
            >
                Disconnect
                <span className="nested-meta">{`${account.slice(
                    0,
                    6
                )}...${account.slice(
                    account.length - 4,
                    account.length
                )}`}</span>
            </a>
        </div>
    ) : (
        <div>
            <a
                className="nav-link meta-connect"
                href="/spawn/#"
                onClick={connectMetamask}
            >
                Connect to Metamask
            </a>
        </div>
    );
};

export default ConnectMetamask;