import "./App.css";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Join from "./components/join/Join";
import Plans from "./components/plans/Plans";
import Programs from "./components/programs/Programs";
import Reasons from "./components/reasons/Reasons";
import Testimonials from "./components/testimonials/Testimonials";
import CookieConsent from "react-cookie-consent";
import Scroll from "./Scroll";

function App() {
  return (
    <>
      <Scroll />
      <div className="App">
        <Hero />
        <Programs />
        <Reasons />
        <Plans />
        <Testimonials />
        <Join />
        <Footer />
        <CookieConsent
          debug={true}
          location="bottom"
          style={{
            background: "#333",
            textAlign: "left",
            paddingBottom: "1rem",
            fontSize: "16px",
            fontFamily: "Gideon Roman",
          }}
          buttonStyle={{
            color: "#333",
            background: "#fff",
            fontSize: "18px",
            fontFamily: "Gideon Roman",
            marginRight: "1rem",
          }}
          buttonText="OK, rozumiem"
          expires={365}
        >
          "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
          Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
          indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
          dotyczących cookies oznacza, że będą one zamieszczane w Państwa
          urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
          ustawień dotyczących cookies."
        </CookieConsent>
      </div>
    </>
  );
}

export default App;
