'use strict';

require('bnb_js/global');
const modules_scene_index = require('../scene/index.js');

const GlossyBlushMesh = "modules/glossy-blush/GlosE.bsm2";

const Diffuse = "modules/glossy-blush/Blush_Glossy.png";
const Normal = "modules/glossy-blush/Blush_normal.png";

const brdf = "modules/glossy-blush/brdf.ktx";
const ibl_spec = "modules/glossy-blush/ibl_spec.ktx";
const ibl_diff = "modules/glossy-blush/ibl_diff.ktx";


const GlossyBlushFragmentShader = "modules/glossy-blush/GlosE.frag";

const GlossyBlushVertexShader = "modules/glossy-blush/GlosE.vert";

class GlossyBlush {
    constructor() {
        Object.defineProperty(this, "_face", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new modules_scene_index.Mesh(new modules_scene_index.FaceGeometry(), [])
        });
        Object.defineProperty(this, "_gblush", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new modules_scene_index.Mesh(new modules_scene_index.Geometry(GlossyBlushMesh), new modules_scene_index.ShaderMaterial({
                vertexShader: GlossyBlushVertexShader,
                fragmentShader: GlossyBlushFragmentShader,
                uniforms: {
                    tex_diffuse: new modules_scene_index.Image(Diffuse),
                    tex_normal: new modules_scene_index.Image(Normal),
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
                    js_metallic: new modules_scene_index.Vector4(1, 0, 0, 0),
                    js_roughness: new modules_scene_index.Vector4(1, 0, 0, 0),
                    js_opacity: new modules_scene_index.Vector4(1, 0, 0, 0),
                    js_color: new modules_scene_index.Vector4(1, 1, 1, 0),
                    js_normal: new modules_scene_index.Vector4(1, 0, 0, 0)

                },
                builtIns: ["bnb_BONES","bnb_UVMORPH", "bnb_MORPH"],
                state: {
                    backFaces: true,
                    zWrite: true,
                },
            }))
        });

        this._face.add(this._gblush);
        this._gblush.visible(false);
        modules_scene_index.add(this._face, this._gblush);
    }
    setLightsPos(lightpos){
        this._gblush.material.uniforms.js_lights_eyeshadow_pos0.value(lightpos[0])
        this._gblush.material.uniforms.js_lights_eyeshadow_pos1.value(lightpos[1])
        this._gblush.material.uniforms.js_lights_eyeshadow_pos2.value(lightpos[2])
        this._gblush.material.uniforms.js_lights_eyeshadow_pos3.value(lightpos[3])
    }

    setLightsRadiance(radiance){
        this._gblush.material.uniforms.js_lights_eyeshadow_radiance0.value(radiance[0])
        this._gblush.material.uniforms.js_lights_eyeshadow_radiance1.value(radiance[1])
        this._gblush.material.uniforms.js_lights_eyeshadow_radiance2.value(radiance[2])
        this._gblush.material.uniforms.js_lights_eyeshadow_radiance3.value(radiance[3])
    }

    setDiffuse(filename) {
        this._gblush.material.uniforms.tex_diffuse.load("images/"+filename);
    }
    setNormal(filename) {
        this._gblush.material.uniforms.tex_normal.load("images/"+filename);
    }
    color(color) {
        if (typeof color !== "undefined")
            this._gblush.material.uniforms.js_color.value(color);
        return this._gblush.material.uniforms.js_color.value().join(" ");
    }
    opacity(alpha) {
        if (typeof color !== "undefined")
            this._gblush.material.uniforms.js_opacity.x.value(alpha);
    }
    roughness(alpha) {
        if (typeof color !== "undefined")
            this._gblush.material.uniforms.js_roughness.x.value(alpha);
    }
    metallic(alpha) {
        if (typeof color !== "undefined")
            this._gblush.material.uniforms.js_metallic.x.value(alpha);
    }
    normal(alpha) {
        if (typeof color !== "undefined")
            this._gblush.material.uniforms.js_normal.x.value(alpha);
    }
    enable(i){
            modules_scene_index.enable("EYES_CORRECTION", this);
            this._gblush.material.uniforms.tex_face_mask.enable();
            this._gblush.visible(true);
    }
    disable(i){
            modules_scene_index.disable("EYES_CORRECTION", this);
            this._gblush.material.uniforms.tex_face_mask.disable();
            this._gblush.visible(false);
    }
}

exports.GlossyBlush = GlossyBlush;
