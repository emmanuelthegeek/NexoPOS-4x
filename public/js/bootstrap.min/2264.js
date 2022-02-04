"use strict";(self.webpackChunkNexoPOS_4x=self.webpackChunkNexoPOS_4x||[]).push([[2264,3793],{2264:(t,e,s)=>{s.r(e),s.d(e,{default:()=>d});var a=s(9671),r=s(2242),i=s(2083),n=s(8774),u=s(3793),o=s(7389),c=s(2277);const l={name:"ns-stock-adjustment",props:["actions"],data:function(){return{search:"",timeout:null,suggestions:[],products:[]}},mounted:function(){console.log(this.actions)},methods:{__:o.__,searchProduct:function(t){var e=this;t.length>0&&a.ih.post("/api/nexopos/v4/procurements/products/search-procurement-product",{argument:t}).subscribe((function(t){if("products"===t.from){if(!(t.products.length>0))return e.closeSearch(),a.kX.error((0,o.__)("Looks like no products matched the searched term.")).subscribe();1===t.products.length?e.addSuggestion(t.products[0]):e.suggestions=t.products}else if("procurements"===t.from){if(null===t.product)return e.closeSearch(),a.kX.error((0,o.__)("Looks like no products matched the searched term.")).subscribe();e.addProductToList(t.product)}}))},addProductToList:function(t){if(this.products.filter((function(e){return e.procurement_product_id===t.id})).length>0)return this.closeSearch(),a.kX.error((0,o.__)("The product already exists on the table.")).subscribe();var e=new Object;t.unit_quantity.unit=t.unit,e.quantities=[t.unit_quantity],e.name=t.name,e.adjust_unit=t.unit_quantity,e.adjust_quantity=1,e.adjust_action="",e.adjust_reason="",e.adjust_value=0,e.id=t.product_id,e.accurate_tracking=1,e.available_quantity=t.available_quantity,e.procurement_product_id=t.id,e.procurement_history=[{label:"".concat(t.procurement.name," (").concat(t.available_quantity,")"),value:t.id}],this.products.push(e),this.closeSearch()},addSuggestion:function(t){var e=this;(0,c.D)([a.ih.get("/api/nexopos/v4/products/".concat(t.id,"/units/quantities"))]).subscribe((function(s){if(!(s[0].length>0))return a.kX.error((0,o.__)("This product does't have any stock to adjust.")).subscribe();t.quantities=s[0],t.adjust_quantity=1,t.adjust_action="",t.adjust_reason="",t.adjust_unit="",t.adjust_value=0,t.procurement_product_id=0,e.products.push(t),e.closeSearch(),t.accurate_tracking}))},closeSearch:function(){this.search="",this.suggestions=[]},recalculateProduct:function(t){""!==t.adjust_unit&&(["deleted","defective","lost"].includes(t.adjust_action)?t.adjust_value=-t.adjust_quantity*t.adjust_unit.sale_price:t.adjust_value=t.adjust_quantity*t.adjust_unit.sale_price),this.$forceUpdate()},openQuantityPopup:function(t){var e=this;t.quantity;new Promise((function(e,s){r.G.show(i.Z,{resolve:e,reject:s,quantity:t.adjust_quantity})})).then((function(s){if(!["added"].includes(t.adjust_action)){if(void 0!==t.accurate_tracking&&s.quantity>t.available_quantity)return a.kX.error((0,o.__)("The specified quantity exceed the available quantity.")).subscribe();if(s.quantity>t.adjust_unit.quantity)return a.kX.error((0,o.__)("The specified quantity exceed the available quantity.")).subscribe()}t.adjust_quantity=s.quantity,e.recalculateProduct(t)}))},proceedStockAdjustment:function(){var t=this;if(0===this.products.length)return a.kX.error((0,o.__)("Unable to proceed as the table is empty.")).subscribe();r.G.show(n.default,{title:(0,o.__)("Confirm Your Action"),message:(0,o.__)("The stock adjustment is about to be made. Would you like to confirm ?"),onAction:function(e){e&&a.ih.post("/api/nexopos/v4/products/adjustments",{products:t.products}).subscribe((function(e){a.kX.success(e.message).subscribe(),t.products=[]}),(function(t){a.kX.error(t.message).subscribe()}))}})},provideReason:function(t){new Promise((function(e,s){r.G.show(u.default,{title:(0,o.__)("More Details"),resolve:e,reject:s,message:(0,o.__)("Useful to describe better what are the reasons that leaded to this adjustment."),input:t.adjust_reason,onAction:function(e){!1!==e&&(t.adjust_reason=e)}})})).then((function(t){a.kX.success((0,o.__)("The reason has been updated.")).susbcribe()})).catch((function(t){}))},removeProduct:function(t){var e=this;r.G.show(n.default,{title:(0,o.__)("Confirm Your Action"),message:(0,o.__)("Would you like to remove this product from the table ?"),onAction:function(s){if(s){var a=e.products.indexOf(t);e.products.splice(a,1)}}})}},watch:{search:function(){var t=this;this.search.length>0?(clearTimeout(this.timeout),this.timeout=setTimeout((function(){t.searchProduct(t.search)}),500)):this.closeSearch()}}};const d=(0,s(1900).Z)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"input-field flex border-2 border-blue-400 rounded"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"p-2 bg-white flex-auto outline-none",attrs:{type:"text"},domProps:{value:t.search},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.closeSearch()},input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),s("button",{staticClass:"px-3 py-2 bg-blue-400 text-white"},[t._v(t._s(t.__("Search")))])]),t._v(" "),t.suggestions.length>0?s("div",{staticClass:"h-0"},[s("div",{staticClass:"shadow h-96 relative z-10 bg-white text-gray-700 zoom-in-entrance anim-duration-300 overflow-y-auto"},[s("ul",t._l(t.suggestions,(function(e){return s("li",{key:e.id,staticClass:"cursor-pointer hover:bg-gray-100 border-b border-gray-200 p-2 flex justify-between",on:{click:function(s){return t.addSuggestion(e)}}},[s("span",[t._v(t._s(e.name))])])})),0)])]):t._e(),t._v(" "),s("div",{staticClass:"table shadow bg-white my-2 w-full "},[s("table",{staticClass:"table w-full"},[s("thead",{staticClass:"border-b border-gray-400"},[s("tr",[s("td",{staticClass:"p-2 text-gray-700"},[t._v(t._s(t.__("Product")))]),t._v(" "),s("td",{staticClass:"p-2 text-center text-gray-700",attrs:{width:"120"}},[t._v(t._s(t.__("Unit")))]),t._v(" "),s("td",{staticClass:"p-2 text-center text-gray-700",attrs:{width:"120"}},[t._v(t._s(t.__("Operation")))]),t._v(" "),s("td",{staticClass:"p-2 text-center text-gray-700",attrs:{width:"120"}},[t._v(t._s(t.__("Procurement")))]),t._v(" "),s("td",{staticClass:"p-2 text-center text-gray-700",attrs:{width:"120"}},[t._v(t._s(t.__("Quantity")))]),t._v(" "),s("td",{staticClass:"p-2 text-center text-gray-700",attrs:{width:"120"}},[t._v(t._s(t.__("Value")))]),t._v(" "),s("td",{staticClass:"p-2 text-center text-gray-700",attrs:{width:"150"}},[t._v(t._s(t.__("Actions")))])])]),t._v(" "),s("tbody",[0===t.products.length?s("tr",[s("td",{staticClass:"p-2 text-center text-gray-700",attrs:{colspan:"6"}},[t._v(t._s(t.__("Search and add some products")))])]):t._e(),t._v(" "),t._l(t.products,(function(e){return s("tr",{key:e.id},[s("td",{staticClass:"p-2 text-gray-600"},[t._v(t._s(e.name)+" ("+t._s((1===e.accurate_tracking?e.available_quantity:e.adjust_unit.quantity)||0)+")")]),t._v(" "),s("td",{staticClass:"p-2 text-gray-600"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.adjust_unit,expression:"product.adjust_unit"}],staticClass:"outline-none p-2 bg-white w-full border-2 border-blue-400",on:{change:[function(s){var a=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(e,"adjust_unit",s.target.multiple?a:a[0])},function(s){return t.recalculateProduct(e)}]}},t._l(e.quantities,(function(e){return s("option",{key:e.id,domProps:{value:e}},[t._v(t._s(e.unit.name))])})),0)]),t._v(" "),s("td",{staticClass:"p-2 text-gray-600"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.adjust_action,expression:"product.adjust_action"}],staticClass:"outline-none p-2 bg-white w-full border-2 border-blue-400",attrs:{name:"",id:""},on:{change:[function(s){var a=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(e,"adjust_action",s.target.multiple?a:a[0])},function(s){return t.recalculateProduct(e)}]}},t._l(t.actions,(function(e){return s("option",{key:e.value,domProps:{value:e.value}},[t._v(t._s(e.label))])})),0)]),t._v(" "),s("td",{staticClass:"p-2 text-gray-600"},[1===e.accurate_tracking?s("select",{directives:[{name:"model",rawName:"v-model",value:e.procurement_product_id,expression:"product.procurement_product_id"}],staticClass:"outline-none p-2 bg-white w-full border-2 border-blue-400",attrs:{name:"",id:""},on:{change:[function(s){var a=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(e,"procurement_product_id",s.target.multiple?a:a[0])},function(s){return t.recalculateProduct(e)}]}},t._l(e.procurement_history,(function(e){return s("option",{key:e.value,domProps:{value:e.value}},[t._v(t._s(e.label))])})),0):t._e()]),t._v(" "),s("td",{staticClass:"p-2 text-gray-600 flex items-center justify-center cursor-pointer",on:{click:function(s){return t.openQuantityPopup(e)}}},[s("span",{staticClass:"border-b border-dashed border-blue-400 py-2 px-4"},[t._v(t._s(e.adjust_quantity))])]),t._v(" "),s("td",{staticClass:"p-2 text-gray-600"},[s("span",{staticClass:"border-b border-dashed border-blue-400 py-2 px-4"},[t._v(t._s(t._f("currency")(e.adjust_value)))])]),t._v(" "),s("td",{staticClass:"p-2 text-gray-600"},[s("div",{staticClass:"-mx-1 flex justify-end"},[s("div",{staticClass:"px-1"},[s("button",{staticClass:"bg-blue-400 text-white outline-none rounded-full shadow h-10 w-10",on:{click:function(s){return t.provideReason(e)}}},[s("i",{staticClass:"las la-comment-dots"})])]),t._v(" "),s("div",{staticClass:"px-1"},[s("button",{staticClass:"bg-red-400 text-white outline-none rounded-full shadow h-10 w-10",on:{click:function(s){return t.removeProduct(e)}}},[s("i",{staticClass:"las la-times"})])])])])])}))],2)]),t._v(" "),s("div",{staticClass:"border-t border-gray-200 p-2 flex justify-end"},[s("ns-button",{attrs:{type:"info"},on:{click:function(e){return t.proceedStockAdjustment()}}},[t._v(t._s(t.__("Proceed")))])],1)])])}),[],!1,null,null,null).exports},2083:(t,e,s)=>{s.d(e,{Z:()=>o});var a=s(9671),r=s(7389);function i(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);"Object"===s&&t.constructor&&(s=t.constructor.name);if("Map"===s||"Set"===s)return Array.from(t);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,a=new Array(e);s<e;s++)a[s]=t[s];return a}const u={data:function(){return{finalValue:1,virtualStock:null,allSelected:!0,isLoading:!1,keys:[].concat(i([1,2,3].map((function(t){return{identifier:t,value:t}}))),i([4,5,6].map((function(t){return{identifier:t,value:t}}))),i([7,8,9].map((function(t){return{identifier:t,value:t}}))),[{identifier:"backspace",icon:"la-backspace"},{identifier:0,value:0},{identifier:"next",icon:"la-share"}])}},mounted:function(){var t=this;this.$popup.event.subscribe((function(e){"click-overlay"===e.event&&(t.$popupParams.reject(!1),t.$popup.close())})),this.$popupParams.quantity&&(this.finalValue=this.$popupParams.quantity),document.addEventListener("keyup",this.handleKeyPress)},destroyed:function(){document.removeEventListener("keypress",this.handleKeyPress)},methods:{__:r.__,handleKeyPress:function(t){13===t.keyCode&&this.inputValue({identifier:"next"})},inputValue:function(t){if("next"===t.identifier){var e=this.$popupParams,s=(e.product,e.data,parseFloat(this.finalValue));if(0===s)return a.kX.error((0,r.__)("Please provide a quantity")).subscribe();this.resolve({quantity:s})}else"backspace"===t.identifier?this.allSelected?(this.finalValue=0,this.allSelected=!1):(this.finalValue=this.finalValue.toString(),this.finalValue=this.finalValue.substr(0,this.finalValue.length-1)||0):this.allSelected?(this.finalValue=t.value,this.finalValue=parseFloat(this.finalValue),this.allSelected=!1):(this.finalValue+=""+t.value,this.finalValue=parseFloat(this.finalValue))},resolve:function(t){this.$popupParams.resolve(t),this.$popup.close()}}};const o=(0,s(1900).Z)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-white shadow min-h-2/5-screen w-3/4-screen md:w-3/5-screen lg:w-3/5-screen xl:w-2/5-screen relative"},[s("div",{staticClass:"flex-shrink-0 py-2 border-b border-gray-200"},[s("h1",{staticClass:"text-xl font-bold text-gray-700 text-center"},[t._v(t._s(t.__("Define Quantity")))])]),t._v(" "),s("div",{staticClass:"h-16 border-b bg-gray-800 text-white border-gray-200 flex items-center justify-center",attrs:{id:"screen"}},[s("h1",{staticClass:"font-bold text-3xl"},[t._v(t._s(t.finalValue))])]),t._v(" "),s("div",{staticClass:"grid grid-flow-row grid-cols-3 grid-rows-3",attrs:{id:"numpad"}},t._l(t.keys,(function(e,a){return s("div",{key:a,staticClass:"hover:bg-blue-400 hover:text-white hover:border-blue-600 text-xl font-bold border border-gray-200 h-24 flex items-center justify-center cursor-pointer",on:{click:function(s){return t.inputValue(e)}}},[void 0!==e.value?s("span",[t._v(t._s(e.value))]):t._e(),t._v(" "),e.icon?s("i",{staticClass:"las",class:e.icon}):t._e()])})),0)])}),[],!1,null,null,null).exports},3793:(t,e,s)=>{s.r(e),s.d(e,{default:()=>r});const a={data:function(){return{title:"",message:"",input:""}},computed:{size:function(){return this.$popupParams.size||"h-full w-full"}},mounted:function(){var t=this;this.input=this.$popupParams.input||"",this.title=this.$popupParams.title,this.message=this.$popupParams.message,this.$popup.event.subscribe((function(e){"click-overlay"===e.event&&(t.$popupParams.reject(!1),t.$popup.close())}))},methods:{__:s(7389).__,emitAction:function(t){this.$popupParams.onAction(t?this.input:t),this.$popup.close()},reject:function(t){void 0!==this.$popupParams.reject&&this.$popupParams.reject(t),this.$popup.close()}}};const r=(0,s(1900).Z)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-5/7-screen md:w-3/7-screen flex flex-col bg-white shadow-lg",class:t.size,attrs:{id:"popup"}},[s("div",{staticClass:"flex items-center justify-center flex-col flex-auto p-2"},[s("h2",{staticClass:"text-3xl font-body text-gray-700"},[t._v(t._s(t.title))]),t._v(" "),s("p",{staticClass:"w-full md:mx-auto md:w-2/3 py-4 text-gray-600 text-center"},[t._v(t._s(t.message))])]),t._v(" "),s("div",{staticClass:"p-2"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"text-gray-700 w-full border-2 p-2 border-blue-400",attrs:{name:"",id:"",cols:"30",rows:"10"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"flex border-t border-gray-200 text-gray-700"},[s("button",{staticClass:"hover:bg-gray-100 flex-auto w-1/2 h-16 flex items-center justify-center uppercase",on:{click:function(e){return t.emitAction(!0)}}},[t._v(t._s(t.__("Ok")))]),t._v(" "),s("hr",{staticClass:"border-r border-gray-200"}),t._v(" "),s("button",{staticClass:"hover:bg-gray-100 flex-auto w-1/2 h-16 flex items-center justify-center uppercase",on:{click:function(e){return t.reject(!1)}}},[t._v(t._s(t.__("Cancel")))])])])}),[],!1,null,null,null).exports}}]);