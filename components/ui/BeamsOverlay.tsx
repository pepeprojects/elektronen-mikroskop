'use client'

import Beams from './Beams'

export default function BeamsOverlay() {
  return (
    <div className="w-screen h-full absolute inset-0 pointer-events-none opacity-60">
      <Beams

    beamWidth={2}

    beamHeight={90}

    beamNumber={20}

    lightColor="#ffffff"

    speed={2}

    noiseIntensity={1.75}

    scale={0.2}

    rotation={90}

  />
    </div>
  )
}
