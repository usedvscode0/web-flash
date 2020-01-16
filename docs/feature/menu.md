# 菜单管理

菜单管理包含两部分：一个是左侧菜单树的维护，一个是页面操作功能（主要是按钮）的维护。
不管是左侧菜单还是按钮，都需要在角色中进行配置才能正常显示出来。

先看下菜单列表大致了解下菜单管理都维护哪些内容：

![menu](./img/menu.jpg)

## 左侧菜单维护
- 菜单维护基本上采用了两级菜单形式：如上图所示：第一级菜单为“系统管理”，“系统管理”中包含了“用户管理”、“角色管理”等多个二级菜单。
- 其中“系统管理”为虚拟菜单，点击“系统管理”并不会跳转到真实的页面而是展开其子菜单列表；所以虚拟菜单的请求地址应配置为“#”。
- “系统管理”下的子菜单，例如“业务日志”需要配置请求地址，比如配置为“/log”,点击“业务日志”会跳转到业务日志列表页面。
- 左侧菜单完全通过后台配置的菜单数据生成，因此配置要显示在左侧菜单树的菜单之前，先保证该菜单对应的页面已经开发好，否则配置好菜单自动生成路可能会失败导致页面显示异常。