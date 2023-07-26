# Git
作者：晓

发布时间：2023/07/26
## 远程

> 远程存储库包含了您本地没有的工作内容

![image-20230622174438782](/public/images/git/image-20230622174438782.png)

出现错误的主要原因是gitee中的README.md文件不在本地代码目录中

```shell
git pull --rebase origin master
```

然后就可以执行

```sh
git push origin master #进行上传远程仓库
```

## readme图片

> readme文件中图片显示不出相

解决办法：

```shell
./public/images/image-20230622134525909.png #路径必须是相对路径，/必须要这样写，反了不行
```



# Git

git是一种<font style='background-color: rgb(246, 246, 246);border-color: transparent;color: red;'>源码管理系统</font>（source code management，缩写为SCM）。它对当前文件`提供版本管理功能`，核心思想是对当前文件建立一个对象数据库（object database），将历史版本信息存放在这个数据库中

## 版本控制

版本控制(Revision control )是一种在开发的过程中用于管理我们对文件、目录或工程等内容的修改历史，方便查看更改历史记录，备份以便恢复以前的版本的软件工程技术。

- 实现跨区域多人协同开发

- 追踪和记载一个或者多个文件的历史记录
- 组织和保护源代码和文档
- 统计工作量
- 并行开发、提高开发效率
- 跟踪记录整个软件的开发过程
- 减轻开发人员的负担，节省时间，同时降低人为错误

## 常见的版本控制工具

- Git：分布式版本控制工具，由Linus Torvalds开发，广泛应用于开源软件项目。
- SVN(Subversion)：集中式版本控制工具，与CVS有类似的功能和操作方式，但比CVS更加先进。
- CVS(Concurrent Versions System)：集中式版本控制工具，常用于开发大型软件和多人合作开发。
- VSS(Microsoft Visual SourceSafe)：集中式版本控制工具，常用于个人或小型团队的软件开发中。
- TFS(Team Foundation Server)：Microsoft推出的集成式软件开发工具，包括版本控制、缺陷跟踪、测试等功能。
- Visual Studio Online：云端版本控制工具，包含Git和TFVC两种版本控制方式，提供完整的软件开发工具链和集成式开发环境。

## 版本控制分类

#### 本地版本控制

记录文件每次的更新，可以对每个版本做一个快照，或是记录补丁文件，适合个人用，如RCS。

![image-20230602205009397](/public/images/git/image-20230602205009397.png)

#### 集中版本控制(SVN)

所有的版本数据都保存在服务器上，协同开发者从服务器上同步更新或上传自己的修改

![image-20230602205454129](/public/images/git/image-20230602205454129.png)

所有的版本数据都存在服务器上，用户的本地只有自己以前所同步的版本，如果不连网的话，用户就看不到历史版本，也无法切换版本验证问题，或在不同分支工作。而且，所有数据都保存在单一的服务器上，有很大的风险这个服务器会损坏，这样就会丢失所有的数据，当然可以定期备份。代表产品:SVN、CVS、VSS

#### 分布式版本控制(Git)

每个人都拥有全部的代码！避免的安全隐患

所有版本信息仓库全部同步到本地的每个用户，这样就可以在本地查看所有版本历史，可以离线在本地提交，只需在连网时push到相应的服务器或其他用户那里。由于每个用户那里保存的都是所有的版本数据，只要有一个用户的设备没有问题就可以恢复所有的数据，但这增加了本地存储空间的占用。

![image-20230602210143705](/public/images/git/image-20230602210143705.png)

## Git与SVN的区别

1. 分布式 vs 集中式：**Git**是一种分布式版本控制工具，<font style='background-color: rgb(246, 246, 246);border-color: transparent;color: red;'>每个开发者都拥有完整的代码副本</font>，可以在本地独立进行开发、测试和提交，显得更加灵活和高效。而**SVN**是一种集中式版本控制工具，需要中央服务器作为代码存储和管理的中心，开发者则基于中央服务器进行开发工作。
2. 分支管理：**Git**的分支管理功能非常强大，<font style='background-color: rgb(246, 246, 246);border-color: transparent;color: red;'>易于创建和合并分支，支持多个分支同时存在</font>，可以在不干扰其他分支的情况下进行开发和测试等操作。而**SVN**对`分支管理的支持相对较弱`，分支的创建和合并需要复杂的合并操作和代码冲突的解决。
3. 性能：由于**Git**是一种分布式版本控制工具，<font style='background-color: rgb(246, 246, 246);border-color: transparent;color: red;'>每个开发者都拥有本地的代码副本</font>，所以在本地进行版本控制操作的速度非常快，而**SVN**需要`依赖中央服务器`，因此操作速度较慢。
4. 整体设计：**Git**的设计理念是快速、简洁，并且易于扩展和定制。而**SVN**是比较早期的版本控制工具，设计理念较为传统，没有像Git那样简洁、高效的特点。

