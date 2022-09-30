"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[9461],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5417:function(e,t,n){n.r(t),n.d(t,{default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s={unversionedId:"blog/governance/loadshedding",id:"blog/governance/loadshedding",isDocsHomePage:!1,title:"Load Shedding",description:"Service Adaptive Load Shedding Protection Design",source:"@site/docs/blog/governance/loadshedding.md",sourceDirName:"blog/governance",slug:"/blog/governance/loadshedding",permalink:"/docs/blog/governance/loadshedding",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/blog/governance/loadshedding.md",version:"current",lastUpdatedAt:1664532344,formattedLastUpdatedAt:"9/30/2022",frontMatter:{},sidebar:"blog",previous:{title:"Fusing Principle and Implementation",permalink:"/docs/blog/governance/breaker-algorithms"},next:{title:"Period Limit",permalink:"/docs/blog/governance/periodlimit"}},d=[{value:"Service Adaptive Load Shedding Protection Design",id:"service-adaptive-load-shedding-protection-design",children:[]},{value:"Design Purpose",id:"design-purpose",children:[]},{value:"Design Considerations",id:"design-considerations",children:[]},{value:"Mechanism design",id:"mechanism-design",children:[]},{value:"Use of droploads",id:"use-of-droploads",children:[]},{value:"Reference",id:"reference",children:[]}],c={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"service-adaptive-load-shedding-protection-design"},"Service Adaptive Load Shedding Protection Design"),(0,i.kt)("h2",{id:"design-purpose"},"Design Purpose"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To ensure that the system is not brought down by excessive requests"),(0,i.kt)("li",{parentName:"ul"},"Provide the highest possible throughput while maintaining system stability")),(0,i.kt)("h2",{id:"design-considerations"},"Design Considerations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How to measure system load",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Whether it is in a virtual machine or container that needs to read cgroup-related load"),(0,i.kt)("li",{parentName:"ul"},"Use 1000m for 100% CPU, 800m recommended for high system load"))),(0,i.kt)("li",{parentName:"ul"},"Smallest possible Overhead that does not significantly increase RT"),(0,i.kt)("li",{parentName:"ul"},"Disregard DB or cache system issues that the service itself depends on, such issues are solved by the meltdown mechanism")),(0,i.kt)("h2",{id:"mechanism-design"},"Mechanism design"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use sliding average when calculating CPU load to reduce instability caused by CPU load jitter, see references for sliding average"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The sliding average is an approximate average of the previous N consecutive values, and the value of N can be determined by the superparameter beta."),(0,i.kt)("li",{parentName:"ul"},"When the CPU load is larger than the specified value, the down load protection mechanism is triggered."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Time window mechanism, using the sliding window mechanism to record the QPS and RT (response time) in the previous time window"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The sliding window uses 50 buckets in 5 seconds, each bucket saves the requests within 100ms of time and recycles them, with the newest overwriting the oldest"),(0,i.kt)("li",{parentName:"ul"},"When calculating maxQPS and minRT, we need to filter out the latest bucket that has not run out of time, to prevent only a very small number of requests in this bucket, and RT is at a very small value with low probability, so when calculating maxQPS and minRT, only 49 buckets will be counted according to the 50 buckets parameter above"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The request is rejected if all of the following conditions are met"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"the current CPU load exceeds a preset threshold, or the last rejection time is no more than 1 second (cooling off period). The cooling off period is so that the load just down immediately increase the pressure to cause immediately up again back and forth jitter")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"averageFlying > max(1, QPS*minRT/1e3)")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"averageFlying = MovingAverage(flying)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When calculating MovingAverage(flying), the default value of superparameter beta is 0.9, which means the average flying value of the first ten times is calculated.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When taking the flying value, there are three approaches."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"update the averageFlying once after the request is added, see the orange curve in the figure"),(0,i.kt)("li",{parentName:"ol"},"update averageFlying once after the request ends, see the green curve in the figure"),(0,i.kt)("li",{parentName:"ol"},"update averageFlying once after the request is incremented and once after the request ends")),(0,i.kt)("p",{parentName:"li"},"We use the second one, which can better prevent jitter, as shown in the figure.\n",(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zeromicro/zero-doc/main/doc/images/shedding_flying.jpg",alt:"flying strategy comparison"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"QPS = maxPass * bucketsPerSecond"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"maxPass denotes the number of successful requests in each valid bucket"),(0,i.kt)("li",{parentName:"ul"},"bucketsPerSecond indicates how many buckets per second"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"1e3 means 1000 milliseconds, minRT unit is also milliseconds, QPS * minRT/1e3 gets is the average number of concurrent requests per point in time"))))))),(0,i.kt)("h2",{id:"use-of-droploads"},"Use of droploads"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Optional activation configuration has been added to the rest and zrpc framework",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"CpuThreshold, if the value is set to a value greater than 0, then the service's auto-drop mechanism is activated"))),(0,i.kt)("li",{parentName:"ul"},"If the request is dropped, then the error log will have the ",(0,i.kt)("inlineCode",{parentName:"li"},"dropreq")," keyword")),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/wuliytTaotao/p/9479958.html"},"Sliding Average")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/alibaba/Sentinel/wiki/%E7%B3%BB%E7%BB%9F%E8%87%AA%E9%80%82%E5%BA%94%E9%99%90%E6%B5%81"},"Sentinel Adaptive Flow Limiting")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bilibili/kratos/blob/master/doc/wiki-cn/ratelimit.md"},"Kratos Adaptive Flow Limiting Protection"))))}u.isMDXComponent=!0}}]);