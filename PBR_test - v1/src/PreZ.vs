attribute vec4 a_Position;
attribute vec2 a_Texcoord; 
attribute vec3 a_Normal;
//attribute vec4 a_Tangent;

uniform mat4 u_MvpMatrix;


varying vec2 v_Texcoord;
varying float v_ShadowStrength;

void main(){
	
	gl_Position = u_MvpMatrix * a_Position;
	v_Texcoord = a_Texcoord; 
}