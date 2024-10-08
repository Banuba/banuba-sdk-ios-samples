const am = bnb.scene.getAssetManager();

class Facialhair{
    constructor(){
        this.settings = {
            "shape": "default",
            "color": "default"
        }
        this.shapes = {
            "default" : {
                "name": "default"
            },
            "first": {
                "name": "facial_hair_01",
                "type": "texture"
            },
            "second" : {
                "name": "mustache_02",
                "type": "mesh"
            }
        }
        this.colors = {
            "default": "0.43137254901960786, 0.27450980392156865, 0.1607843137254902",
            "color_1": "0.9764705882352941, 0.9764705882352941, 0.9764705882352941",
            "color_2": "0.8352941176470589, 0.8352941176470589, 0.8352941176470589",
            "color_3": "0.3215686274509804, 0.3215686274509804, 0.3215686274509804",
            "color_4": "0.06274509803921569, 0.06274509803921569, 0.06274509803921569",
            "color_5": "1., 0.9882352941176471, 0.9294117647058824",
            "color_6": "0.996078431372549, 0.9411764705882353, 0.807843137254902",
            "color_7": "0.9921568627450981, 0.8862745098039215, 0.6745098039215687",
            "color_8": "0.984313725490196, 0.8313725490196079, 0.5372549019607843",
            "color_9": "0.9686274509803922, 0.9529411764705882, 0.9411764705882353",
            "color_10": "0.8156862745098039, 0.788235294117647, 0.7764705882352941",
            "color_11": "0.6392156862745098, 0.6039215686274509, 0.596078431372549",
            "color_12": "0.5333333333333333, 0.4823529411764706, 0.4666666666666667",
            "color_13": "0.3176470588235294, 0.26666666666666666, 0.25882352941176473",
            "color_14": "0.2, 0.15294117647058825, 0.14901960784313725",
            "color_15": "1., 0.9686274509803922, 0.9372549019607843",
            "color_16": "0.9921568627450981, 0.9058823529411765, 0.8117647058823529",
            "color_17": "0.9411764705882353, 0.7803921568627451, 0.6",
            "color_18": "0.6862745098039216, 0.5254901960784314, 0.3803921568627451",
            "color_19": "0.43137254901960786, 0.27450980392156865, 0.1607843137254902",
            "color_20": "0.2823529411764706, 0.14901960784313725, 0.07058823529411765",
            "color_21": "0.9882352941176471, 0.6941176470588235, 0.6705882352941176",
            "color_22": "0.8980392156862745, 0.19215686274509805, 0.13725490196078433",
            "color_23": "0.6470588235294118, 0.09411764705882353, 0.050980392156862744",
            "color_24": "1., 0.8392156862745098, 0.9137254901960784",
            "color_25": "0.9176470588235294, 0.34901960784313724, 0.615686274509804",
            "color_26": "0.6235294117647059, 0.0196078431372549, 0.3058823529411765",
            "color_27": "0.8392156862745098, 0.788235294117647, 1.",
            "color_28": "0.5568627450980392, 0.45098039215686275, 0.9019607843137255",
            "color_29": "0.1568627450980392, 0.054901960784313725, 0.49411764705882355",
            "color_30": "0.7176470588235294, 0.8470588235294118, 1.",
            "color_31": "0.30196078431372547, 0.596078431372549, 0.9529411764705882",
            "color_32": "0.0784313725490196, 0.34901960784313724, 0.6745098039215687",
            "color_33": "0.788235294117647, 0.9254901960784314, 0.6274509803921569",
            "color_34": "0.5058823529411764, 0.7254901960784313, 0.2549019607843137",
            "color_35": "0.2549019607843137, 0.42745098039215684, 0.058823529411764705",
            "color_36": "0.9921568627450981, 0.9372549019607843, 0.5607843137254902",
            "color_37": "0.9764705882352941, 0.7843137254901961, 0.28627450980392155",
            "color_38": "0.9176470588235294, 0.49411764705882355, 0.16862745098039217",
        }

        this.material_facial = am.findMaterial("mat_mustache_01");

        this.MI = bnb.scene.getRoot().findChildByName("Mustache").getComponent(bnb.ComponentType.MESH_INSTANCE).asMeshInstance()
        this.Base = am.findImage("mustache_Base").asTexture();
        this.MR = am.findImage("mustache_MR").asTexture();
        this.Normal = am.findImage("mustache_Normal").asTexture();
        this.facialhair_color = am.findMaterial("unused").findParameter("facialhair_color");

        this.facial_tex = am.findImage("facial").asTexture();

        this.disableAll()
    }

    setShape(shape){
        if(shape == "default"){
            return
        }
        bnb.log(shape)
        if(this.shapes[shape].type == "texture"){
            this.facial_tex.load("modules/facialhair/images/"+this.shapes[shape].name+".png")
            return;
        }
        // am.uploadMeshData(this.mesh, "meshes/"+this.shapes[name]+".bsm2")
        const Mesh = am.findMesh(this.shapes[shape].name)
        this.MI.setMesh(Mesh)
        this.MI.setSubGeometryMaterial("mat_mustache_01", this.material_facial)
        this.Base.load("modules/facialhair/images/"+this.shapes[shape].name+"_Base.png")
        this.MR.load("modules/facialhair/images/"+this.shapes[shape].name+"_MR.png")
        this.Normal.load("modules/facialhair/images/"+this.shapes[shape].name+"_Normal.png")
        this.MI.setVisible(true)
    }

    setColor(color){
        let c;
        if(color.charAt(0) == "@"){
            c = color.substring(1);
        } else {
            c = this.colors[color] || this.colors["default"];
        }
        const [x,y,z] = c.split(',');
        this.facialhair_color.setVector4(new bnb.Vec4(x,y,z,1.0))
    }

    disableAll(){
        this.MI.setVisible(false)
        this.facial_tex.load("images/null_image.png")
    }

    parameters({shape, color}){
        shape && this.setShape(shape)
        color && this.setColor(color)
    }

    clear(){
        this.disableAll()
    }
}

exports.Facialhair = Facialhair