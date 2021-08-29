import ConnectMetamask from './utils/metamask';
import Navbar from './layout/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container container-body">
        <ConnectMetamask />
      </div>
    </div>
  );
}

export default App;
