attribute vec4 a_Position;
attribute vec2 a_Texcoord; 
attribute vec3 a_Normal;
attribute vec4 a_Tangent;

uniform mat4 u_MvpMatrix;
uniform mat4 u_WorldMat;

varying vec2 v_Texcoord;
varying vec4 v_TtoW0;
varying vec4 v_TtoW1;
varying vec4 v_TtoW2;

void main(){
	gl_Position = u_MvpMatrix * a_Position;
	v_Texcoord = a_Texcoord; 
	
	mat3 Object2worldDirMat = mat3(u_WorldMat);
	vec4 worldPos = u_WorldMat*a_Position;
	vec3 worldNormal = Object2worldDirMat*a_Normal;
	vec3 worldTangent = Object2worldDirMat*a_Tangent.xyz;
	vec3 worldBinormal = -cross(worldNormal,worldTangent)*a_Tangent.w;
	v_TtoW0 = vec4(worldTangent.x,worldBinormal.x,worldNormal.x,worldPos.x);
	v_TtoW1 = vec4(worldTangent.y,worldBinormal.y,worldNormal.y,worldPos.y);
	v_TtoW2 = vec4(worldTangent.z,worldBinormal.z,worldNormal.z,worldPos.z);
}