# 启动Git

**Git Bash** : Unix与Linux风格的命令行，使用最多，推荐最多
**Git CMD** : Windows风格的命令行
**Git GUI**:图形界面的Git，尽量先熟悉常用命令

# Git环境配置

#### 查看配置 

`git config -l`

![image-20230602215658508](/public/images/git/image-20230602215658508.png)

查看不同级别的配置文件:

```bash
#查看系统config
git config --system --list
#查看当前用户（global）配置
git config --global --list
```

#### Git相关的配置文件

- Git\etc\gitconfig ：Git安装目录下的gitconfig  --system

![image-20230602221943985](/public/images/git/image-20230602221943985.png)

- C:lUsers\Administratori .gItconfig只适用于当前登录用户的配置--global	全局

​		可以直接编辑配置文件，通过命令设置后会响应到这里。

![image-20230602221351499](/public/images/git/image-20230602221351499.png)





#### 设置用户名与邮箱

必须设置用户名称和e-mail地址。因为每次Git提交都会使用该信息。它被永远的嵌入到提交中:

```bash
git config --global user.name bbskoor	#名称
git config --global user.email 2351631135@qq.com	#邮箱
```

注：如果在一个特定的项目中使用不同的名称或e-mail地址，可以在该项目中运行该命令而不加`--global`（全局配置）选项，不加为单独的一个项目配置

# Git的基本核心

#### 工作区

Git本地有三个工作区域：

- 工作目录( Working Directory )
- 暂存区(Stage/Index)
- 资源库(Repository或Git Directory)

如果在加上远程的git仓库(Remote Directory)就可以分为四个工作区域。文件在这四个区域之间的转换关系如下

![image-20230602222916514](/public/images/git/image-20230602222916514.png)

- **Workspace**：工作区，就是平时存放项目代码的地方
- **Index / Stage**：暂存区，用于临时存放的改动，事实上它只是一个文件，保存即将提交到文件列表信息
- **Repository** ：仓库区（或本地仓库），就是安全存放数据的位置，这里面有你提交到所有版本的数据。其中HEAD指向最新放入仓库的版本
- **Remote**：远程仓库，托管代码的服务器，可以简单的认为是你项目组中的一台电脑用于远程数据交换

![image-20230603210828530](/public/images/git/image-20230603210828530.png)

![image-20230602224211993](/public/images/git/image-20230602224211993.png)

**Directory**：使用Git管理的一个目录，也就是一个仓库，包含我们的工作空间和Git的管理空间。
**WorkSpace**：需要通过Git进行版本控制的目录和文件，这些目录和文件组成了工作空间。.git:存放Git管理信息的目录，初始化仓库的时候自动创建。
**Index/Stage**：暂存区，或者叫待提交更新区，在提交进入repo之前，我们可以把所有的更新放在暂存区。
**Local Repo** ：本地仓库，一个存放在本地的版本库;HEAD会只是当前的开发分支( branch )。
**Stash**：隐藏，是一个工作状态保存栈，用于保存/恢复WorkSpace中的临时状态。

#### 工作流程
git的工作流程一般是这样的:
1、在工作目录中添加、修改文件；
2、将需要进行版本管理的文件放入暂存区域；
3、将暂存区域的文件提交到git仓库；
因此，git管理的文件有三种状态︰

- 已修改（modified )
- 已暂存( staged )
- 已提交(committed)

# Git项目搭建

#### 创建工作目录与常用指令

工作目录( WorkSpace)一般就是希望Git帮助管理自己了文件夹，可以是自己项目的目录，也可以是一个空目录(一般不要使用中文名)。

经常使用的6个命令：

![image-20230603101527047](/public/images/git/image-20230603101527047.png)

- **Workspace**：工作区，就是平时存放项目代码的地方
- **Index / Stage**：暂存区，用于临时存放的改动，事实上它只是一个文件，保存即将提交到文件列表信息
- **Repository** ：仓库区（或本地仓库），就是安全存放数据的位置，这里面有你提交到所有版本的数据。其中HEAD指向最新放入仓库的版本
- **Remote**：远程仓库，托管代码的服务器，可以简单的认为是你项目组中的一台电脑用于远程数据交换

#### 本地仓库搭建

创建本地仓库的方法有两种:

- 创建全新的仓库
- 克隆远程仓库

1、**创建全新的仓库**，需要用Git管理的项目的根目录执行︰

