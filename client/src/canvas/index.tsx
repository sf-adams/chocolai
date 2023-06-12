import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import Shirt from "./Shirt";
import CameraRig from "./CameraRig";
import Backdrop from "./Backdrop";

const CanvasModel = () => {
  return (
    <div>
      <Canvas
        shadows
        camera={{ position: [0, 0, 0], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="canvas"
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />

        <CameraRig>
          <Backdrop />
          <Center>
            <Shirt />
          </Center>
        </CameraRig>
      </Canvas>
    </div>
  );
};

export default CanvasModel;
