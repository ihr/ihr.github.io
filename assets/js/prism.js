/* http://prismjs.com/download.html?themes=prism&languages=markup+css+clike+javascript+bash+git+go+groovy+handlebars+http+java+json+makefile+markdown+sql+yaml&plugins=line-highlight+line-numbers+show-invisibles+autolinker+wpd+file-highlight+show-language+jsonp-highlight+keep-markup+command-line */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=_self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=t.util.clone(e[r]));return a;case"Array":return e.map&&e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,n){var a=t.util.clone(t.languages[e]);for(var r in n)a[r]=n[r];return a},insertBefore:function(e,n,a,r){r=r||t.languages;var l=r[e];if(2==arguments.length){a=arguments[1];for(var i in a)a.hasOwnProperty(i)&&(l[i]=a[i]);return l}var o={};for(var s in l)if(l.hasOwnProperty(s)){if(s==n)for(var i in a)a.hasOwnProperty(i)&&(o[i]=a[i]);o[s]=l[s]}return t.languages.DFS(t.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=o)}),r[e]=o},DFS:function(e,n,a,r){r=r||{};for(var l in e)e.hasOwnProperty(l)&&(n.call(e,l,e[l],a||l),"Object"!==t.util.type(e[l])||r[e[l]]?"Array"!==t.util.type(e[l])||r[e[l]]||(r[e[l]]=!0,t.languages.DFS(e[l],n,l,r)):(r[e[l]]=!0,t.languages.DFS(e[l],n,null,r)))}},plugins:{},highlightAll:function(e,n){for(var a,r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),l=0;a=r[l++];)t.highlightElement(a,e===!0,n)},highlightElement:function(n,a,r){for(var l,i,o=n;o&&!e.test(o.className);)o=o.parentNode;o&&(l=(o.className.match(e)||[,""])[1],i=t.languages[l]),n.className=n.className.replace(e,"").replace(/\s+/g," ")+" language-"+l,o=n.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+l);var s=n.textContent,u={element:n,language:l,grammar:i,code:s};if(!s||!i)return t.hooks.run("complete",u),void 0;if(t.hooks.run("before-highlight",u),a&&_self.Worker){var g=new Worker(t.filename);g.onmessage=function(e){u.highlightedCode=e.data,t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(u.element),t.hooks.run("after-highlight",u),t.hooks.run("complete",u)},g.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=t.highlight(u.code,u.grammar,u.language),t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(n),t.hooks.run("after-highlight",u),t.hooks.run("complete",u)},highlight:function(e,a,r){var l=t.tokenize(e,a);return n.stringify(t.util.encode(l),r)},tokenize:function(e,n){var a=t.Token,r=[e],l=n.rest;if(l){for(var i in l)n[i]=l[i];delete n.rest}e:for(var i in n)if(n.hasOwnProperty(i)&&n[i]){var o=n[i];o="Array"===t.util.type(o)?o:[o];for(var s=0;s<o.length;++s){var u=o[s],g=u.inside,c=!!u.lookbehind,f=0,h=u.alias;u=u.pattern||u;for(var p=0;p<r.length;p++){var d=r[p];if(r.length>e.length)break e;if(!(d instanceof a)){u.lastIndex=0;var m=u.exec(d);if(m){c&&(f=m[1].length);var y=m.index-1+f,m=m[0].slice(f),v=m.length,k=y+v,b=d.slice(0,y+1),w=d.slice(k+1),P=[p,1];b&&P.push(b);var A=new a(i,g?t.tokenize(m,g):m,h);P.push(A),w&&P.push(w),Array.prototype.splice.apply(r,P)}}}}}return r},hooks:{all:{},add:function(e,n){var a=t.hooks.all;a[e]=a[e]||[],a[e].push(n)},run:function(e,n){var a=t.hooks.all[e];if(a&&a.length)for(var r,l=0;r=a[l++];)r(n)}}},n=t.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};if(n.stringify=function(e,a,r){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return n.stringify(t,a,e)}).join("");var l={type:e.type,content:n.stringify(e.content,a,r),tag:"span",classes:["token",e.type],attributes:{},language:a,parent:r};if("comment"==l.type&&(l.attributes.spellcheck="true"),e.alias){var i="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(l.classes,i)}t.hooks.run("wrap",l);var o="";for(var s in l.attributes)o+=(o?" ":"")+s+'="'+(l.attributes[s]||"")+'"';return"<"+l.tag+' class="'+l.classes.join(" ")+'" '+o+">"+l.content+"</"+l.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var n=JSON.parse(e.data),a=n.language,r=n.code,l=n.immediateClose;_self.postMessage(t.highlight(r,t.languages[a],a)),l&&_self.close()},!1),_self.Prism):_self.Prism;var a=document.getElementsByTagName("script");return a=a[a.length-1],a&&(t.filename=a.src,document.addEventListener&&!a.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;
Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag));
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),Prism.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\`|\\?[^`])*`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript;
!function(e){var t={variable:[{pattern:/\$?\(\([\w\W]+?\)\)/,inside:{variable:[{pattern:/(^\$\(\([\w\W]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\([^)]+\)|`[^`]+`/,inside:{variable:/^\$\(|^`|\)$|`$/}},/\$(?:[a-z0-9_#\?\*!@]+|\{[^}]+\})/i]};e.languages.bash={shebang:{pattern:/^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,alias:"important"},comment:{pattern:/(^|[^"{\\])#.*/,lookbehind:!0},string:[{pattern:/((?:^|[^<])<<\s*)(?:"|')?(\w+?)(?:"|')?\s*\r?\n(?:[\s\S])*?\r?\n\2/g,lookbehind:!0,inside:t},{pattern:/("|')(?:\\?[\s\S])*?\1/g,inside:t}],variable:t.variable,"function":{pattern:/(^|\s|;|\||&)(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|\s|;|\||&)/,lookbehind:!0},keyword:{pattern:/(^|\s|;|\||&)(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|\s|;|\||&)/,lookbehind:!0},"boolean":{pattern:/(^|\s|;|\||&)(?:true|false)(?=$|\s|;|\||&)/,lookbehind:!0},operator:/&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];]/};var a=t.variable[1].inside;a["function"]=e.languages.bash["function"],a.keyword=e.languages.bash.keyword,a.boolean=e.languages.bash.boolean,a.operator=e.languages.bash.operator,a.punctuation=e.languages.bash.punctuation}(Prism);
Prism.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(\\?.)*?\1/m,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s(--|-)\w+/m}},coord:/^@@.*@@$/m,commit_sha1:/^commit \w{40}$/m};
Prism.languages.go=Prism.languages.extend("clike",{keyword:/\b(break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,builtin:/\b(bool|byte|complex(64|128)|error|float(32|64)|rune|string|u?int(8|16|32|64|)|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(ln)?|real|recover)\b/,"boolean":/\b(_|iota|nil|true|false)\b/,operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,number:/\b(-?(0x[a-f\d]+|(\d+\.?\d*|\.\d+)(e[-+]?\d+)?)i?)\b/i,string:/("|'|`)(\\?.|\r|\n)*?\1/}),delete Prism.languages.go["class-name"];
Prism.languages.groovy=Prism.languages.extend("clike",{keyword:/\b(as|def|in|abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,string:/("""|''')[\W\w]*?\1|("|'|\/)(?:\\?.)*?\2|(\$\/)(\$\/\$|[\W\w])*?\/\$/,number:/\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?[\d]+)?)[glidf]?\b/i,operator:{pattern:/(^|[^.])(~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.{1,2}(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,lookbehind:!0},punctuation:/\.+|[{}[\];(),:$]/}),Prism.languages.insertBefore("groovy","string",{shebang:{pattern:/#!.+/,alias:"comment"}}),Prism.languages.insertBefore("groovy","punctuation",{"spock-block":/\b(setup|given|when|then|and|cleanup|expect|where):/}),Prism.languages.insertBefore("groovy","function",{annotation:{pattern:/(^|[^.])@\w+/,lookbehind:!0}}),Prism.hooks.add("wrap",function(e){if("groovy"===e.language&&"string"===e.type){var t=e.content[0];if("'"!=t){var n=/([^\\])(\$(\{.*?\}|[\w\.]+))/;"$"===t&&(n=/([^\$])(\$(\{.*?\}|[\w\.]+))/),e.content=Prism.highlight(e.content,{expression:{pattern:n,lookbehind:!0,inside:Prism.languages.groovy}}),e.classes.push("/"===t?"regex":"gstring")}}});
!function(e){var a=/\{\{\{[\w\W]+?\}\}\}|\{\{[\w\W]+?\}\}/g;e.languages.handlebars=e.languages.extend("markup",{handlebars:{pattern:a,inside:{delimiter:{pattern:/^\{\{\{?|\}\}\}?$/i,alias:"punctuation"},string:/(["'])(\\?.)*?\1/,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/,"boolean":/\b(true|false)\b/,block:{pattern:/^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\w\W]+/}},punctuation:/[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/}}}),e.languages.insertBefore("handlebars","tag",{"handlebars-comment":{pattern:/\{\{![\w\W]*?\}\}/,alias:["handlebars","comment"]}}),e.hooks.add("before-highlight",function(e){"handlebars"===e.language&&(e.tokenStack=[],e.backupCode=e.code,e.code=e.code.replace(a,function(a){return e.tokenStack.push(a),"___HANDLEBARS"+e.tokenStack.length+"___"}))}),e.hooks.add("before-insert",function(e){"handlebars"===e.language&&(e.code=e.backupCode,delete e.backupCode)}),e.hooks.add("after-highlight",function(a){if("handlebars"===a.language){for(var n,t=0;n=a.tokenStack[t];t++)a.highlightedCode=a.highlightedCode.replace("___HANDLEBARS"+(t+1)+"___",e.highlight(n,a.grammar,"handlebars").replace(/\$/g,"$$$$"));a.element.innerHTML=a.highlightedCode}})}(Prism);
Prism.languages.http={"request-line":{pattern:/^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b\shttps?:\/\/\S+\sHTTP\/[0-9.]+/m,inside:{property:/^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,"attr-name":/:\w+/}},"response-status":{pattern:/^HTTP\/1.[01] [0-9]+.*/m,inside:{property:{pattern:/(^HTTP\/1.[01] )[0-9]+.*/i,lookbehind:!0}}},"header-name":{pattern:/^[\w-]+:(?=.)/m,alias:"keyword"}};var httpLanguages={"application/json":Prism.languages.javascript,"application/xml":Prism.languages.markup,"text/xml":Prism.languages.markup,"text/html":Prism.languages.markup};for(var contentType in httpLanguages)if(httpLanguages[contentType]){var options={};options[contentType]={pattern:new RegExp("(content-type:\\s*"+contentType+"[\\w\\W]*?)(?:\\r?\\n|\\r){2}[\\w\\W]*","i"),lookbehind:!0,inside:{rest:httpLanguages[contentType]}},Prism.languages.insertBefore("http","header-name",options)};
Prism.languages.java=Prism.languages.extend("clike",{keyword:/\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,number:/\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+(?:e[+-]?\d+)?[df]?\b/i,operator:{pattern:/(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,lookbehind:!0}});
Prism.languages.json={property:/".*?"(?=\s*:)/gi,string:/"(?!:)(\\?[^"])*?"(?!:)/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,punctuation:/[{}[\]);,]/g,operator:/:/g,"boolean":/\b(true|false)\b/gi,"null":/\bnull\b/gi},Prism.languages.jsonp=Prism.languages.json;
Prism.languages.makefile={comment:{pattern:/(^|[^\\])#(?:\\(?:\r\n|[\s\S])|.)*/,lookbehind:!0},string:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,builtin:/\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,symbol:{pattern:/^[^:=\r\n]+(?=\s*:(?!=))/m,inside:{variable:/\$+(?:[^(){}:#=\s]+|(?=[({]))/}},variable:/\$+(?:[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,keyword:[/-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,{pattern:/(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,lookbehind:!0}],operator:/(?:::|[?:+!])?=|[|@]/,punctuation:/[:;(){}]/};
Prism.languages.markdown=Prism.languages.extend("markup",{}),Prism.languages.insertBefore("markdown","prolog",{blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},code:[{pattern:/^(?: {4}|\t).+/m,alias:"keyword"},{pattern:/``.+?``|`[^`\n]+`/,alias:"keyword"}],title:[{pattern:/\w+.*(?:\r?\n|\r)(?:==+|--+)/,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#+.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:/(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,inside:{punctuation:/^\*\*|^__|\*\*$|__$/}},italic:{pattern:/(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,inside:{punctuation:/^[*_]|[*_]$/}},url:{pattern:/!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,inside:{variable:{pattern:/(!?\[)[^\]]+(?=\]$)/,lookbehind:!0},string:{pattern:/"(?:\\.|[^"\\])*"(?=\)$)/}}}}),Prism.languages.markdown.bold.inside.url=Prism.util.clone(Prism.languages.markdown.url),Prism.languages.markdown.italic.inside.url=Prism.util.clone(Prism.languages.markdown.url),Prism.languages.markdown.bold.inside.italic=Prism.util.clone(Prism.languages.markdown.italic),Prism.languages.markdown.italic.inside.bold=Prism.util.clone(Prism.languages.markdown.bold);
Prism.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},string:{pattern:/(^|[^@\\])("|')(?:\\?[\s\S])*?\2/,lookbehind:!0},variable:/@[\w.$]+|@("|'|`)(?:\\?[\s\S])+?\1/,"function":/\b(?:COUNT|SUM|AVG|MIN|MAX|FIRST|LAST|UCASE|LCASE|MID|LEN|ROUND|NOW|FORMAT)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR VARYING|CHARACTER (?:SET|VARYING)|CHARSET|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|DATA(?:BASES?)?|DATETIME|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE(?: PRECISION)?|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE KEY|ELSE|ENABLE|ENCLOSED BY|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPE(?:D BY)?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTO|INVOKER|ISOLATION LEVEL|JOIN|KEYS?|KILL|LANGUAGE SQL|LAST|LEFT|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MODIFIES SQL DATA|MODIFY|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL(?: CHAR VARYING| CHARACTER(?: VARYING)?| VARCHAR)?|NATURAL|NCHAR(?: VARCHAR)?|NEXT|NO(?: SQL|CHECK|CYCLE)?|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READ(?:S SQL DATA|TEXT)?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEATABLE|REPLICATION|REQUIRE|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE MODE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|START(?:ING BY)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED BY|TEXT(?:SIZE)?|THEN|TIMESTAMP|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNPIVOT|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?)\b/i,"boolean":/\b(?:TRUE|FALSE|NULL)\b/i,number:/\b-?(?:0x)?\d*\.?[\da-f]+\b/,operator:/[-+*\/=%^~]|&&?|\|?\||!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/};
Prism.languages.yaml={scalar:{pattern:/([\-:]\s*(![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\3[^\r\n]+)*)/,lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:/(\s*[:\-,[{\r\n?][ \t]*(![^\s]+)?[ \t]*)[^\r\n{[\]},#]+?(?=\s*:\s)/,lookbehind:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)(\d{4}-\d\d?-\d\d?([tT]|[ \t]+)\d\d?:\d{2}:\d{2}(\.\d*)?[ \t]*(Z|[-+]\d\d?(:\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(:\d{2}(\.\d*)?)?)(?=[ \t]*($|,|]|}))/m,lookbehind:!0,alias:"number"},"boolean":{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)(true|false)[ \t]*(?=$|,|]|})/im,lookbehind:!0,alias:"important"},"null":{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)(null|~)[ \t]*(?=$|,|]|})/im,lookbehind:!0,alias:"important"},string:{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')(?=[ \t]*($|,|]|}))/m,lookbehind:!0},number:{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)[+\-]?(0x[\da-f]+|0o[0-7]+|(\d+\.?\d*|\.?\d+)(e[\+\-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,lookbehind:!0},tag:/![^\s]+/,important:/[&*][\w]+/,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./};
!function(){function e(e,t){return Array.prototype.slice.call((t||document).querySelectorAll(e))}function t(e,t){return t=" "+t+" ",(" "+e.className+" ").replace(/[\n\t]/g," ").indexOf(t)>-1}function n(e,n,i){for(var o,a=n.replace(/\s+/g,"").split(","),l=+e.getAttribute("data-line-offset")||0,d=r()?parseInt:parseFloat,c=d(getComputedStyle(e).lineHeight),s=0;o=a[s++];){o=o.split("-");var u=+o[0],m=+o[1]||u,h=document.createElement("div");h.textContent=Array(m-u+2).join(" \n"),h.className=(i||"")+" line-highlight",t(e,"line-numbers")||(h.setAttribute("data-start",u),m>u&&h.setAttribute("data-end",m)),h.style.top=(u-l-1)*c+"px",t(e,"line-numbers")?e.appendChild(h):(e.querySelector("code")||e).appendChild(h)}}function i(){var t=location.hash.slice(1);e(".temporary.line-highlight").forEach(function(e){e.parentNode.removeChild(e)});var i=(t.match(/\.([\d,-]+)$/)||[,""])[1];if(i&&!document.getElementById(t)){var r=t.slice(0,t.lastIndexOf(".")),o=document.getElementById(r);o&&(o.hasAttribute("data-line")||o.setAttribute("data-line",""),n(o,i,"temporary "),document.querySelector(".temporary.line-highlight").scrollIntoView())}}if("undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector){var r=function(){var e;return function(){if("undefined"==typeof e){var t=document.createElement("div");t.style.fontSize="13px",t.style.lineHeight="1.5",t.style.padding=0,t.style.border=0,t.innerHTML="&nbsp;<br />&nbsp;",document.body.appendChild(t),e=38===t.offsetHeight,document.body.removeChild(t)}return e}}(),o=0;Prism.hooks.add("complete",function(t){var r=t.element.parentNode,a=r&&r.getAttribute("data-line");r&&a&&/pre/i.test(r.nodeName)&&(clearTimeout(o),e(".line-highlight",r).forEach(function(e){e.parentNode.removeChild(e)}),n(r,a),o=setTimeout(i,1))}),window.addEventListener&&window.addEventListener("hashchange",i)}}();
!function(){"undefined"!=typeof self&&self.Prism&&self.document&&Prism.hooks.add("complete",function(e){if(e.code){var t=e.element.parentNode,s=/\s*\bline-numbers\b\s*/;if(t&&/pre/i.test(t.nodeName)&&(s.test(t.className)||s.test(e.element.className))&&!e.element.querySelector(".line-numbers-rows")){s.test(e.element.className)&&(e.element.className=e.element.className.replace(s,"")),s.test(t.className)||(t.className+=" line-numbers");var n,a=e.code.match(/\n(?!$)/g),l=a?a.length+1:1,m=new Array(l+1);m=m.join("<span></span>"),n=document.createElement("span"),n.className="line-numbers-rows",n.innerHTML=m,t.hasAttribute("data-start")&&(t.style.counterReset="linenumber "+(parseInt(t.getAttribute("data-start"),10)-1)),e.element.appendChild(n)}}})}();
!function(){if(("undefined"==typeof self||self.Prism)&&("undefined"==typeof global||global.Prism))for(var f in Prism.languages){var n=Prism.languages[f];n.tab=/\t/g,n.crlf=/\r\n/g,n.lf=/\n/g,n.cr=/\r/g}}();
!function(){if(("undefined"==typeof self||self.Prism)&&("undefined"==typeof global||global.Prism)){var i=/\b([a-z]{3,7}:\/\/|tel:)[\w\-+%~\/.:#=?&amp;]+/,n=/\b\S+@[\w.]+[a-z]{2}/,e=/\[([^\]]+)]\(([^)]+)\)/,t=["comment","url","attr-value","string"];Prism.hooks.add("before-highlight",function(a){a.grammar&&!a.grammar["url-link"]&&(Prism.languages.DFS(a.grammar,function(a,r,l){t.indexOf(l)>-1&&"Array"!==Prism.util.type(r)&&(r.pattern||(r=this[a]={pattern:r}),r.inside=r.inside||{},"comment"==l&&(r.inside["md-link"]=e),"attr-value"==l?Prism.languages.insertBefore("inside","punctuation",{"url-link":i},r):r.inside["url-link"]=i,r.inside["email-link"]=n)}),a.grammar["url-link"]=i,a.grammar["email-link"]=n)}),Prism.hooks.add("wrap",function(i){if(/-link$/.test(i.type)){i.tag="a";var n=i.content;if("email-link"==i.type&&0!=n.indexOf("mailto:"))n="mailto:"+n;else if("md-link"==i.type){var t=i.content.match(e);n=t[2],i.content=t[1]}i.attributes.href=n}})}}();
!function(){function e(e){var a=e.toLowerCase();if(t.HTML[a])return"html";if(t.SVG[e])return"svg";if(t.MathML[e])return"mathml";if(0!==t.HTML[a]&&"undefined"!=typeof document){var n=(document.createElement(e).toString().match(/\[object HTML(.+)Element\]/)||[])[1];if(n&&"Unknown"!=n)return t.HTML[a]=1,"html"}if(t.HTML[a]=0,0!==t.SVG[e]&&"undefined"!=typeof document){var r=(document.createElementNS("http://www.w3.org/2000/svg",e).toString().match(/\[object SVG(.+)Element\]/)||[])[1];if(r&&"Unknown"!=r)return t.SVG[e]=1,"svg"}return t.SVG[e]=0,0!==t.MathML[e]&&0===e.indexOf("m")?(t.MathML[e]=1,"mathml"):(t.MathML[e]=0,null)}if(("undefined"==typeof self||self.Prism)&&("undefined"==typeof global||global.Prism)){if(Prism.languages.css&&(Prism.languages.css.atrule.inside["atrule-id"]=/^@[\w-]+/,Prism.languages.css.selector.pattern?(Prism.languages.css.selector.inside["pseudo-class"]=/:[\w-]+/,Prism.languages.css.selector.inside["pseudo-element"]=/::[\w-]+/):Prism.languages.css.selector={pattern:Prism.languages.css.selector,inside:{"pseudo-class":/:[\w-]+/,"pseudo-element":/::[\w-]+/}}),Prism.languages.markup){Prism.languages.markup.tag.inside.tag.inside["tag-id"]=/[\w-]+/;var t={HTML:{a:1,abbr:1,acronym:1,b:1,basefont:1,bdo:1,big:1,blink:1,cite:1,code:1,dfn:1,em:1,kbd:1,i:1,rp:1,rt:1,ruby:1,s:1,samp:1,small:1,spacer:1,strike:1,strong:1,sub:1,sup:1,time:1,tt:1,u:1,"var":1,wbr:1,noframes:1,summary:1,command:1,dt:1,dd:1,figure:1,figcaption:1,center:1,section:1,nav:1,article:1,aside:1,hgroup:1,header:1,footer:1,address:1,noscript:1,isIndex:1,main:1,mark:1,marquee:1,meter:1,menu:1},SVG:{animateColor:1,animateMotion:1,animateTransform:1,glyph:1,feBlend:1,feColorMatrix:1,feComponentTransfer:1,feFuncR:1,feFuncG:1,feFuncB:1,feFuncA:1,feComposite:1,feConvolveMatrix:1,feDiffuseLighting:1,feDisplacementMap:1,feFlood:1,feGaussianBlur:1,feImage:1,feMerge:1,feMergeNode:1,feMorphology:1,feOffset:1,feSpecularLighting:1,feTile:1,feTurbulence:1,feDistantLight:1,fePointLight:1,feSpotLight:1,linearGradient:1,radialGradient:1,altGlyph:1,textPath:1,tref:1,altglyph:1,textpath:1,altglyphdef:1,altglyphitem:1,clipPath:1,"color-profile":1,cursor:1,"font-face":1,"font-face-format":1,"font-face-name":1,"font-face-src":1,"font-face-uri":1,foreignObject:1,glyphRef:1,hkern:1,vkern:1},MathML:{}}}var a;Prism.hooks.add("wrap",function(t){if(("tag-id"==t.type||"property"==t.type&&0!=t.content.indexOf("-")||"atrule-id"==t.type&&0!=t.content.indexOf("@-")||"pseudo-class"==t.type&&0!=t.content.indexOf(":-")||"pseudo-element"==t.type&&0!=t.content.indexOf("::-")||"attr-name"==t.type&&0!=t.content.indexOf("data-"))&&-1===t.content.indexOf("<")){var n="w/index.php?fulltext&search=";t.tag="a";var r="http://docs.webplatform.org/";"css"==t.language||"scss"==t.language?(r+="wiki/css/","property"==t.type?r+="properties/":"atrule-id"==t.type?r+="atrules/":"pseudo-class"==t.type?r+="selectors/pseudo-classes/":"pseudo-element"==t.type&&(r+="selectors/pseudo-elements/")):"markup"==t.language&&("tag-id"==t.type?(a=e(t.content)||a,r+=a?"wiki/"+a+"/elements/":n):"attr-name"==t.type&&(r+=a?"wiki/"+a+"/attributes/":n)),r+=t.content,t.attributes.href=r,t.attributes.target="_blank"}})}}();
!function(){"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",html:"markup",svg:"markup",xml:"markup",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell"};Array.prototype.forEach&&Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var r,a=t.getAttribute("data-src"),n=t,s=/\blang(?:uage)?-(?!\*)(\w+)\b/i;n&&!s.test(n.className);)n=n.parentNode;if(n&&(r=(t.className.match(s)||[,""])[1]),!r){var o=(a.match(/\.(\w+)$/)||[,""])[1];r=e[o]||o}var l=document.createElement("code");l.className="language-"+r,t.textContent="",l.textContent="Loading…",t.appendChild(l);var i=new XMLHttpRequest;i.open("GET",a,!0),i.onreadystatechange=function(){4==i.readyState&&(i.status<400&&i.responseText?(l.textContent=i.responseText,Prism.highlightElement(l)):l.textContent=i.status>=400?"✖ Error "+i.status+" while fetching file: "+i.statusText:"✖ Error: File does not exist or is empty")},i.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}();
!function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e={css:"CSS",clike:"C-like",javascript:"JavaScript",abap:"ABAP",actionscript:"ActionScript",apacheconf:"Apache Configuration",apl:"APL",applescript:"AppleScript",asciidoc:"AsciiDoc",aspnet:"ASP.NET (C#)",autoit:"AutoIt",autohotkey:"AutoHotkey",basic:"BASIC",csharp:"C#",cpp:"C++",coffeescript:"CoffeeScript","css-extras":"CSS Extras",fsharp:"F#",glsl:"GLSL",http:"HTTP",inform7:"Inform 7",json:"JSON",latex:"LaTeX",lolcode:"LOLCODE",matlab:"MATLAB",mel:"MEL",nasm:"NASM",nginx:"nginx",nsis:"NSIS",objectivec:"Objective-C",ocaml:"OCaml",parigp:"PARI/GP",php:"PHP","php-extras":"PHP Extras",powershell:"PowerShell",jsx:"React JSX",rest:"reST (reStructuredText)",sas:"SAS",sass:"Sass (Sass)",scss:"Sass (Scss)",sql:"SQL",typescript:"TypeScript",vhdl:"VHDL",vim:"vim",wiki:"Wiki markup",yaml:"YAML"};Prism.hooks.add("before-highlight",function(s){var a=s.element.parentNode;if(a&&/pre/i.test(a.nodeName)){var t,i,r=a.getAttribute("data-language")||e[s.language]||s.language.substring(0,1).toUpperCase()+s.language.substring(1),l=a.previousSibling;l&&/\s*\bprism-show-language\b\s*/.test(l.className)&&l.firstChild&&/\s*\bprism-show-language-label\b\s*/.test(l.firstChild.className)?i=l.firstChild:(t=document.createElement("div"),i=document.createElement("div"),i.className="prism-show-language-label",t.className="prism-show-language",t.appendChild(i),a.parentNode.insertBefore(t,a)),i.innerHTML=r}})}}();
!function(){function t(t){"function"!=typeof t||e(t)||r.push(t)}function e(t){return"function"==typeof t?r.filter(function(e){return e.valueOf()===t.valueOf()})[0]:"string"==typeof t&&t.length>0?r.filter(function(e){return e.name===t})[0]:null}function n(t){if("string"==typeof t&&(t=e(t)),"function"==typeof t){var n=r.indexOf(t);n>=0&&r.splice(n,1)}}function a(){Array.prototype.slice.call(document.querySelectorAll("pre[data-jsonp]")).forEach(function(t){t.textContent="";var e=document.createElement("code");e.textContent=i,t.appendChild(e);var n=t.getAttribute("data-adapter"),a=null;if(n){if("function"!=typeof window[n])return e.textContent="JSONP adapter function '"+n+"' doesn't exist",void 0;a=window[n]}var u="prismjsonp"+o++,f=document.createElement("a"),l=f.href=t.getAttribute("data-jsonp");f.href+=(f.search?"&":"?")+(t.getAttribute("data-callback")||"callback")+"="+u;var s=setTimeout(function(){e.textContent===i&&(e.textContent="Timeout loading '"+l+"'")},5e3),d=document.createElement("script");d.src=f.href,window[u]=function(n){document.head.removeChild(d),clearTimeout(s),delete window[u];var o="";if(a)o=a(n,t);else for(var i in r)if(o=r[i](n,t),null!==o)break;null===o?e.textContent="Cannot parse response (perhaps you need an adapter function?)":(e.textContent=o,Prism.highlightElement(e))},document.head.appendChild(d)})}if(self.Prism&&self.document&&document.querySelectorAll&&[].filter){var r=[];Prism.plugins.jsonphighlight={registerAdapter:t,removeAdapter:n,highlight:a},t(function(t){if(t&&t.meta&&t.data){if(t.meta.status&&t.meta.status>=400)return"Error: "+(t.data.message||t.meta.status);if("string"==typeof t.data.content)return"function"==typeof atob?atob(t.data.content.replace(/\s/g,"")):"Your browser cannot decode base64"}return null}),t(function(t,e){if(t&&t.meta&&t.data&&t.data.files){if(t.meta.status&&t.meta.status>=400)return"Error: "+(t.data.message||t.meta.status);var n=e.getAttribute("data-filename");if(null==n)for(var a in t.data.files)if(t.data.files.hasOwnProperty(a)){n=a;break}return void 0!==t.data.files[n]?t.data.files[n].content:"Error: unknown or missing gist file "+n}return null}),t(function(t){return t&&t.node&&"string"==typeof t.data?t.data:null});var o=0,i="Loading…";a()}}();
!function(){"undefined"!=typeof self&&self.Prism&&self.document&&document.createRange&&(Prism.hooks.add("before-highlight",function(e){var n=!1,o=0,t=[],d=function(e,a){var r={};a||(r.clone=e.cloneNode(!1),r.posOpen=o,t.push(r));for(var s=0,p=e.childNodes.length;p>s;s++){var l=e.childNodes[s];1===l.nodeType?d(l):3===l.nodeType&&(n||(l.data=l.data.replace(/^(?:\r?\n|\r)/,""),n=!0),o+=l.data.length)}a||(r.posClose=o)};d(e.element,!0),t&&t.length&&(e.keepMarkup=t)}),Prism.hooks.add("after-highlight",function(e){if(e.keepMarkup&&e.keepMarkup.length){var n=function(e,o){for(var t=0,d=e.childNodes.length;d>t;t++){var a=e.childNodes[t];if(1===a.nodeType){if(!n(a,o))return!1}else 3===a.nodeType&&(!o.nodeStart&&o.pos+a.data.length>o.node.posOpen&&(o.nodeStart=a,o.nodeStartPos=o.node.posOpen-o.pos),o.nodeStart&&o.pos+a.data.length>=o.node.posClose&&(o.nodeEnd=a,o.nodeEndPos=o.node.posClose-o.pos),o.pos+=a.data.length);if(o.nodeStart&&o.nodeEnd){var r=document.createRange();return r.setStart(o.nodeStart,o.nodeStartPos),r.setEnd(o.nodeEnd,o.nodeEndPos),o.node.clone.appendChild(r.extractContents()),r.insertNode(o.node.clone),r.detach(),!1}}return!0};e.keepMarkup.forEach(function(o){n(e.element,{node:o,pos:0})})}}))}();
!function(){"undefined"!=typeof self&&self.Prism&&self.document&&Prism.hooks.add("complete",function(e){if(e.code){var t=e.element.parentNode,a=/\s*\bcommand-line\b\s*/;if(t&&/pre/i.test(t.nodeName)&&(a.test(t.className)||a.test(e.element.className))&&!e.element.querySelector(".command-line-prompt")){a.test(e.element.className)&&(e.element.className=e.element.className.replace(a,"")),a.test(t.className)||(t.className+=" command-line");var n=new Array(1+e.code.split("\n").length),s=t.getAttribute("data-prompt")||"";if(""!==s)n=n.join('<span data-prompt="'+s+'"></span>');else{var r=t.getAttribute("data-user")||"user",l=t.getAttribute("data-host")||"localhost";n=n.join('<span data-user="'+r+'" data-host="'+l+'"></span>')}var m=document.createElement("span");m.className="command-line-prompt",m.innerHTML=n;var o=t.getAttribute("data-output")||"";o=o.split(",");for(var i=0;i<o.length;i++){var d=o[i].split("-"),p=parseInt(d[0]),c=p;if(2===d.length&&(c=parseInt(d[1])),!isNaN(p)&&!isNaN(c))for(var u=p;c>=u&&u<=m.children.length;u++){var N=m.children[u-1];N.removeAttribute("data-user"),N.removeAttribute("data-host"),N.removeAttribute("data-prompt")}}e.element.innerHTML=m.outerHTML+e.element.innerHTML}}})}();