```bash
#在当前目录新建一个Git代码库
git init
#查看目前状态
git status
git status [filename]
#添加文件从工作区到暂存区
git add <文件名>
#从暂存区提交到代码仓库
git commit -m “提示信息”
#查看提交commit的信息
git log
#添加远程指针
git remote add origin https://github.com/try-git/try_git.git
#将本地的master分支推送到远程origin主机，-u参数表示记住对应关系，下次可以直接git push推送。
git push -u origin master
#将远程主机origin的代码取回本地，与本地的master分支合并
git pull origin master
#查看与上一次commit的区别
git diff HEAD
```

注：执行后可以看到，仅仅在项目目录多出了一个.git目录，关于版本等的所有信息都在这个目录里面。

#### 更新追加内容

```bash
git add 文件名
git push origin master	#直接更新远程仓库
```



2、**克隆远程仓库**，由于是将远程服务器上的仓库完全镜像一份至本地

```bash
#克隆一个项目和它的整个代码历史(版本信息)
git clone [ur1] https://gitee.com/kuangstudy/ openclass.git
```

#### 发布一个版本

在当前分支打上一个版本号

```bash
$ git tag -a [VERSION] -m "released [VERSION]"
$ git push origin [VERSION]
```

#### 提交修改后的代码

首先需要提交到缓存区

```bash
git add <file1> <file2> ...
```

第二步，使用`commit`命令提交已添加到暂存区的修改

```bash
git commit -m "commit  message"  #"commit message"是提交了说明信息
```

最后`push`将本地修改后的代码同步到远程仓库

```bash
git push origin <branch>
```

注：在**提交**远程**仓库后**了**缓存区**的**文件**，会被**清空**

#### 增加/删除(暂存区)

```bash
# 添加指定文件到暂存区
$ git add [file1] [file2] ...
# 添加指定目录到暂存区，包括子目录
$ git add [dir]
# 添加当前目录的所有文件到暂存区
$ git add .
# 删除工作区文件，并且将这次删除放入暂存区
$ git rm [file1] [file2] ...
# 停止追踪指定文件，但该文件会保留在工作区
$ git rm --cached [file]
# 改名文件，并且将这个改名放入暂存区
$ git mv [file-original] [file-renamed]
```

#### 代码提交

```bash
# 提交暂存区到仓库区
$ git commit -m [message]
# 提交暂存区的指定文件到仓库区
$ git commit [file1] [file2] ... -m [message]
# 提交工作区自上次commit之后的变化，直接到仓库区
$ git commit -a
# 提交时显示所有diff信息
$ git commit -v
# 使用一次新的commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次commit的提交信息
$ git commit --amend -m [message]
# 重做上一次commit，并包括指定文件的新变化
$ git commit --amend <file1> <file2> ...
```

#### 分支

```bash
# 列出所有本地分支
$ git branch
# 列出所有远程分支
$ git branch -r
# 列出所有本地分支和远程分支
$ git branch -a
# 新建一个分支，但依然停留在当前分支
$ git branch [branch-name]
# 新建一个分支，并切换到该分支
$ git checkout -b [branch]
# 新建一个分支，指向指定commit
$ git branch [branch] [commit]
# 新建一个分支，与指定的远程分支建立追踪关系
$ git branch --track [branch] [remote-branch]
# 切换到指定分支，并更新工作区
$ git checkout [branch-name]
# 建立追踪关系，在现有分支与指定的远程分支之间
$ git branch --set-upstream [branch] [remote-branch]
# 合并指定分支到当前分支
$ git merge [branch]
# 选择一个commit，合并进当前分支
$ git cherry-pick [commit]
# 删除分支
$ git branch -d [branch-name]
# 删除远程分支
$ git push origin --delete <branch-name>
$ git branch -dr <remote/branch>
```

#### 标签

```bash
# 列出所有tag
$ git tag
# 新建一个tag在当前commit
$ git tag [tag]
# 新建一个tag在指定commit
$ git tag [tag] [commit]
$ git tag v0.9 f52c633
# 查看tag信息
$ git show [tag]
# 提交指定tag
$ git push [remote] [tag]
# 提交所有tag
$ git push [remote] --tags
# 新建一个分支，指向某个tag
$ git checkout -b [branch] [tag]
```

#### 查看信息

```bash
# 显示有变更的文件
$ git status
# 显示当前分支的版本历史
$ git log
# 显示commit历史，以及每次commit发生变更的文件
$ git log --stat
# 显示某个文件的版本历史，包括文件改名
$ git log --follow [file]
$ git whatchanged [file]
# 显示指定文件相关的每一次diff
$ git log -p [file]
# 显示指定文件是什么人在什么时间修改过
$ git blame [file]
# 显示暂存区和工作区的差异
$ git diff
# 显示暂存区和上一个commit的差异
$ git diff --cached [<file>]
# 显示工作区与当前分支最新commit之间的差异
$ git diff HEAD
# 显示两次提交之间的差异
$ git diff [first-branch]...[second-branch]
# 显示某次提交的元数据和内容变化
$ git show [commit]
# 显示某次提交发生变化的文件
$ git show --name-only [commit]
# 显示某次提交时，某个文件的内容
$ git show [commit]:[filename]
# 显示当前分支的最近几次提交
$ git reflog
```

