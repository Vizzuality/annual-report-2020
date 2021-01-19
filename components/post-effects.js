import { EffectComposer, Noise } from "react-postprocessing"
import { BlendFunction } from 'postprocessing'

const Effects = () => (
  <EffectComposer>
    <Noise opacity={0.5}/>
  </EffectComposer>
);

export default Effects;
