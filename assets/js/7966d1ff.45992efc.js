"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[4029],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var s=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,s,i=function(e,n){if(null==e)return{};var t,s,i={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var r=s.createContext({}),c=function(e){var n=s.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return s.createElement(r.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},h=s.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(t),m=i,g=h["".concat(r,".").concat(m)]||h[m]||u[m]||a;return t?s.createElement(g,o(o({ref:n},p),{},{components:t})):s.createElement(g,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=h;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}h.displayName="MDXCreateElement"},40193:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return r},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var s=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],l={},r=void 0,c={unversionedId:"iterm2/iterm2+zsh",id:"iterm2/iterm2+zsh",isDocsHomePage:!1,title:"iterm2+zsh",description:"\u7248\u672c",source:"@site/tools/iterm2/iterm2+zsh.md",sourceDirName:"iterm2",slug:"/iterm2/iterm2+zsh",permalink:"/study-notes/tools/iterm2/iterm2+zsh",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1638530590,formattedLastUpdatedAt:"12/3/2021",frontMatter:{},sidebar:"sidebar",previous:{title:"guide",permalink:"/study-notes/tools/guide"},next:{title:"Alias",permalink:"/study-notes/tools/vscode/alias"}},p=[{value:"\u7248\u672c",id:"\u7248\u672c",children:[],level:2},{value:"\u4fee\u6539\u9ed8\u8ba4\u7ec8\u7aef",id:"\u4fee\u6539\u9ed8\u8ba4\u7ec8\u7aef",children:[],level:2},{value:"Iterm2 \u914d\u7f6e",id:"iterm2-\u914d\u7f6e",children:[{value:"Status Bar \u914d\u7f6e",id:"status-bar-\u914d\u7f6e",children:[],level:3},{value:"\u547d\u4ee4\u5de6\u53f3\u8df3\u8f6c\u914d\u7f6e(option(\u2325) \u2190 / \u2192)",id:"\u547d\u4ee4\u5de6\u53f3\u8df3\u8f6c\u914d\u7f6eoption---",children:[],level:3},{value:"Vim \u9f20\u6807\u6eda\u52a8",id:"vim-\u9f20\u6807\u6eda\u52a8",children:[],level:3}],level:2},{value:"\u5b89\u88c5 oh my zsh",id:"\u5b89\u88c5-oh-my-zsh",children:[],level:2},{value:"\u5b89\u88c5\u5b57\u4f53",id:"\u5b89\u88c5\u5b57\u4f53",children:[],level:2},{value:"\u914d\u7f6e Status Bar",id:"\u914d\u7f6e-status-bar",children:[],level:2},{value:"\u4e0b\u8f7d\u63d2\u4ef6",id:"\u4e0b\u8f7d\u63d2\u4ef6",children:[{value:"\u63d2\u4ef6\u914d\u7f6e",id:"\u63d2\u4ef6\u914d\u7f6e",children:[],level:3},{value:"\u63d0\u793a\u63d2\u4ef6: zsh-autosuggestions",id:"\u63d0\u793a\u63d2\u4ef6-zsh-autosuggestions",children:[],level:3}],level:2},{value:"\u9ad8\u4eae\u63d2\u4ef6: zsh-syntax-highlighting",id:"\u9ad8\u4eae\u63d2\u4ef6-zsh-syntax-highlighting",children:[],level:2},{value:"<code>Enable</code> \u914d\u7f6e\u6587\u4ef6",id:"enable-\u914d\u7f6e\u6587\u4ef6",children:[],level:2},{value:"\u53bb\u9664 oh my zsh \u63d0\u793a",id:"\u53bb\u9664-oh-my-zsh-\u63d0\u793a",children:[{value:"\u65b9\u6cd51",id:"\u65b9\u6cd51",children:[],level:3},{value:"\u65b9\u6cd52",id:"\u65b9\u6cd52",children:[],level:3}],level:2},{value:"FBI Warning",id:"fbi-warning",children:[],level:2},{value:"\u5168\u90e8\u914d\u7f6e",id:"\u5168\u90e8\u914d\u7f6e",children:[],level:2}],u={toc:p};function h(e){var n=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,s.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7248\u672c"},"\u7248\u672c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Iterm2")," ",(0,a.kt)("strong",{parentName:"li"},"3.3.12"))),(0,a.kt)("h2",{id:"\u4fee\u6539\u9ed8\u8ba4\u7ec8\u7aef"},"\u4fee\u6539\u9ed8\u8ba4\u7ec8\u7aef"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"default-terminal.png",src:t(96947).Z})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"chsh -s /bin/zsh\n")),(0,a.kt)("p",null,"\u9ed8\u8ba4\u662f\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"chsh -s /bin/bash\n")),(0,a.kt)("h2",{id:"iterm2-\u914d\u7f6e"},"Iterm2 \u914d\u7f6e"),(0,a.kt)("h3",{id:"status-bar-\u914d\u7f6e"},"Status Bar \u914d\u7f6e"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"iterm2-status-bar-config.png",src:t(42019).Z})),(0,a.kt)("h3",{id:"\u547d\u4ee4\u5de6\u53f3\u8df3\u8f6c\u914d\u7f6eoption---"},"\u547d\u4ee4\u5de6\u53f3\u8df3\u8f6c\u914d\u7f6e(option(\u2325) \u2190 / \u2192)"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"keys-options-config.png",src:t(88799).Z})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"options-jump.gif",src:t(17506).Z})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/6205157/iterm-2-how-to-set-keyboard-shortcuts-to-jump-to-beginning-end-of-line"},"stackoverfloe QA")),(0,a.kt)("h3",{id:"vim-\u9f20\u6807\u6eda\u52a8"},"Vim \u9f20\u6807\u6eda\u52a8"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"preferences -> Advanced -> Mouse -> scroll(up / down)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"down -> \\j"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"up -> \\k")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"vim-mouse-scroll.png",src:t(79793).Z})),(0,a.kt)("h2",{id:"\u5b89\u88c5-oh-my-zsh"},"\u5b89\u88c5 oh my zsh"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# curl\nsh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"\n\n# wget\nsh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"\n\n# clone\ngit clone git@github.com:ohmyzsh/ohmyzsh.git ~/.oh-my-zsh\ncp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc\ntouch ~/.bash_profile\n')),(0,a.kt)("p",null,"\u5b98\u65b9\u94fe\u63a5 \ud83d\udc49\ud83d\udc49\ud83d\udc49 ",(0,a.kt)("a",{parentName:"p",href:"https://ohmyz.sh/#install"},(0,a.kt)("inlineCode",{parentName:"a"},"Here"))),(0,a.kt)("h2",{id:"\u5b89\u88c5\u5b57\u4f53"},"\u5b89\u88c5\u5b57\u4f53"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# clone\ngit clone https://github.com/powerline/fonts.git --depth=1\n# install\ncd fonts\n./install.sh\n# clean-up a bit\ncd ..\nrm -rf fonts\n")),(0,a.kt)("p",null,"\u5b98\u65b9\u94fe\u63a5 \ud83d\udc49\ud83d\udc49\ud83d\udc49 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/powerline/fonts#quick-installation"},(0,a.kt)("inlineCode",{parentName:"a"},"Here"))," \u6216\u8005\u4f7f\u7528\u5b83 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ryanoasis/nerd-fonts"},(0,a.kt)("inlineCode",{parentName:"a"},"nerd-fonts")),"\u3002"),(0,a.kt)("p",null,"\u5b89\u88c5\u5b57\u4f53\u524d"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"no-fonts.png",src:t(42974).Z})),(0,a.kt)("p",null,"\u5b89\u88c5\u5b57\u4f53"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"install-fonts.png",src:t(75477).Z})),(0,a.kt)("p",null,"\u914d\u7f6e & \u5b89\u88c5\u5b57\u4f53\u540e"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"config-fonts.png",src:t(91401).Z})),(0,a.kt)("h2",{id:"\u914d\u7f6e-status-bar"},"\u914d\u7f6e Status Bar"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"status-bar.png",src:t(79482).Z})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"status-bar-config.png",src:t(26553).Z})),(0,a.kt)("h2",{id:"\u4e0b\u8f7d\u63d2\u4ef6"},"\u4e0b\u8f7d\u63d2\u4ef6"),(0,a.kt)("h3",{id:"\u63d2\u4ef6\u914d\u7f6e"},"\u63d2\u4ef6\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# plugins=(extension1 extension2 ....)\nplugins=(\n  git\n  z\n  zsh-autosuggestions\n  zsh-syntax-highlighting\n)\n")),(0,a.kt)("h3",{id:"\u63d0\u793a\u63d2\u4ef6-zsh-autosuggestions"},"\u63d0\u793a\u63d2\u4ef6: zsh-autosuggestions"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"zsh-autosuggestion1.png",src:t(98004).Z})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"zsh-autosuggestion2.png",src:t(84234).Z})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd ~/.oh-my-zsh/custom/plugins/\ngit clone https://github.com/zsh-users/zsh-autosuggestions\n\n")),(0,a.kt)("h2",{id:"\u9ad8\u4eae\u63d2\u4ef6-zsh-syntax-highlighting"},"\u9ad8\u4eae\u63d2\u4ef6: zsh-syntax-highlighting"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"zsh-autosuggestion2.png",src:t(84234).Z})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd ~/.oh-my-zsh/custom/plugins/\ngit clone https://github.com/zsh-users/zsh-syntax-highlighting.git\n")),(0,a.kt)("p",null,"\u9ad8\u4eae\u63d2\u4ef6\u9700\u8981\u4fdd\u8bc1\u63d2\u4ef6\u5728\u6700\u540e\u9762\uff0c\u7136\u540e\u5728",(0,a.kt)("inlineCode",{parentName:"p"},".zshrc")," \u7684\u6700\u4e0b\u9762\u914d\u7f6e\u8fd9\u4e2a\uff0c\u4fdd\u8bc1\u751f\u6548"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"source ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh\n")),(0,a.kt)("h2",{id:"enable-\u914d\u7f6e\u6587\u4ef6"},(0,a.kt)("inlineCode",{parentName:"h2"},"Enable")," \u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"source ~/.zshrc\n")),(0,a.kt)("h2",{id:"\u53bb\u9664-oh-my-zsh-\u63d0\u793a"},"\u53bb\u9664 oh my zsh \u63d0\u793a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"zsh-auth-tips.png",src:t(34316).Z})),(0,a.kt)("h3",{id:"\u65b9\u6cd51"},"\u65b9\u6cd51"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"chmod 755 /usr/local/share/zsh\nchmod 755 /usr/local/share/zsh/site-functions\n")),(0,a.kt)("p",null,"\u770b\u63d0\u793a\u544a\u8bc9\u6211\u4eec\u90a3\u4e2a\u6587\u4ef6\u6ca1\u6709\u6743\u9650\uff0c\u7ed9\u4ed6\u52a0\u4e0a\u5373\u53ef"),(0,a.kt)("h3",{id:"\u65b9\u6cd52"},"\u65b9\u6cd52"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# .zshrc \u7b2c\u4e00\u884c\nZSH_DISABLE_COMPFIX="true"\n')),(0,a.kt)("h2",{id:"fbi-warning"},"FBI Warning"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"fbi-wraning.png",src:t(96881).Z})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# .zshrc \u65b0\u589e\u5185\u5bb9\n# FBI Warning\nexport PATH="$PATH:$HOME/.rvm/bin" # Add RVM to PATH for scripting\n\n_COLUMNS=$(tput cols)\n_MESSAGE=" FBI Warining "\ny=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))\nspaces=$(printf "%-${y}s" " ")\n\necho " "\necho -e "${spaces}\\033[41;37;5m FBI WARNING \\033[0m"\necho " "\n_COLUMNS=$(tput cols)\n_MESSAGE="Ferderal Law provides severe civil and criminal penalties for"\ny=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))\nspaces=$(printf "%-${y}s" " ")\necho -e "${spaces}${_MESSAGE}"\n\n_COLUMNS=$(tput cols)\n_MESSAGE="the unauthorized reproduction, distribution, or exhibition of"\ny=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))\nspaces=$(printf "%-${y}s" " ")\necho -e "${spaces}${_MESSAGE}"\n\n_COLUMNS=$(tput cols)\n_MESSAGE="copyrighted motion pictures (Title 17, United States Code,"\ny=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))\nspaces=$(printf "%-${y}s" " ")\necho -e "${spaces}${_MESSAGE}"\n\n_COLUMNS=$(tput cols)\n_MESSAGE="Sections 501 and 508). The Federal Bureau of Investigation"\ny=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))\nspaces=$(printf "%-${y}s" " ")\necho -e "${spaces}${_MESSAGE}"\n\n_COLUMNS=$(tput cols)\n_MESSAGE="investigates allegations of criminal copyright infringement"\ny=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))\nspaces=$(printf "%-${y}s" " ")\necho -e "${spaces}${_MESSAGE}"\n\n_COLUMNS=$(tput cols)\n_MESSAGE="(Title 17, United States Code, Section 506)."\ny=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))\nspaces=$(printf "%-${y}s" " ")\necho -e "${spaces}${_MESSAGE}"\necho " "\n\n')),(0,a.kt)("h2",{id:"\u5168\u90e8\u914d\u7f6e"},"\u5168\u90e8\u914d\u7f6e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".zshrc")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'ZSH_DISABLE_COMPFIX="true"\n# If you come from bash you might have to change your $PATH.\n# export PATH=$HOME/bin:/usr/local/bin:$PATH\n\n# Path to your oh-my-zsh installation.\nexport ZSH="/Users/rain120/.oh-my-zsh"\n\n# Set name of the theme to load --- if set to "random", it will\n# load a random theme each time oh-my-zsh is loaded, in which case,\n# to know which specific one was loaded, run: echo $RANDOM_THEME\n# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes\n# ZSH_THEME="robbyrussell"\nZSH_THEME="agnoster"\n# ZSH_THEME="powerlevel9k/powerlevel9k"\n\n# Set list of themes to pick from when loading at random\n# Setting this variable when ZSH_THEME=random will cause zsh to load\n# a theme from this variable instead of looking in ~/.oh-my-zsh/themes/\n# If set to an empty array, this variable will have no effect.\n# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )\n\n# Uncomment the following line to use case-sensitive completion.\n# CASE_SENSITIVE="true"\n\n# Uncomment the following line to use hyphen-insensitive completion.\n# Case-sensitive completion must be off. _ and - will be interchangeable.\n# HYPHEN_INSENSITIVE="true"\n\n# Uncomment the following line to disable bi-weekly auto-update checks.\n# DISABLE_AUTO_UPDATE="true"\n\n# Uncomment the following line to automatically update without prompting.\n# DISABLE_UPDATE_PROMPT="true"\n\n# Uncomment the following line to change how often to auto-update (in days).\n# export UPDATE_ZSH_DAYS=13\n\n# Uncomment the following line if pasting URLs and other text is messed up.\n# DISABLE_MAGIC_FUNCTIONS=true\n\n# Uncomment the following line to disable colors in ls.\n# DISABLE_LS_COLORS="true"\n\n# Uncomment the following line to disable auto-setting terminal title.\n# DISABLE_AUTO_TITLE="true"\n\n# Uncomment the following line to enable command auto-correction.\n# ENABLE_CORRECTION="true"\n\n# Uncomment the following line to display red dots whilst waiting for completion.\n# COMPLETION_WAITING_DOTS="true"\n\n# Uncomment the following line if you want to disable marking untracked files\n# under VCS as dirty. This makes repository status check for large repositories\n# much, much faster.\n# DISABLE_UNTRACKED_FILES_DIRTY="true"\n\n# Uncomment the following line if you want to change the command execution time\n# stamp shown in the history command output.\n# You can set one of the optional three formats:\n# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"\n# or set a custom format using the strftime function format specifications,\n# see \'man strftime\' for details.\n# HIST_STAMPS="mm/dd/yyyy"\n\n# Would you like to use another custom folder than $ZSH/custom?\n# ZSH_CUSTOM=/path/to/new-custom-folder\n\n# Which plugins would you like to load?\n# Standard plugins can be found in ~/.oh-my-zsh/plugins/*\n# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/\n# Example format: plugins=(rails git textmate ruby lighthouse)\n# Add wisely, as too many plugins slow down shell startup.\nplugins=(\n  git\n  z\n  zsh-autosuggestions\n  zsh-syntax-highlighting\n)\n\nsource $ZSH/oh-my-zsh.sh\n\n# User configuration\nsource ~/.bash_profile\n\n# export MANPATH="/usr/local/man:$MANPATH"\n\n# You may need to manually set your language environment\n# export LANG=en_US.UTF-8\n\n# Preferred editor for local and remote sessions\n# if [[ -n $SSH_CONNECTION ]]; then\n#   export EDITOR=\'vim\'\n# else\n#   export EDITOR=\'mvim\'\n# fi\n\n# Compilation flags\n# export ARCHFLAGS="-arch x86_64"\n\n# Set personal aliases, overriding those provided by oh-my-zsh libs,\n# plugins, and themes. Aliases can be placed here, though oh-my-zsh\n# users are encouraged to define aliases within the ZSH_CUSTOM folder.\n# For a full list of active aliases, run `alias`.\n#\n# Example aliases\n# alias zshconfig="mate ~/.zshrc"\n# alias ohmyzsh="mate ~/.oh-my-zsh"\n\n# FBI Warning\nexport PATH="$PATH:$HOME/.rvm/bin" # Add RVM to PATH for scripting\n\n_COLUMNS=$(tput cols)\n_MESSAGE=" FBI Warining "\ny=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))\nspaces=$(printf "%-${y}s" " ")\n\necho " "\necho -e "${spaces}\\033[41;37;5m FBI WARNING \\033[0m"\necho " "\n_COLUMNS=$(tput cols)\n_MESSAGE="Ferderal Law provides severe civil and criminal penalties for"\ny=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))\nspaces=$(printf "%-${y}s" " ")\necho -e "${spaces}${_MESSAGE}"\n\n_COLUMNS=$(tput cols)\n_MESSAGE="the unauthorized reproduction, distribution, or exhibition of"\ny=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))\nspaces=$(printf "%-${y}s" " ")\necho -e "${spaces}${_MESSAGE}"\n\n_COLUMNS=$(tput cols)\n_MESSAGE="copyrighted motion pictures (Title 17, United States Code,"\ny=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))\nspaces=$(printf "%-${y}s" " ")\necho -e "${spaces}${_MESSAGE}"\n\n_COLUMNS=$(tput cols)\n_MESSAGE="Sections 501 and 508). The Federal Bureau of Investigation"\ny=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))\nspaces=$(printf "%-${y}s" " ")\necho -e "${spaces}${_MESSAGE}"\n\n_COLUMNS=$(tput cols)\n_MESSAGE="investigates allegations of criminal copyright infringement"\ny=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))\nspaces=$(printf "%-${y}s" " ")\necho -e "${spaces}${_MESSAGE}"\n\n_COLUMNS=$(tput cols)\n_MESSAGE="(Title 17, United States Code, Section 506)."\ny=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))\nspaces=$(printf "%-${y}s" " ")\necho -e "${spaces}${_MESSAGE}"\necho " "\n\n# git alias\nalias gs="git status"\nalias gsm="git summary"\nalias ga=\'git add\'\nalias gd=\'git diff\'\nalias gf=\'git fetch\'\nalias grv=\'git remote -v\'\nalias grb=\'git rebase\'\nalias gbr=\'git branch\'\nalias gpl="git pull"\nalias gps="git push"\nalias gco="git checkout"\nalias gl="git log"\nalias gc="git commit -m"\nalias gcm="git commit -m"\nalias gm="git merge"\nalias git=\'LANG=en_US git\'\n\n# alias for push icode\nalias nrp=\'npm run push\'\n\n# remove user host and pc name\nDEFAULT_USER=$USER\nsource ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh\n')),(0,a.kt)("p",null,"\u5176\u4ed6\u7684\u770b\u770b\u8fd9\u4e2a\u5427 ",(0,a.kt)("a",{parentName:"p",href:"https://juejin.im/post/6844904178075058189"},(0,a.kt)("inlineCode",{parentName:"a"},"here"))))}h.isMDXComponent=!0},91401:function(e,n,t){n.Z=t.p+"assets/images/config-fonts-e49025b410029a90ec4be6cdaf981493.png"},96947:function(e,n,t){n.Z=t.p+"assets/images/default-terminal-3b7494d6ef04a3a7192994383785797c.png"},96881:function(e,n,t){n.Z=t.p+"assets/images/fbi-wraning-87afc3e912134e4bba27b32f7587c5b6.png"},75477:function(e,n,t){n.Z=t.p+"assets/images/install-fonts-e761849a77e3923024c79ad154708125.png"},42019:function(e,n,t){n.Z=t.p+"assets/images/iterm2-status-bar-config-460bc175f3a62fc37237725282780b8d.png"},88799:function(e,n,t){n.Z=t.p+"assets/images/keys-options-config-47793054cd1c795c4086655cb57dfe7c.png"},42974:function(e,n,t){n.Z=t.p+"assets/images/no-fonts-08739f2756872a12175d33bfeb777fe3.png"},17506:function(e,n,t){n.Z=t.p+"assets/images/options-jump-804294e637b30752418f233204a9a0e8.gif"},26553:function(e,n,t){n.Z=t.p+"assets/images/status-bar-config-7b389f578f8602d4375f687749016ae2.png"},79482:function(e,n,t){n.Z=t.p+"assets/images/status-bar-c27149ce7d10c3b7a71b074f3e63cff7.png"},79793:function(e,n,t){n.Z=t.p+"assets/images/vim-mouse-scroll-aa9b8ecbdf10c20337219b1663bc3eb4.png"},34316:function(e,n,t){n.Z=t.p+"assets/images/zsh-auth-tips-766ec1aad3b2e8853c15e37d78227f12.png"},98004:function(e,n,t){n.Z=t.p+"assets/images/zsh-autosuggestion1-849551cd99d6fbd46eb048dc710269d2.png"},84234:function(e,n,t){n.Z=t.p+"assets/images/zsh-autosuggestion2-cb4eaddb4b6deb31575f9988f51ec33a.png"}}]);