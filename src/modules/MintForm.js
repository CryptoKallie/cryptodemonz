import React, {Component} from 'react';

class MintForm extends Component {
    constructor(props) {
        super(props)
    }
//0x1D996c1821b93773B44F3b4c5394B217B47257B6
    render() {
        return (
            <div className="row">
                <div className="col-lg-8 form-tabbed">
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
                                Please enter the amount of Crypto Demonz you
                                would like to mint
                            </p>
                        </label>
                        <input
                            type="number"
                            className="form-control number-custom"
                            id="exampleInputEmail1"
                            min="1"
                            max="20"
                            placeholder=""
                            defaultValue="1"
                        />
                        <p>
                            <small>(Maximum of 20)</small>
                        </p>
                        <br />
                        <button type="button" className="btn btn-primary">
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MintForm;
