#ifdef FSHIGHPRECISION
precision highp float;
#else
precision mediump float;
#endif

uniform vec3 u_ShadowColor;

varying float v_ShadowStrength;

void main()
{
	gl_FragColor = vec4(u_ShadowColor.r,u_ShadowColor.g,u_ShadowColor.b,v_ShadowStrength);
}