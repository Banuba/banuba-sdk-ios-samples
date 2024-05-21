'use strict';

const makeup = require('./makeup.js');
require('bnb_js/timers.js')

Object.assign(globalThis, makeup.m);
/* Feel free to add your custom code below */

class FoundationClass{
    color(rgba){
        Skin.color(rgba)
        return rgba;
    }

    strength(s){
        Skin.softening(s)
        return s;
    }

    clear(){
        Skin.clear()
    }
}

class EyelashesClass{
    color(rgba){
        Makeup.lashes(rgba)
        return rgba;
    }

    set(f){
        Makeup.lashes("images/"+f)
        return f;
    }

    clear(){
        Makeup.lashes("")
        Makeup.lashes("0 0 0 0");
    }
}

class HighlighterClass{
    color(rgba){
        Makeup.highlighter(rgba)
        return rgba;
    }

    set(f){
        Makeup.highlighter("images/"+f)
        return f;
    }

    clear(){
        Makeup.highlighter("")
        Makeup.highlighter("0 0 0 0");
    }
}

class EyeshadowClass{
    color(rgba){
        Makeup.eyeshadow(rgba)
        return rgba;
    }

    set(f){
        Makeup.eyeshadow("images/"+f);
        return f;
    }

    clear(){
        Makeup.eyeshadow("")
        Makeup.eyeshadow("0 0 0 0");
    }
}

class BlushClass{
    color(rgba){
        Makeup.blushes(rgba)
        return rgba;
    }

    set(f){
        Makeup.blushes("images/"+f)
        return f;
    }

    clear(){
        Makeup.blushes("")
        Makeup.blushes("0 0 0 0");
    }
}

class EyelinerClass{
    color(rgba){
        Makeup.eyeliner(rgba)
        return rgba;
    }

    set(f){
        Makeup.eyeliner("images/"+f)
        return f;
    }

    clear(){
        Makeup.eyeliner("")
        Makeup.eyeliner("0 0 0 0");
    }
}

class ContourClass{
    color(rgba){
        Makeup.contour(rgba)
        return rgba;
    }

    set(f){
        Makeup.contour("images/"+f)
        return f;
    }

    clear(){
        Makeup.contour("")
        Makeup.contour("0 0 0 0");
    }
}

class EyesColorClass{
    color(rgba){
        Eyes.color(rgba)
        return rgba;
    }

    clear(){
        Eyes.clear()
    }
}


const EyesColor = new EyesColorClass();
const Contour = new ContourClass();
const Eyeliner = new EyelinerClass();
const Blush = new BlushClass();
const Eyeshadow = new EyeshadowClass();
const Highlighter = new HighlighterClass();
const Eyelashes = new EyelashesClass();
const Foundation = new FoundationClass();

