import{__spreadArray as e,__assign as t}from"../node_modules/tslib/tslib.es6.js";import{EasyTime as r}from"./TimeHelper.js";import{fillArray as n}from"./ArrayHelper/ArrayHelper.js";var o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a={yearFrame:12},i=function(){function i(e,r){void 0===e&&(e=new Date),void 0===r&&(r=a),this.value=e,this.options=t(t({},a),r)}return Object.defineProperty(i.prototype,"year",{get:function(){return this.value.getFullYear()},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"month",{get:function(){return this.value.getMonth()},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"date",{get:function(){return this.value.getDate()},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"firstDay",{get:function(){return new Date(this.year,this.month,1).getDay()},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"lastDay",{get:function(){return new Date(this.year,this.month+1,0).getDay()},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"daysInMonth",{get:function(){return new Date(this.year,this.month+1,0).getDate()},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"daysInMonthArr",{get:function(){var e=this,t=n(this.daysInMonth+1);return t.shift(),t.map((function(t){return{type:"current",easyDate:new i(new Date(e.year,e.month,t))}}))},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"daysInMonthArrPadded",{get:function(){var t=this,r=this.previousMonth.daysInMonth,o=n(this.firstDay).map((function(){return r--})).reverse().map((function(e){return{type:"prev",easyDate:new i(new Date(t.previousMonth.year,t.previousMonth.month,e))}})),a=this.daysInMonthArr.map((function(e){return{type:"current",easyDate:e.easyDate}})),u=n(6-this.lastDay).map((function(e,r){return{type:"next",easyDate:new i(new Date(t.nextMonth.year,t.nextMonth.month,r+1))}}));return e(e(e([],o,!0),a,!0),u,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"yearsInFrame",{get:function(){for(var e=[],t=this.year%this.yearFrame,r=0;r<this.yearFrame;r++){var n=t-r;e.push(this.year-n)}return e},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"yearsInFrameRange",{get:function(){var e=this.yearsInFrame;return[e[0],e[this.options.yearFrame-1]]},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"previousYearByFrame",{get:function(){return new i(new Date(this.year-this.yearFrame,this.month))},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"nextYearByFrame",{get:function(){return new i(new Date(this.year+this.yearFrame,this.month-1))},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"previousMonth",{get:function(){return new i(new Date(this.year,this.month-1))},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"nextMonth",{get:function(){return new i(new Date(this.year,this.month+1))},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"time",{get:function(){return new r({hours:this.value.getHours(),minutes:this.value.getMinutes(),seconds:this.value.getSeconds()})},enumerable:!1,configurable:!0}),i.prototype.format=function(e,t){var r=this;void 0===e&&(e="yyyy/MM/dd"),void 0===t&&(t=o);var n={yyyy:function(){return r.year.toString()},MMM:function(){return t[r.month]},MM:function(){return(r.month+1).toString().padStart(2,"0")},dd:function(){return r.date.toString().padStart(2,"0")},hh:function(){return r.time.hoursString},mm:function(){return r.time.minutesString},ampm:function(){return r.time.timePeriod}},a=Object.keys(n),i=e;return a.forEach((function(e){i=i.replace(e,n[e]())})),i},i.prototype.setMonth=function(e){return this.value.setMonth(e),this},i.prototype.setYear=function(e){return this.value.setFullYear(e),this},i.prototype.setHours=function(e){return this.value.setHours(e),this},i.prototype.setMinutes=function(e){return this.value.setMinutes(e),this},Object.defineProperty(i.prototype,"yearFrame",{get:function(){return this.options.yearFrame},enumerable:!1,configurable:!0}),i}();export{i as EasyDate,a as defaultEasyDateOptions,o as defaultMonthLabels};
//# sourceMappingURL=DateHelper.js.map
