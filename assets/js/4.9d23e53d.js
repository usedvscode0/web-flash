(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{117:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"消息中心"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#消息中心","aria-hidden":"true"}},[t._v("#")]),t._v(" 消息中心")]),t._v(" "),n("h2",{attrs:{id:"功能"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#功能","aria-hidden":"true"}},[t._v("#")]),t._v(" 功能")]),t._v(" "),n("p",[t._v("消息中心提供了发送短信和发送邮件的基础功能,并且提供了历史发送消息列表，内容如下：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("历史消息, 展示所有历史发送消息清单\n"),n("img",{attrs:{src:a(57),alt:"历史消息"}})])]),t._v(" "),n("li",[n("p",[t._v("消息模板 配置消息内容模板\n"),n("img",{attrs:{src:a(58),alt:"消息模板"}})])]),t._v(" "),n("li",[n("p",[t._v("消息发送者 配置具体的消息发送服务，比如系统默认内置了腾讯云的短信发送api作为短信发送服务，当然你可以配置自己的\n"),n("img",{attrs:{src:a(59),alt:"消息模板"}})])])]),t._v(" "),n("h2",{attrs:{id:"开发手册"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开发手册","aria-hidden":"true"}},[t._v("#")]),t._v(" 开发手册")]),t._v(" "),n("h3",{attrs:{id:"配置新的短信模板"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置新的短信模板","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置新的短信模板")]),t._v(" "),n("p",[t._v("比如用户注册的时候需要发送短信验证码，那么就需要配置短信模板，短信模板的关键内容有三个")]),t._v(" "),n("ul",[n("li",[t._v("短信编码，用于发送短信的时候做模板标识")]),t._v(" "),n("li",[t._v("内容，发送的短信内容模板")]),t._v(" "),n("li",[t._v("短信发送器，配置使用的短信发送服务（比如使用腾讯短信或者阿里短信等等之类）\n示例\n"),n("img",{attrs:{src:a(60),alt:"短信模板编辑"}})])]),t._v(" "),n("p",[t._v("配置完毕后就可以在适当的场景下调用发送短信：")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MessageService")]),t._v(" messageService"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//三个参数分别为短信模板编号,接收者手机号，短信内容中的参数，在该模板中及{1}对应的参数")]),t._v("\n messageService"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendSms")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"REGISTER_CODE"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"15021292929"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2322"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"新增短信发送器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新增短信发送器","aria-hidden":"true"}},[t._v("#")]),t._v(" 新增短信发送器")]),t._v(" "),n("p",[t._v("本系统默认内置了腾讯的发送短信服务，你只要更改下api相关配置即可使用。你也可能需要用其他的短信服务，那么就需要开发自己的短信发送器，步骤如下：")]),t._v(" "),n("ul",[n("li",[t._v("参考cn.enilu.flash.service.message.sms.tencent.TencentSmsSender 实现一个SmsSender")]),t._v(" "),n("li",[t._v("在消息发送者界面配置新的发送器，发送器名称为新增的类名（首字母小写）\n"),n("img",{attrs:{src:a(61),alt:"短信发送器编辑"}})]),t._v(" "),n("li",[t._v("然后在短信模板界面选择新增的短信发送器即可")])]),t._v(" "),n("h3",{attrs:{id:"配置邮件模板"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置邮件模板","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置邮件模板")]),t._v(" "),n("p",[t._v("邮件发送和短信一样，首先配置邮件模板，然后调用即可，一般情况下不会需要新增邮件发送器，默认的就可以用了；下面是调用示例：")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//发送简单邮件")]),t._v("\nmessageService"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendSimpleEmail")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EMAIL_TEST"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fromAccount@qq.com"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"toAccount@qq.com"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"简单模板邮件"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"张三"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"web-flash"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//发送html模板复杂邮件")]),t._v("\nmessageService"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendTplEmail")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EMAIL_HTML_TEMPLATE_TEST"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fromAccount@qq.com"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"toAccount@qq.com"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"html模板邮件"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Maps")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("newHashMap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userName"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"李四"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"appName"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WEB-FLASH"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//发送带附件的邮件")]),t._v("\nmessageService"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendTplEmail")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EMAIL_HTML_TEMPLATE_TEST"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fromAccount@qq.com"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"toAccount@qq.com"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"带附件的邮件"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"测试附件.txt"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileSystemResource")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("File")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d:\\\\test.txt"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Maps")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("newHashMap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userName"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"李四"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"appName"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WEB-FLASH"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("strong",[t._v("PS")]),t._v(" 这个功能大部分代码是用代码生成器生成的，如果你还没有用过，可以试试这个"),n("router-link",{attrs:{to:"/ecosystem/code-generator.html"}},[t._v("代码生成器")])],1)])},[],!1,null,null,null);s.default=e.exports},57:function(t,s,a){t.exports=a.p+"assets/img/message.80ecd7ba.jpg"},58:function(t,s,a){t.exports=a.p+"assets/img/message-template.d2e66bce.jpg"},59:function(t,s,a){t.exports=a.p+"assets/img/message-sender.7fdc7b10.jpg"},60:function(t,s,a){t.exports=a.p+"assets/img/message-template-add.a5d77aab.jpg"},61:function(t,s,a){t.exports=a.p+"assets/img/message-sender-add.5c4956b4.jpg"}}]);