var glossyEyeShadowPackData = {
    TexturesFolderPath: "",
    Shadows:{
        Default: {
            lights: {
                pos: [
                    "80 50 100",
                    "-80 50 100",
                    "80 -50 100",
                    "-80 -50 100"
                ],
                radiance: [
                    "1 0.9 0.8",
                    "1 0 0",
                    "2 2 4",
                    "2 2 4"
                ]
            },
            textures:{
                diffuse: "Diffuse_shad.png",
                metallic: "Normal.png",
                normal: "Metallic_shad.png",
                roughness: "Roughness_shad.png"
            }
        },
        ShadowBeige: {
            lights: {
                pos: [
                    "80 50 100",
                    "-800 50 100",
                    "80 -50 100",
                    "-800 -50 100"
                ],
                radiance: [
                    "0.9 0.3 0.4",
                    "1 1 1",
                    "1 1 1",
                    "1 1 1"
                ]
            },
            textures:{
                diffuse: "ShadowBeige_Color.png",
                metallic: "metallic_low.png",
                normal: "Normal_low.png",
                roughness: "Roughness_strong.png"
            }
        },
        ShadowBlack: {
            lights: {
                pos: [
                    "80 50 100",
                    "-800 50 100",
                    "80 -50 100",
                    "-80 -50 100"
                ],
                radiance: [
                    "1 0.9 0.8",
                    "1 0 0",
                    "2 2 4",
                    "2 2 4"
                ]
            },
            textures:{
                diffuse: "ShadowBlack_Color.png",
                metallic: "metallic_middle.png",
                normal: "Normal_strong.png",
                roughness: "Roughness_high.png"
            }
        },
        ShadowBlue: {
            lights: {
                pos: [
                    "80 50 100",
                    "-80 50 100",
                    "80 -50 100",
                    "-80 -50 100"
                ],
                radiance: [
                    "1 1 1",
                    "1 1 1",
                    "1 1 1",
                    "1 1 1"
                ]
            },
            textures:{
                diffuse: "ShadowBlue_Color.png",
                metallic: "metallic_middle.png",
                normal: "Normal_strong.png",
                roughness: "Roughness_high.png"
            }
        },
        ShadowBrown: {
            lights: {
                pos: [
                    "800 50 100",
                    "-800 50 100",
                    "800 -50 100",
                    "-800 -50 100"
                ],
                radiance: [
                    "0.9 0.3 0.4",
                    "1 1 1",
                    "1 1 1",
                    "1 1 1"
                ]
            },
            textures:{
                diffuse: "ShadowBrown_Color.png",
                metallic: "metallic_low.png",
                normal: "Normal_strong.png",
                roughness: "Roughness_strong.png"
            }
        },
        ShadowBrownDark: {
            lights: {
                pos: [
                    "800 50 100",
                    "-800 50 100",
                    "800 -50 100",
                    "-800 -50 100"
                ],
                radiance: [
                    "0.9 0.3 0.4",
                    "1 1 1",
                    "1 1 1",
                    "1 1 1"
                ]
            },
            textures:{
                diffuse: "ShadowBrownDark_Color.png",
                metallic: "metallic_low.png",
                normal: "Normal_strong.png",
                roughness: "Roughness_strong.png"
            }
        },
        ShadowBrownLight: {
            lights: {
                pos: [
                    "800 50 100",
                    "-800 50 100",
                    "800 -50 100",
                    "-800 -50 100"
                ],
                radiance: [
                    "0.9 0.3 0.4",
                    "1 1 1",
                    "1 1 1",
                    "1 1 1"
                ]
            },
            textures:{
                diffuse: "ShadowBrownLight_Color.png",
                metallic: "metallic_low.png",
                normal: "Normal_strong.png",
                roughness: "Roughness_strong.png"
            }
        },
        ShadowCappuccino: {
            lights: {
                pos: [
                    "80 50 100",
                    "-80 50 100",
                    "80 -50 100",
                    "-80 -50 100"
                ],
                radiance: [
                    "1 1 1",
                    "1 1 1",
                    "1 1 1",
                    "1 1 1"
                ]
            },
            textures:{
                diffuse: "ShadowCappuccino_Color.png",
                metallic: "metallic_middle.png",
                normal: "Normal_strong.png",
                roughness: "Roughness_middle.png"
            }
        },
        ShadowGlossyPink: {
            lights: {
                pos: [
                    "80 50 100",
                    "-80 50 100",
                    "80 -50 100",
                    "-80 -50 100"
                ],
                radiance: [
                    "1.3 1 1",
                    "1.3 1 1",
                    "2 1 2",
                    "2 1 2"
                ]
            },
            textures:{
                diffuse: "ShadowGlossyPink_Color.png",
                metallic: "metallic_high.png",
                normal: "Normal_strong.png",
                roughness: "Roughness_low.png"
            }
        },
        ShadowGray: {
            lights: {
                pos: [
                    "80 50 100",
                    "-80 50 100",
                    "80 -50 100",
                    "-80 -50 100"
                ],
                radiance: [
                    "1 1 1",
                    "1 1 1",
                    "1 1 1",
                    "1 1 1"
                ]
            },
            textures:{
                diffuse: "ShadowGray_Color.png",
                metallic: "metallic_high.png",
                normal: "Normal_strong.png",
                roughness: "Roughness_low.png"
            }
        },
        ShadowPink: {
            lights: {
                pos: [
                    "80 50 100",
                    "-800 50 100",
                    "80 -50 100",
                    "-800 -50 100"
                ],
                radiance: [
                    "0.9 0.3 0.4",
                    "1 1 1",
                    "1 1 1",
                    "1 1 1"
                ]
            },
            textures:{
                diffuse: "ShadowPink_Color.png",
                metallic: "metallic_low.png",
                normal: "Normal_low.png",
                roughness: "Roughness_strong.png"
            }
        },
        ShadowPurple: {
            lights: {
                pos: [
                    "80 50 100",
                    "-80 50 100",
                    "80 -50 100",
                    "-80 -50 100"
                ],
                radiance: [
                    "1 1 1",
                    "1 1 1",
                    "1 1 1",
                    "1 1 1"
                ]
            },
            textures:{
                diffuse: "ShadowPurple_Color.png",
                metallic: "metallic_strong.png",
                normal: "Normal_strong.png",
                roughness: "Roughness_lowest.png"
            }
        },
        ShadowRust: {
            lights: {
                pos: [
                    "80 50 100",
                    "-800 50 100",
                    "80 -50 100",
                    "-800 -50 100"
                ],
                radiance: [
                    "0.9 0.3 0.4",
                    "1 1 1",
                    "1 1 1",
                    "1 1 1"
                ]
            },
            textures:{
                diffuse: "ShadowRust_Color.png",
                metallic: "metallic_low.png",
                normal: "Normal_low.png",
                roughness: "Roughness_strong.png"
            }
        },
        ShadowCooper: {
            lights: {
                pos: [
                    "80 50 100",
                    "-80 50 100",
                    "80 -50 100",
                    "-80 -50 100"
                ],
                radiance: [
                    "0.8 0.8 0.8",
                    "0.8 0.8 0.8",
                    "0.8 0.8 0.8",
                    "0.8 0.8 0.8"
                ]
            },
            textures:{
                diffuse: "ShadowCooper.png",
                metallic: "metallicCooper.png",
                normal: "shadow_Normal.png",
                roughness: "RoughnessCooper.png"
            }
        },
        ShadowTurquoise: {
            lights: {
                pos: [
                    "80 50 100",
                    "-80 50 100",
                    "80 -50 100",
                    "-80 -50 100"
                ],
                radiance: [
                    "0.8 0.8 0.8",
                    "0.8 0.8 0.8",
                    "0.8 0.8 0.8",
                    "0.8 0.8 0.8"
                ]
            },
            textures:{
                diffuse: "color10.png",
                metallic: "metallicCooper.png",
                normal: "shadow_Normal.png",
                roughness: "RoughnessCooper.png"
            }
        },
        ShadowPurpleBlue: {
            lights: {
                pos: [
                    "80 50 100",
                    "-80 50 100",
                    "80 -50 100",
                    "-80 -50 100"
                ],
                radiance: [
                    "0.8 0.8 0.8",
                    "0.8 0.8 0.8",
                    "0.8 0.8 0.8",
                    "0.8 0.8 0.8"
                ]
            },
            textures:{
                diffuse: "color05.png",
                metallic: "metallicCooper.png",
                normal: "shadow_Normal.png",
                roughness: "RoughnessCooper.png"
            }
        },
        FieryRose: {
            lights: {
                pos: [
                    "80 50 100",
                    "-80 50 100",
                    "80 -50 100",
                    "-80 -50 100"
                ],
                radiance: [
                    "0.89 0.53 0.46",
                    "0.89 0.53 0.46",
                    "0.89 0.53 0.46",
                    "0.89 0.53 0.46"
                ]
            },
            textures:{
                diffuse: "FieryRose_color.png",
                metallic: "metallic_low.png",
                normal: "Normal_low.png",
                roughness: "RoughnessCooper.png"
            }
        },
        RoyalSilver: {
            lights: {
                pos: [
                    "80 50 100",
                    "-80 50 100",
                    "80 -50 100",
                    "-80 -50 100"
                ],
                radiance: [
                    "0.88 0.82 0.80",
                    "0.88 0.82 0.80",
                    "0.88 0.82 0.80",
                    "0.88 0.82 0.80"
                ]
            },
            textures:{
                diffuse: "RoyalSilver_color.png",
                metallic: "metallic_low.png",
                normal: "Normal_low.png",
                roughness: "RoughnessCooper.png"
            }
        },
        BudBlossom: {
            lights: {
                pos: [
                    "80 50 100",
                    "-80 50 100",
                    "80 -50 100",
                    "-80 -50 100"
                ],
                radiance: [
                    "0.89 0.77 0.69",
                    "0.89 0.77 0.69",
                    "0.89 0.77 0.69",
                    "0.89 0.77 0.69"
                ]
            },
            textures:{
                diffuse: "BudBlossom_color.png",
                metallic: "metallic_low.png",
                normal: "Normal_low.png",
                roughness: "RoughnessCooper.png"
            }
        }
    } 
}

