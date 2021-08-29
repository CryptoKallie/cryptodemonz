function Navbar() {
    return (
        <nav className="navbar navbar-transparent fixed-top py-4 navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="images/logo.png" alt="CryptoDemonz logo" className="navbar-logo" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse me-auto" id="navbarColor02">
                    <ul className="navbar-nav navbar-right ms-auto">
                            <li className="nav-item mr-5">
                                <a className="nav-link" href="#">SPAWN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">TOKENOMICS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ROADMAP</a>
                            </li>
                    </ul>
                </div>
                
            </div>
        </nav>

    );
  }
  
  export default Navbar;
  