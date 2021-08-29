import React, { Component } from "react";

class PresaleForm extends Component {


    render() {
        return (
            <div className="row">
                <div className="col-lg-12 form-tabbed">
                    <div className="form-group text-center">
                        <label htmlFor="exampleInputEmail1">
                            <img
                                src="images/Satan.gif"
                                className="welcome-gif"
                                alt="Welcome to the minting section"
                            />
                            <h1>
                                <u>Presale</u>
                            </h1>
                            <p>
                                Pay your gas fee & claim your presale token
                            </p>
                            <div class="input-group mb-3">
                                <input
                                    type="number"
                                    className="form-control number-custom"
                                    id="exampleInputEmail1"
                                    min="1"
                                    max="20"
                                    placeholder=""
                                    defaultValue="1"
                                />

                                <span class="input-group-text">NFT</span>
                            </div>
                           
                        </label>
                        <br />
                        <button type="button" className="btn btn-primary">
                            Claim!
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PresaleForm;
