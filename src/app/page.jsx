"use client";
import Image from "next/image";
import styles from "./home.module.css";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
export default function Home() {
  const [popup, setpopup] = useState(false);

  const OpenPopup = () => {
    if (!popup) {
      setpopup(true);
    } else {
      setpopup(false);
    }
  };

  const targetRef = useRef(null);
  const scrollToBlock = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const targetRef2 = useRef(null);
  const scrollToBlock2 = () => {
    targetRef2.current.scrollIntoView({ behavior: "smooth" });
  };

  const targetRef3 = useRef(null);
  const scrollToBloc3 = () => {
    targetRef3.current.scrollIntoView({ behavior: "smooth" });
  };

  const targetRef4 = useRef(null);
  const scrollToBlock4 = () => {
    targetRef4.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.blockNav}>
          <a href="">MuIZI</a>
          <div className={styles.navBtn}>
            <button onClick={scrollToBlock}>Home</button>
            <button onClick={scrollToBlock2}>Skills</button>
            <button onClick={scrollToBloc3}>Projects</button>
            <button onClick={scrollToBlock4}>Contact</button>
          </div>
          <button onClick={OpenPopup} className={styles.popupOpen}>
            <Image
              src="/list.svg"
              alt="Menu"
              width={35}
              height={35}
              className={styles.burger}
            />
          </button>
        </div>
      </nav>
      <motion.div
        initial={{ opacity: 0, y: -20, display: "none" }}
        animate={
          popup
            ? { opacity: 1, y: 0, display: "flex" }
            : { opacity: 0, y: -20, display: "none" }
        }
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2, ease: "linear" }}
        className={styles.popup}
      >
        <button onClick={scrollToBlock}>Home</button>
        <button onClick={scrollToBlock2}>Skills</button>
        <button onClick={scrollToBloc3}>Projects</button>
        <button onClick={scrollToBlock4}>Contact</button>
      </motion.div>
      <section ref={targetRef} id="home" className={styles.secHome}>
        <div className={styles.blockhome}>
          <h1>MuIZI</h1>
          <p className={styles.information}>
            I am a developer with a deep interest in creating scalable and
            efficient web applications. I work with both Frontend and Backend,
            striving to deliver seamless and user-friendly digital solutions.
          </p>
        </div>
      </section>
      <section ref={targetRef2} className={styles.secskills}>
        <div className={styles.blockskills}>
          <h1>Skills</h1>
          <h2>FrontEnd</h2>
          <div className={styles.blockfront}>
            <div className={styles.block}>
              <p>HTML</p>
              <p>advanced</p>
            </div>
            <div className={styles.block}>
              <p>CSS</p>
              <p>advanced</p>
            </div>
            <div className={styles.block}>
              <p>JavaScript</p>
              <p>intermediate</p>
            </div>
            <div className={styles.block}>
              <p>Next.js</p>
              <p>intermediate</p>
            </div>
            <div className={styles.block}>
              <p>Git</p>
              <p>intermediate</p>
            </div>
          </div>
          <h2>BackEnd</h2>
          <div className={styles.blockback}>
            <div className={styles.block}>
              <p>Python</p>
              <p>intermediate</p>
            </div>
            <div className={styles.block}>
              <p>Flask</p>
              <p>basic</p>
            </div>
            <div className={styles.block}>
              <p>Django</p>
              <p>intermediate</p>
            </div>
            <div className={styles.block}>
              <p>MySQL</p>
              <p>basic</p>
            </div>
            <div className={styles.block}>
              <p>Rest API</p>
              <p>basic</p>
            </div>
          </div>
        </div>
      </section>
      <section ref={targetRef3} className={styles.secprojects}>
        <div className={styles.blockprojects}>
          <h1>Projects</h1>
          <div className={styles.projectsgrid}>
            <div className={styles.oneproject}>
              <Image
                src="/projects/tcats.png"
                alt="project"
                width={275}
                height={200}
              />
              <p>TCats.uz</p>
              <a href="tcats.uz">View</a>
            </div>
            <div className={styles.oneproject}>
              <Image
                src="/projects/tcats.png"
                alt="project"
                width={275}
                height={200}
              />
              <p>TCats.uz</p>
              <a href="https://tcats.uz">View</a>
            </div>
          </div>
        </div>
      </section>

      <section ref={targetRef4} className={styles.seccontact}>
        <div className={styles.blockcontact}>
          <h1>Contact</h1>
          <div className={styles.contactgrid}>
            <div className={styles.onecontact}>
              <Image
                className={styles.svgs}
                width={24}
                height={24}
                alt="mail"
                src="/mail.svg"
              />
              <p className={styles.contacthead}>Email</p>
              <p className={styles.contactbody}>valiyevmuiz0407@gmail.com</p>
              <a target="_blank" href="mailto:valiyevmuiz0407@gmail.com">
                message
              </a>
            </div>
            <div className={styles.onecontact}>
              <Image
                className={styles.svgs}
                src="telegram.svg"
                alt="telegram"
                width={24}
                height={24}
              />
              <p className={styles.contacthead}>Telegram</p>
              <p className={styles.contactbody}>@muizxoja</p>
              <a target="_blank" href="https://t.me/muizxoja">
                message
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.blockfooter}>
          <h1>MuIZI</h1>
          <div className={styles.row}>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className={styles.rowsocial}>
            <a target="_blank" href="https://t.me/muizxoja">
              <Image
                className={styles.svgsfooter}
                src="/telegram white.svg"
                alt="telegram"
                width={24}
                height={24}
              />
            </a>
            <a target="_blank" href="https://github.com/MuizValiyev">
              <Image
                className={styles.svgsfooter}
                src="/github.svg"
                alt="github"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
