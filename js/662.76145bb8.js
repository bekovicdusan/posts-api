"use strict";(self["webpackChunkblog"]=self["webpackChunkblog"]||[]).push([[662],{7662:function(e,s,t){t.r(s),t.d(s,{default:function(){return g}});var o=t(3396),r=t(7139);const n={class:"title-wrapper"},l={class:"post-title"},i={class:"body-wrapper"},u={class:"author"},m=(0,o.Uk)(" by "),c={style:{"font-weight":"bold",color:"#41b883"}},a=(0,o._)("hr",null,null,-1),d={class:"comment-wrapper"},p=(0,o._)("h3",{style:{color:"#2B193D"}},"Comments",-1),w={class:"comment-section"},_={key:0,class:"individual-comment"},h={class:"commenter"},b={class:"comment"};function k(e,s,t,k,v,y){const C=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",{class:(0,r.C_)(["post-preview-wrapper",k.showComments?"show-comments":null])},[(0,o._)("div",n,[(0,o.Wm)(C,{to:`/post/${t.id}`,class:"router-link"},{default:(0,o.w5)((()=>[(0,o._)("h2",l,(0,r.zw)(t.title),1)])),_:1},8,["to"])]),(0,o._)("div",i,[(0,o._)("p",null,(0,r.zw)(t.body),1),(0,o._)("span",u,[m,(0,o._)("em",c,(0,r.zw)(k.store.state.resources["users"]?k.store.state.resources["users"][t.userId].name:"unknown"),1)])]),a,(0,o._)("div",d,[p,(0,o._)("div",w,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(k.store.state.resources["comments"],(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.id},[e.postId===t.id?((0,o.wg)(),(0,o.iD)("div",_,[(0,o._)("h4",null,[(0,o.Uk)((0,r.zw)(e.name)+" ",1),(0,o._)("small",h," ("+(0,r.zw)(e.email)+") ",1)]),(0,o._)("p",b,(0,r.zw)(e.body),1)])):(0,o.kq)("",!0)])))),128))]),(0,o._)("span",{class:(0,r.C_)(["see-more",k.showComments?"active":null]),onClick:s[0]||(s[0]=e=>k.showComments=!k.showComments)},(0,r.zw)(k.showComments?"see less...":"see more..."),3)])],2)}var v=t(4870),y={props:{title:{required:!0,type:String},body:{required:!0,type:String},id:{required:!0,type:Number},userId:{required:!0,type:Number}},setup(){const e=(0,o.f3)("store"),s=(0,v.iH)(!1);return{store:e,showComments:s}}},C=t(89);const f=(0,C.Z)(y,[["render",k]]);var g=f}}]);
//# sourceMappingURL=662.76145bb8.js.map