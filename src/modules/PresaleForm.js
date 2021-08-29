import React, { Component } from "react";

class PresaleForm extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-8 form-tabbed">
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
                            <p>Click to claim your tokens!</p>
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
