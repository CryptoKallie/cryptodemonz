import Navbar from './layout/Navbar';
import TabbedContent from './modules/TabbedContent';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container container-body">
        <TabbedContent />
      </div>
    </div>
  );
}

export default App;
