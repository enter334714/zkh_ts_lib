#ifdef FSHIGHPRECISION
precision highp float;
#else
precision mediump float;
#endif

uniform sampler2D u_HLTex;
uniform float u_ScatteringMask;

varying vec2 v_Texcoord;

void main()
{
	vec4 highLight = texture2D(u_HLTex,v_Texcoord);
	float highLightR = max(u_ScatteringMask*0.00392156862745,highLight.r)*8.5;
	float breathingLightStep = step(7.0,highLightR);
	float transparentStep = step(6.0,highLightR) - breathingLightStep;
	if(transparentStep > 0.0)
	{
		discard;
	}

	gl_FragColor = vec4(1,0,0,1);
}