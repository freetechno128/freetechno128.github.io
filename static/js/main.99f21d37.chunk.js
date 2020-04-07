(this["webpackJsonpr3f-moksha"]=this["webpackJsonpr3f-moksha"]||[]).push([[0],{26:function(e,t,r){e.exports=r(36)},35:function(e,t,r){},36:function(e,t,r){"use strict";r.r(t);var o=r(9),a=r.n(o),n=r(0),i=r.n(n),c=r(3),s=r(1),l=r(5),f=r.n(l),u=r(8),m=r(16),p=r.n(m),h={sections:4,pages:3,zoom:75,paragraphs:[{offset:1,factor:1.75,header:"NMT-React",image:"/nmtReactPreview.png",aspect:1.46,text:"This tool based on a Neural Machine Translation technology will help you translate English to German. The frontend uses ReactJS to dynamically render the DOM and Bootstrap to make the website responsive. The backend is written in Python using Flask to easily define the endpoints. The machine learning model was built using TensorFlow and OpenNMT."},{offset:2,factor:2.6,header:"Coming Soon ...",image:"/coming-soon.png",aspect:1.7,text:"More projects comming soon"}],stripes:[{offset:0,color:"#000",height:13}],diamonds:[{x:0,offset:.22,pos:new s.Vector3,scale:.6,factor:1.8},{x:2,offset:1.1,pos:new s.Vector3,scale:.8,factor:2.1},{x:-5,offset:2,pos:new s.Vector3,scale:.8,factor:2.5},{x:0,offset:2.8,pos:new s.Vector3,scale:.8,factor:6}],top:Object(n.createRef)()};function v(e){var t=e.children,r=e.size,o=void 0===r?1:r,a=e.left,l=e.right,m=e.top,v=e.bottom,g=e.color,d=void 0===g?"white":g,b=e.opacity,y=void 0===b?1:b,E=e.height,x=void 0===E?.01:E,O=(e.layers,e.font),j=void 0===O?"/MOONGET_Heavy.blob":O,w=Object(u.a)(e,["children","size","left","right","top","bottom","color","opacity","height","layers","font"]),z=Object(c.e)(s.FontLoader,j),k=p()((function(){return new Promise((function(e){return e(new s.TextBufferGeometry(t,{font:z,size:1,height:x,curveSegments:32}))}))}),[t]),M=Object(n.useCallback)((function(e){var t=new s.Vector3;e.geometry.computeBoundingBox(),e.geometry.boundingBox.getSize(t),e.position.x=a?0:l?-t.x:-t.x/2,e.position.y=m?0:v?-t.y:-t.y/2}),[a,l,m,v]),T=Object(n.useRef)(),C=h.top.current;return Object(c.d)((function(){T.current.shift=f()(T.current.shift,(h.top.current-C)/100,.1),C=h.top.current})),i.a.createElement("group",Object.assign({},w,{scale:[o,o,.1]}),i.a.createElement("mesh",{geometry:k,onUpdate:M,frustumCulled:!1},i.a.createElement("customMaterial",{ref:T,attach:"material",color:d,transparent:!0,opacity:y})))}var g=function(e){var t=e.text,r=e.size,o=void 0===r?1:r,a=e.lineHeight,n=void 0===a?1:a,c=e.position,s=void 0===c?[0,0,0]:c,l=Object(u.a)(e,["text","size","lineHeight","position"]);return t.split("\n").map((function(e,t){return i.a.createElement(v,Object.assign({key:t,size:o},l,{position:[s[0],s[1]-t*n,s[2]],children:e}))}))},d=r(7),b=r(25),y=r(13),E=r(10),x=r(11),O=function(e){function t(){return Object(d.a)(this,t),Object(y.a)(this,Object(E.a)(t).call(this,{vertexShader:"uniform float scale;\n      uniform float shift;\n      varying vec2 vUv;\n      void main() {\n        vec3 pos = position;\n        pos.y = pos.y + ((sin(uv.x * 3.1415926535897932384626433832795) * shift * 2.0) * 0.125);\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);\n      }",fragmentShader:"uniform sampler2D texture;\n      uniform float hasTexture;\n      uniform float shift;\n      uniform float scale;\n      uniform vec3 color;\n      uniform float opacity;\n      varying vec2 vUv;\n      void main() {\n        float angle = 1.55;\n        vec2 p = (vUv - vec2(0.5, 0.5)) * (1.0 - scale) + vec2(0.5, 0.5);\n        vec2 offset = shift / 4.0 * vec2(cos(angle), sin(angle));\n        vec4 cr = texture2D(texture, p + offset);\n        vec4 cga = texture2D(texture, p);\n        vec4 cb = texture2D(texture, p - offset);\n        if (hasTexture == 1.0) gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);\n        else gl_FragColor = vec4(color, opacity);\n      }",uniforms:{texture:{value:null},hasTexture:{value:0},scale:{value:0},shift:{value:0},opacity:{value:1},color:{value:new s.Color("white")}}}))}return Object(x.a)(t,e),Object(b.a)(t,[{key:"scale",set:function(e){this.uniforms.scale.value=e},get:function(){return this.uniforms.scale.value}},{key:"shift",set:function(e){this.uniforms.shift.value=e},get:function(){return this.uniforms.shift.value}},{key:"map",set:function(e){this.uniforms.hasTexture.value=!!e,this.uniforms.texture.value=e},get:function(){return this.uniforms.texture.value}},{key:"color",get:function(){return this.uniforms.color.value}},{key:"opacity",get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms&&(this.uniforms.opacity.value=e)}}]),t}(s.ShaderMaterial);Object(c.c)({CustomMaterial:O});var j=Object(n.createContext)(0);function w(e){var t=e.children,r=e.offset,o=e.factor,a=Object(u.a)(e,["children","offset","factor"]),s=z(),l=s.offset,m=s.sectionHeight,p=Object(n.useRef)();return r=void 0!==r?r:l,Object(c.d)((function(){var e=p.current.position.y,t=h.top.current;p.current.position.y=f()(e,t/h.zoom*o,.1)})),i.a.createElement(j.Provider,{value:r},i.a.createElement("group",Object.assign({},a,{position:[0,-m*r*o,0]}),i.a.createElement("group",{ref:p},t)))}function z(){var e=h.sections,t=h.pages,r=h.zoom,o=Object(c.f)(),a=o.size,i=o.viewport,s=Object(n.useContext)(j),l=i.width,f=i.height,u=l/r,m=f/r,p=a.width<700;return{viewport:i,offset:s,viewportWidth:l,viewportHeight:f,canvasWidth:u,canvasHeight:m,mobile:p,margin:u*(p?.2:.1),contentMaxWidth:u*(p?.8:.6),sectionHeight:m*((t-1)/(e-1)),offsetFactor:(s+1)/e}}var k=Object(n.forwardRef)((function(e,t){var r=e.color,o=void 0===r?"white":r,a=e.shift,s=void 0===a?1:a,l=e.opacity,m=void 0===l?1:l,p=e.args,v=e.map,g=Object(u.a)(e,["color","shift","opacity","args","map"]),d=z(),b=d.viewportHeight,y=d.offsetFactor,E=Object(n.useRef)(),x=h.top.current;return Object(c.d)((function(){var e=h.pages,t=h.top;E.current.scale=f()(E.current.scale,y-t.current/((e-1)*b),.1),E.current.shift=f()(E.current.shift,(t.current-x)/s,.1),x=t.current})),i.a.createElement("mesh",Object.assign({ref:t},g),i.a.createElement("planeBufferGeometry",{attach:"geometry",args:p}),i.a.createElement("customMaterial",{ref:E,attach:"material",color:o,map:v,transparent:!0,opacity:m}))}));r(35);function M(){var e=Object(n.useRef)();return Object(c.d)((function(){return e.current.material.opacity=f()(e.current.material.opacity,0,.025)})),i.a.createElement(k,{ref:e,color:"#0e0e0f",position:[0,0,200],scale:[100,100,1]})}function T(e){var t=e.image,r=e.index,o=e.offset,a=e.factor,n=e.header,s=e.aspect,l=e.text,f=z(),u=f.contentMaxWidth,m=f.canvasWidth,p=f.margin,g=f.mobile,d=s<1&&!g?.65:1,b=(m-u*d-p)/2,y=u*h.zoom*d,E=!(r%2),x=r%2?"#D40749":"#2FE8C3";return i.a.createElement(w,{factor:a,offset:o},i.a.createElement("group",{position:[E?-b:b,0,0]},i.a.createElement(k,{map:t,args:[1,1,32,32],shift:75,size:d,aspect:s,scale:[u*d,u*d/s,1],frustumCulled:!1}),i.a.createElement(c.b,{style:{width:y/(g?1:2),textAlign:E?"left":"right"},position:[E||g?-u*d/2:0,-u*d/2/s-.4,1]},i.a.createElement("div",{tabIndex:r},l)),i.a.createElement(v,{left:E,right:!E,size:.04*u,color:x,top:!0,position:[(E?-u:u)*d/2,u*d/s/2+.5,-1]},n),i.a.createElement(w,{factor:.2},i.a.createElement(v,{opacity:.5,size:.1*u,color:"#1A1E2A",position:[(E?u:-u)/2*d,u*d/s/1.5,-10]},"0"+(r+1)))))}function C(){var e=Object(c.e)(s.TextureLoader,h.paragraphs.map((function(e){return e.image})));Object(n.useMemo)((function(){return e.forEach((function(e){return e.minFilter=s.LinearFilter}))}),[e]);var t=z(),r=t.contentMaxWidth,o=t.canvasWidth,a=t.canvasHeight,l=t.mobile;return i.a.createElement(n.Fragment,null,i.a.createElement(w,{factor:1,offset:0},i.a.createElement(w,{factor:1.2},i.a.createElement(v,{left:!0,size:.08*r,position:[-r/2.8,.5,-1],color:"#d40749"},"PHILIPPE T.")),i.a.createElement(w,{factor:1},i.a.createElement(c.b,{position:[-r/3.6,.08*-r+.25,-1]},"And here is my portfolio.",l?i.a.createElement("br",null):" ","Eat. Sleep. Learn. Create."))),h.paragraphs.map((function(t,r){return i.a.createElement(T,Object.assign({key:r,index:r},t,{image:e[r]}))})),h.stripes.map((function(e,t){var r=e.offset,o=e.color,a=e.height;return i.a.createElement(w,{key:t,factor:-1.5,offset:r},i.a.createElement(k,{args:[50,a,32,32],shift:-4,color:o,rotation:[0,0,Math.PI/8],position:[0,0,-10]}))})),i.a.createElement(w,{factor:1.2,offset:3},i.a.createElement(g,{top:!0,left:!0,size:.15*r,lineHeight:r/4,position:[-r/3,1,-1],color:"#2fe8c3",text:"dream\nBIG."})),i.a.createElement(w,{factor:1.25,offset:3},i.a.createElement(c.b,{className:"bottom-left",position:[-o/2,-a/2,0]},"Made with ",i.a.createElement("i",{className:"fa fa-heart",style:{color:"#D40749"}})," by Philippe Talarico")))}a.a.render(i.a.createElement((function(){var e=Object(n.useRef)(),t=function(e){return h.top.current=e.target.scrollTop};return Object(n.useEffect)((function(){t({target:e.current})}),[]),i.a.createElement(n.Fragment,null,i.a.createElement(c.a,{concurrent:!0,pixelRatio:2,orthographic:!0,camera:{zoom:h.zoom,position:[0,0,500]}},i.a.createElement(n.Suspense,{fallback:i.a.createElement(c.b,{center:!0,className:"loading",children:"Loading..."})},i.a.createElement(C,null),i.a.createElement(M,null))),i.a.createElement("div",{className:"scrollArea",ref:e,onScroll:t},new Array(h.sections).fill().map((function(e,t){return i.a.createElement("div",{key:t,id:"0"+t,style:{height:"".concat(h.pages/h.sections*100,"vh")}})}))))}),null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.99f21d37.chunk.js.map