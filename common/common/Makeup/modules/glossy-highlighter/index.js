'use strict';

require('bnb_js/global');
const modules_scene_index = require('../scene/index.js');

const GlossyHighliqhterMesh = "modules/glossy-highlighter/GlosH.bsm2";

const Diffuse = "modules/glossy-highlighter/Diffuse.png";
const Normal = "modules/glossy-highlighter/Normal.png";
const Metallic = "modules/glossy-highlighter/Metallic.png";
const Roughness = "modules/glossy-highlighter/Roughness.png";

const brdf = "modules/glossy-highlighter/brdf.ktx";
const ibl_spec = "modules/glossy-highlighter/ibl_spec.ktx";
const ibl_diff = "modules/glossy-highlighter/ibl_diff.ktx";



const GlossyHighliqhterFragmentShader = "modules/glossy-highlighter/GlosH.frag";

const GlossyHighliqhterVertexShader = "modules/glossy-highlighter/GlosH.vert";

class GlossyHighliqhter {
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
            value: new modules_scene_index.Mesh(new modules_scene_index.Geometry(GlossyHighliqhterMesh), new modules_scene_index.ShaderMaterial({
                vertexShader: GlossyHighliqhterVertexShader,
                fragmentShader: GlossyHighliqhterFragmentShader,
                uniforms: {
                    tex_diffuse: new modules_scene_index.Image(Diffuse),
                    tex_normal: new modules_scene_index.Image(Normal),
                    tex_metallic: new modules_scene_index.Image(Metallic),
                    tex_roughness: new modules_scene_index.Image(Roughness),
                    tex_brdf: new modules_scene_index.Image(brdf),
                    tex_ibl_diff: new modules_scene_index.Image(ibl_diff),
                    tex_ibl_spec: new modules_scene_index.Image(ibl_spec),
                    tex_face_mask: new modules_scene_index.SegmentationMask("FACE"),
                    js_lights_pos0: new modules_scene_index.Vector4(80, 50, 100, 0),
                    js_lights_pos1: new modules_scene_index.Vector4(-80, 50, 100, 0),
                    js_lights_pos2: new modules_scene_index.Vector4(80, -50, 100, 0),
                    js_lights_pos3: new modules_scene_index.Vector4(-80, -50, 100, 0),
                    js_lights_radiance0: new modules_scene_index.Vector4(1, 0.9, 0.8, 0),
                    js_lights_radiance1: new modules_scene_index.Vector4(1, 0, 0, 0),
                    js_lights_radiance2: new modules_scene_index.Vector4(2, 2, 4, 0),
                    js_lights_radiance3: new modules_scene_index.Vector4(2, 2, 4, 0),
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
            this._geyeshadows.visible(true);
    }
    disable(i){
            modules_scene_index.disable("EYES_CORRECTION", this);
            this._geyeshadows.visible(false);
    }
}

exports.GlossyHighliqhter = GlossyHighliqhter;
