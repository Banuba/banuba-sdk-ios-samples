'use strict';

require('bnb_js/global');
const modules_scene_index = require('../scene/index.js');

const NeckSmoothingVertexShader = "modules/neck/neck_smoothing.vert";

const NeckSmoothingFragmentShader = "modules/neck/neck_smoothing.frag";

class Neck {
    constructor() {
        Object.defineProperty(this, "_smoothing", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new modules_scene_index.Mesh(new modules_scene_index.PlaneGeometry(), new modules_scene_index.ShaderMaterial({
                vertexShader: NeckSmoothingVertexShader,
                fragmentShader: NeckSmoothingFragmentShader,
                uniforms: {
                    tex_camera: new modules_scene_index.Camera(),
                    tex_mask: new modules_scene_index.SegmentationMask("NECK_SMOOTHING"),
                    var_neck_smoothing_strength: new modules_scene_index.Vector4(0),
                },
            }))
        });
        const onChange = () => {
            const [smoothing] = this._smoothing.material.uniforms.var_neck_smoothing_strength.value();
            const isNeckSmoothed = smoothing > 0;
            this._smoothing.visible(isNeckSmoothed);
            if (isNeckSmoothed)
                this._smoothing.material.uniforms.tex_mask.enable();
            else
                this._smoothing.material.uniforms.tex_mask.disable();
        };
        this._smoothing.material.uniforms.var_neck_smoothing_strength.subscribe(onChange);
        modules_scene_index.add(this._smoothing);
    }
    smoothing(strength) {
        if (typeof strength !== "undefined")
            this._smoothing.material.uniforms.var_neck_smoothing_strength.value(strength);
        return this._smoothing.material.uniforms.var_neck_smoothing_strength.value()[0];
    }
    clear() {
        this.smoothing(0);
    }
}

exports.Neck = Neck;
