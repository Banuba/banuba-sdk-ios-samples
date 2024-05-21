#include <bnb/glsl.frag>

BNB_IN(0)
vec2 var_uv;
BNB_IN(1)
vec2 var_skin_smooth_uv;

BNB_DECLARE_SAMPLER_2D(0, 1, s_bg);
BNB_DECLARE_SAMPLER_2D(2, 3, s_segmentation_mask);

void main()
{
    float var_smooth_value = var_neck_smoothing_strength.x;

    vec3 bg = BNB_TEXTURE_2D(BNB_SAMPLER_2D(s_bg), var_uv).rgb;
    vec4 skin_smooth = BNB_TEXTURE_2D(BNB_SAMPLER_2D(s_segmentation_mask), var_skin_smooth_uv);
    const float treshold = 0.8;

    if (skin_smooth.a > treshold && neck_smoothing_nn_meta.w > 0.5) {
        bnb_FragColor = vec4((1. - var_smooth_value) * bg + var_smooth_value * skin_smooth.rgb, 1.0);
    } else {
        bnb_FragColor = vec4(0.);
    }
}
