/**
 * Baked head anchors for the hero strips (normalised to each frame box).
 *
 * Generated from the vector hero pack: 6-frame idle, 8-frame walk and a
 * 10-frame death tumble. Each entry is the face disc (skull only, hair
 * excluded): centre x, top y and width as fractions of the frame, plus the
 * eye-axis tilt in radians so headgear rolls with the body as it falls.
 */
export interface HeadAnchor { cx: number; top: number; w: number; rot?: number }

/** Tiny per-hero corrections applied after the measured anchor. */
export interface HeadFit { scale: number; x: number; y: number }

export const HERO_HEAD_FITS: Record<string, HeadFit> = {
  spike: { scale: 1, x: 0, y: 0 },
  punk: { scale: 1, x: 0, y: 0 },
  crown: { scale: 1, x: 0, y: 0 },
  bald: { scale: 1, x: 0, y: 0 },
};

export const HERO_ANCHORS: Record<string, { walk: HeadAnchor[]; idle: HeadAnchor[]; death: HeadAnchor[] }> = {
  spike: { idle: [{cx:0.4816,top:0.3777,w:0.6357,rot:0.0},{cx:0.4807,top:0.3923,w:0.634,rot:0.0},{cx:0.4781,top:0.4149,w:0.6287,rot:0.0},{cx:0.4755,top:0.4282,w:0.6235,rot:0.0},{cx:0.4781,top:0.4162,w:0.6287,rot:0.0},{cx:0.4799,top:0.3923,w:0.6322,rot:0.0}], walk: [{cx:0.4764,top:0.379,w:0.5587,rot:0.0},{cx:0.4746,top:0.3418,w:0.5902,rot:0.0},{cx:0.4781,top:0.3019,w:0.6287,rot:0.0},{cx:0.4834,top:0.3391,w:0.6077,rot:0.0},{cx:0.4842,top:0.3777,w:0.5744,rot:0.0},{cx:0.4834,top:0.3418,w:0.6042,rot:0.0},{cx:0.479,top:0.3019,w:0.6305,rot:0.0},{cx:0.4746,top:0.3165,w:0.5902,rot:0.0}], death: [{cx:0.3973,top:0.2909,w:0.2941,rot:0.8441},{cx:0.4118,top:0.1767,w:0.3018,rot:0.8063},{cx:0.4311,top:0.0982,w:0.2787,rot:0.9792},{cx:0.4335,top:0.1898,w:0.2507,rot:1.4659},{cx:0.3824,top:0.6413,w:0.3375,rot:-0.7281},{cx:0.501,top:0.6104,w:0.3684,rot:0.07},{cx:0.4002,top:0.6591,w:0.2594,rot:-0.8127},{cx:0.4267,top:0.6704,w:0.2565,rot:1.3329},{cx:0.4349,top:0.7061,w:0.2536,rot:-1.3988},{cx:0.4339,top:0.7043,w:0.2555,rot:-0.5737}] },
  punk: { idle: [{cx:0.6355,top:0.4167,w:0.4485,rot:0.0},{cx:0.6326,top:0.4333,w:0.4504,rot:0.0},{cx:0.624,top:0.4611,w:0.4561,rot:0.0},{cx:0.6183,top:0.4792,w:0.4561,rot:0.0},{cx:0.624,top:0.4625,w:0.4561,rot:0.0},{cx:0.6317,top:0.4333,w:0.4485,rot:0.0}], walk: [{cx:0.6403,top:0.4167,w:0.3435,rot:0.0},{cx:0.6384,top:0.375,w:0.3779,rot:0.0},{cx:0.6288,top:0.3306,w:0.4466,rot:0.0},{cx:0.6107,top:0.3722,w:0.4714,rot:0.0},{cx:0.5983,top:0.4167,w:0.4618,rot:0.0},{cx:0.6097,top:0.375,w:0.4695,rot:0.0},{cx:0.6288,top:0.3306,w:0.4504,rot:0.0},{cx:0.6384,top:0.35,w:0.3817,rot:0.0}], death: [{cx:0.4548,top:0.2459,w:0.2234,rot:-1.4235},{cx:0.4713,top:0.1324,w:0.233,rot:-1.4981},{cx:0.4846,top:0.0533,w:0.2234,rot:-0.5059},{cx:0.4686,top:0.1459,w:0.2298,rot:-0.9471},{cx:0.3649,top:0.6119,w:0.3266,rot:-0.6606},{cx:0.5766,top:0.5812,w:0.2926,rot:0.0635},{cx:0.3995,top:0.6309,w:0.2681,rot:-0.6503},{cx:0.4516,top:0.6432,w:0.2511,rot:-0.5899},{cx:0.484,top:0.6793,w:0.2053,rot:1.5517},{cx:0.4824,top:0.6775,w:0.2085,rot:1.5326}] },
  crown: { idle: [{cx:0.4695,top:0.2871,w:0.6927,rot:0.0},{cx:0.4685,top:0.2984,w:0.6908,rot:0.0},{cx:0.4695,top:0.3221,w:0.6927,rot:0.0},{cx:0.4704,top:0.3346,w:0.6947,rot:0.0},{cx:0.4695,top:0.3221,w:0.6927,rot:0.0},{cx:0.4685,top:0.2996,w:0.6908,rot:0.0}], walk: [{cx:0.4637,top:0.2871,w:0.6088,rot:0.0},{cx:0.4618,top:0.2584,w:0.6431,rot:0.0},{cx:0.4656,top:0.2285,w:0.6851,rot:0.0},{cx:0.4714,top:0.2572,w:0.6622,rot:0.0},{cx:0.4723,top:0.2884,w:0.626,rot:0.0},{cx:0.4714,top:0.2584,w:0.6622,rot:0.0},{cx:0.4666,top:0.2285,w:0.687,rot:0.0},{cx:0.4628,top:0.236,w:0.645,rot:0.0}], death: [{cx:0.3849,top:0.2876,w:0.2939,rot:-0.9308},{cx:0.3929,top:0.1746,w:0.31,rot:-0.895},{cx:0.3998,top:0.1142,w:0.3092,rot:-1.0839},{cx:0.405,top:0.2138,w:0.2794,rot:1.1438},{cx:0.3752,top:0.6579,w:0.3261,rot:0.7738},{cx:0.4392,top:0.6093,w:0.4219,rot:-0.4465},{cx:0.3804,top:0.6749,w:0.2802,rot:0.9586},{cx:0.3998,top:0.6866,w:0.285,rot:1.0209},{cx:0.401,top:0.7206,w:0.2923,rot:-1.5262},{cx:0.4018,top:0.7194,w:0.2907,rot:-1.5265}] },
  bald: { idle: [{cx:0.491,top:0.1293,w:0.7246,rot:0.0},{cx:0.49,top:0.1368,w:0.7226,rot:0.0},{cx:0.491,top:0.1549,w:0.7246,rot:0.0},{cx:0.492,top:0.1639,w:0.7265,rot:0.0},{cx:0.491,top:0.1549,w:0.7246,rot:0.0},{cx:0.49,top:0.1383,w:0.7226,rot:0.0}], walk: [{cx:0.485,top:0.1293,w:0.6367,rot:0.0},{cx:0.483,top:0.0962,w:0.6727,rot:0.0},{cx:0.487,top:0.0602,w:0.7166,rot:0.0},{cx:0.493,top:0.0932,w:0.6926,rot:0.0},{cx:0.494,top:0.1293,w:0.6547,rot:0.0},{cx:0.493,top:0.0962,w:0.6886,rot:0.0},{cx:0.488,top:0.0602,w:0.7186,rot:0.0},{cx:0.483,top:0.0677,w:0.6727,rot:0.0}], death: [{cx:0.3325,top:0.2196,w:0.465,rot:-0.9308},{cx:0.3452,top:0.0992,w:0.4904,rot:-0.8948},{cx:0.3561,top:0.0307,w:0.4892,rot:-1.0892},{cx:0.3541,top:0.1421,w:0.4624,rot:1.1841},{cx:0.3172,top:0.6248,w:0.5185,rot:0.7727},{cx:0.4185,top:0.573,w:0.6675,rot:-0.4463},{cx:0.3248,top:0.6447,w:0.4446,rot:0.9549},{cx:0.3484,top:0.6569,w:0.4637,rot:0.9748},{cx:0.3567,top:0.6946,w:0.465,rot:-1.5262},{cx:0.3567,top:0.6933,w:0.465,rot:-1.5265}] },
};

/** Frame counts per hero animation (identical for every skin). */
export const HERO_FRAMES: Record<'idle' | 'walk' | 'death', number> = { idle: 6, walk: 8, death: 10 };

/**
 * The death tumble is drawn from a taller frame box than idle/walk so the
 * launch arc is not clipped; this is the height multiplier for that box.
 */
export const HERO_ANIM_SCALE: Record<string, { idle: number; walk: number; death: number }> = {
  spike: { idle: 1, walk: 1, death: 2.2354 },
  punk: { idle: 1, walk: 1, death: 2.2653 },
  crown: { idle: 1, walk: 1, death: 2.1311 },
  bald: { idle: 1, walk: 1, death: 2.3489 },
};
