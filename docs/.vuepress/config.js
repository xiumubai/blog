const htmlModules = require('./config/htmlModules.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: '朽木学社',
  description:
    'web前端技术博客,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,React,python,css3,html5,Node,git,github等技术文章。',
  // 主题配置
  themeConfig: {
    // 导航配置

    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/vlogo.png', // 导航栏logo
    repo: 'xiumubai/blog', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    editLinks: true, // 启用编辑
    editLinkText: '编辑',

    // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
    // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
    // pageButton: false, // 是否显示快捷翻页按钮，默认true

    sidebar: 'structuring',

    // bodyBgImg: '/img/bg.jpg',
    // bodyBgImgOpacity: '0.8',

    nav: [
      { text: '🏠 首页', link: '/' },
      {
        text: '🥇 前端系列教程',
        link: '/frontend/',
        items: [
          { text: '📗 《CSS 教程》', link: '/pages/c8f128/' },
          { text: '📗 《HTMl 教程》', link: '/pages/8309a5b876fc95e3/' },
          { text: '📗 《JavaScript教程》', link: '/pages/0796ba76b4b55368/' },
          { text: '📗 《ES6 教程》', link: '/es6/f344d070a1031ef7/' },
          { text: '📗 《TypeScript 教程》', link: '/pages/e05dce83e5129785/' },
          { text: '📗 《React 教程》', link: '/pages/5df969/' },
          { text: '📗 《Vue 教程》', link: '/pages/114158caa9e96df0/' },
          { text: '📗 《Webpack 教程》', link: '/webpack/course/' },
          { text: '📗 《算法与数据结构 教程》', link: '/leetcode/course/' },
        ],
      },

      {
        text: '🥈 前端面试',
        items: [
          { text: '📘 《面试题》', link: '/pages/d136a9/' },
          { text: '📘 《简历模板》', link: '/pages/c5cd3d/' },
          { text: '📘 《Hr问题系列》', link: '/pages/b1998f/' },
        ],
      },

      {
        text: '🔨 实用工具',
        items: [
          { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
          { text: '实用网站', link: '/pages/beb6c0bd8a66cea6/' },
          { text: '实用轮子', link: '/pages/47cf96wrewtwt565/' },
          { text: 'GitHub', link: '/pages/8292d8/' },
        ],
      },

      {
        text: '📚 个人随笔',
        link: '/pages/e85ea5/',
      },

      {
        text: '更多',
        items: [
          { text: '如何学习', link: '/pages/a6c062/' },
          { text: '友情链接', link: '/friends/' },
        ],
      },

      { text: '关于', link: '/about/' },
    ],

    // 是否打开
    // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
    author: {
      name: 'xiumubai', // 必需
      link: 'https://github.com/xiumubai', // 可选的
    },

    // 博主信息，显示在首页侧边栏
    blogger: {
      avatar: 'https://xiumubai.oss-cn-beijing.aliyuncs.com/me/weixin.png',
      name: 'Xiumubai',
      slogan: '朽木不雕难成才，知耻后勇凌云志',
    },

    // 社交图标，显示于博主信息栏和页脚栏。
    social: {
      icons: [
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/xiumubai',
        },
        {
          iconClass: 'icon-juejin',
          title: '掘金',
          link: 'https://juejin.cn/user/430664288573789',
        },
        {
          iconClass: 'icon-yuque',
          title: '语雀',
          link: 'https://www.yuque.com/xiumubai',
        },
      ],
    },

    // 页脚信息
    footer: {
      createYear: 2021, // 博客创建年份
      copyrightInfo:
        '朽木学社版权所有 | <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">京ICP备2022002793号</a>', // 博客版权信息，支持a标签
    },

    // 插入hmtl(广告)模块,公众号链接
    htmlModules,
  },

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'keywords',
        content:
          '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
      },
    ],
    ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证（你可以去掉）
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    [
      'script',
      {
        'data-ad-client': 'ca-pub-7828333725993554',
        async: 'async',
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      },
    ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
  ],

  // 插件配置
  plugins: [
    'vuepress-plugin-baidu-autopush', // 百度自动推送

    // 搜索框：添加第三方搜索链接（原官方搜索框的参数仍可用）
    [
      'thirdparty-search',
      {
        thirdparty: [
          // 可选，默认 []
          {
            title: '在MDN中搜索',
            frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
            behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
          },
          {
            title: '在Vue API中搜索',
            frontUrl: 'https://cn.vuejs.org/v2/api/#',
          },
        ],
      },
    ],

    // 代码块复制按钮
    [
      'one-click-copy',
      {
        copySelector: [
          'div[class*="language-"] pre',
          'div[class*="aside-code"] aside',
        ], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],

    [
      'demo-block', // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      {
        settings: {
          // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
          // cssLib: ['http://xxx'], // 在线示例中的css依赖
          // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
          jsfiddle: false, // 是否显示 jsfiddle 链接
          codepen: true, // 是否显示 codepen 链接
          horizontal: false, // 是否展示为横向样式
        },
      },
    ],
    // 放大图片
    [
      'vuepress-plugin-zooming',
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
    // 百度统计（可以去掉）
    [
      'vuepress-plugin-baidu-tongji',
      {
        hm: '503f098e7e5b3a5b5d8c5fc2938af002',
      },
    ],
    // 评论
    [
      'vuepress-plugin-comment',
      {
        choosen: 'gitalk',
        options: {
          // 在github上申请OAuth App https://blog.csdn.net/kobe24lmlps/article/details/80838329
          // clientID: 'a6e1355287947096b88b',
          // clientSecret: 'f0e77d070fabfcd5af95bebb82b2d574d7248d71',
          // repo: 'blog-gitalk-comment', // GitHub 仓库
          clientID: '02fc1e0643ea8f0cf242',
          clientSecret: '2d16cf0257e690951097f236ffff604738583da6',
          repo: 'vuepress-theme-vdoing',
          owner: 'xiumubai', // GitHub仓库所有者
          admin: ['xiumubai'], // 对仓库有写权限的人
          // distractionFreeMode: true,
          pagerDirection: 'last', // 'first'正序 | 'last'倒序
          id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
          title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
          labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
          body: '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
        },
      },
    ],
    // "上次更新"时间格式
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const dayjs = require('dayjs'); // https://day.js.org/
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss');
        },
      },
    ],
  ],
};
