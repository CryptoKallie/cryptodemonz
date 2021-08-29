import MintForm from './MintForm';

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
                                <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        

    );
  }
  
  export default TabbedContent;
  