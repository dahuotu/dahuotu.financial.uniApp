import{s as e,c as n,a as t,w as i,F as r,i as s,o,b as u,d as l,e as a,t as c,f,I as d,g as h,h as p}from"./index-CdQAuBWr.js";
/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */var g,m,w=9e15,v="0123456789abcdef",y="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",N="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",b={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-w,maxE:w,crypto:!1},x=!0,_="[DecimalError] Invalid argument: ",E="[object Decimal]",P=Math.floor,F=Math.pow,T=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,M=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,I=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,R=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,q=1e7,O=y.length-1,D=N.length-1,S={toStringTag:E};function C(e){var n,t,i,r=e.length-1,s="",o=e[0];if(r>0){for(s+=o,n=1;n<r;n++)(t=7-(i=e[n]+"").length)&&(s+=$(t)),s+=i;(t=7-(i=(o=e[n])+"").length)&&(s+=$(t))}else if(0===o)return"0";for(;o%10==0;)o/=10;return s+o}function k(e,n,t){if(e!==~~e||e<n||e>t)throw Error(_+e)}function A(e,n,t,i){var r,s,o,u;for(s=e[0];s>=10;s/=10)--n;return--n<0?(n+=7,r=0):(r=Math.ceil((n+1)/7),n%=7),s=F(10,7-n),u=e[r]%s|0,null==i?n<3?(0==n?u=u/100|0:1==n&&(u=u/10|0),o=t<4&&99999==u||t>3&&49999==u||5e4==u||0==u):o=(t<4&&u+1==s||t>3&&u+1==s/2)&&(e[r+1]/s/100|0)==F(10,n-2)-1||(u==s/2||0==u)&&0==(e[r+1]/s/100|0):n<4?(0==n?u=u/1e3|0:1==n?u=u/100|0:2==n&&(u=u/10|0),o=(i||t<4)&&9999==u||!i&&t>3&&4999==u):o=((i||t<4)&&u+1==s||!i&&t>3&&u+1==s/2)&&(e[r+1]/s/1e3|0)==F(10,n-3)-1,o}function Z(e,n,t){for(var i,r,s=[0],o=0,u=e.length;o<u;){for(r=s.length;r--;)s[r]*=n;for(s[0]+=v.indexOf(e.charAt(o++)),i=0;i<s.length;i++)s[i]>t-1&&(void 0===s[i+1]&&(s[i+1]=0),s[i+1]+=s[i]/t|0,s[i]%=t)}return s.reverse()}S.absoluteValue=S.abs=function(){var e=new this.constructor(this);return e.s<0&&(e.s=1),U(e)},S.ceil=function(){return U(new this.constructor(this),this.e+1,2)},S.clampedTo=S.clamp=function(e,n){var t=this,i=t.constructor;if(e=new i(e),n=new i(n),!e.s||!n.s)return new i(NaN);if(e.gt(n))throw Error(_+n);return t.cmp(e)<0?e:t.cmp(n)>0?n:new i(t)},S.comparedTo=S.cmp=function(e){var n,t,i,r,s=this,o=s.d,u=(e=new s.constructor(e)).d,l=s.s,a=e.s;if(!o||!u)return l&&a?l!==a?l:o===u?0:!o^l<0?1:-1:NaN;if(!o[0]||!u[0])return o[0]?l:u[0]?-a:0;if(l!==a)return l;if(s.e!==e.e)return s.e>e.e^l<0?1:-1;for(n=0,t=(i=o.length)<(r=u.length)?i:r;n<t;++n)if(o[n]!==u[n])return o[n]>u[n]^l<0?1:-1;return i===r?0:i>r^l<0?1:-1},S.cosine=S.cos=function(){var e,n,t=this,i=t.constructor;return t.d?t.d[0]?(e=i.precision,n=i.rounding,i.precision=e+Math.max(t.e,t.sd())+7,i.rounding=1,t=function(e,n){var t,i,r;if(n.isZero())return n;(i=n.d.length)<32?r=(1/ne(4,t=Math.ceil(i/3))).toString():(t=16,r="2.3283064365386962890625e-10");e.precision+=t,n=ee(e,1,n.times(r),new e(1));for(var s=t;s--;){var o=n.times(n);n=o.times(o).minus(o).times(8).plus(1)}return e.precision-=t,n}(i,te(i,t)),i.precision=e,i.rounding=n,U(2==m||3==m?t.neg():t,e,n,!0)):new i(1):new i(NaN)},S.cubeRoot=S.cbrt=function(){var e,n,t,i,r,s,o,u,l,a,c=this,f=c.constructor;if(!c.isFinite()||c.isZero())return new f(c);for(x=!1,(s=c.s*F(c.s*c,1/3))&&Math.abs(s)!=1/0?i=new f(s.toString()):(t=C(c.d),(s=((e=c.e)-t.length+1)%3)&&(t+=1==s||-2==s?"0":"00"),s=F(t,1/3),e=P((e+1)/3)-(e%3==(e<0?-1:2)),(i=new f(t=s==1/0?"5e"+e:(t=s.toExponential()).slice(0,t.indexOf("e")+1)+e)).s=c.s),o=(e=f.precision)+3;;)if(a=(l=(u=i).times(u).times(u)).plus(c),i=L(a.plus(c).times(u),a.plus(l),o+2,1),C(u.d).slice(0,o)===(t=C(i.d)).slice(0,o)){if("9999"!=(t=t.slice(o-3,o+1))&&(r||"4999"!=t)){+t&&(+t.slice(1)||"5"!=t.charAt(0))||(U(i,e+1,1),n=!i.times(i).times(i).eq(c));break}if(!r&&(U(u,e+1,0),u.times(u).times(u).eq(c))){i=u;break}o+=4,r=1}return x=!0,U(i,e,f.rounding,n)},S.decimalPlaces=S.dp=function(){var e,n=this.d,t=NaN;if(n){if(t=7*((e=n.length-1)-P(this.e/7)),e=n[e])for(;e%10==0;e/=10)t--;t<0&&(t=0)}return t},S.dividedBy=S.div=function(e){return L(this,new this.constructor(e))},S.dividedToIntegerBy=S.divToInt=function(e){var n=this.constructor;return U(L(this,new n(e),0,1,1),n.precision,n.rounding)},S.equals=S.eq=function(e){return 0===this.cmp(e)},S.floor=function(){return U(new this.constructor(this),this.e+1,3)},S.greaterThan=S.gt=function(e){return this.cmp(e)>0},S.greaterThanOrEqualTo=S.gte=function(e){var n=this.cmp(e);return 1==n||0===n},S.hyperbolicCosine=S.cosh=function(){var e,n,t,i,r,s=this,o=s.constructor,u=new o(1);if(!s.isFinite())return new o(s.s?1/0:NaN);if(s.isZero())return u;t=o.precision,i=o.rounding,o.precision=t+Math.max(s.e,s.sd())+4,o.rounding=1,(r=s.d.length)<32?n=(1/ne(4,e=Math.ceil(r/3))).toString():(e=16,n="2.3283064365386962890625e-10"),s=ee(o,1,s.times(n),new o(1),!0);for(var l,a=e,c=new o(8);a--;)l=s.times(s),s=u.minus(l.times(c.minus(l.times(c))));return U(s,o.precision=t,o.rounding=i,!0)},S.hyperbolicSine=S.sinh=function(){var e,n,t,i,r=this,s=r.constructor;if(!r.isFinite()||r.isZero())return new s(r);if(n=s.precision,t=s.rounding,s.precision=n+Math.max(r.e,r.sd())+4,s.rounding=1,(i=r.d.length)<3)r=ee(s,2,r,r,!0);else{e=(e=1.4*Math.sqrt(i))>16?16:0|e,r=ee(s,2,r=r.times(1/ne(5,e)),r,!0);for(var o,u=new s(5),l=new s(16),a=new s(20);e--;)o=r.times(r),r=r.times(u.plus(o.times(l.times(o).plus(a))))}return s.precision=n,s.rounding=t,U(r,n,t,!0)},S.hyperbolicTangent=S.tanh=function(){var e,n,t=this,i=t.constructor;return t.isFinite()?t.isZero()?new i(t):(e=i.precision,n=i.rounding,i.precision=e+7,i.rounding=1,L(t.sinh(),t.cosh(),i.precision=e,i.rounding=n)):new i(t.s)},S.inverseCosine=S.acos=function(){var e,n=this,t=n.constructor,i=n.abs().cmp(1),r=t.precision,s=t.rounding;return-1!==i?0===i?n.isNeg()?B(t,r,s):new t(0):new t(NaN):n.isZero()?B(t,r+4,s).times(.5):(t.precision=r+6,t.rounding=1,n=n.asin(),e=B(t,r+4,s).times(.5),t.precision=r,t.rounding=s,e.minus(n))},S.inverseHyperbolicCosine=S.acosh=function(){var e,n,t=this,i=t.constructor;return t.lte(1)?new i(t.eq(1)?0:NaN):t.isFinite()?(e=i.precision,n=i.rounding,i.precision=e+Math.max(Math.abs(t.e),t.sd())+4,i.rounding=1,x=!1,t=t.times(t).minus(1).sqrt().plus(t),x=!0,i.precision=e,i.rounding=n,t.ln()):new i(t)},S.inverseHyperbolicSine=S.asinh=function(){var e,n,t=this,i=t.constructor;return!t.isFinite()||t.isZero()?new i(t):(e=i.precision,n=i.rounding,i.precision=e+2*Math.max(Math.abs(t.e),t.sd())+6,i.rounding=1,x=!1,t=t.times(t).plus(1).sqrt().plus(t),x=!0,i.precision=e,i.rounding=n,t.ln())},S.inverseHyperbolicTangent=S.atanh=function(){var e,n,t,i,r=this,s=r.constructor;return r.isFinite()?r.e>=0?new s(r.abs().eq(1)?r.s/0:r.isZero()?r:NaN):(e=s.precision,n=s.rounding,i=r.sd(),Math.max(i,e)<2*-r.e-1?U(new s(r),e,n,!0):(s.precision=t=i-r.e,r=L(r.plus(1),new s(1).minus(r),t+e,1),s.precision=e+4,s.rounding=1,r=r.ln(),s.precision=e,s.rounding=n,r.times(.5))):new s(NaN)},S.inverseSine=S.asin=function(){var e,n,t,i,r=this,s=r.constructor;return r.isZero()?new s(r):(n=r.abs().cmp(1),t=s.precision,i=s.rounding,-1!==n?0===n?((e=B(s,t+4,i).times(.5)).s=r.s,e):new s(NaN):(s.precision=t+6,s.rounding=1,r=r.div(new s(1).minus(r.times(r)).sqrt().plus(1)).atan(),s.precision=t,s.rounding=i,r.times(2)))},S.inverseTangent=S.atan=function(){var e,n,t,i,r,s,o,u,l,a=this,c=a.constructor,f=c.precision,d=c.rounding;if(a.isFinite()){if(a.isZero())return new c(a);if(a.abs().eq(1)&&f+4<=D)return(o=B(c,f+4,d).times(.25)).s=a.s,o}else{if(!a.s)return new c(NaN);if(f+4<=D)return(o=B(c,f+4,d).times(.5)).s=a.s,o}for(c.precision=u=f+10,c.rounding=1,e=t=Math.min(28,u/7+2|0);e;--e)a=a.div(a.times(a).plus(1).sqrt().plus(1));for(x=!1,n=Math.ceil(u/7),i=1,l=a.times(a),o=new c(a),r=a;-1!==e;)if(r=r.times(l),s=o.minus(r.div(i+=2)),r=r.times(l),void 0!==(o=s.plus(r.div(i+=2))).d[n])for(e=n;o.d[e]===s.d[e]&&e--;);return t&&(o=o.times(2<<t-1)),x=!0,U(o,c.precision=f,c.rounding=d,!0)},S.isFinite=function(){return!!this.d},S.isInteger=S.isInt=function(){return!!this.d&&P(this.e/7)>this.d.length-2},S.isNaN=function(){return!this.s},S.isNegative=S.isNeg=function(){return this.s<0},S.isPositive=S.isPos=function(){return this.s>0},S.isZero=function(){return!!this.d&&0===this.d[0]},S.lessThan=S.lt=function(e){return this.cmp(e)<0},S.lessThanOrEqualTo=S.lte=function(e){return this.cmp(e)<1},S.logarithm=S.log=function(e){var n,t,i,r,s,o,u,l,a=this,c=a.constructor,f=c.precision,d=c.rounding;if(null==e)e=new c(10),n=!0;else{if(t=(e=new c(e)).d,e.s<0||!t||!t[0]||e.eq(1))return new c(NaN);n=e.eq(10)}if(t=a.d,a.s<0||!t||!t[0]||a.eq(1))return new c(t&&!t[0]?-1/0:1!=a.s?NaN:t?0:1/0);if(n)if(t.length>1)s=!0;else{for(r=t[0];r%10==0;)r/=10;s=1!==r}if(x=!1,o=K(a,u=f+5),i=n?Q(c,u+10):K(e,u),A((l=L(o,i,u,1)).d,r=f,d))do{if(o=K(a,u+=10),i=n?Q(c,u+10):K(e,u),l=L(o,i,u,1),!s){+C(l.d).slice(r+1,r+15)+1==1e14&&(l=U(l,f+1,0));break}}while(A(l.d,r+=10,d));return x=!0,U(l,f,d)},S.minus=S.sub=function(e){var n,t,i,r,s,o,u,l,a,c,f,d,h=this,p=h.constructor;if(e=new p(e),!h.d||!e.d)return h.s&&e.s?h.d?e.s=-e.s:e=new p(e.d||h.s!==e.s?h:NaN):e=new p(NaN),e;if(h.s!=e.s)return e.s=-e.s,h.plus(e);if(a=h.d,d=e.d,u=p.precision,l=p.rounding,!a[0]||!d[0]){if(d[0])e.s=-e.s;else{if(!a[0])return new p(3===l?-0:0);e=new p(h)}return x?U(e,u,l):e}if(t=P(e.e/7),c=P(h.e/7),a=a.slice(),s=c-t){for((f=s<0)?(n=a,s=-s,o=d.length):(n=d,t=c,o=a.length),s>(i=Math.max(Math.ceil(u/7),o)+2)&&(s=i,n.length=1),n.reverse(),i=s;i--;)n.push(0);n.reverse()}else{for((f=(i=a.length)<(o=d.length))&&(o=i),i=0;i<o;i++)if(a[i]!=d[i]){f=a[i]<d[i];break}s=0}for(f&&(n=a,a=d,d=n,e.s=-e.s),o=a.length,i=d.length-o;i>0;--i)a[o++]=0;for(i=d.length;i>s;){if(a[--i]<d[i]){for(r=i;r&&0===a[--r];)a[r]=q-1;--a[r],a[i]+=q}a[i]-=d[i]}for(;0===a[--o];)a.pop();for(;0===a[0];a.shift())--t;return a[0]?(e.d=a,e.e=H(a,t),x?U(e,u,l):e):new p(3===l?-0:0)},S.modulo=S.mod=function(e){var n,t=this,i=t.constructor;return e=new i(e),!t.d||!e.s||e.d&&!e.d[0]?new i(NaN):!e.d||t.d&&!t.d[0]?U(new i(t),i.precision,i.rounding):(x=!1,9==i.modulo?(n=L(t,e.abs(),0,3,1)).s*=e.s:n=L(t,e,0,i.modulo,1),n=n.times(e),x=!0,t.minus(n))},S.naturalExponential=S.exp=function(){return G(this)},S.naturalLogarithm=S.ln=function(){return K(this)},S.negated=S.neg=function(){var e=new this.constructor(this);return e.s=-e.s,U(e)},S.plus=S.add=function(e){var n,t,i,r,s,o,u,l,a,c,f=this,d=f.constructor;if(e=new d(e),!f.d||!e.d)return f.s&&e.s?f.d||(e=new d(e.d||f.s===e.s?f:NaN)):e=new d(NaN),e;if(f.s!=e.s)return e.s=-e.s,f.minus(e);if(a=f.d,c=e.d,u=d.precision,l=d.rounding,!a[0]||!c[0])return c[0]||(e=new d(f)),x?U(e,u,l):e;if(s=P(f.e/7),i=P(e.e/7),a=a.slice(),r=s-i){for(r<0?(t=a,r=-r,o=c.length):(t=c,i=s,o=a.length),r>(o=(s=Math.ceil(u/7))>o?s+1:o+1)&&(r=o,t.length=1),t.reverse();r--;)t.push(0);t.reverse()}for((o=a.length)-(r=c.length)<0&&(r=o,t=c,c=a,a=t),n=0;r;)n=(a[--r]=a[r]+c[r]+n)/q|0,a[r]%=q;for(n&&(a.unshift(n),++i),o=a.length;0==a[--o];)a.pop();return e.d=a,e.e=H(a,i),x?U(e,u,l):e},S.precision=S.sd=function(e){var n,t=this;if(void 0!==e&&e!==!!e&&1!==e&&0!==e)throw Error(_+e);return t.d?(n=j(t.d),e&&t.e+1>n&&(n=t.e+1)):n=NaN,n},S.round=function(){var e=this,n=e.constructor;return U(new n(e),e.e+1,n.rounding)},S.sine=S.sin=function(){var e,n,t=this,i=t.constructor;return t.isFinite()?t.isZero()?new i(t):(e=i.precision,n=i.rounding,i.precision=e+Math.max(t.e,t.sd())+7,i.rounding=1,t=function(e,n){var t,i=n.d.length;if(i<3)return n.isZero()?n:ee(e,2,n,n);t=(t=1.4*Math.sqrt(i))>16?16:0|t,n=n.times(1/ne(5,t)),n=ee(e,2,n,n);for(var r,s=new e(5),o=new e(16),u=new e(20);t--;)r=n.times(n),n=n.times(s.plus(r.times(o.times(r).minus(u))));return n}(i,te(i,t)),i.precision=e,i.rounding=n,U(m>2?t.neg():t,e,n,!0)):new i(NaN)},S.squareRoot=S.sqrt=function(){var e,n,t,i,r,s,o=this,u=o.d,l=o.e,a=o.s,c=o.constructor;if(1!==a||!u||!u[0])return new c(!a||a<0&&(!u||u[0])?NaN:u?o:1/0);for(x=!1,0==(a=Math.sqrt(+o))||a==1/0?(((n=C(u)).length+l)%2==0&&(n+="0"),a=Math.sqrt(n),l=P((l+1)/2)-(l<0||l%2),i=new c(n=a==1/0?"5e"+l:(n=a.toExponential()).slice(0,n.indexOf("e")+1)+l)):i=new c(a.toString()),t=(l=c.precision)+3;;)if(i=(s=i).plus(L(o,s,t+2,1)).times(.5),C(s.d).slice(0,t)===(n=C(i.d)).slice(0,t)){if("9999"!=(n=n.slice(t-3,t+1))&&(r||"4999"!=n)){+n&&(+n.slice(1)||"5"!=n.charAt(0))||(U(i,l+1,1),e=!i.times(i).eq(o));break}if(!r&&(U(s,l+1,0),s.times(s).eq(o))){i=s;break}t+=4,r=1}return x=!0,U(i,l,c.rounding,e)},S.tangent=S.tan=function(){var e,n,t=this,i=t.constructor;return t.isFinite()?t.isZero()?new i(t):(e=i.precision,n=i.rounding,i.precision=e+10,i.rounding=1,(t=t.sin()).s=1,t=L(t,new i(1).minus(t.times(t)).sqrt(),e+10,0),i.precision=e,i.rounding=n,U(2==m||4==m?t.neg():t,e,n,!0)):new i(NaN)},S.times=S.mul=function(e){var n,t,i,r,s,o,u,l,a,c=this,f=c.constructor,d=c.d,h=(e=new f(e)).d;if(e.s*=c.s,!(d&&d[0]&&h&&h[0]))return new f(!e.s||d&&!d[0]&&!h||h&&!h[0]&&!d?NaN:d&&h?0*e.s:e.s/0);for(t=P(c.e/7)+P(e.e/7),(l=d.length)<(a=h.length)&&(s=d,d=h,h=s,o=l,l=a,a=o),s=[],i=o=l+a;i--;)s.push(0);for(i=a;--i>=0;){for(n=0,r=l+i;r>i;)u=s[r]+h[i]*d[r-i-1]+n,s[r--]=u%q|0,n=u/q|0;s[r]=(s[r]+n)%q|0}for(;!s[--o];)s.pop();return n?++t:s.shift(),e.d=s,e.e=H(s,t),x?U(e,f.precision,f.rounding):e},S.toBinary=function(e,n){return ie(this,2,e,n)},S.toDecimalPlaces=S.toDP=function(e,n){var t=this,i=t.constructor;return t=new i(t),void 0===e?t:(k(e,0,1e9),void 0===n?n=i.rounding:k(n,0,8),U(t,e+t.e+1,n))},S.toExponential=function(e,n){var t,i=this,r=i.constructor;return void 0===e?t=V(i,!0):(k(e,0,1e9),void 0===n?n=r.rounding:k(n,0,8),t=V(i=U(new r(i),e+1,n),!0,e+1)),i.isNeg()&&!i.isZero()?"-"+t:t},S.toFixed=function(e,n){var t,i,r=this,s=r.constructor;return void 0===e?t=V(r):(k(e,0,1e9),void 0===n?n=s.rounding:k(n,0,8),t=V(i=U(new s(r),e+r.e+1,n),!1,e+i.e+1)),r.isNeg()&&!r.isZero()?"-"+t:t},S.toFraction=function(e){var n,t,i,r,s,o,u,l,a,c,f,d,h=this,p=h.d,g=h.constructor;if(!p)return new g(h);if(a=t=new g(1),i=l=new g(0),o=(s=(n=new g(i)).e=j(p)-h.e-1)%7,n.d[0]=F(10,o<0?7+o:o),null==e)e=s>0?n:a;else{if(!(u=new g(e)).isInt()||u.lt(a))throw Error(_+u);e=u.gt(n)?s>0?n:a:u}for(x=!1,u=new g(C(p)),c=g.precision,g.precision=s=7*p.length*2;f=L(u,n,0,1,1),1!=(r=t.plus(f.times(i))).cmp(e);)t=i,i=r,r=a,a=l.plus(f.times(r)),l=r,r=n,n=u.minus(f.times(r)),u=r;return r=L(e.minus(t),i,0,1,1),l=l.plus(r.times(a)),t=t.plus(r.times(i)),l.s=a.s=h.s,d=L(a,i,s,1).minus(h).abs().cmp(L(l,t,s,1).minus(h).abs())<1?[a,i]:[l,t],g.precision=c,x=!0,d},S.toHexadecimal=S.toHex=function(e,n){return ie(this,16,e,n)},S.toNearest=function(e,n){var t=this,i=t.constructor;if(t=new i(t),null==e){if(!t.d)return t;e=new i(1),n=i.rounding}else{if(e=new i(e),void 0===n?n=i.rounding:k(n,0,8),!t.d)return e.s?t:e;if(!e.d)return e.s&&(e.s=t.s),e}return e.d[0]?(x=!1,t=L(t,e,0,n,1).times(e),x=!0,U(t)):(e.s=t.s,t=e),t},S.toNumber=function(){return+this},S.toOctal=function(e,n){return ie(this,8,e,n)},S.toPower=S.pow=function(e){var n,t,i,r,s,o,u=this,l=u.constructor,a=+(e=new l(e));if(!(u.d&&e.d&&u.d[0]&&e.d[0]))return new l(F(+u,a));if((u=new l(u)).eq(1))return u;if(i=l.precision,s=l.rounding,e.eq(1))return U(u,i,s);if((n=P(e.e/7))>=e.d.length-1&&(t=a<0?-a:a)<=9007199254740991)return r=W(l,u,t,i),e.s<0?new l(1).div(r):U(r,i,s);if((o=u.s)<0){if(n<e.d.length-1)return new l(NaN);if(0==(1&e.d[n])&&(o=1),0==u.e&&1==u.d[0]&&1==u.d.length)return u.s=o,u}return(n=0!=(t=F(+u,a))&&isFinite(t)?new l(t+"").e:P(a*(Math.log("0."+C(u.d))/Math.LN10+u.e+1)))>l.maxE+1||n<l.minE-1?new l(n>0?o/0:0):(x=!1,l.rounding=u.s=1,t=Math.min(12,(n+"").length),(r=G(e.times(K(u,i+t)),i)).d&&A((r=U(r,i+5,1)).d,i,s)&&(n=i+10,+C((r=U(G(e.times(K(u,n+t)),n),n+5,1)).d).slice(i+1,i+15)+1==1e14&&(r=U(r,i+1,0))),r.s=o,x=!0,l.rounding=s,U(r,i,s))},S.toPrecision=function(e,n){var t,i=this,r=i.constructor;return void 0===e?t=V(i,i.e<=r.toExpNeg||i.e>=r.toExpPos):(k(e,1,1e9),void 0===n?n=r.rounding:k(n,0,8),t=V(i=U(new r(i),e,n),e<=i.e||i.e<=r.toExpNeg,e)),i.isNeg()&&!i.isZero()?"-"+t:t},S.toSignificantDigits=S.toSD=function(e,n){var t=this.constructor;return void 0===e?(e=t.precision,n=t.rounding):(k(e,1,1e9),void 0===n?n=t.rounding:k(n,0,8)),U(new t(this),e,n)},S.toString=function(){var e=this,n=e.constructor,t=V(e,e.e<=n.toExpNeg||e.e>=n.toExpPos);return e.isNeg()&&!e.isZero()?"-"+t:t},S.truncated=S.trunc=function(){return U(new this.constructor(this),this.e+1,1)},S.valueOf=S.toJSON=function(){var e=this,n=e.constructor,t=V(e,e.e<=n.toExpNeg||e.e>=n.toExpPos);return e.isNeg()?"-"+t:t};var L=function(){function e(e,n,t){var i,r=0,s=e.length;for(e=e.slice();s--;)i=e[s]*n+r,e[s]=i%t|0,r=i/t|0;return r&&e.unshift(r),e}function n(e,n,t,i){var r,s;if(t!=i)s=t>i?1:-1;else for(r=s=0;r<t;r++)if(e[r]!=n[r]){s=e[r]>n[r]?1:-1;break}return s}function t(e,n,t,i){for(var r=0;t--;)e[t]-=r,r=e[t]<n[t]?1:0,e[t]=r*i+e[t]-n[t];for(;!e[0]&&e.length>1;)e.shift()}return function(i,r,s,o,u,l){var a,c,f,d,h,p,m,w,v,y,N,b,x,_,E,F,T,M,I,R,O=i.constructor,D=i.s==r.s?1:-1,S=i.d,C=r.d;if(!(S&&S[0]&&C&&C[0]))return new O(i.s&&r.s&&(S?!C||S[0]!=C[0]:C)?S&&0==S[0]||!C?0*D:D/0:NaN);for(l?(h=1,c=i.e-r.e):(l=q,h=7,c=P(i.e/h)-P(r.e/h)),I=C.length,T=S.length,y=(v=new O(D)).d=[],f=0;C[f]==(S[f]||0);f++);if(C[f]>(S[f]||0)&&c--,null==s?(_=s=O.precision,o=O.rounding):_=u?s+(i.e-r.e)+1:s,_<0)y.push(1),p=!0;else{if(_=_/h+2|0,f=0,1==I){for(d=0,C=C[0],_++;(f<T||d)&&_--;f++)E=d*l+(S[f]||0),y[f]=E/C|0,d=E%C|0;p=d||f<T}else{for((d=l/(C[0]+1)|0)>1&&(C=e(C,d,l),S=e(S,d,l),I=C.length,T=S.length),F=I,b=(N=S.slice(0,I)).length;b<I;)N[b++]=0;(R=C.slice()).unshift(0),M=C[0],C[1]>=l/2&&++M;do{d=0,(a=n(C,N,I,b))<0?(x=N[0],I!=b&&(x=x*l+(N[1]||0)),(d=x/M|0)>1?(d>=l&&(d=l-1),1==(a=n(m=e(C,d,l),N,w=m.length,b=N.length))&&(d--,t(m,I<w?R:C,w,l))):(0==d&&(a=d=1),m=C.slice()),(w=m.length)<b&&m.unshift(0),t(N,m,b,l),-1==a&&(a=n(C,N,I,b=N.length))<1&&(d++,t(N,I<b?R:C,b,l)),b=N.length):0===a&&(d++,N=[0]),y[f++]=d,a&&N[0]?N[b++]=S[F]||0:(N=[S[F]],b=1)}while((F++<T||void 0!==N[0])&&_--);p=void 0!==N[0]}y[0]||y.shift()}if(1==h)v.e=c,g=p;else{for(f=1,d=y[0];d>=10;d/=10)f++;v.e=f+c*h-1,U(v,u?s+v.e+1:s,o,p)}return v}}();function U(e,n,t,i){var r,s,o,u,l,a,c,f,d,h=e.constructor;e:if(null!=n){if(!(f=e.d))return e;for(r=1,u=f[0];u>=10;u/=10)r++;if((s=n-r)<0)s+=7,o=n,l=(c=f[d=0])/F(10,r-o-1)%10|0;else if((d=Math.ceil((s+1)/7))>=(u=f.length)){if(!i)break e;for(;u++<=d;)f.push(0);c=l=0,r=1,o=(s%=7)-7+1}else{for(c=u=f[d],r=1;u>=10;u/=10)r++;l=(o=(s%=7)-7+r)<0?0:c/F(10,r-o-1)%10|0}if(i=i||n<0||void 0!==f[d+1]||(o<0?c:c%F(10,r-o-1)),a=t<4?(l||i)&&(0==t||t==(e.s<0?3:2)):l>5||5==l&&(4==t||i||6==t&&(s>0?o>0?c/F(10,r-o):0:f[d-1])%10&1||t==(e.s<0?8:7)),n<1||!f[0])return f.length=0,a?(n-=e.e+1,f[0]=F(10,(7-n%7)%7),e.e=-n||0):f[0]=e.e=0,e;if(0==s?(f.length=d,u=1,d--):(f.length=d+1,u=F(10,7-s),f[d]=o>0?(c/F(10,r-o)%F(10,o)|0)*u:0),a)for(;;){if(0==d){for(s=1,o=f[0];o>=10;o/=10)s++;for(o=f[0]+=u,u=1;o>=10;o/=10)u++;s!=u&&(e.e++,f[0]==q&&(f[0]=1));break}if(f[d]+=u,f[d]!=q)break;f[d--]=0,u=1}for(s=f.length;0===f[--s];)f.pop()}return x&&(e.e>h.maxE?(e.d=null,e.e=NaN):e.e<h.minE&&(e.e=0,e.d=[0])),e}function V(e,n,t){if(!e.isFinite())return X(e);var i,r=e.e,s=C(e.d),o=s.length;return n?(t&&(i=t-o)>0?s=s.charAt(0)+"."+s.slice(1)+$(i):o>1&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(e.e<0?"e":"e+")+e.e):r<0?(s="0."+$(-r-1)+s,t&&(i=t-o)>0&&(s+=$(i))):r>=o?(s+=$(r+1-o),t&&(i=t-r-1)>0&&(s=s+"."+$(i))):((i=r+1)<o&&(s=s.slice(0,i)+"."+s.slice(i)),t&&(i=t-o)>0&&(r+1===o&&(s+="."),s+=$(i))),s}function H(e,n){var t=e[0];for(n*=7;t>=10;t/=10)n++;return n}function Q(e,n,t){if(n>O)throw x=!0,t&&(e.precision=t),Error("[DecimalError] Precision limit exceeded");return U(new e(y),n,1,!0)}function B(e,n,t){if(n>D)throw Error("[DecimalError] Precision limit exceeded");return U(new e(N),n,t,!0)}function j(e){var n=e.length-1,t=7*n+1;if(n=e[n]){for(;n%10==0;n/=10)t--;for(n=e[0];n>=10;n/=10)t++}return t}function $(e){for(var n="";e--;)n+="0";return n}function W(e,n,t,i){var r,s=new e(1),o=Math.ceil(i/7+4);for(x=!1;;){if(t%2&&re((s=s.times(n)).d,o)&&(r=!0),0===(t=P(t/2))){t=s.d.length-1,r&&0===s.d[t]&&++s.d[t];break}re((n=n.times(n)).d,o)}return x=!0,s}function J(e){return 1&e.d[e.d.length-1]}function z(e,n,t){for(var i,r=new e(n[0]),s=0;++s<n.length;){if(!(i=new e(n[s])).s){r=i;break}r[t](i)&&(r=i)}return r}function G(e,n){var t,i,r,s,o,u,l,a=0,c=0,f=0,d=e.constructor,h=d.rounding,p=d.precision;if(!e.d||!e.d[0]||e.e>17)return new d(e.d?e.d[0]?e.s<0?0:1/0:1:e.s?e.s<0?0:e:NaN);for(null==n?(x=!1,l=p):l=n,u=new d(.03125);e.e>-2;)e=e.times(u),f+=5;for(l+=i=Math.log(F(2,f))/Math.LN10*2+5|0,t=s=o=new d(1),d.precision=l;;){if(s=U(s.times(e),l,1),t=t.times(++c),C((u=o.plus(L(s,t,l,1))).d).slice(0,l)===C(o.d).slice(0,l)){for(r=f;r--;)o=U(o.times(o),l,1);if(null!=n)return d.precision=p,o;if(!(a<3&&A(o.d,l-i,h,a)))return U(o,d.precision=p,h,x=!0);d.precision=l+=10,t=s=u=new d(1),c=0,a++}o=u}}function K(e,n){var t,i,r,s,o,u,l,a,c,f,d,h=1,p=e,g=p.d,m=p.constructor,w=m.rounding,v=m.precision;if(p.s<0||!g||!g[0]||!p.e&&1==g[0]&&1==g.length)return new m(g&&!g[0]?-1/0:1!=p.s?NaN:g?0:p);if(null==n?(x=!1,c=v):c=n,m.precision=c+=10,i=(t=C(g)).charAt(0),!(Math.abs(s=p.e)<15e14))return a=Q(m,c+2,v).times(s+""),p=K(new m(i+"."+t.slice(1)),c-10).plus(a),m.precision=v,null==n?U(p,v,w,x=!0):p;for(;i<7&&1!=i||1==i&&t.charAt(1)>3;)i=(t=C((p=p.times(e)).d)).charAt(0),h++;for(s=p.e,i>1?(p=new m("0."+t),s++):p=new m(i+"."+t.slice(1)),f=p,l=o=p=L(p.minus(1),p.plus(1),c,1),d=U(p.times(p),c,1),r=3;;){if(o=U(o.times(d),c,1),C((a=l.plus(L(o,new m(r),c,1))).d).slice(0,c)===C(l.d).slice(0,c)){if(l=l.times(2),0!==s&&(l=l.plus(Q(m,c+2,v).times(s+""))),l=L(l,new m(h),c,1),null!=n)return m.precision=v,l;if(!A(l.d,c-10,w,u))return U(l,m.precision=v,w,x=!0);m.precision=c+=10,a=o=p=L(f.minus(1),f.plus(1),c,1),d=U(p.times(p),c,1),r=u=1}l=a,r+=2}}function X(e){return String(e.s*e.s/0)}function Y(e,n){var t,i,r;for((t=n.indexOf("."))>-1&&(n=n.replace(".","")),(i=n.search(/e/i))>0?(t<0&&(t=i),t+=+n.slice(i+1),n=n.substring(0,i)):t<0&&(t=n.length),i=0;48===n.charCodeAt(i);i++);for(r=n.length;48===n.charCodeAt(r-1);--r);if(n=n.slice(i,r)){if(r-=i,e.e=t=t-i-1,e.d=[],i=(t+1)%7,t<0&&(i+=7),i<r){for(i&&e.d.push(+n.slice(0,i)),r-=7;i<r;)e.d.push(+n.slice(i,i+=7));i=7-(n=n.slice(i)).length}else i-=r;for(;i--;)n+="0";e.d.push(+n),x&&(e.e>e.constructor.maxE?(e.d=null,e.e=NaN):e.e<e.constructor.minE&&(e.e=0,e.d=[0]))}else e.e=0,e.d=[0];return e}function ee(e,n,t,i,r){var s,o,u,l,a=e.precision,c=Math.ceil(a/7);for(x=!1,l=t.times(t),u=new e(i);;){if(o=L(u.times(l),new e(n++*n++),a,1),u=r?i.plus(o):i.minus(o),i=L(o.times(l),new e(n++*n++),a,1),void 0!==(o=u.plus(i)).d[c]){for(s=c;o.d[s]===u.d[s]&&s--;);if(-1==s)break}s=u,u=i,i=o,o=s}return x=!0,o.d.length=c+1,o}function ne(e,n){for(var t=e;--n;)t*=e;return t}function te(e,n){var t,i=n.s<0,r=B(e,e.precision,1),s=r.times(.5);if((n=n.abs()).lte(s))return m=i?4:1,n;if((t=n.divToInt(r)).isZero())m=i?3:2;else{if((n=n.minus(t.times(r))).lte(s))return m=J(t)?i?2:3:i?4:1,n;m=J(t)?i?1:4:i?3:2}return n.minus(r).abs()}function ie(e,n,t,i){var r,s,o,u,l,a,c,f,d,h=e.constructor,p=void 0!==t;if(p?(k(t,1,1e9),void 0===i?i=h.rounding:k(i,0,8)):(t=h.precision,i=h.rounding),e.isFinite()){for(p?(r=2,16==n?t=4*t-3:8==n&&(t=3*t-2)):r=n,(o=(c=V(e)).indexOf("."))>=0&&(c=c.replace(".",""),(d=new h(1)).e=c.length-o,d.d=Z(V(d),10,r),d.e=d.d.length),s=l=(f=Z(c,10,r)).length;0==f[--l];)f.pop();if(f[0]){if(o<0?s--:((e=new h(e)).d=f,e.e=s,f=(e=L(e,d,t,i,0,r)).d,s=e.e,a=g),o=f[t],u=r/2,a=a||void 0!==f[t+1],a=i<4?(void 0!==o||a)&&(0===i||i===(e.s<0?3:2)):o>u||o===u&&(4===i||a||6===i&&1&f[t-1]||i===(e.s<0?8:7)),f.length=t,a)for(;++f[--t]>r-1;)f[t]=0,t||(++s,f.unshift(1));for(l=f.length;!f[l-1];--l);for(o=0,c="";o<l;o++)c+=v.charAt(f[o]);if(p){if(l>1)if(16==n||8==n){for(o=16==n?4:3,--l;l%o;l++)c+="0";for(l=(f=Z(c,r,n)).length;!f[l-1];--l);for(o=1,c="1.";o<l;o++)c+=v.charAt(f[o])}else c=c.charAt(0)+"."+c.slice(1);c=c+(s<0?"p":"p+")+s}else if(s<0){for(;++s;)c="0"+c;c="0."+c}else if(++s>l)for(s-=l;s--;)c+="0";else s<l&&(c=c.slice(0,s)+"."+c.slice(s))}else c=p?"0p+0":"0";c=(16==n?"0x":2==n?"0b":8==n?"0o":"")+c}else c=X(e);return e.s<0?"-"+c:c}function re(e,n){if(e.length>n)return e.length=n,!0}function se(e){return new this(e).abs()}function oe(e){return new this(e).acos()}function ue(e){return new this(e).acosh()}function le(e,n){return new this(e).plus(n)}function ae(e){return new this(e).asin()}function ce(e){return new this(e).asinh()}function fe(e){return new this(e).atan()}function de(e){return new this(e).atanh()}function he(e,n){e=new this(e),n=new this(n);var t,i=this.precision,r=this.rounding,s=i+4;return e.s&&n.s?e.d||n.d?!n.d||e.isZero()?(t=n.s<0?B(this,i,r):new this(0)).s=e.s:!e.d||n.isZero()?(t=B(this,s,1).times(.5)).s=e.s:n.s<0?(this.precision=s,this.rounding=1,t=this.atan(L(e,n,s,1)),n=B(this,s,1),this.precision=i,this.rounding=r,t=e.s<0?t.minus(n):t.plus(n)):t=this.atan(L(e,n,s,1)):(t=B(this,s,1).times(n.s>0?.25:.75)).s=e.s:t=new this(NaN),t}function pe(e){return new this(e).cbrt()}function ge(e){return U(e=new this(e),e.e+1,2)}function me(e,n,t){return new this(e).clamp(n,t)}function we(e){if(!e||"object"!=typeof e)throw Error("[DecimalError] Object expected");var n,t,i,r=!0===e.defaults,s=["precision",1,1e9,"rounding",0,8,"toExpNeg",-w,0,"toExpPos",0,w,"maxE",0,w,"minE",-w,0,"modulo",0,9];for(n=0;n<s.length;n+=3)if(t=s[n],r&&(this[t]=b[t]),void 0!==(i=e[t])){if(!(P(i)===i&&i>=s[n+1]&&i<=s[n+2]))throw Error(_+t+": "+i);this[t]=i}if(t="crypto",r&&(this[t]=b[t]),void 0!==(i=e[t])){if(!0!==i&&!1!==i&&0!==i&&1!==i)throw Error(_+t+": "+i);if(i){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw Error("[DecimalError] crypto unavailable");this[t]=!0}else this[t]=!1}return this}function ve(e){return new this(e).cos()}function ye(e){return new this(e).cosh()}function Ne(e,n){return new this(e).div(n)}function be(e){return new this(e).exp()}function xe(e){return U(e=new this(e),e.e+1,3)}function _e(){var e,n,t=new this(0);for(x=!1,e=0;e<arguments.length;)if((n=new this(arguments[e++])).d)t.d&&(t=t.plus(n.times(n)));else{if(n.s)return x=!0,new this(1/0);t=n}return x=!0,t.sqrt()}function Ee(e){return e instanceof je||e&&e.toStringTag===E||!1}function Pe(e){return new this(e).ln()}function Fe(e,n){return new this(e).log(n)}function Te(e){return new this(e).log(2)}function Me(e){return new this(e).log(10)}function Ie(){return z(this,arguments,"lt")}function Re(){return z(this,arguments,"gt")}function qe(e,n){return new this(e).mod(n)}function Oe(e,n){return new this(e).mul(n)}function De(e,n){return new this(e).pow(n)}function Se(e){var n,t,i,r,s=0,o=new this(1),u=[];if(void 0===e?e=this.precision:k(e,1,1e9),i=Math.ceil(e/7),this.crypto)if(crypto.getRandomValues)for(n=crypto.getRandomValues(new Uint32Array(i));s<i;)(r=n[s])>=429e7?n[s]=crypto.getRandomValues(new Uint32Array(1))[0]:u[s++]=r%1e7;else{if(!crypto.randomBytes)throw Error("[DecimalError] crypto unavailable");for(n=crypto.randomBytes(i*=4);s<i;)(r=n[s]+(n[s+1]<<8)+(n[s+2]<<16)+((127&n[s+3])<<24))>=214e7?crypto.randomBytes(4).copy(n,s):(u.push(r%1e7),s+=4);s=i/4}else for(;s<i;)u[s++]=1e7*Math.random()|0;for(e%=7,(i=u[--s])&&e&&(r=F(10,7-e),u[s]=(i/r|0)*r);0===u[s];s--)u.pop();if(s<0)t=0,u=[0];else{for(t=-1;0===u[0];t-=7)u.shift();for(i=1,r=u[0];r>=10;r/=10)i++;i<7&&(t-=7-i)}return o.e=t,o.d=u,o}function Ce(e){return U(e=new this(e),e.e+1,this.rounding)}function ke(e){return(e=new this(e)).d?e.d[0]?e.s:0*e.s:e.s||NaN}function Ae(e){return new this(e).sin()}function Ze(e){return new this(e).sinh()}function Le(e){return new this(e).sqrt()}function Ue(e,n){return new this(e).sub(n)}function Ve(){var e=0,n=arguments,t=new this(n[e]);for(x=!1;t.s&&++e<n.length;)t=t.plus(n[e]);return x=!0,U(t,this.precision,this.rounding)}function He(e){return new this(e).tan()}function Qe(e){return new this(e).tanh()}function Be(e){return U(e=new this(e),e.e+1,1)}S[Symbol.for("nodejs.util.inspect.custom")]=S.toString,S[Symbol.toStringTag]="Decimal";var je=S.constructor=function e(n){var t,i,r;function s(e){var n,t,i,r=this;if(!(r instanceof s))return new s(e);if(r.constructor=s,Ee(e))return r.s=e.s,void(x?!e.d||e.e>s.maxE?(r.e=NaN,r.d=null):e.e<s.minE?(r.e=0,r.d=[0]):(r.e=e.e,r.d=e.d.slice()):(r.e=e.e,r.d=e.d?e.d.slice():e.d));if("number"===(i=typeof e)){if(0===e)return r.s=1/e<0?-1:1,r.e=0,void(r.d=[0]);if(e<0?(e=-e,r.s=-1):r.s=1,e===~~e&&e<1e7){for(n=0,t=e;t>=10;t/=10)n++;return void(x?n>s.maxE?(r.e=NaN,r.d=null):n<s.minE?(r.e=0,r.d=[0]):(r.e=n,r.d=[e]):(r.e=n,r.d=[e]))}return 0*e!=0?(e||(r.s=NaN),r.e=NaN,void(r.d=null)):Y(r,e.toString())}if("string"!==i)throw Error(_+e);return 45===(t=e.charCodeAt(0))?(e=e.slice(1),r.s=-1):(43===t&&(e=e.slice(1)),r.s=1),R.test(e)?Y(r,e):function(e,n){var t,i,r,s,o,u,l,a,c;if(n.indexOf("_")>-1){if(n=n.replace(/(\d)_(?=\d)/g,"$1"),R.test(n))return Y(e,n)}else if("Infinity"===n||"NaN"===n)return+n||(e.s=NaN),e.e=NaN,e.d=null,e;if(M.test(n))t=16,n=n.toLowerCase();else if(T.test(n))t=2;else{if(!I.test(n))throw Error(_+n);t=8}for((s=n.search(/p/i))>0?(l=+n.slice(s+1),n=n.substring(2,s)):n=n.slice(2),o=(s=n.indexOf("."))>=0,i=e.constructor,o&&(s=(u=(n=n.replace(".","")).length)-s,r=W(i,new i(t),s,2*s)),s=c=(a=Z(n,t,q)).length-1;0===a[s];--s)a.pop();return s<0?new i(0*e.s):(e.e=H(a,c),e.d=a,x=!1,o&&(e=L(e,r,4*u)),l&&(e=e.times(Math.abs(l)<54?F(2,l):je.pow(2,l))),x=!0,e)}(r,e)}if(s.prototype=S,s.ROUND_UP=0,s.ROUND_DOWN=1,s.ROUND_CEIL=2,s.ROUND_FLOOR=3,s.ROUND_HALF_UP=4,s.ROUND_HALF_DOWN=5,s.ROUND_HALF_EVEN=6,s.ROUND_HALF_CEIL=7,s.ROUND_HALF_FLOOR=8,s.EUCLID=9,s.config=s.set=we,s.clone=e,s.isDecimal=Ee,s.abs=se,s.acos=oe,s.acosh=ue,s.add=le,s.asin=ae,s.asinh=ce,s.atan=fe,s.atanh=de,s.atan2=he,s.cbrt=pe,s.ceil=ge,s.clamp=me,s.cos=ve,s.cosh=ye,s.div=Ne,s.exp=be,s.floor=xe,s.hypot=_e,s.ln=Pe,s.log=Fe,s.log10=Me,s.log2=Te,s.max=Ie,s.min=Re,s.mod=qe,s.mul=Oe,s.pow=De,s.random=Se,s.round=Ce,s.sign=ke,s.sin=Ae,s.sinh=Ze,s.sqrt=Le,s.sub=Ue,s.sum=Ve,s.tan=He,s.tanh=Qe,s.trunc=Be,void 0===n&&(n={}),n&&!0!==n.defaults)for(r=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],t=0;t<r.length;)n.hasOwnProperty(i=r[t++])||(n[i]=this[i]);return s.config(n),s}(b);y=new je(y),N=new je(N);const $e=((e,n)=>{const t=e.__vccOpts||e;for(const[i,r]of n)t[i]=r;return t})({data:()=>({principal:5e3,openingPrice:"",buyTypes:["跌幅买入","涨幅买入"],buyTypeIndex:0,rate:1.5,sellRate:1.5,buyPrice:0,buyQuantity:0,realQuantity:0,buyFee:0,sellTypes:["涨幅卖出","跌幅卖出"],sellTypeIndex:0,sellPrice:0,sellFee:0,finalPrincipal:0,finalProfit:0,profitRate:0,errors:{principal:!1,openingPrice:!1,rate:!1,sellRate:!1}}),computed:{rateLabel(){return 1===this.buyTypeIndex?"涨幅买入率 (%)":"跌幅买入率 (%)"},sellRateLabel(){return 0===this.sellTypeIndex?"涨幅卖出率 (%)":"跌幅卖出率 (%)"}},methods:{updateBuyType(e){this.buyTypeIndex=e.detail.value,this.calculatePrices()},updateSellType(e){this.sellTypeIndex=e.detail.value,this.calculatePrices()},validateInput(e){const n=parseFloat(this[e]);this.errors[e]=isNaN(n)||n<=0,this.errors[e]||this.calculatePrices()},copyToClipboard(n){if(navigator.clipboard)navigator.clipboard.writeText(n.toString()).then((()=>{e({title:"已复制到剪贴板",icon:"success"})})).catch((n=>{console.error("复制失败:",n),e({title:"复制失败",icon:"none"})}));else{const t=document.createElement("input");t.value=n.toString(),document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),e({title:"已复制到剪贴板",icon:"success"})}},limitPrecision:(e,n=10)=>e.toFixed(n),calculatePrices(){const e=parseFloat(this.principal),n=this.limitPrecision(parseFloat(this.openingPrice)),t=parseFloat(this.rate).toFixed(2),i=parseFloat(this.sellRate).toFixed(2);if(isNaN(e)||isNaN(n)||isNaN(t)||isNaN(i))return;const r=1===this.buyTypeIndex?n*(1+t/100):n*(1-t/100);this.buyPrice=this.limitPrecision(r),this.buyQuantity=(e/this.buyPrice).toFixed(0),this.buyFee=(8e-4*this.buyQuantity*this.buyPrice).toFixed(10),this.realQuantity=Math.round(this.buyQuantity-8e-4*this.buyQuantity);const s=0===this.sellTypeIndex?n*(1+i/100):n*(1-i/100);this.sellPrice=this.limitPrecision(s),this.calculateResults(e,this.sellPrice,this.realQuantity)},calculateResults(e,n,t){const i=n*t;this.sellFee=8e-4*i,this.finalPrincipal=i-this.sellFee,this.finalProfit=this.finalPrincipal-e,this.profitRate=this.finalProfit/e*100}},mounted(){this.calculatePrices()}},[["render",function(e,g,m,w,v,y){const N=f,b=d,x=h,_=s,E=p;return o(),n(r,null,[t(_,{class:"container"},{default:i((()=>[t(_,{class:"input-group"},{default:i((()=>[t(N,{for:"principal"},{default:i((()=>[u("本金")])),_:1}),t(b,{type:"text",modelValue:v.principal,"onUpdate:modelValue":g[0]||(g[0]=e=>v.principal=e),placeholder:"请输入本金",onInput:g[1]||(g[1]=e=>y.validateInput("principal"))},null,8,["modelValue"]),v.errors.principal?(o(),l(x,{key:0,class:"error"},{default:i((()=>[u("请输入有效的本金金额")])),_:1})):a("",!0)])),_:1}),t(_,{class:"input-group"},{default:i((()=>[t(N,{for:"openingPrice"},{default:i((()=>[u("开盘价")])),_:1}),t(b,{type:"text",modelValue:v.openingPrice,"onUpdate:modelValue":g[2]||(g[2]=e=>v.openingPrice=e),placeholder:"请输入开盘价",onInput:g[3]||(g[3]=e=>y.validateInput("openingPrice"))},null,8,["modelValue"]),v.errors.openingPrice?(o(),l(x,{key:0,class:"error"},{default:i((()=>[u("请输入有效的开盘价")])),_:1})):a("",!0)])),_:1})])),_:1}),t(_,{class:"container"},{default:i((()=>[t(_,{class:"header"},{default:i((()=>[u("买入价格计算")])),_:1}),t(_,{class:"input-group"},{default:i((()=>[t(N,{for:"buyType"},{default:i((()=>[u("买入类型")])),_:1}),t(E,{mode:"selector",range:v.buyTypes,onChange:y.updateBuyType},{default:i((()=>[t(_,{class:"picker"},{default:i((()=>[u(c(v.buyTypes[v.buyTypeIndex]),1)])),_:1})])),_:1},8,["range","onChange"])])),_:1}),t(_,{class:"input-group"},{default:i((()=>[t(N,null,{default:i((()=>[u(c(y.rateLabel),1)])),_:1}),t(b,{type:"text",modelValue:v.rate,"onUpdate:modelValue":g[4]||(g[4]=e=>v.rate=e),placeholder:"请输入涨幅率",onInput:g[5]||(g[5]=e=>y.validateInput("rate"))},null,8,["modelValue"]),v.errors.rate?(o(),l(x,{key:0,class:"error"},{default:i((()=>[u("请输入有效的百分比")])),_:1})):a("",!0)])),_:1}),t(_,{class:"input-group"},{default:i((()=>[t(N,null,{default:i((()=>[u("买入价格")])),_:1}),t(b,{type:"text",value:v.buyPrice,readonly:"",onClick:g[6]||(g[6]=e=>y.copyToClipboard(v.buyPrice))},null,8,["value"])])),_:1}),t(_,{class:"input-group"},{default:i((()=>[t(N,null,{default:i((()=>[u("可买数量")])),_:1}),t(b,{type:"text",value:v.buyQuantity,disabled:""},null,8,["value"])])),_:1}),t(_,{class:"input-group"},{default:i((()=>[t(N,null,{default:i((()=>[u("买入手续费")])),_:1}),t(b,{type:"text",value:v.buyFee,disabled:""},null,8,["value"])])),_:1}),t(_,{class:"input-group"},{default:i((()=>[t(N,null,{default:i((()=>[u("实际数量")])),_:1}),t(b,{type:"text",value:v.realQuantity,disabled:""},null,8,["value"])])),_:1})])),_:1}),t(_,{class:"container"},{default:i((()=>[t(_,{class:"header"},{default:i((()=>[u("卖出价格计算")])),_:1}),t(_,{class:"input-group"},{default:i((()=>[t(N,{for:"buyType"},{default:i((()=>[u("卖出类型")])),_:1}),t(E,{mode:"selector",range:v.sellTypes,onChange:y.updateSellType},{default:i((()=>[t(_,{class:"picker"},{default:i((()=>[u(c(v.sellTypes[v.sellTypeIndex]),1)])),_:1})])),_:1},8,["range","onChange"])])),_:1}),t(_,{class:"input-group"},{default:i((()=>[t(N,null,{default:i((()=>[u(c(y.sellRateLabel),1)])),_:1}),t(b,{type:"text",modelValue:v.sellRate,"onUpdate:modelValue":g[7]||(g[7]=e=>v.sellRate=e),placeholder:"请输入涨幅率",onInput:g[8]||(g[8]=e=>y.validateInput("sellRate"))},null,8,["modelValue"]),v.errors.sellRate?(o(),l(x,{key:0,class:"error"},{default:i((()=>[u("请输入有效的百分比")])),_:1})):a("",!0)])),_:1}),t(_,{class:"input-group"},{default:i((()=>[t(N,null,{default:i((()=>[u("卖出价格")])),_:1}),t(b,{type:"text",value:v.sellPrice,readonly:"",onClick:g[9]||(g[9]=e=>y.copyToClipboard(v.sellPrice))},null,8,["value"])])),_:1}),t(_,{class:"input-group"},{default:i((()=>[t(N,null,{default:i((()=>[u("卖出手续费")])),_:1}),t(b,{type:"text",value:v.sellFee,disabled:""},null,8,["value"])])),_:1}),t(_,{class:"result"},{default:i((()=>[t(x,null,{default:i((()=>[u("最终收入："+c(v.finalPrincipal.toFixed(18)),1)])),_:1}),t(x,null,{default:i((()=>[u("最终收益："+c(v.finalProfit.toFixed(18)),1)])),_:1}),t(x,null,{default:i((()=>[u("盈利率："+c(v.profitRate.toFixed(4))+"%",1)])),_:1})])),_:1})])),_:1})],64)}],["__scopeId","data-v-967e6ab8"]]);export{$e as default};