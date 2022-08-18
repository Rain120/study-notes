"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[4029],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var s=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=s.createContext({}),h=function(e){var t=s.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=h(e.components);return s.createElement(r.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=h(n),m=a,g=p["".concat(r,".").concat(m)]||p[m]||c[m]||i;return n?s.createElement(g,o(o({ref:t},u),{},{components:n})):s.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var h=2;h<i;h++)o[h]=n[h];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},79302:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return r},toc:function(){return u}});n(59496);var s=n(49613);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={},l=void 0,r={unversionedId:"iterm2/iterm2+zsh",id:"iterm2/iterm2+zsh",title:"iterm2+zsh",description:"\u7248\u672c",source:"@site/tools/iterm2/iterm2+zsh.md",sourceDirName:"iterm2",slug:"/iterm2/iterm2+zsh",permalink:"/study-notes/tools/iterm2/iterm2+zsh",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1650979145,formattedLastUpdatedAt:"Apr 26, 2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u5de5\u5177\u6536\u96c6",permalink:"/study-notes/tools/guide"},next:{title:"VSCode \u51b2\u7a81\u89e3\u51b3\u6a21\u5f0f\u5207\u6362",permalink:"/study-notes/tools/vscode/qa/git-conflicts"}},h={},u=[{value:"\u7248\u672c",id:"\u7248\u672c",level:2},{value:"\u4fee\u6539\u9ed8\u8ba4\u7ec8\u7aef",id:"\u4fee\u6539\u9ed8\u8ba4\u7ec8\u7aef",level:2},{value:"Iterm2 \u914d\u7f6e",id:"iterm2-\u914d\u7f6e",level:2},{value:"Status Bar \u914d\u7f6e",id:"status-bar-\u914d\u7f6e",level:3},{value:"\u547d\u4ee4\u5de6\u53f3\u8df3\u8f6c\u914d\u7f6e(option(\u2325) \u2190 / \u2192)",id:"\u547d\u4ee4\u5de6\u53f3\u8df3\u8f6c\u914d\u7f6eoption---",level:3},{value:"Vim \u9f20\u6807\u6eda\u52a8",id:"vim-\u9f20\u6807\u6eda\u52a8",level:3},{value:"\u5b89\u88c5 oh my zsh",id:"\u5b89\u88c5-oh-my-zsh",level:2},{value:"\u5b89\u88c5\u5b57\u4f53",id:"\u5b89\u88c5\u5b57\u4f53",level:2},{value:"\u914d\u7f6e Status Bar",id:"\u914d\u7f6e-status-bar",level:2},{value:"\u4e0b\u8f7d\u63d2\u4ef6",id:"\u4e0b\u8f7d\u63d2\u4ef6",level:2},{value:"\u63d2\u4ef6\u914d\u7f6e",id:"\u63d2\u4ef6\u914d\u7f6e",level:3},{value:"\u63d0\u793a\u63d2\u4ef6: zsh-autosuggestions",id:"\u63d0\u793a\u63d2\u4ef6-zsh-autosuggestions",level:3},{value:"\u9ad8\u4eae\u63d2\u4ef6: zsh-syntax-highlighting",id:"\u9ad8\u4eae\u63d2\u4ef6-zsh-syntax-highlighting",level:2},{value:"<code>Enable</code> \u914d\u7f6e\u6587\u4ef6",id:"enable-\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u53bb\u9664 oh my zsh \u63d0\u793a",id:"\u53bb\u9664-oh-my-zsh-\u63d0\u793a",level:2},{value:"\u65b9\u6cd5 1",id:"\u65b9\u6cd5-1",level:3},{value:"\u65b9\u6cd5 2",id:"\u65b9\u6cd5-2",level:3},{value:"FBI Warning",id:"fbi-warning",level:2},{value:"\u5168\u90e8\u914d\u7f6e",id:"\u5168\u90e8\u914d\u7f6e",level:2}],c={toc:u};function p(e){var{components:t}=e,o=i(e,["components"]);return(0,s.kt)("wrapper",a({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",a({},{id:"\u7248\u672c"}),"\u7248\u672c"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Iterm2")," ",(0,s.kt)("strong",{parentName:"li"},"3.3.12"))),(0,s.kt)("h2",a({},{id:"\u4fee\u6539\u9ed8\u8ba4\u7ec8\u7aef"}),"\u4fee\u6539\u9ed8\u8ba4\u7ec8\u7aef"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"default-terminal.png",src:n(24517).Z,width:"812",height:"1002"})),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-sh"}),"chsh -s /bin/zsh\n")),(0,s.kt)("p",null,"\u9ed8\u8ba4\u662f\u914d\u7f6e"),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-sh"}),"chsh -s /bin/bash\n")),(0,s.kt)("h2",a({},{id:"iterm2-\u914d\u7f6e"}),"Iterm2 \u914d\u7f6e"),(0,s.kt)("h3",a({},{id:"status-bar-\u914d\u7f6e"}),"Status Bar \u914d\u7f6e"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"iterm2-status-bar-config.png",src:n(36034).Z,width:"2880",height:"1534"})),(0,s.kt)("h3",a({},{id:"\u547d\u4ee4\u5de6\u53f3\u8df3\u8f6c\u914d\u7f6eoption---"}),"\u547d\u4ee4\u5de6\u53f3\u8df3\u8f6c\u914d\u7f6e(option(\u2325) \u2190 / \u2192)"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"keys-options-config.png",src:n(89443).Z,width:"2032",height:"1156"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"options-jump.gif",src:n(83836).Z,width:"813",height:"574"})),(0,s.kt)("p",null,(0,s.kt)("a",a({parentName:"p"},{href:"https://stackoverflow.com/questions/6205157/iterm-2-how-to-set-keyboard-shortcuts-to-jump-to-beginning-end-of-line"}),"stackoverfloe QA")),(0,s.kt)("h3",a({},{id:"vim-\u9f20\u6807\u6eda\u52a8"}),"Vim \u9f20\u6807\u6eda\u52a8"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"preferences -> Advanced -> Mouse -> scroll(up / down)")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"down -> \\j"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"up -> \\k")))),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"vim-mouse-scroll.png",src:n(63455).Z,width:"2880",height:"1800"})),(0,s.kt)("h2",a({},{id:"\u5b89\u88c5-oh-my-zsh"}),"\u5b89\u88c5 oh my zsh"),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-sh"}),'# curl\nsh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"\n\n# wget\nsh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"\n\n# clone\ngit clone git@github.com:ohmyzsh/ohmyzsh.git ~/.oh-my-zsh\ncp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc\ntouch ~/.bash_profile\n')),(0,s.kt)("p",null,"\u5b98\u65b9\u94fe\u63a5 \ud83d\udc49\ud83d\udc49\ud83d\udc49 ",(0,s.kt)("a",a({parentName:"p"},{href:"https://ohmyz.sh/#install"}),(0,s.kt)("inlineCode",{parentName:"a"},"Here"))),(0,s.kt)("h2",a({},{id:"\u5b89\u88c5\u5b57\u4f53"}),"\u5b89\u88c5\u5b57\u4f53"),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-sh"}),"# clone\ngit clone https://github.com/powerline/fonts.git --depth=1\n# install\ncd fonts\n./install.sh\n# clean-up a bit\ncd ..\nrm -rf fonts\n")),(0,s.kt)("p",null,"\u5b98\u65b9\u94fe\u63a5 \ud83d\udc49\ud83d\udc49\ud83d\udc49 ",(0,s.kt)("a",a({parentName:"p"},{href:"https://github.com/powerline/fonts#quick-installation"}),(0,s.kt)("inlineCode",{parentName:"a"},"Here"))," \u6216\u8005\u4f7f\u7528\u5b83 ",(0,s.kt)("a",a({parentName:"p"},{href:"https://github.com/ryanoasis/nerd-fonts"}),(0,s.kt)("inlineCode",{parentName:"a"},"nerd-fonts")),"\u3002"),(0,s.kt)("p",null,"\u5b89\u88c5\u5b57\u4f53\u524d"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"no-fonts.png",src:n(75656).Z,width:"2880",height:"190"})),(0,s.kt)("p",null,"\u5b89\u88c5\u5b57\u4f53"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"install-fonts.png",src:n(95082).Z,width:"2880",height:"660"})),(0,s.kt)("p",null,"\u914d\u7f6e & \u5b89\u88c5\u5b57\u4f53\u540e"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"config-fonts.png",src:n(23185).Z,width:"2880",height:"1364"})),(0,s.kt)("h2",a({},{id:"\u914d\u7f6e-status-bar"}),"\u914d\u7f6e Status Bar"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"status-bar.png",src:n(52463).Z,width:"2880",height:"1722"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"status-bar-config.png",src:n(50514).Z,width:"2880",height:"1296"})),(0,s.kt)("h2",a({},{id:"\u4e0b\u8f7d\u63d2\u4ef6"}),"\u4e0b\u8f7d\u63d2\u4ef6"),(0,s.kt)("h3",a({},{id:"\u63d2\u4ef6\u914d\u7f6e"}),"\u63d2\u4ef6\u914d\u7f6e"),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-sh"}),"# plugins=(extension1 extension2 ....)\nplugins=(\n  git\n  z\n  zsh-autosuggestions\n  zsh-syntax-highlighting\n)\n")),(0,s.kt)("h3",a({},{id:"\u63d0\u793a\u63d2\u4ef6-zsh-autosuggestions"}),"\u63d0\u793a\u63d2\u4ef6: zsh-autosuggestions"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"zsh-autosuggestion1.png",src:n(41475).Z,width:"1786",height:"118"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"zsh-autosuggestion2.png",src:n(35472).Z,width:"1560",height:"148"})),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-sh"}),"cd ~/.oh-my-zsh/custom/plugins/\ngit clone https://github.com/zsh-users/zsh-autosuggestions\n\n")),(0,s.kt)("h2",a({},{id:"\u9ad8\u4eae\u63d2\u4ef6-zsh-syntax-highlighting"}),"\u9ad8\u4eae\u63d2\u4ef6: zsh-syntax-highlighting"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"zsh-autosuggestion2.png",src:n(35472).Z,width:"1560",height:"148"})),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-sh"}),"cd ~/.oh-my-zsh/custom/plugins/\ngit clone https://github.com/zsh-users/zsh-syntax-highlighting.git\n")),(0,s.kt)("p",null,"\u9ad8\u4eae\u63d2\u4ef6\u9700\u8981\u4fdd\u8bc1\u63d2\u4ef6\u5728\u6700\u540e\u9762\uff0c\u7136\u540e\u5728",(0,s.kt)("inlineCode",{parentName:"p"},".zshrc")," \u7684\u6700\u4e0b\u9762\u914d\u7f6e\u8fd9\u4e2a\uff0c\u4fdd\u8bc1\u751f\u6548"),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-sh"}),"source ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh\n")),(0,s.kt)("h2",a({},{id:"enable-\u914d\u7f6e\u6587\u4ef6"}),(0,s.kt)("inlineCode",{parentName:"h2"},"Enable")," \u914d\u7f6e\u6587\u4ef6"),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-sh"}),"source ~/.zshrc\n")),(0,s.kt)("h2",a({},{id:"\u53bb\u9664-oh-my-zsh-\u63d0\u793a"}),"\u53bb\u9664 oh my zsh \u63d0\u793a"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"zsh-auth-tips.png",src:n(53414).Z,width:"2046",height:"814"})),(0,s.kt)("h3",a({},{id:"\u65b9\u6cd5-1"}),"\u65b9\u6cd5 1"),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-sh"}),"chmod 755 /usr/local/share/zsh\nchmod 755 /usr/local/share/zsh/site-functions\n")),(0,s.kt)("p",null,"\u770b\u63d0\u793a\u544a\u8bc9\u6211\u4eec\u90a3\u4e2a\u6587\u4ef6\u6ca1\u6709\u6743\u9650\uff0c\u7ed9\u4ed6\u52a0\u4e0a\u5373\u53ef"),(0,s.kt)("h3",a({},{id:"\u65b9\u6cd5-2"}),"\u65b9\u6cd5 2"),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-sh"}),'# .zshrc \u7b2c\u4e00\u884c\nZSH_DISABLE_COMPFIX="true"\n')),(0,s.kt)("h2",a({},{id:"fbi-warning"}),"FBI Warning"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u88c5\u903c\u4e13\u7528\uff0c\u4f46\u662f\u771f\u7684\u597d\u65e0\u804a\u7684\uff0c\u4e0d\u5efa\u8bae")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"fbi-wraning.png",src:n(3726).Z,width:"2880",height:"536"})),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-sh"}),'# .zshrc \u65b0\u589e\u5185\u5bb9\n# FBI Warning\nexport PATH="$PATH:$HOME/.rvm/bin" # Add RVM to PATH for scripting\n\n_COLUMNS=$(tput cols)\n_MESSAGE=" FBI Warining "\ny=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))\nspaces=$(printf "%-${y}s" " ")\n\necho " "\necho -e "${spaces}\\033[41;37;5m FBI WARNING \\033[0m"\necho " "\n_COLUMNS=$(tput cols)\n_MESSAGE="Ferderal Law provides severe civil and criminal penalties for"\ny=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))\nspaces=$(printf "%-${y}s" " ")\necho -e "${spaces}${_MESSAGE}"\n\n_COLUMNS=$(tput cols)\n_MESSAGE="the unauthorized reproduction, distribution, or exhibition of"\ny=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))\nspaces=$(printf "%-${y}s" " ")\necho -e "${spaces}${_MESSAGE}"\n\n_COLUMNS=$(tput cols)\n_MESSAGE="copyrighted motion pictures (Title 17, United States Code,"\ny=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))\nspaces=$(printf "%-${y}s" " ")\necho -e "${spaces}${_MESSAGE}"\n\n_COLUMNS=$(tput cols)\n_MESSAGE="Sections 501 and 508). The Federal Bureau of Investigation"\ny=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))\nspaces=$(printf "%-${y}s" " ")\necho -e "${spaces}${_MESSAGE}"\n\n_COLUMNS=$(tput cols)\n_MESSAGE="investigates allegations of criminal copyright infringement"\ny=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))\nspaces=$(printf "%-${y}s" " ")\necho -e "${spaces}${_MESSAGE}"\n\n_COLUMNS=$(tput cols)\n_MESSAGE="(Title 17, United States Code, Section 506)."\ny=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))\nspaces=$(printf "%-${y}s" " ")\necho -e "${spaces}${_MESSAGE}"\necho " "\n')),(0,s.kt)("h2",a({},{id:"\u5168\u90e8\u914d\u7f6e"}),"\u5168\u90e8\u914d\u7f6e"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},".zshrc")),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-sh"}),'ZSH_DISABLE_COMPFIX="true"\n# If you come from bash you might have to change your $PATH.\n# export PATH=$HOME/bin:/usr/local/bin:$PATH\n\n# Path to your oh-my-zsh installation.\nexport ZSH="$HOME/.oh-my-zsh"\n\n# Set name of the theme to load --- if set to "random", it will\n# load a random theme each time oh-my-zsh is loaded, in which case,\n# to know which specific one was loaded, run: echo $RANDOM_THEME\n# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes\n# ZSH_THEME="robbyrussell"\nZSH_THEME="agnoster"\n# ZSH_THEME="powerlevel9k/powerlevel9k"\n\n# Set list of themes to pick from when loading at random\n# Setting this variable when ZSH_THEME=random will cause zsh to load\n# a theme from this variable instead of looking in ~/.oh-my-zsh/themes/\n# If set to an empty array, this variable will have no effect.\n# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )\n\n# Uncomment the following line to use case-sensitive completion.\n# CASE_SENSITIVE="true"\n\n# Uncomment the following line to use hyphen-insensitive completion.\n# Case-sensitive completion must be off. _ and - will be interchangeable.\n# HYPHEN_INSENSITIVE="true"\n\n# Uncomment the following line to disable bi-weekly auto-update checks.\n# DISABLE_AUTO_UPDATE="true"\n\n# Uncomment the following line to automatically update without prompting.\n# DISABLE_UPDATE_PROMPT="true"\n\n# Uncomment the following line to change how often to auto-update (in days).\n# export UPDATE_ZSH_DAYS=13\n\n# Uncomment the following line if pasting URLs and other text is messed up.\n# DISABLE_MAGIC_FUNCTIONS=true\n\n# Uncomment the following line to disable colors in ls.\n# DISABLE_LS_COLORS="true"\n\n# Uncomment the following line to disable auto-setting terminal title.\n# DISABLE_AUTO_TITLE="true"\n\n# Uncomment the following line to enable command auto-correction.\n# ENABLE_CORRECTION="true"\n\n# Uncomment the following line to display red dots whilst waiting for completion.\n# COMPLETION_WAITING_DOTS="true"\n\n# Uncomment the following line if you want to disable marking untracked files\n# under VCS as dirty. This makes repository status check for large repositories\n# much, much faster.\n# DISABLE_UNTRACKED_FILES_DIRTY="true"\n\n# Uncomment the following line if you want to change the command execution time\n# stamp shown in the history command output.\n# You can set one of the optional three formats:\n# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"\n# or set a custom format using the strftime function format specifications,\n# see \'man strftime\' for details.\n# HIST_STAMPS="mm/dd/yyyy"\n\n# Would you like to use another custom folder than $ZSH/custom?\n# ZSH_CUSTOM=/path/to/new-custom-folder\n\n# Which plugins would you like to load?\n# Standard plugins can be found in ~/.oh-my-zsh/plugins/*\n# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/\n# Example format: plugins=(rails git textmate ruby lighthouse)\n# Add wisely, as too many plugins slow down shell startup.\nplugins=(\n  git\n  z\n  zsh-autosuggestions\n  zsh-syntax-highlighting\n)\n\nsource $ZSH/oh-my-zsh.sh\n\n# User configuration\n# \u5982\u679c\u6709\u9700\u8981\u7684\u8bdd\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a .bash_profile \u914d\u7f6e\u6587\u4ef6\n# source ~/.bash_profile\n\n# export MANPATH="/usr/local/man:$MANPATH"\n\n# You may need to manually set your language environment\n# export LANG=en_US.UTF-8\n\n# Preferred editor for local and remote sessions\n# if [[ -n $SSH_CONNECTION ]]; then\n#   export EDITOR=\'vim\'\n# else\n#   export EDITOR=\'mvim\'\n# fi\n\n# Compilation flags\n# export ARCHFLAGS="-arch x86_64"\n\n# Set personal aliases, overriding those provided by oh-my-zsh libs,\n# plugins, and themes. Aliases can be placed here, though oh-my-zsh\n# users are encouraged to define aliases within the ZSH_CUSTOM folder.\n# For a full list of active aliases, run `alias`.\n#\n# Example aliases\n# alias zshconfig="mate ~/.zshrc"\n# alias ohmyzsh="mate ~/.oh-my-zsh"\n\n# git alias\nalias gs="git status"\nalias gsm="git summary"\nalias ga=\'git add\'\nalias gd=\'git diff\'\nalias gf=\'git fetch\'\nalias grv=\'git remote -v\'\nalias grb=\'git rebase\'\nalias gbr=\'git branch\'\nalias gpl="git pull"\nalias gps="git push"\nalias gco="git checkout"\nalias gl="git log"\nalias gc="git commit -m"\nalias gcm="git commit -m"\nalias gm="git merge"\nalias git=\'LANG=en_US git\'\n\n# alias for push icode\nalias i=\'pnpm i\'\nalias b=\'pnpm build\'\nalias c=\'code .\'\nalias d=\'pnpm dev\'\nalias cls=\'clear\'\n\n# remove user host and pc name\nDEFAULT_USER=$USER\n\nsource ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh\n')),(0,s.kt)("p",null,"\u5176\u4ed6\u7684\u770b\u770b\u8fd9\u4e2a\u5427 ",(0,s.kt)("a",a({parentName:"p"},{href:"https://juejin.im/post/6844904178075058189"}),(0,s.kt)("inlineCode",{parentName:"a"},"here"))))}p.isMDXComponent=!0},23185:function(e,t,n){t.Z=n.p+"assets/images/config-fonts-e49025b410029a90ec4be6cdaf981493.png"},24517:function(e,t,n){t.Z=n.p+"assets/images/default-terminal-3b7494d6ef04a3a7192994383785797c.png"},3726:function(e,t,n){t.Z=n.p+"assets/images/fbi-wraning-87afc3e912134e4bba27b32f7587c5b6.png"},95082:function(e,t,n){t.Z=n.p+"assets/images/install-fonts-e761849a77e3923024c79ad154708125.png"},36034:function(e,t,n){t.Z=n.p+"assets/images/iterm2-status-bar-config-460bc175f3a62fc37237725282780b8d.png"},89443:function(e,t,n){t.Z=n.p+"assets/images/keys-options-config-47793054cd1c795c4086655cb57dfe7c.png"},75656:function(e,t,n){t.Z=n.p+"assets/images/no-fonts-08739f2756872a12175d33bfeb777fe3.png"},83836:function(e,t,n){t.Z=n.p+"assets/images/options-jump-804294e637b30752418f233204a9a0e8.gif"},50514:function(e,t,n){t.Z=n.p+"assets/images/status-bar-config-7b389f578f8602d4375f687749016ae2.png"},52463:function(e,t,n){t.Z=n.p+"assets/images/status-bar-c27149ce7d10c3b7a71b074f3e63cff7.png"},63455:function(e,t,n){t.Z=n.p+"assets/images/vim-mouse-scroll-aa9b8ecbdf10c20337219b1663bc3eb4.png"},53414:function(e,t,n){t.Z=n.p+"assets/images/zsh-auth-tips-766ec1aad3b2e8853c15e37d78227f12.png"},41475:function(e,t,n){t.Z=n.p+"assets/images/zsh-autosuggestion1-849551cd99d6fbd46eb048dc710269d2.png"},35472:function(e,t,n){t.Z=n.p+"assets/images/zsh-autosuggestion2-cb4eaddb4b6deb31575f9988f51ec33a.png"}}]);