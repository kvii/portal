"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[3963],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return k}});var t=r(7294);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),k=l,m=d["".concat(c,".").concat(k)]||d[k]||s[k]||a;return r?t.createElement(m,i(i({ref:n},u),{},{components:r})):t.createElement(m,i({ref:n},u))}));function k(e,n){var r=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2474:function(e,n,r){r.r(n),r.d(n,{default:function(){return s},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var t=r(7462),l=r(3366),a=(r(7294),r(3905)),i=["components"],o={title:"redis\u9501",authors:"kevwan"},c={unversionedId:"blog/concurrency/redis-lock",id:"blog/concurrency/redis-lock",isDocsHomePage:!1,title:"redis lock",description:"\u65e2\u7136\u662f\u9501\uff0c\u9996\u5148\u60f3\u5230\u7684\u4e00\u4e2a\u4f5c\u7528\u5c31\u662f\uff1a\u9632\u91cd\u590d\u70b9\u51fb\uff0c\u5728\u4e00\u4e2a\u65f6\u95f4\u70b9\u53ea\u6709\u4e00\u4e2a\u8bf7\u6c42\u4ea7\u751f\u6548\u679c\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/blog/concurrency/redis-lock.md",sourceDirName:"blog/concurrency",slug:"/blog/concurrency/redis-lock",permalink:"/cn/docs/blog/concurrency/redis-lock",editUrl:"https://github.com/zeromicro/portal/edit/main/i18n/cn/docusaurus-plugin-content-docs/current/blog/concurrency/redis-lock.md",version:"current",lastUpdatedAt:1664532344,formattedLastUpdatedAt:"9/30/2022",frontMatter:{title:"redis\u9501",authors:"kevwan"},sidebar:"blog",previous:{title:"\u6d41\u6570\u636e\u5904\u7406\u5229\u5668",permalink:"/cn/docs/blog/concurrency/stream"},next:{title:"\u9632\u6b62\u7f13\u5b58\u51fb\u7a7f\u4e4b\u8fdb\u7a0b\u5185\u5171\u4eab\u8c03\u7528",permalink:"/cn/docs/blog/concurrency/sharedcalls"}},p=[{value:"example",id:"example",children:[]},{value:"\u83b7\u53d6\u9501",id:"\u83b7\u53d6\u9501",children:[]},{value:"\u91ca\u653e\u9501",id:"\u91ca\u653e\u9501",children:[]}],u={toc:p};function s(e){var n=e.components,r=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u65e2\u7136\u662f\u9501\uff0c\u9996\u5148\u60f3\u5230\u7684\u4e00\u4e2a\u4f5c\u7528\u5c31\u662f\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u9632\u91cd\u590d\u70b9\u51fb\uff0c\u5728\u4e00\u4e2a\u65f6\u95f4\u70b9\u53ea\u6709\u4e00\u4e2a\u8bf7\u6c42\u4ea7\u751f\u6548\u679c"),"\u3002"),(0,a.kt)("p",null,"\u800c\u65e2\u7136\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"redis"),"\uff0c\u5c31\u5f97\u5177\u6709\u6392\u4ed6\u6027\uff0c\u540c\u65f6\u4e5f\u5177\u6709\u9501\u7684\u4e00\u4e9b\u5171\u6027\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9ad8\u6027\u80fd"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u51fa\u73b0\u6b7b\u9501"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u51fa\u73b0\u8282\u70b9down\u6389\u540e\u52a0\u9501\u5931\u8d25")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"go-zero")," \u4e2d\u5229\u7528 redis ",(0,a.kt)("inlineCode",{parentName:"p"},"set key nx")," \u53ef\u4ee5\u4fdd\u8bc1key\u4e0d\u5b58\u5728\u65f6\u5199\u5165\u6210\u529f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"px")," \u53ef\u4ee5\u8ba9key\u8d85\u65f6\u540e\u81ea\u52a8\u5220\u9664\u300c\u6700\u574f\u60c5\u51b5\u4e5f\u5c31\u662f\u8d85\u65f6\u81ea\u52a8\u5220\u9664key\uff0c\u4ece\u800c\u4e5f\u4e0d\u4f1a\u51fa\u73b0\u6b7b\u9501\u300d"),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'redisLockKey := fmt.Sprintf("%v%v", redisTpl, headId)\n// 1. New redislock\nredisLock := redis.NewRedisLock(redisConn, redisLockKey)\n// 2. \u53ef\u9009\u64cd\u4f5c\uff0c\u8bbe\u7f6e redislock \u8fc7\u671f\u65f6\u95f4\nredisLock.SetExpire(redisLockExpireSeconds)\nif ok, err := redisLock.Acquire(); !ok || err != nil {\n  return nil, errors.New("\u5f53\u524d\u6709\u5176\u4ed6\u7528\u6237\u6b63\u5728\u8fdb\u884c\u64cd\u4f5c\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5")\n}\ndefer func() {\n  recover()\n  // 3. \u91ca\u653e\u9501\n  redisLock.Release()\n}()\n')),(0,a.kt)("p",null,"\u548c\u4f60\u5728\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"sync.Mutex")," \u7684\u65b9\u5f0f\u65f6\u4e00\u81f4\u7684\u3002\u52a0\u9501\u89e3\u9501\uff0c\u6267\u884c\u4f60\u7684\u4e1a\u52a1\u64cd\u4f5c\u3002"),(0,a.kt)("h2",{id:"\u83b7\u53d6\u9501"},"\u83b7\u53d6\u9501"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'lockCommand = `if redis.call("GET", KEYS[1]) == ARGV[1] then\n    redis.call("SET", KEYS[1], ARGV[1], "PX", ARGV[2])\n    return "OK"\nelse\n    return redis.call("SET", KEYS[1], ARGV[1], "NX", "PX", ARGV[2])\nend`\n\nfunc (rl *RedisLock) Acquire() (bool, error) {\n    seconds := atomic.LoadUint32(&rl.seconds)\n  // execute luascript\n    resp, err := rl.store.Eval(lockCommand, []string{rl.key}, []string{\n        rl.id, strconv.Itoa(int(seconds)*millisPerSecond + tolerance)})\n    if err == red.Nil {\n        return false, nil\n    } else if err != nil {\n        logx.Errorf("Error on acquiring lock for %s, %s", rl.key, err.Error())\n        return false, err\n    } else if resp == nil {\n        return false, nil\n    }\n\n    reply, ok := resp.(string)\n    if ok && reply == "OK" {\n        return true, nil\n    } else {\n        logx.Errorf("Unknown reply when acquiring lock for %s: %v", rl.key, resp)\n        return false, nil\n    }\n}\n')),(0,a.kt)("p",null,"\u5148\u4ecb\u7ecd\u51e0\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"redis")," \u7684\u547d\u4ee4\u9009\u9879\uff0c\u4ee5\u4e0b\u662f\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"set")," \u547d\u4ee4\u589e\u52a0\u7684\u9009\u9879\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ex seconds")," \uff1a\u8bbe\u7f6ekey\u8fc7\u671f\u65f6\u95f4\uff0c\u5355\u4f4ds"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"px milliseconds")," \uff1a\u8bbe\u7f6ekey\u8fc7\u671f\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nx"),"\uff1akey\u4e0d\u5b58\u5728\u65f6\uff0c\u8bbe\u7f6ekey\u7684\u503c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"xx"),"\uff1akey\u5b58\u5728\u65f6\uff0c\u624d\u4f1a\u53bb\u8bbe\u7f6ekey\u7684\u503c")),(0,a.kt)("p",null,"\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"lua script")," \u6d89\u53ca\u7684\u5165\u53c2\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"args"),(0,a.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"KEYS","[1]"),(0,a.kt)("td",{parentName:"tr",align:null},"key$20201026"),(0,a.kt)("td",{parentName:"tr",align:null},"redis key")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ARGV","[1]"),(0,a.kt)("td",{parentName:"tr",align:null},"lmnopqrstuvwxyzABCD"),(0,a.kt)("td",{parentName:"tr",align:null},"\u552f\u4e00\u6807\u8bc6\uff1a\u968f\u673a\u5b57\u7b26\u4e32")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ARGV","[2]"),(0,a.kt)("td",{parentName:"tr",align:null},"30000"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u9501\u7684\u8fc7\u671f\u65f6\u95f4")))),(0,a.kt)("p",null,"\u7136\u540e\u6765\u8bf4\u8bf4\u4ee3\u7801\u7279\u6027\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Lua")," \u811a\u672c\u4fdd\u8bc1\u539f\u5b50\u6027\u300c\u5f53\u7136\uff0c\u628a\u591a\u4e2a\u64cd\u4f5c\u5728 Redis \u4e2d\u5b9e\u73b0\u6210\u4e00\u4e2a\u64cd\u4f5c\uff0c\u4e5f\u5c31\u662f\u5355\u547d\u4ee4\u64cd\u4f5c\u300d"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"set key value px milliseconds nx")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"value")," \u5177\u6709\u552f\u4e00\u6027"),(0,a.kt)("li",{parentName:"ol"},"\u52a0\u9501\u65f6\u9996\u5148\u5224\u65ad ",(0,a.kt)("inlineCode",{parentName:"li"},"key")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"value")," \u662f\u5426\u548c\u4e4b\u524d\u8bbe\u7f6e\u7684\u4e00\u81f4\uff0c\u4e00\u81f4\u5219\u4fee\u6539\u8fc7\u671f\u65f6\u95f4")),(0,a.kt)("h2",{id:"\u91ca\u653e\u9501"},"\u91ca\u653e\u9501"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'delCommand = `if redis.call("GET", KEYS[1]) == ARGV[1] then\n    return redis.call("DEL", KEYS[1])\nelse\n    return 0\nend`\n\nfunc (rl *RedisLock) Release() (bool, error) {\n    resp, err := rl.store.Eval(delCommand, []string{rl.key}, []string{rl.id})\n    if err != nil {\n        return false, err\n    }\n\n    if reply, ok := resp.(int64); !ok {\n        return false, nil\n    } else {\n        return reply == 1, nil\n    }\n}\n')),(0,a.kt)("p",null,"\u91ca\u653e\u9501\u7684\u65f6\u5019\u53ea\u9700\u8981\u5173\u6ce8\u4e00\u70b9\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u80fd\u91ca\u653e\u522b\u4eba\u7684\u9501\uff0c\u4e0d\u80fd\u91ca\u653e\u522b\u4eba\u7684\u9501\uff0c\u4e0d\u80fd\u91ca\u653e\u522b\u4eba\u7684\u9501")),(0,a.kt)("p",null,"\u6240\u4ee5\u9700\u8981\u5148 ",(0,a.kt)("inlineCode",{parentName:"p"},"get(key) == value\u300ckey\u300d"),"\uff0c\u4e3a true \u624d\u4f1a\u53bb ",(0,a.kt)("inlineCode",{parentName:"p"},"delete")))}s.isMDXComponent=!0}}]);