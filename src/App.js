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
        <div className="Header-Item">
          {/* <Clock /> */}
          Clock
        </div>
        <div className="Header-Item">
          Company Logo/and Name
        </div>
        <div className="Header-Item">
          3 Buttons: Products, About, Contact
        </div>
      </div>
      <div className="Content-Container">
        Content
      </div>
    </div>
  );
}

export default App;