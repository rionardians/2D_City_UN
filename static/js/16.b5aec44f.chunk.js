(this.webpackJsonpweb3gl=this.webpackJsonpweb3gl||[]).push([[16,19,69,82],{749:function(e,r,i){"use strict";i.r(r),i.d(r,"generateAddresses",(function(){return d})),i.d(r,"isValidPath",(function(){return o}));var n=i(693),t=i(769),u=i.n(t),s=i(8),a=n.publicToAddress,c=n.toChecksumAddress;function d(e,r){var i=e.publicKey,n=e.chainCode,t=e.path,d=new u.a;d.publicKey=new s.Buffer(i,"hex"),d.chainCode=new s.Buffer(n,"hex");for(var o=[],f=r;f<5+r;f++){var h=d.deriveChild(f),l=a(h.publicKey,!0).toString("hex");o.push({dPath:"".concat(t,"/").concat(f),address:c("0x".concat(l))})}return o}function o(e){var r=e.split("/");if("m"!==r[0])return!1;if("44'"!==r[1])return!1;if(!["60'","1'","73799'","246'"].includes(r[2]))return!1;if(void 0===r[3]||"0'"===r[3])return!0;var i=Number(r[3].slice(0,-1));if(isNaN(i)||i<0||"'"!==r[3].slice(-1))return!1;if(void 0===r[4])return!0;var n=Number(r[4]);if(isNaN(n)||n<0)return!1;if(void 0===r[5])return!0;var t=Number(r[5]);return!(isNaN(t)||t<0)}},789:function(e,r){}}]);
