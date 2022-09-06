attribute vec4 a_Position;
attribute vec2 a_Texcoord; 
attribute vec3 a_Normal;
//attribute vec4 a_Tangent;

uniform mat4 u_MvpMatrix;
uniform mat4 u_WorldMat;

varying vec4 worldPos;
varying vec3 worldNormal;

varying vec2 v_Texcoord;
varying float v_ShadowStrength;

void main(){
	
	gl_Position = u_MvpMatrix * a_Position;
	worldPos = u_WorldMat*a_Position;
	mat3 Object2worldDirMat = mat3(u_WorldMat);
	worldNormal = Object2worldDirMat*a_Normal;
	v_Texcoord = a_Texcoord; 
}