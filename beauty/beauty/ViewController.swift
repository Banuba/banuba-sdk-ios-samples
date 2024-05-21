import UIKit
import BNBSdkApi
import BNBSdkCore

// See
// https://docs.banuba.com/face-ar-sdk-v1/effect_api/face_beauty
// https://docs.banuba.com/face-ar-sdk-v1/effect_api/makeup
// About effect JS API

// array of (title, action)
let beautyConfigs : [(String, String)] = [
(
"Button1",
"""
FaceMorph.eyes({enlargement: 0.5});
Lips.color("0.898 0.431 0.663 0.9");
Teeth.whitening(0.5);
Eyes.whitening(0.2);
Makeup.eyeshadow("0.322 0.341 0.435 0.5");
"""
),
(
"Button2",
"""
Skin.softening(1.0);
Background.blur(0.55);
Makeup.blushes("0.871 0.365 0.514 0.5");
Eyes.color("0.082 0.412 0.780 0.5");
Brows.color("0.004 0.004 0.004 0.4");
"""
),
                            
]

class ViewController: UIViewController {
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
                
        let scroll = UIScrollView(frame: CGRect(x: 0,y: self.view.bounds.height - 80, width: self.view.frame.width, height: 60))
        var frame : CGRect?
        
        var idx = 0;
        for val in beautyConfigs {
            
            let action = UIAction(title: "") { action in
                self.effect?.evalJs(val.1, resultCallback: nil)
            }
            let button = UIButton(type: .custom, primaryAction: action)
            frame = CGRect(x: CGFloat(idx * 140), y: 10, width: 130, height: 40)

            button.frame = frame!
            button.tag = idx
            button.backgroundColor = .lightGray

            button.setTitle(val.0, for: .normal)
            scroll.addSubview(button)
            idx+=1
        }

        scroll.contentSize = CGSizeMake(CGFloat(140 * beautyConfigs.count), scroll.frame.size.height)
        scroll.backgroundColor = .white
        self.view.addSubview(scroll)
        
        // Start feeding frames from camera
        cameraDevice.start()
    }

    @IBAction func closeCamera(_ sender: UIBarButtonItem) {
        dismiss(animated: true, completion: nil)
    }
}
