import React, { useState } from "react";
import "./Hero.css";
import Header from "../header/Header";
import Heart from "../../assets/13.png";
import hero_image from "../../assets/3.png";
import hero_image_back from "../../assets/6.png";
import Calories from "../../assets/2.svg";
import { motion } from "framer-motion";
import Modal from "../../components/Portal/Modal";
import Modal1 from "../../components/Portal/Modal";
import Modal2 from "../../components/Portal/Modal";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  // const [click, setClick] = useState(false);
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const Toggle = () => setModal(!modal);
  const Toggle1 = () => setModal1(!modal1);
  const Toggle2 = () => setModal2(!modal2);

  return (
    <div className="hero" id="start">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>Świadomość determinuje istnienie</span>
        </div>
        <div className="hero-text">
          <div>
            <div className="over">
              <span className="stroke-text">
                <p>dr</p>&nbsp;Michio
              </span>
              <span>&nbsp;Kaku</span>
            </div>
          </div>
          <div>
            <span className="fiz"> fizyk teoretyk</span>
          </div>
          <div>
            <span>
              Amerykanin pochodzenia japońskiego, profesor, badacz teorii strun,
              popularyzator nauki, futurolog, autor ponad 70 prac i&nbsp;wielu
              książek, z&nbsp;których kilka stało się bestsellerami, gospodarz
              programów radiowych i&nbsp;telewizyjnych.
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>astrofizyk</span>
            <span>profesor</span>
          </div>
          <div>
            <span>badacz teorii strun</span>
            <span>kierownik katedry fizyki teoretycznej</span>
          </div>
          <div>
            <span>futurolog</span>
            <span>popularyzator nauki</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn" onClick={() => Toggle()}>
            Więcej
          </button>
          <Modal
            show={modal}
            close={Toggle}
            title="Dlaczego nauka kłóci się z religią?"
          >
            <p>
              Przyznał, że jego rodzice byli buddystami i&nbsp;wierzyli w
              nirwanę, w&nbsp;której „nie ma czasu, początku i&nbsp;końca”.
              Wysyłali go jednak co niedzielę do kościoła prezbiteriańskiego,
              gdzie uczył się o&nbsp;Księdze Rodzaju i&nbsp;stworzeniu
              wszechświata w&nbsp;7 dni.
            </p>
            <br />
            <p>
              <em>
                stanwiedzy.pl/ciekawostki/michio-kaku-czy-bog-istnieje-teorie-dowody
              </em>
            </p>
          </Modal>
          <button className="btn" onClick={() => Toggle1()}>
            Czytaj
          </button>
          <Modal1
            show={modal1}
            close={Toggle1}
            title="Udowodnić istnienie Boga – nauka kontra religia"
          >
            <p>
              Czy można udowodnić istnienia Boga? Jak stwierdził Kaku w rozmowie
              z Big Think, są dwa rodzaje boga. Pierwszy jest bogiem osobistym,
              „do którego się modlimy i daje nam rower na święta”. Drugim jest
              Bóg Spinozy, twórca porządku i harmonii, w którego wierzył Albert
              Einstein. Kaku zwraca przy okazji uwagę jak harmonijny, prosty i
              uporządkowany jest wszechświat.
            </p>
            <br />
            <p>
              <em>
                stanwiedzy.pl/ciekawostki/michio-kaku-czy-bog-istnieje-teorie-dowody
              </em>
            </p>
          </Modal1>
        </div>
      </div>
      <div className="right-h">
        <button className="btn" onClick={() => Toggle2()}>
          Więcej
        </button>
        <Modal2 show={modal2} close={Toggle2} title="Bóg jest matematykiem?">
          <p>
            Jednocześnie w innym wywiadzie Kaku przyznał, że wierzy, iż
            wszechświat został stworzony przez uniwersalną inteligencję, a nie
            przypadek. Czym ona jest? Fizyk stwierdził, że „ostatecznym
            rozwiązaniem tej tajemnicy może być to, że Bóg jest matematykiem„.
          </p>
          <br />
          <p>
            <em>
              stanwiedzy.pl/ciekawostki/michio-kaku-czy-bog-istnieje-teorie-dowody
            </em>
          </p>
        </Modal2>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="..." />
          <span>Gadżety</span>
          <span>Miecz świetlny</span>
          <span>Roboty</span>
        </motion.div>
        <img src={hero_image} alt="..." className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt="..."
          className="hero-image-back"
        />
        <motion.div
          initial={{ right: "7rem" }}
          whileInView={{ right: "38rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="..." className="kal" />
          <div>
            <span>Zainteresowania</span>
            <span>Fantastyka</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
