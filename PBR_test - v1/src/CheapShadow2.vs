attribute vec4 a_Position;
attribute vec2 a_Texcoord; 
attribute vec3 a_Normal;
//attribute vec4 a_Tangent;

uniform mat4 u_WorldMat;
uniform mat4 u_ViewProjection;
uniform mat4 u_MvpMatrix;

uniform float u_GroundBaseHeight;
uniform float u_ShadowStrength2;
uniform float u_ShadowChangeCoefficienct;
uniform float u_ShadowScale2;
uniform vec3 u_LightDir;

varying vec2 v_Texcoord;
varying float v_ShadowStrength;

void main(){
	
	/*mat3 Object2worldDirMat = mat3(u_WorldMat);
	vec4 worldPos = u_WorldMat*a_Position;
	vec3 lightDir = vec3(-u_LightDir.x,u_LightDir.y,-u_LightDir.z);
	vec3 worldNormal = Object2worldDirMat*a_Normal;
	
	float heightFromGround = worldPos.y - u_GroundBaseHeight;
	vec3 lightPos = normalize(lightDir + u_ShadowScale2*worldNormal)*(heightFromGround/lightDir.y); //光照方向标准向量乘以顶点高度与光照向量垂直分量之比。获得一个高度与顶点高度相同的光照方向向量
	vec3 projectionPos = worldPos.xyz - lightPos; //获得顶点在指定高度的水平面上的投影（projectionPos.xz）
	
	worldPos = vec4(projectionPos.x,u_GroundBaseHeight,projectionPos.z,1.0); */
	
	mat3 Object2worldDirMat = mat3(u_WorldMat);
	vec4 worldPos = u_WorldMat*a_Position;
	vec3 lightDir = vec3(-u_LightDir.x,u_LightDir.y,-u_LightDir.z);
	vec3 worldNormal = Object2worldDirMat*a_Normal;
	
	float heightFromGround = worldPos.y - u_GroundBaseHeight;
	vec3 lightPos = normalize(lightDir + u_ShadowScale2*worldNormal)*(heightFromGround/lightDir.y); //光照方向标准向量乘以顶点高度与光照向量垂直分量之比。获得一个高度与顶点高度相同的光照方向向量
	vec3 projectionPos = worldPos.xyz - lightPos; //获得顶点在指定高度的水平面上的投影（projectionPos.xz）
	
	worldPos.xyz = vec3(projectionPos.x,u_GroundBaseHeight,projectionPos.z);
	
	gl_Position = u_ViewProjection*worldPos;
	//v_Texcoord = a_Texcoord;
	
	v_ShadowStrength = u_ShadowStrength2*max((1.0 - heightFromGround*u_ShadowChangeCoefficienct),0.0);
}