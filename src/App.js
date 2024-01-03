// Stylesheets
import './App.css';
import './StyleSheets/Header.css';
import './StyleSheets/Content.css';
import './StyleSheets/Clock.css';
// Components
import Header from './Components/Header';
import Content from './Components/Content';
import Clock from './Components/Clock';

function App() {
  return (
    <div className="Wrapper">
      <Header />
      <Content />
      {/* <Clock /> */}
    </div>
  );
}

export default App;