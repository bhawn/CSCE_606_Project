#version 300 es
#extension GL_OES_standard_derivatives : enable
precision mediump float;

// https://www.shadertoy.com/view/wdsfz7

uniform sampler2D iChannel0;
uniform vec2 resolution;
uniform float time;
layout(location = 0) out vec4   FragColor;

#define S(v)   smoothstep(1.5, 0.0, (v)/fwidth(v))  
#define L(x,y) length(vec2(x,y))


void main() 
{
    vec2 R = resolution.xy;
    vec2 U = 1.3*(2.0*gl_FragCoord.xy-R)/R.y; 
    vec2 V = U;
    U.x = mod(U.x-2.0, 4.0)-2.0;      // horizontal tranlation

    float t = 1.8*time;
    float f, F, c;
    #define setT(t) f = fract(t), F = min(f,1.-f), c = F - A
    float a = atan(U.y,U.x);
    float A = abs(a)/1.6;
    float n = 6.0;
    float l = length(U);
    FragColor-=FragColor;
    
    // body
    setT(t);
    FragColor.b = S(l-1.0)*S(c*l);              // disk * pie

    
    // eye
    a = a/1.6 - 1.5/(2.0-F);            // local eye coordinates
    FragColor += S(L(a,l-0.5)-0.25);            //   white part
    FragColor.rgb -= S(L(a,l-0.5)-0.12)*2.0;        //   black part
    
   
    // hairs
    setT(t-0.3*(l-1.0));                // deform: small time delay
    A = fract(n*(2.0-A)/(2.0-F))-0.5;   // local hair ordinate
    FragColor.b += (S(L(A,2.*(l-1.2))-0.2)      //   disk + bar
             + S(abs(A)-0.1)*S(abs(l-1.1)-0.1))*S(c*l);
    if(FragColor.b > 0.0)
        FragColor.a = 0.5;
    
}