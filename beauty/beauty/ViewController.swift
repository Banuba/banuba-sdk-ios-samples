import UIKit
import BNBSdkApi
import BNBSdkCore

// See
// https://docs.banuba.com/face-ar-sdk-v1/effect_api/face_beauty
// https://docs.banuba.com/face-ar-sdk-v1/effect_api/makeup
// About effect JS API
let beautyConfig = """

function FaceReshape(strength){
    FaceMorph.face({chin: -0.4 * strength});
    FaceMorph.lips({height: 0.8 * strength});
    FaceMorph.face({
        jaw_narrowing: 0.35 * strength,
        chin_narrowing: 0.35 * strength,
        narrowing: 0.25 * strength,
        cheekbones_narrowing: -0.5 * strength,
        forehead: 0.1 * strength
    });
    FaceMorph.nose({
        width: 0.3 * strength,
        length: 0.2 * strength,
        tip_width: -0.4 * strength
    });
    FaceMorph.lips({size: 0.3 * strength});
    
    if (Math.random() < 0.5) {
        // some random error
        throw new Error("invalid state");
    }
}

function SetBeauty(){
    FaceMorph.eyes({enlargement: 0.5});
    FaceReshape(1.0);
    Lips.color("0.898 0.431 0.663 0.9");
    Skin.softening(1.0);
    Background.blur(0.55);
    Makeup.blushes("0.871 0.365 0.514 0.5");
    Eyes.color("0.082 0.412 0.780 0.5");
    Brows.color("0.004 0.004 0.004 0.4");
    Teeth.whitening(0.5);
    Eyes.whitening(0.2);
    Makeup.eyeshadow("0.322 0.341 0.435 0.5");
    
    return true;
}

SetBeauty();
"""

class ViewController: UIViewController, BNBJsCallback {
    // Output surface for the `Player`
    @IBOutlet weak var effectView: EffectPlayerView!
    
    // Input stream for the `Player`
    private let cameraDevice = CameraDevice(
        cameraMode: .FrontCameraSession,
        captureSessionPreset: .hd1280x720
    )
    
    // `Player` process frames from the input and render them into the outputs
    private var player: Player?
    
    // Current effect
    private var effect: BNBEffect?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        player = Player()
        
        // Connect `CameraDevice` and `EffectPlayerView` to `Player`
        player?.use(input: Camera(cameraDevice: cameraDevice))
        player?.use(outputs: [effectView])
        
        // Load effect from `effects` folder
        effect = player?.load(effect: "Makeup")
        
        // This will evalute JS code in context of Makeup effect. You may also
        // place it at the end of `config.js` in Makeup effect (see effect folder
        // in this project files.
        effect?.evalJs(beautyConfig, resultCallback: self)
        
        // Start feeding frames from camera
        cameraDevice.start()
    }
    
    func onResult(_ result: String) {
        if result == "true" {
            print("Success")
        } else {
            // `null` or `false` result is an error
            print("Failed")
        }
    }

    @IBAction func closeCamera(_ sender: UIBarButtonItem) {
        dismiss(animated: true, completion: nil)
    }
}
