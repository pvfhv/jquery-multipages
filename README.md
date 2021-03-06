## 配置须知

#### 环境依赖：

- `node`
- `ruby`
- `python2.7`

#### 镜像配置

```bash
#ruby
gem sources --remove https://rubygems.org/
gem sources -a https://ruby.taobao.org/
```

#### 安装依赖包

```bash
gem install sass
npm install
```

#### 安装额外依赖

```bash
npm install package_name --save
npm install package_name --dev-save
```

## 启动调试环境

```bash
npm run start
npm run server
```

## js规范
```
采用国际通用规范airbnb,
采用eslint对js代码自动校验纠错
规范参考文档：https://github.com/airbnb/javascript
```
## scss规范
```
采用国际通用规范recommended-scss
采用stylelint对scss代码自动校验纠错
规范参考文档：https://stylelint.io/user-guide/rules/
```

## 提交规范
```
格式：<type>(<scope>): <subject>

type: 用于说明commit的类别，中允许使用以下7个标识。
      feat：新功能（feature）
      fix：修补bug
      docs：文档（documentation）
      style： 格式（不影响代码运行的变动）
      refactor：重构（即不是新增功能，也不是修改bug的代码变动）
      test：增加测试
      chore：构建过程或辅助工具的变动
scope: 用于说明commit的影响范围，比如store,reducer,view,根据不同位置来决定。
subject: 是commit的简短描述，不超过50个字符。
      1.以动词开头，使用第一人称现在时，比如change，而不是changed或changes
      2.第一个字母小写
      3.结尾不加句号（.）   
      
可以参考：http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html           
```