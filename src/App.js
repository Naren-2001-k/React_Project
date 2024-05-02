// import logo from "./logo.svg";
import "./App.css";
import Index from "./components/navbar/index";
import Second from "./components/navbar/secondcontainer/second";
import Third from "./components/navbar/thirdcontainer/thirdcontainer";
import Subfour from "./components/navbar/fourthcontainer/subfour";
import Banner from "./components/navbar/Banner/Banner";
import ITsection from "./components/navbar/ITsection/ITsection";
import Image1 from "./components/navbar/image/web-programming.png";
import Image2 from "./components/navbar/image/secure.png";
function App() {
  return (
    <div className="App">
      <Index />
      <Second />
      <Third />
      <Subfour />
      <Banner />
      <ITsection
        image={Image1}
        heading="Web Development"
        content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
      />
      <ITsection
        image={Image2}
        heading="Server Security"
        content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
      />
      <ITsection />
    </div>
  );
}

export default App;
