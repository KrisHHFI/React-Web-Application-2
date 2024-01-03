// Stylesheets
import './App.css';
import './StyleSheets/Header.css';
import './StyleSheets/Content.css';
import './StyleSheets/Clock.css';
// Components
import Clock from './Components/Clock';

function App() {
  return (
    <div className="Wrapper">
      <div className="Header-Container">
        Header
         {/* <Clock /> */}
      </div>
      <div className="Content-Container">
        Content
      </div>
    </div>
  );
}

export default App;