'use strict';

require('bnb_js/global');
const modules_scene_index = require('../scene/index.js');

const GlossyEyeshadowsMesh = "modules/glossy-eyeshadows/GlosE.bsm2";

const Diffuse = "modules/glossy-eyeshadows/Diffuse_shad.png";
const Normal = "modules/glossy-eyeshadows/Normal.png";
const Metallic = "modules/glossy-eyeshadows/Metallic_shad.png";
const Roughness = "modules/glossy-eyeshadows/Roughness_shad.png";

const brdf = "modules/glossy-eyeshadows/brdf.ktx";
const ibl_spec = "modules/glossy-eyeshadows/ibl_spec.ktx";
const ibl_diff = "modules/glossy-eyeshadows/ibl_diff.ktx";



const GlossyEyeshadowsFragmentShader = "modules/glossy-eyeshadows/GlosE.frag";

const GlossyEyeshadowsVertexShader = "modules/glossy-eyeshadows/GlosE.vert";

class GlossyEyeShadow {
    constructor() {
        Object.defineProperty(this, "_face", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new modules_scene_index.Mesh(new modules_scene_index.FaceGeometry(), [])
        });
        Object.defineProperty(this, "_geyeshadows", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new modules_scene_index.Mesh(new modules_scene_index.Geometry(GlossyEyeshadowsMesh), new modules_scene_index.ShaderMaterial({
                vertexShader: GlossyEyeshadowsVertexShader,
                fragmentShader: GlossyEyeshadowsFragmentShader,
                uniforms: {
                    tex_diffuse: new modules_scene_index.Image(Diffuse),
                    tex_normal: new modules_scene_index.Image(Normal),
                    tex_metallic: new modules_scene_index.Image(Metallic),
                    tex_roughness: new modules_scene_index.Image(Roughness),
                    tex_brdf: new modules_scene_index.Image(brdf),
                    tex_ibl_diff: new modules_scene_index.Image(ibl_diff),
                    tex_ibl_spec: new modules_scene_index.Image(ibl_spec),
                    tex_face_mask: new modules_scene_index.SegmentationMask("FACE"),
                    js_lights_eyeshadow_pos0: new modules_scene_index.Vector4(80, 50, 100, 0),
                    js_lights_eyeshadow_pos1: new modules_scene_index.Vector4(-80, 50, 100, 0),
                    js_lights_eyeshadow_pos2: new modules_scene_index.Vector4(80, -50, 100, 0),
                    js_lights_eyeshadow_pos3: new modules_scene_index.Vector4(-80, -50, 100, 0),
                    js_lights_eyeshadow_radiance0: new modules_scene_index.Vector4(1, 0.9, 0.8, 0),
                    js_lights_eyeshadow_radiance1: new modules_scene_index.Vector4(1, 0, 0, 0),
                    js_lights_eyeshadow_radiance2: new modules_scene_index.Vector4(2, 2, 4, 0),
                    js_lights_eyeshadow_radiance3: new modules_scene_index.Vector4(2, 2, 4, 0),
                },
                builtIns: ["bnb_BONES","bnb_UVMORPH_FISHEYE", "bnb_MORPH"],
                state: {
                    backFaces: true,
                    zWrite: true,
                },
            }))
        });

        this._face.add(this._geyeshadows);
        this._geyeshadows.visible(false);

        modules_scene_index.add(this._face, this._geyeshadows);
    }
    setLightsPos(lightpos){
        this._geyeshadows.material.uniforms.js_lights_eyeshadow_pos0.value(lightpos[0])
        this._geyeshadows.material.uniforms.js_lights_eyeshadow_pos1.value(lightpos[1])
        this._geyeshadows.material.uniforms.js_lights_eyeshadow_pos2.value(lightpos[2])
        this._geyeshadows.material.uniforms.js_lights_eyeshadow_pos3.value(lightpos[3])
    }

    setLightsRadiance(radiance){
        this._geyeshadows.material.uniforms.js_lights_eyeshadow_radiance0.value(radiance[0])
        this._geyeshadows.material.uniforms.js_lights_eyeshadow_radiance1.value(radiance[1])
        this._geyeshadows.material.uniforms.js_lights_eyeshadow_radiance2.value(radiance[2])
        this._geyeshadows.material.uniforms.js_lights_eyeshadow_radiance3.value(radiance[3])
    }

    setDiffuse(filename) {
        this._geyeshadows.material.uniforms.tex_diffuse.load("images/"+filename);
    }
    setNormal(filename) {
        this._geyeshadows.material.uniforms.tex_normal.load("images/"+filename);
    }
    setMetallic(filename) {
        this._geyeshadows.material.uniforms.tex_metallic.load("images/"+filename);
    }
    setRoughness(filename) {
        this._geyeshadows.material.uniforms.tex_roughness.load("images/"+filename);
    }
    enable(i){
            modules_scene_index.enable("EYES_CORRECTION", this);
            this._geyeshadows.material.uniforms.tex_face_mask.enable();
            this._geyeshadows.visible(true);
    }
    disable(i){
            modules_scene_index.disable("EYES_CORRECTION", this);
            this._geyeshadows.material.uniforms.tex_face_mask.disable();
            this._geyeshadows.visible(false);
    }
}

exports.GlossyEyeShadow = GlossyEyeShadow;
