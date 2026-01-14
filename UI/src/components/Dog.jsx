import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  OrbitControls,
  useAnimations,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { use, useEffect, useRef } from "react";
import * as THREE from "three";

const Dog = () => {
  const model = useGLTF("/models/dog.drc.glb");
  useThree(({ camera, scene, gl }) => {
    camera.position.z = 0.55;
    gl.toneMapping = THREE.ReinhardToneMapping;
    gl.outputColorSpace = THREE.SRGBColorSpace;
    const { actions } = useAnimations(model.animations, model.scene);

    useEffect(() => {
      actions["Take 001"].play();
    }, [actions]);
  });

  const [normalMap, sampleMatCap] = useTexture([
    "/dog_normals.jpg",
    "/matcap/mat-2.png",
  ]).map((texture) => {
    texture.flipY = false;
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  });

  const [branchMap, branchNormalMap] = useTexture([
    "/branches_diffuse.jpeg",
    "/branches_normals.jpeg",
  ]).map((texture) => {
    texture.flipY = true;
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  });

  const dogMaterial = new THREE.MeshMatcapMaterial({
    matcap: sampleMatCap,
    normalMap: normalMap,
  });

  const branchMaterial = new THREE.MeshMatcapMaterial({
    map: branchMap,
    normalMap: branchNormalMap,
  });

  model.scene.traverse((child) => {
    if (child.name.includes("DOG")) {
      child.material = dogMaterial;
    } else {
      child.material = branchMaterial;
    }
  });

  const dogRef = useRef(model)

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        startTrigger:"#section-1",
        endTrigger:"#section-3",
        start:"top top",
        end:"bottom bottom",
        scrub:true,
        markers:true,
      }
    })

    tl.to(dogRef.current.scene.position, {
      z:"-=0.6",
      y:"+=0.1",
    })
    .to(dogRef.current.scene.rotation, {
      x:`+=${Math.PI / 18}`,
    })
  },[])

  return (
    <>
      <primitive
        object={model.scene}
        position={[0.14, -0.58, 0]}
        rotation={[0, Math.PI / 3.8, 0]}
      />
      <directionalLight position={[0, 5, 5]} color={"white"} />
    </>
  );
};

export default Dog;
