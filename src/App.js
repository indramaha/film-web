import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import "./Style/landingPage.css";
import Intro from "./Components/Intro";
import Trending from "./Components/Trending";
import SuperHero from "./Components/SuperHero";

function App() {
  return (
    <div>
      {/* indtro section */}
      <NavigationBar />
      <div className="myBG">
        <Intro />
      </div>
      {/* end of intro */}

      {/* Trending section */}
      <div className="trending">
        <Trending />
      </div>
      {/* end of Trending section */}

      {/*Super Hero Section */}
      <div className="superhero">
        <SuperHero />
      </div>
      {/*Super Hero Section */}
    </div>
  );
}

export default App;
