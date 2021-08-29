import MintForm from './MintForm';
import PresaleForm from './PresaleForm';

function TabbedContent() {
    return (
        <div class="row align-items-center h-100">
            <div class="col"></div>
                <div class="card mt-5">
                    <div class="card-body">
                        <ul className="nav nav-tabs tabbed-navbar-custom">
                            <li className="nav-item">
                                <a className="nav-link tabbed-link-custom active" data-bs-toggle="tab" href="#home">Mint</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link tabbed-link-custom" data-bs-toggle="tab" href="#profile">Presale</a>
                            </li>
                        </ul>

                        <div id="myTabContent" className="tab-content">
                            <div className="tab-pane fade show active h-40" id="home">
                                <MintForm />
                            </div>
                            <div className="tab-pane fade" id="profile">
                                <PresaleForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        

    );
  }
  
  export default TabbedContent;
  