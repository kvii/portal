"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[7013],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,k=m["".concat(s,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},834:function(e,t,n){n.r(t),n.d(t,{default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s={unversionedId:"blog/governance/tokenlimit",id:"blog/governance/tokenlimit",isDocsHomePage:!1,title:"Token Limit",description:"This section will introduce its basic usage through token limit (tokenlimit).",source:"@site/docs/blog/governance/tokenlimit.md",sourceDirName:"blog/governance",slug:"/blog/governance/tokenlimit",permalink:"/docs/blog/governance/tokenlimit",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/blog/governance/tokenlimit.md",version:"current",lastUpdatedAt:1664532344,formattedLastUpdatedAt:"9/30/2022",frontMatter:{},sidebar:"blog",previous:{title:"Period Limit",permalink:"/docs/blog/governance/periodlimit"},next:{title:"DB caching mechanism",permalink:"/docs/blog/cache/cache"}},c=[{value:"Usage",id:"usage",children:[]},{value:"tokenlimit",id:"tokenlimit",children:[]},{value:"Function analysis",id:"function-analysis",children:[]},{value:"Summary",id:"summary",children:[]},{value:"Reference",id:"reference",children:[]}],u={toc:c};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section will introduce its basic usage through token limit (tokenlimit)."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'const (\n    burst   = 100\n    rate    = 100\n    seconds = 5\n)\n\nstore := redis.NewRedis("localhost:6379", "node", "")\nfmt.Println(store.Ping())\n// New tokenLimiter\nlimiter := limit.NewTokenLimiter(rate, burst, store, "rate-test")\ntimer := time.NewTimer(time.Second * seconds)\nquit := make(chan struct{})\ndefer timer.Stop()\ngo func() {\n  <-timer.C\n  close(quit)\n}()\n\nvar allowed, denied int32\nvar wait sync.WaitGroup\nfor i := 0; i < runtime.NumCPU(); i++ {\n  wait.Add(1)\n  go func() {\n    for {\n      select {\n        case <-quit:\n          wait.Done()\n          return\n        default:\n          if limiter.Allow() {\n            atomic.AddInt32(&allowed, 1)\n          } else {\n            atomic.AddInt32(&denied, 1)\n          }\n      }\n    }\n  }()\n}\n\nwait.Wait()\nfmt.Printf("allowed: %d, denied: %d, qps: %d\\n", allowed, denied, (allowed+denied)/seconds)\n')),(0,i.kt)("h2",{id:"tokenlimit"},"tokenlimit"),(0,i.kt)("p",null,"On the whole, the token bucket production logic is as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The average sending rate configured by the user is r, then a token is added to the bucket every 1/r second;"),(0,i.kt)("li",{parentName:"ul"},"Assume that at most b tokens can be stored in the bucket. If the token bucket is full when the token arrives, then the token will be discarded;"),(0,i.kt)("li",{parentName:"ul"},"When the traffic enters at the rate v, the token is taken from the bucket at the rate v, the traffic that gets the token passes, and the traffic that does not get the token does not pass, and the fuse logic is executed;")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"go-zero")," adopts the method of ",(0,i.kt)("inlineCode",{parentName:"p"},"lua script")," under both types of current limiters, relying on redis to achieve distributed current limiting, and ",(0,i.kt)("inlineCode",{parentName:"p"},"lua script")," can also achieve atomicity of token production and read operations."),(0,i.kt)("p",null,"Let's take a look at several key attributes controlled by ",(0,i.kt)("inlineCode",{parentName:"p"},"lua script"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"argument"),(0,i.kt)("th",{parentName:"tr",align:null},"mean"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ARGV","[1]"),(0,i.kt)("td",{parentName:"tr",align:null},"rate \u300cHow many tokens are generated per second\u300d")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ARGV","[2]"),(0,i.kt)("td",{parentName:"tr",align:null},"burst \u300cMaximum token bucket\u300d")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ARGV","[3]"),(0,i.kt)("td",{parentName:"tr",align:null},"now_time\u300cCurrent timestamp\u300d")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ARGV","[4]"),(0,i.kt)("td",{parentName:"tr",align:null},"get token nums \u300cThe number of tokens that the developer needs to obtain\u300d")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"KEYS","[1]"),(0,i.kt)("td",{parentName:"tr",align:null},"Tokenkey representing the resource")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"KEYS","[2]"),(0,i.kt)("td",{parentName:"tr",align:null},"The key that represents the refresh time")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- Return whether the expected token can be obtained alive\n\nlocal rate = tonumber(ARGV[1])\nlocal capacity = tonumber(ARGV[2])\nlocal now = tonumber(ARGV[3])\nlocal requested = tonumber(ARGV[4])\n\n-- fill_time\uff1aHow long does it take to fill the token_bucket\nlocal fill_time = capacity/rate\n-- Round down the fill time\nlocal ttl = math.floor(fill_time*2)\n\n-- Get the number of remaining tokens in the current token_bucket\n-- If it is the first time to enter, set the number of token_bucket to the maximum value of the token bucket\nlocal last_tokens = tonumber(redis.call("get", KEYS[1]))\nif last_tokens == nil then\n    last_tokens = capacity\nend\n\n-- The time when the token_bucket was last updated\nlocal last_refreshed = tonumber(redis.call("get", KEYS[2]))\nif last_refreshed == nil then\n    last_refreshed = 0\nend\n\nlocal delta = math.max(0, now-last_refreshed)\n-- Calculate the number of new tokens based on the span between the current time and the last update time, and the rate of token production\n-- If it exceeds max_burst, excess tokens produced will be discarded\nlocal filled_tokens = math.min(capacity, last_tokens+(delta*rate))\nlocal allowed = filled_tokens >= requested\nlocal new_tokens = filled_tokens\nif allowed then\n    new_tokens = filled_tokens - requested\nend\n\n-- Update the new token number and update time\nredis.call("setex", KEYS[1], ttl, new_tokens)\nredis.call("setex", KEYS[2], ttl, now)\n\nreturn allowed\n')),(0,i.kt)("p",null,"It can be seen from the above that the ",(0,i.kt)("inlineCode",{parentName:"p"},"lua script"),": only involves the operation of the token, ensuring that the token is produced and read reasonably."),(0,i.kt)("h2",{id:"function-analysis"},"Function analysis"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2554).Z})),(0,i.kt)("p",null,"Seen from the above flow:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"There are multiple guarantee mechanisms to ensure that the current limit will be completed."),(0,i.kt)("li",{parentName:"ol"},"If the ",(0,i.kt)("inlineCode",{parentName:"li"},"redis limiter")," fails, at least in the process ",(0,i.kt)("inlineCode",{parentName:"li"},"rate limiter")," will cover it."),(0,i.kt)("li",{parentName:"ol"},"Retry the ",(0,i.kt)("inlineCode",{parentName:"li"},"redis limiter")," mechanism to ensure that it runs as normally as possible.")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenlimit")," current limiting scheme in ",(0,i.kt)("inlineCode",{parentName:"p"},"go-zero")," is suitable for instantaneous traffic shocks, and the actual request scenario is not at a constant rate. The token bucket is quite pre-request, and when the real request arrives, it won't be destroyed instantly. When the traffic hits a certain level, consumption will be carried out at a predetermined rate."),(0,i.kt)("p",null,"However, in the production of ",(0,i.kt)("inlineCode",{parentName:"p"},"token"),", dynamic adjustment cannot be made according to the current flow situation, and it is not flexible enough, and further optimization can be carried out. In addition, you can refer to ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Token_bucket"},"Token bucket WIKI")," which mentioned hierarchical token buckets, which are divided into different queues according to different traffic bandwidths."),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/zeromicro/go-zero/blob/master/core/limit/tokenlimit.go"},"go-zero tokenlimit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/go-redis/redis_rate"},"Redis Rate"))))}d.isMDXComponent=!0},2554:function(e,t,n){t.Z=n.p+"assets/images/tokenlimit_func-98bcc4ce37675480a0062fef9e104906.png"}}]);