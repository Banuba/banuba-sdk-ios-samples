import UIKit
import BNBSdkApi
import BNBSdkCore

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
        
        // Load avatar effect from app bundle. It will use the config provided
        // in `setState` call from here
        // https://github.com/Banuba/banuba-sdk-ios-samples/blob/master/avatar/avatar/Avatar_effect/config.js#L97
        // you may modify it right there or during runtime (see below).
        // Available option are documented here
        // https://github.com/Banuba/banuba-sdk-ios-samples/blob/master/avatar/avatar/Avatar_effect/Readme.md
        // In order to remove hint, add call to `delTap()` at the end of `config.js`
        effect = player?.load(effect: "0003_cu_Spider1_v3_b1")
        
        // Start feeding frames from camera
        cameraDevice.start()
    }

    @IBAction func closeCamera(_ sender: UIBarButtonItem) {
        dismiss(animated: true, completion: nil)
    }
}
