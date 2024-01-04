// Stylesheets
import './App.css';
import './StyleSheets/Header.css';
import './StyleSheets/Content.css';
import './StyleSheets/Clock.css';
// Components
import Header from './Components/Header';
import Clock from './Components/Clock';

function App() {
  return (
    <div className="Wrapper">
      <Header />
      <div className="Content-Container">
        Content
        {/* <Clock /> */}
      </div>
    </div>
  );
}

export default App;