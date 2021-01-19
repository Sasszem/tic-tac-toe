var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function s(t){return null==t?"":t}function u(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function g(){return d(" ")}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function h(t,e){t.value=null==e?"":e}let v;function y(t){v=t}const w=[],x=[],k=[],C=[],_=Promise.resolve();let N=!1;function T(t){k.push(t)}let q=!1;const O=new Set;function S(){if(!q){q=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];y(e),E(e.$$)}for(y(null),w.length=0;x.length;)x.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];O.has(e)||(O.add(e),e())}k.length=0}while(w.length);for(;C.length;)C.pop()();N=!1,q=!1,O.clear()}}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const L=new Set;let B;function G(){B={r:0,c:[],p:B}}function j(){B.r||o(B.c),B=B.p}function A(t,e){t&&t.i&&(L.delete(t),t.i(e))}function Y(t,e,n,o){if(t&&t.o){if(L.has(t))return;L.add(t),B.c.push(()=>{L.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function J(t){t&&t.c()}function W(t,n,l){const{fragment:c,on_mount:s,on_destroy:u,after_update:a}=t.$$;c&&c.m(n,l),T(()=>{const n=s.map(e).filter(r);u?u.push(...n):o(n),t.$$.on_mount=[]}),a.forEach(T)}function M(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function P(t,e){-1===t.$$.dirty[0]&&(w.push(t),N||(N=!0,_.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(e,r,l,c,s,u,a=[-1]){const f=v;y(e);const m=r.props||{},d=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:a,skip_bound:!1};let g=!1;if(d.ctx=l?l(e,m,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&s(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),g&&P(e,t)),n}):[],d.update(),g=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);d.fragment&&d.fragment.l(t),t.forEach(i)}else d.fragment&&d.fragment.c();r.intro&&A(e.$$.fragment),W(e,r.target,r.anchor),S()}y(f)}class z{$destroy(){M(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const D=[];let F=function(e){let n=new WebSocket(e);const{subscribe:o,update:r}=function(e,n=t){let o;const r=[];function c(t){if(l(e,t)&&(e=t,o)){const t=!D.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),D.push(n,e)}if(t){for(let t=0;t<D.length;t+=2)D[t][0](D[t+1]);D.length=0}}}return{set:c,update:function(t){c(t(e))},subscribe:function(l,s=t){const u=[l,s];return r.push(u),1===r.length&&(o=n(c)||t),l(e),()=>{const t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}({ws:n,game:{state:"name",games:[]}});function c(t,e={}){n.send(JSON.stringify({...e,type:t}))}return n.onmessage=function(t){r(e=>({...e,game:JSON.parse(t.data)}))},n.onerror=function(t){r(t=>({...t,cantConnect:!0,state:"name"}))},{subscribe:o,click:(t,e)=>{c("click",{row:t,column:e})},setName:t=>{c("join",{name:t})},connectToGame:t=>{c("connect",{game:t})},createNew:()=>{c("createNewGame")},backToLobby:()=>{c("backToLobby")}}}("wss://sasszem-ttt-server.herokuapp.com/");function H(t){let e;return{c(){e=m("p"),e.textContent="Offline!",$(e,"class","offline svelte-11dlwq5")},m(t,n){a(t,e,n)},d(t){t&&i(e)}}}function I(e){let n,r,l,c,s,f,d,b,v,y,w,x,k=e[1].cantConnect&&H();return{c(){n=m("div"),r=m("div"),r.innerHTML='<h1 class="svelte-11dlwq5">Tic-tac-toe!</h1>',l=g(),c=m("form"),s=m("p"),s.textContent="Enter your name:",f=g(),d=m("input"),b=g(),v=m("input"),y=g(),k&&k.c(),$(r,"class"," svelte-11dlwq5"),$(s,"class","svelte-11dlwq5"),$(d,"type","text"),$(d,"autofocusla",""),$(d,"class","svelte-11dlwq5"),$(v,"type","submit"),v.value="Join",$(v,"class","svelte-11dlwq5"),$(c,"class","svelte-11dlwq5"),$(n,"class"," svelte-11dlwq5")},m(t,o){var i;a(t,n,o),u(n,r),u(n,l),u(n,c),u(c,s),u(c,f),u(c,d),h(d,e[0]),u(c,b),u(c,v),u(n,y),k&&k.m(n,null),w||(x=[p(d,"input",e[3]),p(v,"click",(i=e[2],function(t){return t.preventDefault(),i.call(this,t)}))],w=!0)},p(t,[e]){1&e&&d.value!==t[0]&&h(d,t[0]),t[1].cantConnect?k||(k=H(),k.c(),k.m(n,null)):k&&(k.d(1),k=null)},i:t,o:t,d(t){t&&i(n),k&&k.d(),w=!1,o(x)}}}function K(t,e,n){let o,r;return c(t,F,t=>n(1,o=t)),[r,o,function(){F.setName(r)},function(){r=this.value,n(0,r)}]}class Q extends z{constructor(t){super(),X(this,t,K,I,l,{})}}function R(e){let n,o,r,l,c,s,f;return{c(){n=m("div"),o=m("p"),r=d(e[0]),l=g(),c=m("button"),c.textContent="Connect",$(o,"class","svelte-osxyao"),$(c,"class","connect-button svelte-osxyao"),$(n,"class","table-row svelte-osxyao")},m(t,i){a(t,n,i),u(n,o),u(o,r),u(n,l),u(n,c),s||(f=p(c,"click",e[1]),s=!0)},p(t,[e]){1&e&&b(r,t[0])},i:t,o:t,d(t){t&&i(n),s=!1,f()}}}function U(t,e,n){let{game:o}=e;return t.$$set=t=>{"game"in t&&n(0,o=t.game)},[o,function(){F.connectToGame(o)}]}class V extends z{constructor(t){super(),X(this,t,U,R,l,{game:0})}}function Z(t,e,n){const o=t.slice();return o[4]=e[n],o}function tt(t){let e,n,o=t[0],r=[];for(let e=0;e<o.length;e+=1)r[e]=nt(Z(t,o,e));const l=t=>Y(r[t],1,1,()=>{r[t]=null});return{c(){e=m("div");for(let t=0;t<r.length;t+=1)r[t].c();$(e,"class","table svelte-19r7s3s")},m(t,o){a(t,e,o);for(let t=0;t<r.length;t+=1)r[t].m(e,null);n=!0},p(t,n){if(1&n){let c;for(o=t[0],c=0;c<o.length;c+=1){const l=Z(t,o,c);r[c]?(r[c].p(l,n),A(r[c],1)):(r[c]=nt(l),r[c].c(),A(r[c],1),r[c].m(e,null))}for(G(),c=o.length;c<r.length;c+=1)l(c);j()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)A(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)Y(r[t]);n=!1},d(t){t&&i(e),f(r,t)}}}function et(e){let n;return{c(){n=m("h3"),n.textContent="No games alaviable!",$(n,"class","svelte-19r7s3s")},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&i(n)}}}function nt(t){let e,n;return e=new V({props:{game:t[4]}}),{c(){J(e.$$.fragment)},m(t,o){W(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.game=t[4]),e.$set(o)},i(t){n||(A(e.$$.fragment,t),n=!0)},o(t){Y(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}function ot(t){let e,n,o,r,l,c,s,f,d,b,h;const v=[et,tt],y=[];function w(t,e){return t[1]?0:1}return s=w(t),f=y[s]=v[s](t),{c(){e=m("div"),n=m("div"),o=m("h2"),o.textContent="List of games:",r=g(),l=m("button"),l.textContent="Create new",c=g(),f.c(),$(o,"class","svelte-19r7s3s"),$(l,"class","new button svelte-19r7s3s"),$(n,"class","header box-set svelte-19r7s3s"),$(e,"class","container svelte-19r7s3s")},m(i,f){a(i,e,f),u(e,n),u(n,o),u(n,r),u(n,l),u(e,c),y[s].m(e,null),d=!0,b||(h=p(l,"click",t[2]),b=!0)},p(t,[n]){let o=s;s=w(t),s===o?y[s].p(t,n):(G(),Y(y[o],1,1,()=>{y[o]=null}),j(),f=y[s],f?f.p(t,n):(f=y[s]=v[s](t),f.c()),A(f,1),f.m(e,null))},i(t){d||(A(f),d=!0)},o(t){Y(f),d=!1},d(t){t&&i(e),y[s].d(),b=!1,h()}}}function rt(t,e,n){let o,r,l;return c(t,F,t=>n(3,l=t)),t.$$.update=()=>{8&t.$$.dirty&&n(0,o=l.game.games),1&t.$$.dirty&&n(1,r=0===o.length)},[o,r,function(){F.createNew()},l]}class lt extends z{constructor(t){super(),X(this,t,rt,ot,l,{})}}function ct(e){let n,o,r;return{c(){n=m("h2"),n.textContent="Waiting for another player...",o=g(),r=m("p"),$(n,"class","svelte-1mc8du2"),$(r,"class","svelte-1mc8du2")},m(t,e){a(t,n,e),a(t,o,e),a(t,r,e)},p:t,i:t,o:t,d(t){t&&i(n),t&&i(o),t&&i(r)}}}class st extends z{constructor(t){super(),X(this,t,null,ct,l,{})}}function ut(e){let n,o,r,l,c;return{c(){n=m("button"),o=d(e[0]),$(n,"class",r=s("O"===e[0]?"oSelected":"xSelected")+" svelte-1ghl6bv")},m(t,r){a(t,n,r),u(n,o),l||(c=p(n,"click",e[1]),l=!0)},p(t,[e]){1&e&&b(o,t[0]),1&e&&r!==(r=s("O"===t[0]?"oSelected":"xSelected")+" svelte-1ghl6bv")&&$(n,"class",r)},i:t,o:t,d(t){t&&i(n),l=!1,c()}}}function at(t,e,n){let o,r;c(t,F,t=>n(4,r=t));let{row:l}=e,{column:s}=e;return t.$$set=t=>{"row"in t&&n(2,l=t.row),"column"in t&&n(3,s=t.column)},t.$$.update=()=>{28&t.$$.dirty&&n(0,o=r.game.board[l][s])},[o,function(){F.click(l,s)},l,s,r]}class it extends z{constructor(t){super(),X(this,t,at,ut,l,{row:2,column:3})}}function ft(t,e,n){const o=t.slice();return o[2]=e[n],o}function mt(t,e,n){const o=t.slice();return o[5]=e[n],o}function dt(e){let n,o,r;return o=new it({props:{row:e[2],column:e[5]}}),{c(){n=m("td"),J(o.$$.fragment),$(n,"class","svelte-gf52b0")},m(t,e){a(t,n,e),W(o,n,null),r=!0},p:t,i(t){r||(A(o.$$.fragment,t),r=!0)},o(t){Y(o.$$.fragment,t),r=!1},d(t){t&&i(n),M(o)}}}function gt(e){let n,o,r,l=[0,1,2],c=[];for(let t=0;t<3;t+=1)c[t]=dt(mt(e,l,t));return{c(){n=m("tr");for(let t=0;t<3;t+=1)c[t].c();o=g(),$(n,"class","svelte-gf52b0")},m(t,e){a(t,n,e);for(let t=0;t<3;t+=1)c[t].m(n,null);u(n,o),r=!0},p:t,i(t){if(!r){for(let t=0;t<3;t+=1)A(c[t]);r=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<3;t+=1)Y(c[t]);r=!1},d(t){t&&i(n),f(c,t)}}}function pt(t){let e,n,o,r;function l(t,e){return"won"===t[0].game.result?vt:"lost"===t[0].game.result?ht:"draw"===t[0].game.result?bt:void 0}let c=l(t),s=c&&c(t);return{c(){s&&s.c(),e=g(),n=m("button"),n.textContent="Back to lobby",$(n,"class","endGame svelte-gf52b0")},m(l,c){s&&s.m(l,c),a(l,e,c),a(l,n,c),o||(r=p(n,"click",t[1]),o=!0)},p(t,n){c!==(c=l(t))&&(s&&s.d(1),s=c&&c(t),s&&(s.c(),s.m(e.parentNode,e)))},d(t){s&&s.d(t),t&&i(e),t&&i(n),o=!1,r()}}}function $t(t){let e;function n(t,e){return t[0].game.yourTurn?wt:yt}let o=n(t),r=o(t);return{c(){r.c(),e=d("")},m(t,n){r.m(t,n),a(t,e,n)},p(t,l){o!==(o=n(t))&&(r.d(1),r=o(t),r&&(r.c(),r.m(e.parentNode,e)))},d(t){r.d(t),t&&i(e)}}}function bt(t){let e;return{c(){e=m("p"),e.textContent="It's a draw",$(e,"class","yellow svelte-gf52b0")},m(t,n){a(t,e,n)},d(t){t&&i(e)}}}function ht(t){let e;return{c(){e=m("p"),e.textContent="You lost!",$(e,"class","red svelte-gf52b0")},m(t,n){a(t,e,n)},d(t){t&&i(e)}}}function vt(t){let e;return{c(){e=m("p"),e.textContent="You won!",$(e,"class","green svelte-gf52b0")},m(t,n){a(t,e,n)},d(t){t&&i(e)}}}function yt(t){let e;return{c(){e=m("p"),e.textContent="Waiting for your enemy...",$(e,"class","enemyTurn svelte-gf52b0")},m(t,n){a(t,e,n)},d(t){t&&i(e)}}}function wt(t){let e;return{c(){e=m("p"),e.textContent="Your turn!",$(e,"class","yourTurn svelte-gf52b0")},m(t,n){a(t,e,n)},d(t){t&&i(e)}}}function xt(t){let e,n,o,r,l,c,p,h,v,y,w,x,k,C,_=t[0].game.opponent+"",N=t[0].game.symbol+"",T=[0,1,2],q=[];for(let e=0;e<3;e+=1)q[e]=gt(ft(t,T,e));function O(t,e){return""===t[0].game.result?$t:pt}let S=O(t),E=S(t);return{c(){e=m("div"),n=m("h2"),o=d("Playing againts "),r=d(_),l=g(),c=m("h3"),p=d("Your symbol is "),h=m("span"),v=d(N),w=g(),x=m("table");for(let t=0;t<3;t+=1)q[t].c();k=g(),E.c(),$(n,"class","svelte-gf52b0"),$(h,"class",y=s("X"===t[0].game.symbol?"green":"red")+" svelte-gf52b0"),$(c,"class","svelte-gf52b0"),$(x,"class","svelte-gf52b0"),$(e,"class","outer svelte-gf52b0")},m(t,s){a(t,e,s),u(e,n),u(n,o),u(n,r),u(e,l),u(e,c),u(c,p),u(c,h),u(h,v),u(e,w),u(e,x);for(let t=0;t<3;t+=1)q[t].m(x,null);u(e,k),E.m(e,null),C=!0},p(t,[n]){(!C||1&n)&&_!==(_=t[0].game.opponent+"")&&b(r,_),(!C||1&n)&&N!==(N=t[0].game.symbol+"")&&b(v,N),(!C||1&n&&y!==(y=s("X"===t[0].game.symbol?"green":"red")+" svelte-gf52b0"))&&$(h,"class",y),S===(S=O(t))&&E?E.p(t,n):(E.d(1),E=S(t),E&&(E.c(),E.m(e,null)))},i(t){if(!C){for(let t=0;t<3;t+=1)A(q[t]);C=!0}},o(t){q=q.filter(Boolean);for(let t=0;t<3;t+=1)Y(q[t]);C=!1},d(t){t&&i(e),f(q,t),E.d()}}}function kt(t,e,n){let o;return c(t,F,t=>n(0,o=t)),[o,function(){F.backToLobby()}]}class Ct extends z{constructor(t){super(),X(this,t,kt,xt,l,{})}}function _t(t){let e,n;return e=new st({}),{c(){J(e.$$.fragment)},m(t,o){W(e,t,o),n=!0},i(t){n||(A(e.$$.fragment,t),n=!0)},o(t){Y(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}function Nt(t){let e,n;return e=new Ct({}),{c(){J(e.$$.fragment)},m(t,o){W(e,t,o),n=!0},i(t){n||(A(e.$$.fragment,t),n=!0)},o(t){Y(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}function Tt(t){let e,n;return e=new lt({}),{c(){J(e.$$.fragment)},m(t,o){W(e,t,o),n=!0},i(t){n||(A(e.$$.fragment,t),n=!0)},o(t){Y(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}function qt(t){let e,n;return e=new Q({}),{c(){J(e.$$.fragment)},m(t,o){W(e,t,o),n=!0},i(t){n||(A(e.$$.fragment,t),n=!0)},o(t){Y(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}function Ot(t){let e,n,o,r;const l=[qt,Tt,Nt,_t],c=[];function s(t,e){return"name"===t[0]?0:"lobby"===t[0]?1:"game"===t[0]?2:"waitingForGame"===t[0]?3:-1}return~(n=s(t))&&(o=c[n]=l[n](t)),{c(){e=m("main"),o&&o.c(),$(e,"class","outer svelte-1gpao5c")},m(t,o){a(t,e,o),~n&&c[n].m(e,null),r=!0},p(t,[r]){let u=n;n=s(t),n!==u&&(o&&(G(),Y(c[u],1,1,()=>{c[u]=null}),j()),~n?(o=c[n],o||(o=c[n]=l[n](t),o.c()),A(o,1),o.m(e,null)):o=null)},i(t){r||(A(o),r=!0)},o(t){Y(o),r=!1},d(t){t&&i(e),~n&&c[n].d()}}}function St(t,e,n){let o,r;return c(t,F,t=>n(1,r=t)),t.$$.update=()=>{2&t.$$.dirty&&n(0,o=r.game.state)},[o,r]}return new class extends z{constructor(t){super(),X(this,t,St,Ot,l,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