#### 远程同步

```bash
# 下载远程仓库的所有变动
$ git fetch [remote]
# 显示所有远程仓库
$ git remote -v
# 显示某个远程仓库的信息
$ git remote show [remote]
# 增加一个新的远程仓库，并命名
$ git remote add [shortname] [url]
# 取回远程仓库的变化，并与本地分支合并
$ git pull [remote] [branch]
# 上传本地指定分支到远程仓库
$ git push [remote] [branch]
# 强行推送当前分支到远程仓库，即使有冲突
$ git push [remote] --force
# 推送所有分支到远程仓库
$ git push [remote] --all
```

#### 撤销

```bash
# 恢复暂存区的指定文件到工作区
$ git checkout [file]
# 恢复某个commit的指定文件到工作区
$ git checkout [commit] [file]
# 恢复上一个commit的所有文件到工作区
$ git checkout .
# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
$ git reset [file]
# 重置暂存区与工作区，与上一次commit保持一致
$ git reset --hard
# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
$ git reset [commit]
# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
$ git reset --hard [commit]
# 重置当前HEAD为指定commit，但保持暂存区和工作区不变
$ git reset --keep [commit]
# 新建一个commit，用来撤销指定commit
# 后者的所有变化都将被前者抵消，并且应用到当前分支
$ git revert [commit]
```

#### 生成压缩包

```bash
# 生成一个可供发布的压缩包
# git archive
```



# Git的文件操作

#### 文件4种状态

版本控制就是对文件的版本控制，要对文件进行修改、提交等操作，首先要知道文件当前在什么状态，不然可能会提交了现在还不想提交的文件，或者要提交的文件没提交上。

Untracked：未跟踪,此文件在文件夹中，,但并没有加入到git库,不参与版本控制.通过<font style='background-color: rgb(246, 246, 246);border-color: transparent;color: red;'>git add</font>状态变为<font style='background-color: rgb(246, 246, 246);border-color: transparent;color: red;'>staged</font>
Unmodify：文件已经入库,未修改,即版本库中的文件快照内容与文件夹中完全一致.这种类型的文件有两种去处,如果它被修改,而变为<font style='background-color: rgb(246, 246, 246);border-color: transparent;color: red;'>Modified </font>.如果使用<font style='background-color: rgb(246, 246, 246);border-color: transparent;color: red;'>git rm</font>移出版本库,则成为<font style='background-color: rgb(246, 246, 246);border-color: transparent;color: red;'>untracked</font>文件
Modified：文件已修改,仅仅是修改,并没有进行其他的操作.这个文件也有两个去处,通过<font style='background-color: rgb(246, 246, 246);border-color: transparent;color: red;'>git add</font>可进入暂仔<font style='background-color: rgb(246, 246, 246);border-color: transparent;color: red;'>staged</font> 状态,使用<font style='background-color: rgb(246, 246, 246);border-color: transparent;color: red;'>git checkout</font>则丢弃修改过,返回到 <font style='background-color: rgb(246, 246, 246);border-color: transparent;color: red;'>unmodify</font>状态,这个<font style='background-color: rgb(246, 246, 246);border-color: transparent;color: red;'>git checkout</font>即从库中取出文件,覆盖当前修改!
Staged：暂存状态. 执行<font style='background-color: rgb(246, 246, 246);border-color: transparent;color: red;'>git commit</font>则将修改同步到库中,这时库中的文件和本地文件又变为一致,文件为<font style='background-color: rgb(246, 246, 246);border-color: transparent;color: red;'>unmodify</font>状态.执行<font style='background-color: rgb(246, 246, 246);border-color: transparent;color: red;'>git reset HEAD filename</font>取消暂存,文件状态为<font style='background-color: rgb(246, 246, 246);border-color: transparent;color: red;'>Modified</font>

#### 忽略特殊文件

有些时候我们不想把某些文件纳入版本控制中，比如数据库文件，临时文件，设计文件等在主目录下建立"**.gitignore**"文件，此文件有如下规则∶