var glossyBlushesPackData = {
    Blushes:{
        FieryRose: {
            lights: {
                pos: [
                    "2000 150 -200",
                    "-2000 0 -180",
                    "1800 -30 -1300",
                    "-1900 80 -1200"
                ],
                radiance: [
                    "0.70 0.45 0.40",
                    "0.70 0.45 0.40",
                    "0.70 0.45 0.40",
                    "0.70 0.45 0.40"
                ]
            },
            normal: 0.56,
            metallic: 0.12,
            roughness: 0.15,
            opacity: 0.68,
            color: "0.70 0.45 0.40 1.0",
        },
        RoyalSilver: {
            lights: {
                pos: [
                    "2000 150 -200",
                    "-2000 0 -180",
                    "1800 -30 -1300",
                    "-1900 80 -1200"
                ],
                radiance: [
                    "0.88 0.82 0.80",
                    "0.88 0.82 0.80",
                    "0.88 0.82 0.80",
                    "0.88 0.82 0.80"
                ]
            },
            normal: 0.56,
            metallic: 0.12,
            roughness: 0.15,
            opacity: 0.68,
            color: "0.88 0.82 0.80 1.0",
        },
        BudBlossom: {
            lights: {
                pos: [
                    "2000 150 -200",
                    "-2000 0 -180",
                    "1800 -30 -1300",
                    "-1900 80 -1200"
                ],
                radiance: [
                    "0.89 0.77 0.69",
                    "0.89 0.77 0.69",
                    "0.89 0.77 0.69",
                    "0.89 0.77 0.69"
                ]
            },
            normal: 0.56,
            metallic: 0.12,
            roughness: 0.15,
            opacity: 0.55,
            color: "0.89 0.77 0.69 1.0",
        }
    }
}

