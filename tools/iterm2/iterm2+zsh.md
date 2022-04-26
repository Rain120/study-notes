## 版本

-   `Iterm2` **3.3.12**

## 修改默认终端

![default-terminal.png](./images/default-terminal.png)

```sh
chsh -s /bin/zsh
```

默认是配置

```sh
chsh -s /bin/bash
```

## Iterm2 配置

### Status Bar 配置

![iterm2-status-bar-config.png](./images/iterm2-status-bar-config.png)

### 命令左右跳转配置(option(⌥) ← / →)

![keys-options-config.png](./images/keys-options-config.png)

![options-jump.gif](./images/options-jump.gif)

[stackoverfloe QA](https://stackoverflow.com/questions/6205157/iterm-2-how-to-set-keyboard-shortcuts-to-jump-to-beginning-end-of-line)

### Vim 鼠标滚动

`preferences -> Advanced -> Mouse -> scroll(up / down)`

-   `down -> \j`

-   `up -> \k`

![vim-mouse-scroll.png](./images/vim-mouse-scroll.png)

## 安装 oh my zsh

```sh
# curl
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# wget
sh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"

# clone
git clone git@github.com:ohmyzsh/ohmyzsh.git ~/.oh-my-zsh
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
touch ~/.bash_profile
```

官方链接 👉👉👉 [`Here`](https://ohmyz.sh/#install)

## 安装字体

```sh
# clone
git clone https://github.com/powerline/fonts.git --depth=1
# install
cd fonts
./install.sh
# clean-up a bit
cd ..
rm -rf fonts
```

官方链接 👉👉👉 [`Here`](https://github.com/powerline/fonts#quick-installation) 或者使用它 [`nerd-fonts`](https://github.com/ryanoasis/nerd-fonts)。

安装字体前

![no-fonts.png](./images/no-fonts.png)

安装字体

![install-fonts.png](./images/install-fonts.png)

配置 & 安装字体后

![config-fonts.png](./images/config-fonts.png)

## 配置 Status Bar

![status-bar.png](./images/status-bar.png)

![status-bar-config.png](./images/status-bar-config.png)

## 下载插件

### 插件配置

```sh
# plugins=(extension1 extension2 ....)
plugins=(
  git
  z
  zsh-autosuggestions
  zsh-syntax-highlighting
)
```

### 提示插件: zsh-autosuggestions

![zsh-autosuggestion1.png](./images/zsh-autosuggestion1.png)

![zsh-autosuggestion2.png](./images/zsh-autosuggestion2.png)

```sh
cd ~/.oh-my-zsh/custom/plugins/
git clone https://github.com/zsh-users/zsh-autosuggestions

```

## 高亮插件: zsh-syntax-highlighting

![zsh-autosuggestion2.png](./images/zsh-autosuggestion2.png)

```sh
cd ~/.oh-my-zsh/custom/plugins/
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git
```

高亮插件需要保证插件在最后面，然后在`.zshrc` 的最下面配置这个，保证生效

```sh
source ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```

## `Enable` 配置文件

```sh
source ~/.zshrc
```

## 去除 oh my zsh 提示

![zsh-auth-tips.png](./images/zsh-auth-tips.png)

### 方法 1

```sh
chmod 755 /usr/local/share/zsh
chmod 755 /usr/local/share/zsh/site-functions
```

看提示告诉我们那个文件没有权限，给他加上即可

### 方法 2

```sh
# .zshrc 第一行
ZSH_DISABLE_COMPFIX="true"
```

## FBI Warning

> 装逼专用，但是真的好无聊的，不建议

![fbi-wraning.png](./images/fbi-wraning.png)

```sh
# .zshrc 新增内容
# FBI Warning
export PATH="$PATH:$HOME/.rvm/bin" # Add RVM to PATH for scripting

_COLUMNS=$(tput cols)
_MESSAGE=" FBI Warining "
y=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))
spaces=$(printf "%-${y}s" " ")

echo " "
echo -e "${spaces}\033[41;37;5m FBI WARNING \033[0m"
echo " "
_COLUMNS=$(tput cols)
_MESSAGE="Ferderal Law provides severe civil and criminal penalties for"
y=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))
spaces=$(printf "%-${y}s" " ")
echo -e "${spaces}${_MESSAGE}"

_COLUMNS=$(tput cols)
_MESSAGE="the unauthorized reproduction, distribution, or exhibition of"
y=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))
spaces=$(printf "%-${y}s" " ")
echo -e "${spaces}${_MESSAGE}"

_COLUMNS=$(tput cols)
_MESSAGE="copyrighted motion pictures (Title 17, United States Code,"
y=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))
spaces=$(printf "%-${y}s" " ")
echo -e "${spaces}${_MESSAGE}"

_COLUMNS=$(tput cols)
_MESSAGE="Sections 501 and 508). The Federal Bureau of Investigation"
y=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))
spaces=$(printf "%-${y}s" " ")
echo -e "${spaces}${_MESSAGE}"

_COLUMNS=$(tput cols)
_MESSAGE="investigates allegations of criminal copyright infringement"
y=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))
spaces=$(printf "%-${y}s" " ")
echo -e "${spaces}${_MESSAGE}"

_COLUMNS=$(tput cols)
_MESSAGE="(Title 17, United States Code, Section 506)."
y=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))
spaces=$(printf "%-${y}s" " ")
echo -e "${spaces}${_MESSAGE}"
echo " "
```

## 全部配置

`.zshrc`

```sh
ZSH_DISABLE_COMPFIX="true"
# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="$HOME/.oh-my-zsh"

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
# ZSH_THEME="robbyrussell"
ZSH_THEME="agnoster"
# ZSH_THEME="powerlevel9k/powerlevel9k"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in ~/.oh-my-zsh/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to automatically update without prompting.
# DISABLE_UPDATE_PROMPT="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS=true

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in ~/.oh-my-zsh/plugins/*
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(
  git
  z
  zsh-autosuggestions
  zsh-syntax-highlighting
)

source $ZSH/oh-my-zsh.sh

# User configuration
# 如果有需要的话可以创建一个 .bash_profile 配置文件
# source ~/.bash_profile

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

# git alias
alias gs="git status"
alias gsm="git summary"
alias ga='git add'
alias gd='git diff'
alias gf='git fetch'
alias grv='git remote -v'
alias grb='git rebase'
alias gbr='git branch'
alias gpl="git pull"
alias gps="git push"
alias gco="git checkout"
alias gl="git log"
alias gc="git commit -m"
alias gcm="git commit -m"
alias gm="git merge"
alias git='LANG=en_US git'

# alias for push icode
alias i='pnpm i'
alias b='pnpm build'
alias c='code .'
alias d='pnpm dev'
alias cls='clear'

# remove user host and pc name
DEFAULT_USER=$USER

source ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```

其他的看看这个吧 [`here`](https://juejin.im/post/6844904178075058189)
