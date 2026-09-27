"use strict";var q=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var p=q(function(I,m){
var d=require('@stdlib/math-base-assert-is-nan/dist');function P(i,r,u,c,f,s){var v,t,o,a,e,n,l;if(v=r.data,t=r.accessors[0],i===1||u===0)return n=f.call(s,t(v,c),0,c,v),n===void 0||d(n)?NaN:0;for(e=c,l=0;l<i&&(a=f.call(s,t(v,e),l,e,v),a===void 0);l++)e+=u;if(l===i)return NaN;for(o=a,l+=1,l;l<i;l++)if(e+=u,n=f.call(s,t(v,e),l,e,v),n!==void 0){if(d(n))return n;n<a?a=n:n>o&&(o=n)}return o-a}m.exports=P
});var y=q(function(J,x){
var B=require('@stdlib/math-base-assert-is-nan/dist'),R=require('@stdlib/array-base-arraylike2object/dist'),w=p();function z(i,r,u,c,f,s){var v,t,o,a,e,n;if(i<=0)return NaN;if(n=R(r),n.accessorProtocol)return w(i,n,u,c,f,s);if(i===1||u===0)return a=f.call(s,r[c],0,c,r),a===void 0||B(a)?NaN:0;for(o=c,e=0;e<i&&(t=f.call(s,r[o],e,o,r),t===void 0);e++)o+=u;if(e===i)return NaN;for(v=t,e+=1,e;e<i;e++)if(o+=u,a=f.call(s,r[o],e,o,r),a!==void 0){if(B(a))return a;a<t?t=a:a>v&&(v=a)}return v-t}x.exports=z
});var N=q(function(K,j){
var C=require('@stdlib/strided-base-stride2offset/dist'),D=y();function E(i,r,u,c,f){return D(i,r,u,C(i,u),c,f)}j.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=N(),G=y();F(O,"ndarray",G);module.exports=O;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
