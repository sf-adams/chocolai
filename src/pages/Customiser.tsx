import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import config from "../config/config";
import state from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants.js";
import { fadeAnimation, slideAnimation } from "../config/motion.js";

import { AIPicker, ColorPicker, FilePicker, Button, Tab } from "../components";

const Customiser = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="customiser"
            {...slideAnimation("left")}
          >
            <div className="tab-wrapper tabs glassmorphism">
              <div className="tab">
                {EditorTabs.map((tab: any) => (
                  <Tab key={tab.name} tab={tab} handleClick={() => {}} />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div className="button-wrapper">
            <Button
              type="filled"
              title="Go Back"
              handleClick={() => (state.intro = true)}
              customClass="back-button"
            ></Button>
          </motion.div>

          <motion.div
            className="filter-tabs-container"
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab: any) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab=""
                handleClick={() => {}}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customiser;