var glossyLipsPackData = {
    FieryRose:{
        color: "0.70 0.45 0.40 0.8",
        saturation: 1.0,
        brightness: 1.0,
        shineIntensity: 0.7,
        shineBleeding: 0.5,
        shineScale: 0.95,
        intensity: 0.6,
        grain: 1.2,
        bleeding: 0.5,
    },
    RoyalSilver:{
        color: "0.88 0.82 0.80 0.85",
        saturation: 1.2,
        brightness: 1.05,
        shineIntensity: 0.7,
        shineBleeding: 0.5,
        shineScale: 0.95,
        intensity: 0.6,
        grain: 1.2,
        bleeding: 0.5,
    },
    BudBlossom:{
        color: "0.89 0.77 0.69 0.89",
        saturation: 1.1,
        brightness: 1.04,
        shineIntensity: 0.7,
        shineBleeding: 0.5,
        shineScale: 0.95,
        intensity: 0.6,
        grain: 1.2,
        bleeding: 0.5,
    }
}

function applyGlossyShadow(name) {
    if(!glossyEyeShadowPackData.Shadows.hasOwnProperty(name)){

    } else {
        var settingsFound = glossyEyeShadowPackData.Shadows[name];

        var diffuse_tex_path = glossyEyeShadowPackData.TexturesFolderPath + settingsFound.textures.diffuse;
        var metallic_tex_path = glossyEyeShadowPackData.TexturesFolderPath + settingsFound.textures.metallic;
        var normal_tex_path = glossyEyeShadowPackData.TexturesFolderPath + settingsFound.textures.normal;
        var roughness_tex_path = glossyEyeShadowPackData.TexturesFolderPath + settingsFound.textures.roughness;

        var lights_pos = settingsFound.lights.pos;
        var lights_radiance = settingsFound.lights.radiance;

        GlossyEyeShadow.enable();
        GlossyEyeShadow.setDiffuse(diffuse_tex_path)
        GlossyEyeShadow.setMetallic(metallic_tex_path)
        GlossyEyeShadow.setNormal(normal_tex_path)
        GlossyEyeShadow.setRoughness(roughness_tex_path)
        GlossyEyeShadow.setLightsPos(lights_pos)
        GlossyEyeShadow.setLightsRadiance(lights_radiance)
        bnb.log("GLossy enable")
    }
}

