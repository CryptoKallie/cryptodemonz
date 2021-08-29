import { useState } from "react";
import Web3 from "web3";
import DemonzABI from "../abis/Demonz";

const MintForm = ({ account, active }) => {
    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(
        DemonzABI,
        "0xAE16529eD90FAfc927D774Ea7bE1b95D826664E3"
    );
    const [ethPrice, setEthPrice] = useState(1);
    const [amount, setAmount] = useState(1);

    const buyToken = async () => {
        if (active) {
            try {
                await contract.methods
                    .mintToken(amount)
                    .send({ from: account, value: amount * 60000000000000000 });
            } catch (err) {
                console.log(err);
            }
        } else {
            alert("please connect to metamask");
        }
    };
    const checkValue = () => {
        if (ethPrice <= 0) {
            setEthPrice(1);
        } else if (ethPrice > 20) {
            setEthPrice(20);
        }
    };
    return (
        <div className="row">
            <div className="col-lg-12 form-tabbed">
                <div className="form-group text-center">
                    <label htmlFor="exampleInputEmail1">
                        <img
                            src="images/welcome.gif"
                            className="welcome-gif"
                            alt="Welcome to the minting section"
                        />
                        <h1>
                            <u>Minting</u>
                        </h1>
                        <p>
                            Please enter the amount of Crypto Demonz you would
                            like to mint
                        </p>
                    </label>
                    <div className="row">
                        <div className="col-md-5 text-center">
                            <div class="input-group mb-3">
                                {checkValue()}
                                <input
                                    type="number"
                                    className="form-control number-custom"
                                    id="exampleInputEmail1"
                                    min="1"
                                    max="20"
                                    placeholder=""
                                    value={ethPrice}
                                    onChange={(event) => {
                                        setEthPrice(event.target.value);
                                        setAmount(event.target.value);
                                    }}
                                />
                                <span class="input-group-text">NFT</span>
                            </div>
                        </div>

                        <div className="col-sm-2 text-center">
                            <h1 className="equals">=</h1>
                        </div>

                        <div className="col-md-5 text-center">
                            <div class="input-group mb-3">
                                <input
                                    type="number"
                                    className="form-control eth-custom"
                                    id="exampleInputEmail1"
                                    min="1"
                                    max="20"
                                    placeholder=""
                                    defaultValue="1"
                                    disabled
                                    value={ethPrice * 0.06}
                                />
                                <span class="input-group-text">ETH</span>
                            </div>
                        </div>
                    </div>

                    <p>
                        <small>(Maximum of 20)</small>
                    </p>
                    <br />
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={buyToken}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MintForm;