1. 忽略文件中的空行或以井号(#）)开始的行将会被忽略。
2. 可以使用L inux通配符。例如∶星号(*)代表任意多个字符，问号(?)代表一个字符，方括号([abc])代表可选字符范围，大括号( {string1,string2,.…})代表可选的字符串等。
3. 如果名称的最前面有一个感叹号(!)，表示例外规则，将不被忽略。
4. 如果**名称的最前面**是一个路径分隔符(/ )，表示要忽略的文件在此目录下，而子目录中的文件不忽略。
5. 如果**名称的最后面**是一个路径分隔符(/)，表示要忽略的是此目录下该名称的子目录，而非文件（默认文件或目录都忽略）。

```bash
#为注释
*.txt				#忽略所有.txt结尾的文件,这样的话上传就不会被选中
!lib.txt		#但lib.txt除外
/temp				#仅忽略项目根目录下的TODO文件,不包括其它目录temp
build/			#忽略build/目录下的所有文件
doc/* .txt	#会忽略doc/notes.txt但不包括doc / server/arch.txt

```

# gitee

####  添加公钥

```bash
ssh-keygen -t rsa
```

![image-20230603182407098](/public/images/git/image-20230603182407098.png)

以上执行为以后就生成了如下文件

![image-20230603182938054](/public/images/git/image-20230603182938054.png)

将id_rsa.pub里面生成的公钥：粘贴到公钥里面

![image-20230603182813501](/public/images/git/image-20230603182813501.png)

#### 开源许可证

常用了GPL-2.0、GPL-3.0等

![image-20230603184721329](/public/images/git/image-20230603184721329.png)

# Git分支

#### 创建/删除分支

每次提交，Git都把它们串成一条时间线，这条时间线就是一个分支

在Git里，这个分支叫主分支，即`master`分支。`HEAD`严格来说不是指向提交，而是指向`master`，`master`才是指向提交的，所以，`HEAD`指向的就是当前分支。

`master`分支是一条线，Git用`master`指向最新的提交，再用`HEAD`指向`master`，就能确定当前分支，以及当前分支的提交点

![image-20230603215315784](/public/images/git/image-20230603215315784.png)

每次提交，`master`分支都会向前移动一步，这样，随着你不断提交，`master`分支的线也越来越长

Git新建了一个指针叫`dev`，指向`master`相同的提交，再把`HEAD`指向`dev`，就表示当前分支在`dev`上

![image-20230603215610459](/public/images/git/image-20230603215610459.png)

it创建一个分支很快，因为除了增加一个`dev`指针，改改`HEAD`的指向，工作区的文件都没有任何变化！

不过，从现在开始，对工作区的修改和提交就是针对`dev`分支了，比如新提交一次后，`dev`指针往前移动一步，而`master`指针不变

![image-20230603215741368](/public/images/git/image-20230603215741368.png)

在`dev`上的工作完成了，就可以把`dev`<font style='background-color: rgb(246, 246, 246);border-color: transparent;color: red;'>合并</font>到`master`上。Git怎么合并呢？最简单的方法，就是直接把`master`指向`dev`的当前提交，就完成了<font style='background-color: rgb(246, 246, 246);border-color: transparent;color: red;'>合并</font>

![image-20230603215821251](/public/images/git/image-20230603215821251.png)

合并完分支后，甚至可以删除`dev`分支。删除`dev`分支就是把`dev`指针给删掉，删掉后，我们就剩下了一条`master`分支

![image-20230603215929363](/public/images/git/image-20230603215929363.png)

首先，我们创建`dev`分支，然后切换到`dev`分支：

```bash
$ git checkout -b dev
Switched to a new branch 'dev'
```

`git checkout`命令加上`-b`参数表示创建并切换，相当于以下两条命令：

```bash
$ git branch dev$ git checkout dev
Switched to branch 'dev'
```

然后，用`git branch`命令查看当前分支：

```bash
$ git branch
* dev  
master
```

`git branch`命令会列出所有分支，当前分支前面会标一个`*`号。

然后，我们就可以在`dev`分支上正常提交，比如对readme.txt做个修改，加上一行：

```bash
Creating a new branch is quick.
```

然后提交：

```bash
$ git add readme.txt 
$ git commit -m "branch test"
[dev fec145a] branch test
1 file changed, 1 insertion(+)
```

现在，`dev`分支的工作完成，我们就可以切换回`master`分支：

```bash
$ git checkout master
Switched to branch 'master'
```

切换回`master`分支后，再查看一个readme.txt文件，刚才添加的内容不见了！因为那个提交是在`dev`分支上，而`master`分支此刻的提交点并没有变：

![image-20230603220446076](/public/images/git/image-20230603220446076.png)

现在，我们把`dev`分支的工作成果合并到`master`分支上：

```bash
$ git merge dev
Updating d17efd8..fec145a
Fast-forward readme.txt |    1 + 
1 file changed, 1 insertion(+)
```

`git merge`命令用于合并指定分支到当前分支。合并后，再查看readme.txt的内容，就可以看到，和`dev`分支的最新提交是完全一样的。

注意到上面的`Fast-forward`信息，Git告诉我们，这次合并是“快进模式”，也就是直接把`master`指向`dev`的当前提交，所以合并速度非常快。

当然，也不是每次合并都能`Fast-forward`，我们后面会讲其他方式的合并。

合并完成后，就可以放心地删除`dev`分支了：

```bash
$ git branch -d dev
Deleted branch dev (was fec145a).
```

删除后，查看`branch`，就只剩下`master`分支了：

```bash
$ git branch
* master
```

- 查看分支：`git branch`
- 创建分支：`git branch <name>`
- 切换分支：`git checkout <name>`
- 创建+切换分支：`git checkout -b <name>`
- 合并某分支到当前分支：`git merge <name>`
- 删除分支：`git branch -d <name>`

#### 解决分支冲突

创建一个新的分支feature1

```bash
git checkout -b feature1	#创建分支并切换到feature1分支
#之后修改文件中的内容
$ git add readme.txt 					#加到缓存里面
$ git commit -m "AND simple"  #之后提交
```

```bash
$ git checkout master #切换到主分支
#之后修改文件中的内容（与dev修改了不一样）
$ git add readme.txt 					#加到缓存里面
$ git commit -m "AND simple"  #之后提交
```

![image-20230603224246071](/public/images/git/image-20230603224246071.png)

最后，`master`分支和`feature1`分支各自都分别有新的提交，这样就合并就会发生冲突

```bash
$ git merge feature1 #合并之后会出问题，必须手动解决
$ git status	#会告诉我们冲突了文件
```

可以查看更改文件了内容，发现里面有`<<<<<<<`，`=======`，`>>>>>>>`标记出不同分支的内容

最后修改后保存（解决合并问题）

![image-20230603224649760](/public/images/git/image-20230603224649760.png)

`git log`也可以看到分支的合并情况

```bash
$ git log --graph --pretty=oneline --abbrev-commit
$ git branch -d feature1	#删除分支feature1
```

#### 分支管理策略

Git会用`Fast forward`模式，但这种模式下，删除分支后，会丢掉分支信息

要强制禁用`Fast forward`模式，Git就会在merge时生成一个新的commit，这样，从分支历史上就可以看出分支信息

首先创建一个并切换`dev`分支

```bash
$ git checkout -b dev
```

修改readme.txt文件，并提交一个新的commit

```bash
$ git add readme.txt 
$ git commit -m "add merge"
```

切换回`master`

```bash
$ git checkout master
```

准备合并`dev`分支，请注意`—no-ff`参数，表示禁用`Fast forward`

本次合并要创建一个新的commit，所以加上`-m`参数，把commit描述写进去

```bash
$ git merge --no-ff -m "merge with no-ff" dev
```

合并后，我们用`git log`看看分支历史

```bash
$ git log --graph --pretty=oneline --abbrev-commit
```

不使用`Fast forward`模式，merge后就像这样

![image-20230603232254196](/public/images/git/image-20230603232254196.png)

总结：一般不在，`master`(稳定)分支干活，通常都在分支上干活（不稳定），最后发布一个版本了时间就用`master`进行发布

你和你的小伙伴们每个人都在`dev`分支上干活，每个人都有自己的分支，**时不时地往`dev`分支上合并就可以了**

![image-20230603232719592](/public/images/git/image-20230603232719592.png)

#### 更新新功能分支

添加一个新功能时，你肯定不希望因为一些实验性质的代码，把主分支搞乱了，所以，每添加一个新功能，最好新建一个feature分支，在上面开发，完成后，合并，最后，删除该feature分支。

```bash
首先，创建一个分支并切换到分支中去
$ git checkout -b feature-vulcan
#完成开发之后：
$ git add update.css
$ git status
$ git commit -m "add feature vulcan"
#之后，切回到dev中：
$ git checkout dev
#如果，新功能不需要了（必须删除）：
$ git branch -d feature-vulcan
#Git友情提醒，feature-vulcan分支还没有被合并，如果删除，将丢失掉修改，如果要强行删除，需要使用命令git branch -D feature-vulcan。
#强行删除：
$ git branch -D feature-vulcan
Deleted branch feature-vulcan (was 756d4af).
```

#### bug分支

每个bug都可以通过一个新的临时分支来修复，修复后，合并分支，然后将临时分支删除

现在想创建一个分支`issue-101`来修复它，但是，当前正在`dev`上进行的工作还没有提交

只工作到了一半，但是必须快速修复bug。

Git提供了一个`stash`功能，可以把当前工作现场“储藏”起来，等以后恢复现场后继续工作

```bash
$ git stash
Saved working directory and index state WIP on dev: 6224937 add merge
HEAD is now at 6224937 add merge
```

`git status`查看工作区，就是干净的（除非有没有被Git管理的文件），因此可以放心地创建分支来修复bug。

首先创建一个临时分支上修复bug，如果要在`master`上修复，就在`master`上创建临时分支

```bash
$ git checkout master
$ git checkout -b issue-101
```

现在修复bug，需要更改，然后提交

```bash
$ git add readme.txt 
$ git commit -m "fix bug 101"
```

之后，切换到`master`分支上，完成合并，最后删除`issue-101`分支

```bash
$ git checkout master
$ git merge --no-ff -m "merged bug fix 101" issue-101
$ git branch -d issue-101
```

然后，返回`dev`分支

```bash
$ git checkout dev
$ git status
# On branch dev
$ git stash list		#查看工作区现场位置
```

Git把stash内容存在某个地方`git stash apply`，stash内容并不删除，需要用`git stash drop`来删除

另一种方式是用`git stash pop`，恢复的同时把stash内容也删了

```bash
$ git stash pop
# On branch dev
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#       new file:   hello.py
#
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#       modified:   readme.txt
#
Dropped refs/stash@{0} (f624f8e5f082f2df2bed8a4e09c12fd2943bdd40)
```

最后，`git stash list`查看，就看不到任何stash内容了：

```bash
$ git stash list
```

先用`git stash list`查看，然后恢复指定的stash，用命令：

```bash
$ git stash apply stash@{0}
```

#### 多人协作



```bash
#显示了可以抓取和推送的origin的地址。如果没有推送权限，就看不到push的地址
git remote -v 
```

- `master`分支是主分支，因此要时刻与远程同步；
- `dev`分支是开发分支，团队所有成员都需要在上面工作，所以也需要与远程同步；
- bug分支只用于在本地修复bug，就没必要推到远程了，除非老板要看看你每周到底修复了几个bug；
- feature分支是否推到远程，取决于你是否和你的小伙伴合作在上面开发。

多人协作时，大家都会往`master`和`dev`分支上推送各自的修改。

当你的同事从远程库`clone时`，默认情况下，你的同事只能看到本地的`master`分支。不信可以用`git branch`命令看看

你的同事要在`dev`分支上开发，就必须创建远程`origin`的`dev`分支到本地，于是他用这个命令创建本地`dev`分支

```bash
$ git checkout -b dev origin/dev
```

他就可以在`dev`上继续修改，然后，时不时地把`dev`分支`push`到远程

同事已经向`origin/dev`分支推送了他的提交，而碰巧你也对同样的文件作了修改，并试图推送

```bash
$ git add hello.py 
$ git commit -m "add coding: utf-8"
$ git push origin dev
```

推送失败，因为你的同事的最新提交和你试图推送的提交有冲突，解决办法也很简单，Git已经提示我们，先用`git pull`把最新的提交从`origin/dev`抓下来，然后，在本地合并，解决冲突，再推送

```bash
$ git pull
remote: Counting objects: 5, done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 0), reused 3 (delta 0)
Unpacking objects: 100% (3/3), done.
From github.com:michaelliao/learngit
   fc38031..291bea8  dev        -> origin/dev
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details
    git pull <remote> <branch>
If you wish to set tracking information for this branch you can do so with:
    git branch --set-upstream dev origin/<branch>
```

`git pull`也失败了，原因是没有指定本地`dev`分支与远程`origin/dev`分支的链接，根据提示，设置`dev`和`origin/dev`的链接：

```bash
$ git branch --set-upstream dev origin/devBranch dev set up to track remote branch dev from origin.
```

再pull：

```bash
$ git pullAuto-merging hello.pyCONFLICT (content): Merge conflict in hello.pyAutomatic merge failed; fix conflicts and then commit the result.
```

这回`git pull`成功，但是合并有冲突，需要手动解决，解决的方法和分支管理中的[解决冲突](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001375840202368c74be33fbd884e71b570f2cc3c0d1dcf000)完全一样。解决后，提交，再push：



```bash
$ git commit -m "merge & fix hello.py"
[dev adca45d] merge & fix hello.py
$ git push origin dev
Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (5/5), done.
Writing objects: 100% (6/6), 747 bytes, done.
Total 6 (delta 0), reused 0 (delta 0)
To git@github.com:michaelliao/learngit.git
   291bea8..adca45d  dev -> dev
```

因此，多人协作的工作模式通常是这样：

- 首先，可以试图用`gitpushoriginbranch-name`推送自己的修改；
- 如果推送失败，则因为远程分支比你的本地更新，需要先用`gitpull`试图合并；
- 如果合并有冲突，则解决冲突，并在本地提交；
- 没有冲突或者解决掉冲突后，再用`gitpushoriginbranch-name`推送就能成功！

如果`git pull`提示“no tracking information”，则说明本地分支和远程分支的链接关系没有创建，用命令`git branch —set-upstream branch-name origin/branch-name`

#### 变基(rebase)

多人在同一个分支上协作时，很容易出现冲突。即使没有冲突，后push的童鞋不得不先pull，在本地合并，然后才能push成功

每次合并再push后，分支变成了这样

```bash
$ git log --graph --pretty=oneline --abbrev-commit
* d1be385 (HEAD -> master, origin/master) init hello
*   e5e69f1 Merge branch 'dev'
|\  
| *   57c53ab (origin/dev, dev) fix env conflict
| |\  
| | * 7a5e5dd add env
| * | 7bd91f1 add new env
| |/  
* |   12a631b merged bug fix 101
|\ \  
| * | 4c805e2 fix bug 101
|/ /  
* |   e1e9c68 merge with no-ff
|\ \  
| |/  
| * f52c633 add merge
|/  
*   cf810e4 conflict fixed
```

在和远程分支同步后，我们对`hello.py`这个文件做了两次提交。用`git log`命令看看：

```bash
$ git log --graph --pretty=oneline --abbrev-commit
* 582d922 (HEAD -> master) add author
* 8875536 add comment
* d1be385 (origin/master) init hello
*   e5e69f1 Merge branch 'dev'
|\  
| *   57c53ab (origin/dev, dev) fix env conflict
| |\  
| | * 7a5e5dd add env
| * | 7bd91f1 add new env
...
```

注：Git用`(HEAD -> master)`和`(origin/master)`标识出当前分支的HEAD和远程origin的位置分别是`582d922 add author`和`d1be385 init hello`，本地分支比远程分支快两个提交

```bash
#尝试推送本地分支
$ git push origin master
#失败了，这说明有人先于我们推送了远程分支。按照经验，先pull一下
$ git pull
#再用git status看看状态
$ git status
#加上刚才合并的提交，现在我们本地分支比远程分支超前3个提交
#用git log看看
$ git log --graph --pretty=oneline --abbrev-commit
*   e0ea545 (HEAD -> master) Merge branch 'master' of github.com:michaelliao/learngit
|\  
| * f005ed4 (origin/master) set exit=1
* | 582d922 add author
* | 8875536 add comment
|/  
* d1be385 init hello
...
#这个时候，rebase就派上了用场。我们输入命令git rebase
$ git rebase
First, rewinding head to replay your work on top of it...
Applying: add comment
Using index info to reconstruct a base tree...
M    hello.py
Falling back to patching base and 3-way merge...
Auto-merging hello.py
Applying: add author
Using index info to reconstruct a base tree...
M    hello.py
Falling back to patching base and 3-way merge...
Auto-merging hello.py
#输出了一大堆操作
#再用git log看看
$ git log --graph --pretty=oneline --abbrev-commit
* 7e61ed4 (HEAD -> master) add author
* 3611cfe add comment
* f005ed4 (origin/master) set exit=1
* d1be385 init hello
...

```

Git把我们本地的提交“挪动”了位置，放到了`f005ed4 (origin/master) set exit=1`之后，这样，整个提交历史就成了一条直线。rebase操作前后，最终的提交内容是一致的，但是，我们本地的commit修改内容已经变化了，它们的修改不再基于`d1be385 init hello`，而是基于`f005ed4 (origin/master) set exit=1`，但最后的提交`7e61ed4`内容是一致的

注：缺点是本地的分叉提交已经被修改过了

最后，通过push操作把本地分支推送到远程

```bash
$ git push origin master
#再用git log看看效果：
$ git log --graph --pretty=oneline --abbrev-commit
* 7e61ed4 (HEAD -> master, origin/master) add author
* 3611cfe add comment
* f005ed4 set exit=1
* d1be385 init hello
...

```

- rebase操作可以把本地未push的分叉提交历史整理成直线；
- rebase的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比。

总结

1. 处理冲突。在 Rebase 过程中可能会出现冲突，需要手动解决。当出现冲突时，Git 会暂停 Rebase 操作，等待我们手动解决冲突，然后使用 `git add` 命令将解决结果添加到暂存区，最后使用 `git rebase --continue` 命令继续执行 Rebase 操作。
2. 完成 Rebase 操作。当 Rebase 操作完成后，我们可以使用 `git log` 命令查看分支历史记录，确认是否达到了预期的效果。

需要注意的是，Git Rebase 操作会改变分支历史记录，因此只应该在个人开发分支上或者确保没有其他人在进行相同分支操作的情况下使用。同时，在 Rebase 操作过程中可能出现冲突，需要手动解决，因此在操作之前最好先备份数据。

# 资源来自

本文档总结来自[廖雪峰]、[阮一峰]、b站[遇见狂神说]











