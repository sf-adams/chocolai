import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import { Button } from "../components";
import state from "../store";
import { slideAnimation, headerVariants } from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img src="./threejs.png" alt="threejs" className="" />
          </motion.header>

          <motion.div
            className="home-content"
            variants={headerVariants.container}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.div
              variants={headerVariants.title}
              initial="initial"
              animate="animate"
            >
              <h1 className="head-text">
                LET'S <br className="break" /> DO IT.
              </h1>
            </motion.div>

            <motion.div
              variants={headerVariants.content}
              initial="initial"
              animate="animate"
              className="copy"
            >
              <p className="copy-text">
                Create your unique and exclusive chocolate bar with our
                brand-new 3D customisation tool.{" "}
                <strong>Unleash your imagination</strong> and define your own
                style.
              </p>
            </motion.div>

            <Button
              type="filled"
              title="Customise it"
              handleClick={() => (state.intro = false)}
              customClass="hero-button"
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
