import React, { Component, useState } from "react";
import Web3 from "web3";
import mockABI from "../abis/Mock";

const MintForm = ({ account, active }) => {
    const web3 = new Web3(
        window.ethereum
    );
    const contract = new web3.eth.Contract(
        mockABI,
        "0x4231AF7A21fF267d86Bf23032632E6726EB51e33"
    );
    const [value, setV] = React.useState(0);

    const [ethPrice, setEthPrice] = useState(1);

    /*
    React.useEffect(() => {
        const init = async () => {
            const value = await contract.methods.getValue().call();
            setValue(value);
        }
        init();
    }, [])
    */

    const setValue = async () => {
        if (active) {
            try {
                await contract.methods.setValue(20).send({ from: account });
            } catch (err) {
                console.log(err);
            }
        } else {
            alert("please connect to metamask");
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
                                <input
                                    type="number"
                                    className="form-control number-custom"
                                    id="exampleInputEmail1"
                                    min="1"
                                    max="20"
                                    placeholder=""
                                    defaultValue="1"
                                    onChange={event => setEthPrice(event.target.value)}
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
                        onClick={setValue}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MintForm;
