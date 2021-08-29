function TabbedContent() {
    return (
        <div class="row align-items-center h-100">
            <div class="col"></div>
                <div class="card mt-5">
                    <div class="card-body">
                        <ul className="nav nav-tabs">
                            <li className="nav-item tabbed">
                                <a className="nav-link " data-bs-toggle="tab" href="#home">Mint</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#profile">Presale</a>
                            </li>
                        </ul>

                        <div id="myTabContent" className="tab-content">
                            <div className="tab-pane fade show active" id="home">
                                <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
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
  