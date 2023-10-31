import "./App.css";

import Section from "./components/Section";
import data from "./assets/data.json";
import logo from "./assets/logo-m6.png";

function App() {
  return (
    <>
      <div className="header-centered">
        <img src={logo} alt="logo m6" />
      </div>

      {data.map((elem, i) => {
        return (
          <Section
            key={i}
            time={elem.time}
            title={elem.title}
            type={elem.type}
            duration={elem.duration}
            image={elem.image}
            isUnseen={elem.isUnseen}
            direct={elem.direct}
          />
        );
      })}
    </>
  );
}

export default App;
