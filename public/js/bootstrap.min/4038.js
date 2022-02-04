"use strict";(self.webpackChunkNexoPOS_4x=self.webpackChunkNexoPOS_4x||[]).push([[4038],{4038:(t,i,e)=>{e.r(i),e.d(i,{default:()=>c});var n=e(9671),s=e(7389),o=e(8774);const l={name:"ns-notifications",data:function(){return{notifications:[],visible:!1,interval:null}},mounted:function(){var t=this;document.addEventListener("click",this.checkClickedItem),ns.websocket.enabled?Echo.private("ns.private-channel").listen("App\\Events\\NotificationDispatchedEvent",(function(i){t.pushNotificationIfNew(i.notification)})).listen("App\\Events\\NotificationDeletedEvent",(function(i){t.deleteNotificationIfExists(i.notification)})):this.interval=setInterval((function(){t.loadNotifications()}),15e3),this.loadNotifications()},destroyed:function(){clearInterval(this.interval)},methods:{__:s.__,pushNotificationIfNew:function(t){var i=this.notifications.filter((function(i){return i.id===t.id})).length>0;console.log(t),i||this.notifications.push(t)},deleteNotificationIfExists:function(t){var i=this.notifications.filter((function(i){return i.id===t.id}));if(i.length>0){var e=this.notifications.indexOf(i[0]);this.notifications.splice(e,1)}},deleteAll:function(){Popup.show(o.default,{title:(0,s.__)("Confirm Your Action"),message:(0,s.__)("Would you like to clear all the notifications ?"),onAction:function(t){t&&n.ih.delete("/api/nexopos/v4/notifications/all").subscribe((function(t){n.kX.success(t.message).subscribe()}))}})},checkClickedItem:function(t){var i;i=!!document.getElementById("notification-center")&&document.getElementById("notification-center").contains(t.srcElement);var e=document.getElementById("notification-button").contains(t.srcElement);i||e||!this.visible||(this.visible=!1)},loadNotifications:function(){var t=this;n.ih.get("/api/nexopos/v4/notifications").subscribe((function(i){t.notifications=i}))},triggerLink:function(t){if("url"!==t.url)return window.open(t.url,"_blank")},closeNotice:function(t,i){var e=this;n.ih.delete("/api/nexopos/v4/notifications/".concat(i.id)).subscribe((function(t){e.loadNotifications()})),t.stopPropagation()}}};const c=(0,e(1900).Z)(l,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"notificaton-wrapper"}},[e("div",{staticClass:"hover:shadow-lg hover:border-opacity-0 rounded-full h-12 w-12 cursor-pointer font-bold text-2xl justify-center items-center flex",class:t.visible?"panel-visible border-0 shadow-lg":"border panel-hidden",attrs:{id:"notification-button"},on:{click:function(i){t.visible=!t.visible}}},[t.notifications.length>0?e("div",{staticClass:"relative float-right"},[e("div",{staticClass:"absolute -ml-6 -mt-8"},[e("div",{staticClass:"bg-blue-400 text-white w-8 h-8 rounded-full text-xs flex items-center justify-center"},[t._v(t._s(t._f("abbreviate")(t.notifications.length)))])])]):t._e(),t._v(" "),e("i",{staticClass:"las la-bell"})]),t._v(" "),t.visible?e("div",{staticClass:"h-0 w-0",attrs:{id:"notification-center"}},[e("div",{staticClass:"absolute left-0 top-0 sm:relative w-screen zoom-out-entrance anim-duration-300 h-5/7-screen sm:w-64 sm:h-108 flex flex-row-reverse"},[e("div",{staticClass:"z-50 sm:rounded-lg shadow-lg h-full w-full md:mt-2 overflow-y-hidden flex flex-col"},[e("div",{staticClass:"sm:hidden p-2 cursor-pointer flex items-center justify-center border-b border-gray-200",on:{click:function(i){t.visible=!1}}},[e("h3",{staticClass:"font-semibold hover:text-blue-400"},[t._v("Close")])]),t._v(" "),e("div",{staticClass:"overflow-y-auto flex flex-col flex-auto"},[t._l(t.notifications,(function(i){return e("div",{key:i.id,staticClass:"notification-card notice border-b"},[e("div",{staticClass:"p-2 cursor-pointer",on:{click:function(e){return t.triggerLink(i)}}},[e("div",{staticClass:"flex items-center justify-between"},[e("h1",{staticClass:"font-semibold"},[t._v(t._s(i.title))]),t._v(" "),e("ns-close-button",{on:{click:function(e){return t.closeNotice(e,i)}}})],1),t._v(" "),e("p",{staticClass:"py-1 text-sm"},[t._v(t._s(i.description))])])])})),t._v(" "),0===t.notifications.length?e("div",{staticClass:"h-full w-full flex items-center justify-center"},[e("div",{staticClass:"flex flex-col items-center"},[e("i",{staticClass:"las la-laugh-wink text-5xl text-gray-800"}),t._v(" "),e("p",{staticClass:"text-gray-600 text-sm"},[t._v(t._s(t.__("Nothing to care about !")))])])]):t._e()],2),t._v(" "),e("div",{staticClass:"cursor-pointer clear-all"},[e("h3",{staticClass:"text-sm p-2 flex items-center justify-center w-full font-semibold ",on:{click:function(i){return t.deleteAll()}}},[t._v(t._s(t.__("Clear All")))])])])])]):t._e()])}),[],!1,null,null,null).exports}}]);