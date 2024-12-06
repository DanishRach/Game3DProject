import React, { useRef, useEffect } from 'react'
import { extend, useThree, useFrame } from '@react-three/fiber'
import { EffectComposer } from 'three/examples/jsm/Addons.js'
import { ShaderPass } from 'three/examples/jsm/Addons.js'
import { RenderPass } from 'three/examples/jsm/Addons.js'
import { UnrealBloomPass } from 'three/examples/jsm/Addons.js'
import { FilmPass } from 'three/examples/jsm/Addons.js'

extend({ EffectComposer, ShaderPass, RenderPass, UnrealBloomPass, FilmPass })

export default function Efek() {
  const composer = useRef()
  const { scene, gl, size, camera } = useThree()
  useEffect(() => void composer.current.setSize(size.width, size.height), [size])
  useFrame(() => composer.current.render(), 2)
  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" scene={scene} camera={camera} />
      <unrealBloomPass attachArray="passes" args={[undefined, 1.8, 1, 0]} />
    </effectComposer>
  )
}
