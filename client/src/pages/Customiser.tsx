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

  const [file, setFile] = useState<string>("");

  const [prompt, setPrompt] = useState<string>("");
  const [generatingImg, setGeneratingImg] = useState<boolean>(false);

  const [activeEditorTab, setActiveEditorTab] = useState<string>("");
  const [activeFilterTab, setActiveFilterTab] = useState<any>({
    logoShirt: true,
    stylishShirt: false,
  });

  // show tab content depending on active tab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />;
      case "filepicker":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      case "aipicker":
        return (
          <AIPicker
            prompt={prompt}
            setPrompt={setPrompt}
            generatingImg={generatingImg}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  const handleSubmit = async (type: any) => {
    if (!prompt) return alert("Please enter a prompt");

    try {
      setGeneratingImg(true);

      const response = await fetch(
        "https://chocolai.onrender.com/api/v1/dalle",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt,
          }),
        }
      );

      const data = await response.json();

      handleDecals(type, `data:image/png;base64,${data.photo}`);
    } catch (error) {
      alert(error);
    } finally {
      setGeneratingImg(false);
      setActiveEditorTab("");
    }
  };

  const handleDecals = (type: any, result: any) => {
    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;

    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  const readFile = (type: any) => {
    reader(file).then((result: any) => {
      handleDecals(type, result);
      setActiveEditorTab("");
    });
  };

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
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => setActiveEditorTab(tab.name)}
                    isActiveTab=""
                  />
                ))}

                {generateTabContent()}
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

          <button className="download-btn" onClick={downloadCanvasToImage}>
            <img
              src={download}
              alt="download_image"
              className="w-3/5 h-3/5 object-contain"
            />
          </button>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customiser;