function applyGlossyBlush(name) {
    if(!glossyBlushesPackData.Blushes.hasOwnProperty(name)){

    } else {
        var settingsFound = glossyBlushesPackData.Blushes[name];

        var lights_pos = settingsFound.lights.pos;
        var lights_radiance = settingsFound.lights.radiance;

        var normal = settingsFound.normal;
        var metallic = settingsFound.metallic;
        var roughness = settingsFound.roughness;
        var opacity = settingsFound.opacity;
        var color = settingsFound.color;

        GlossyBlush.setLightsPos(lights_pos)
        GlossyBlush.setLightsRadiance(lights_radiance)
        GlossyBlush.normal(normal);
        GlossyBlush.metallic(metallic);
        GlossyBlush.roughness(roughness);
        GlossyBlush.opacity(opacity);
        GlossyBlush.color(color);
        GlossyBlush.enable();

    }
}

function applyGlitterLips(name) {
    if(!glossyLipsPackData.hasOwnProperty(name)){

    } else {
        var settingsFound = glossyLipsPackData[name];

        var grain = settingsFound.normal;
        var bleeding = settingsFound.metallic;
        var intensity = settingsFound.roughness;
        var color = settingsFound.color;

        Lips.glitterGrain(grain);
        Lips.glitterIntensity(intensity);
        Lips.glitterBleeding(bleeding)
        Lips.color(color);
        GlossyBlush.enable();

    }
}

function testGlossyEyeshadows(timeDelay) {
    var currentIndex = 0;

    var names = [
        "Default",
        "ShadowBeige",
        "ShadowBlack",
        "ShadowBlue",
        "ShadowBrown",
        "ShadowBrownDark",
        "ShadowBrownLight",
        "ShadowCappuccino",
        "ShadowGlossyPink",
        "ShadowGray",
        "ShadowPink",
        "ShadowPurple",
        "ShadowRust",
        "ShadowCooper",
        "ShadowPurpleBlue",
        "ShadowTurquoise",
        "FieryRose",
        "RoyalSilver",
        "BudBlossom"
    ];

    function showNext() {
        if(currentIndex == names.length) currentIndex = 0;
        setTimeout(function(){
            bnb.log(names[currentIndex])
            applyGlossyShadow(names[currentIndex]);
            currentIndex++;
            showNext();
        }, timeDelay)
    }

    showNext();
}
//---------------------------------------------------------------------//

// testGlossyEyeshadows(500)

// applyGlossyBlush();
// applyGlitterLips();
GlossyBlush.enable();

GlossyBlush.color("1. 0. 0. 1.");

Eyelashes3d.set("eyelashes.png")
Eyelashes3d.color("0. 0. 0. 1.")


applyGlossyShadow("Default")
