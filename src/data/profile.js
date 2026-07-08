export const profile = {
  name: '刘政',
  role: '后端开发 / 全栈开发方向',
  location: '浙江杭州',
  email: '2419554425@qq.com',
  github: 'https://github.com/out11112',
  intro:
    '本科就读于上海海洋大学信息学院，所学专业为计算机科学与技术，GPA 3.29/4。主修课程包括数据结构与算法、Java 框架编程、单片机原理与应用、微机原理与接口技术、计算机组成原理、操作系统原理、Linux 操作系统、信息安全概论、数据库原理、Python 程序设计、计算机网络、软件工程和编译原理。',
  highlights: [
    '语言能力：通过大学英语 CET4、CET6',
    '专业技能：获得计算机程序设计三级证书，蓝桥杯省级三等奖',
    '办公技能：熟练掌握 Word、Excel、PPT 等办公软件，熟悉 Pr、Ae、剪映等剪辑软件',
  ],
}

export const skills = [
  { name: 'Vue 3', level: 86, type: '前端框架' },
  { name: 'JavaScript', level: 82, type: '开发语言' },
  { name: 'HTML5 / CSS3', level: 88, type: '页面基础' },
  { name: 'Vite', level: 78, type: '构建工具' },
  { name: 'Git / GitHub', level: 74, type: '协作工具' },
  { name: 'Vercel', level: 70, type: '部署平台' },
]

export const projects = [
  {
    title: '东软医疗体检系统',
    period: '2024',
    summary:
      '项目为医疗机构提供数字化体检流程管理系统，覆盖体检预约、信息录入、报告生成、数据同步等模块，支持多终端使用及多部门协作。参与系统架构设计与功能模块划分，基于 Spring Boot 构建后端服务，负责体检记录管理与报告生成逻辑开发；使用 Vue 实现前端页面开发与交互逻辑，完成预约界面、检查流程及报告查询功能；负责数据库表结构设计与优化，使用 MySQL 管理体检用户数据、检查项结果等。',
    stack: ['SpringBoot', 'Vue', 'MySQL'],
    points: [
      '参与系统架构设计与功能模块划分',
      '负责体检记录管理与报告生成逻辑开发',
      '完成预约界面、检查流程和报告查询功能',
      '设计并优化体检用户、检查项结果等核心数据表',
    ],
  },
  {
    title: 'LinkChat 实时频道聊天系统',
    period: '2026',
    summary:
      '设计并实现前后端分离的实时频道聊天系统，前端基于 Vue 3 + Element Plus 构建响应式聊天界面，后端基于 Spring Boot 3 提供 WebSocket 通信，项目成功部署在阿里云服务器。实现了用户注册登录、密码加密存储、头像上传、昵称修改、密码修改等用户体系功能；实现频道消息实时收发，基于 WebSocket 推送文本、图片、文件、语音等多类型消息，并将历史消息持久化到 MySQL；实现 WebRTC 频道实时语音功能；接入 DeepSeek-V4-Bot，支持通过 @bot 在频道内触发 AI 对话；优化移动端聊天体验，加入深色/浅色主题、消息时间显示、附件暂存发送和图片粘贴上传。',
    stack: ['SpringBoot', 'Vue', 'MySQL'],
    points: [
      '基于 Spring Boot 3 与 WebSocket 实现频道消息实时收发',
      '使用 Vue 3 和 Element Plus 构建响应式聊天界面',
      '实现用户体系、消息持久化、文件上传和 WebRTC 实时语音',
      '接入 DeepSeek-V4-Bot，并优化移动端聊天体验',
    ],
  },
]

export const aiUsage = [
  '使用 Codex 辅助拆解题目要求，明确个人介绍网站和外网部署的交付目标。',
  '使用 AI 生成 Vue 组件结构、页面文案草稿和 CSS 样式方案。',
  '手动调整个人信息、项目经历、页面布局、颜色和交互细节，确保内容符合真实情况。',
  '通过 AI 分析 npm 安装和 Vite 构建问题，并选择稳定版本完成本地构建验证。',
]
