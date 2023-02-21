import Education from "./components/Education";
import General from "./components/General";
import Work from "./components/Work";
import "./styles/App.module.css";

const App = () => {
  return (
    <div className="App">
      <General />
      <Education />
      <Work />
    </div>
  );
};
export default App;
