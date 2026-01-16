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

  const [normalMap] = useTexture(["/dog_normals.jpg"]).map((texture) => {
    texture.flipY = false;
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  });

  const [
    mat1,
    mat2,
    mat3,
    mat4,
    mat5,
    mat6,
    mat7,
    mat8,
    mat9,
    mat10,
    mat11,
    mat12,
    mat13,
    mat14,
    mat15,
    mat16,
    mat17,
    mat18,
    mat19,
    mat20,
  ] = useTexture([
    "/matcap/mat-1.png",
    "/matcap/mat-2.png",
    "/matcap/mat-3.png",
    "/matcap/mat-4.png",
    "/matcap/mat-5.png",
    "/matcap/mat-6.png",
    "/matcap/mat-7.png",
    "/matcap/mat-8.png",
    "/matcap/mat-9.png",
    "/matcap/mat-10.png",
    "/matcap/mat-11.png",
    "/matcap/mat-12.png",
    "/matcap/mat-13.png",
    "/matcap/mat-14.png",
    "/matcap/mat-15.png",
    "/matcap/mat-16.png",
    "/matcap/mat-17.png",
    "/matcap/mat-18.png",
    "/matcap/mat-19.png",
    "/matcap/mat-20.png",
  ]).map((texture) => {
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

  const material = useRef({
    uMatcap1: { value: mat19 },
    uMatcap2: { value: mat2 },
    uProgress: { value: 1.0 },
  });

  const dogMaterial = new THREE.MeshMatcapMaterial({
    matcap: mat2,
    normalMap: normalMap,
  });

  const branchMaterial = new THREE.MeshMatcapMaterial({
    matcap: branchMap,
    normalMap: branchNormalMap,
  });

  function onBeforeCompile(shader) {
    shader.uniforms.uMatcapTexture1 = material.current.uMatcap1;
    shader.uniforms.uMatcapTexture2 = material.current.uMatcap2;
    shader.uniforms.uProgress = material.current.uProgress;

    // Store reference to shader uniforms for GSAP animation

    shader.fragmentShader = shader.fragmentShader.replace(
      "void main() {",
      `
        uniform sampler2D uMatcapTexture1;
        uniform sampler2D uMatcapTexture2;
        uniform float uProgress;

        void main() {
        `
    );

    shader.fragmentShader = shader.fragmentShader.replace(
      "vec4 matcapColor = texture2D( matcap, uv );",
      `
          vec4 matcapColor1 = texture2D( uMatcapTexture1, uv );
          vec4 matcapColor2 = texture2D( uMatcapTexture2, uv );
          float transitionFactor  = 0.2;
          
          float progress = smoothstep(uProgress - transitionFactor,uProgress, (vViewPosition.x+vViewPosition.y)*0.5 + 0.5);

          vec4 matcapColor = mix(matcapColor2, matcapColor1, progress );
        `
    );
  }

  dogMaterial.onBeforeCompile = onBeforeCompile;

  branchMaterial.onBeforeCompile = onBeforeCompile;

  model.scene.traverse((child) => {
    if (child.name.includes("DOG")) {
      child.material = dogMaterial;
    } else {
      child.material = branchMaterial;
    }
  });

  const dogRef = useRef(model);

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        startTrigger: "#section-1",
        endTrigger: "#section-4",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.to(dogRef.current.scene.position, {
      z: "-=0.6",
      y: "+=0.1",
    })
      .to(dogRef.current.scene.rotation, {
        x: `+=${Math.PI / 18}`,
      })
      .to(
        dogRef.current.scene.rotation,
        {
          y: `-=${Math.PI}`,
          x: `-=${Math.PI / 18}`,
        },
        "third"
      )
      .to(
        dogRef.current.scene.position,
        {
          x: "-=0.4",
          y: "-=0.05",
          z: "+=0.5",
        },
        "third"
      );
  }, []);

  useEffect(() => {
    document
      .querySelector(`.project[img-title="tomorrowland"]`)
      .addEventListener("mouseenter", () => {
        material.current.uMatcap1.value = mat19;
        gsap.to(material.current.uProgress, {
          value: 0.0,
          duration: 0.3,
          onComplete: () => {
            material.current.uMatcap2.value = material.current.uMatcap1.value;
            material.current.uProgress.value = 1.0;
          },
        });
      });
    document
      .querySelector(`.project[img-title="navy-pier"]`)
      .addEventListener("mouseenter", () => {
        material.current.uMatcap1.value = mat8;

        gsap.to(material.current.uProgress, {
          value: 0.0,
          duration: 0.3,
          onComplete: () => {
            material.current.uMatcap2.value = material.current.uMatcap1.value;
            material.current.uProgress.value = 1.0;
          },
        });
      });
    document
      .querySelector(`.project[img-title="msi-chicago"]`)
      .addEventListener("mouseenter", () => {
        material.current.uMatcap1.value = mat9;

        gsap.to(material.current.uProgress, {
          value: 0.0,
          duration: 0.3,
          onComplete: () => {
            material.current.uMatcap2.value = material.current.uMatcap1.value;
            material.current.uProgress.value = 1.0;
          },
        });
      });
    document
      .querySelector(`.project[img-title="louises-phone"]`)
      .addEventListener("mouseenter", () => {
        material.current.uMatcap1.value = mat12;

        gsap.to(material.current.uProgress, {
          value: 0.0,
          duration: 0.3,
          onComplete: () => {
            material.current.uMatcap2.value = material.current.uMatcap1.value;
            material.current.uProgress.value = 1.0;
          },
        });
      });
    document
      .querySelector(`.project[img-title="kikk-festival-2018"]`)
      .addEventListener("mouseenter", () => {
        material.current.uMatcap1.value = mat10;

        gsap.to(material.current.uProgress, {
          value: 0.0,
          duration: 0.3,
          onComplete: () => {
            material.current.uMatcap2.value = material.current.uMatcap1.value;
            material.current.uProgress.value = 1.0;
          },
        });
      });
    document
      .querySelector(`.project[img-title="the-kennedy-center"]`)
      .addEventListener("mouseenter", () => {
        material.current.uMatcap1.value = mat8;

        gsap.to(material.current.uProgress, {
          value: 0.0,
          duration: 0.3,
          onComplete: () => {
            material.current.uMatcap2.value = material.current.uMatcap1.value;
            material.current.uProgress.value = 1.0;
          },
        });
      });
    document
      .querySelector(`.project[img-title="royal-opera"]`)
      .addEventListener("mouseenter", () => {
        material.current.uMatcap1.value = mat13;

        gsap.to(material.current.uProgress, {
          value: 0.0,
          duration: 0.3,
          onComplete: () => {
            material.current.uMatcap2.value = material.current.uMatcap1.value;
            material.current.uProgress.value = 1.0;
          },
        });
      });
    document.querySelector(`.projects`).addEventListener("mouseleave", () => {
      material.current.uMatcap1.value = mat2;

      gsap.to(material.current.uProgress, {
        value: 0.0,
        duration: 0.3,
        onComplete: () => {
          material.current.uMatcap2.value = material.current.uMatcap1.value;
          material.current.uProgress.value = 1.0;
        },
      });
    });
  }, []);

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
