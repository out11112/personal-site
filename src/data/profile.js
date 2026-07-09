export const profile = {
  name: '刘政',
  role: '后端开发 / 全栈开发方向',
  location: '浙江杭州',
  email: '2419554425@qq.com',
  github: 'https://github.com/out11112',
  intro:
    '本科就读于上海海洋大学信息学院，所学专业为计算机科学与技术，GPA 3.29/4。主修课程包括数据结构与算法、Java 框架编程、Linux 操作系统、数据库原理、Python程序设计。学习能力强，工作态度认真，具备良好的团队合作精神。具备较强的学习能力和工程实践能力，熟悉Java后端开发、前后端分离项目开发流程，能够独立完成需求分析、功能设计、编码实现、调试部署等工作，具备良好的问题定位能力和持续优化意识，能够根据实际反馈不断改进系统功能和用户体验。',
  highlights: [
    { label: '语言能力', text: '通过大学英语CET4、CET6' },
    { label: '专业技能', text: '计算机程序设计三级证书，蓝桥杯省级三等奖' },
    { label: '办公技能', text: '熟练掌握Word、Excel、PPT等办公软件，熟悉Pr、Ae、剪映等剪辑软件' },
  ],
}

export const skills = [
  {
    name: 'Java / Spring Boot',
    type: '后端开发',
    level: '熟悉',
    detail: '能够完成接口开发、业务逻辑实现、项目配置、调试和基础部署。',
  },
  {
    name: 'MyBatis-Plus / REST API',
    type: '接口开发',
    level: '熟悉',
    detail: '熟悉常见 CRUD、分页查询、条件查询和前后端接口联调。',
  },
  {
    name: 'MySQL',
    type: '数据库设计',
    level: '熟悉',
    detail: '能够进行表结构设计、关联查询、索引使用和基础 SQL 优化。',
  },
  {
    name: 'Vue 3 / Element Plus',
    type: '前端开发',
    level: '掌握',
    detail: '能够开发前后端分离页面，完成表单、列表、弹窗和接口交互。',
  },
  {
    name: 'WebSocket / WebRTC',
    type: '实时通信',
    level: '掌握',
    detail: '具备实时聊天、消息推送和频道语音功能的项目实践经验。',
  },
  {
    name: 'Git / Linux / 部署',
    type: '工程实践',
    level: '掌握',
    detail: '熟悉 Git 基础协作、Linux 常用命令和前后端项目部署流程。',
  },
]

export const projects = [
  {
    title: '东软医疗体检系统',
    period: '2024',
    summary:
      '项目为医疗机构提供数字化体检流程管理系统，覆盖体检预约、信息录入、报告生成、数据同步等模块，支持多终端使用及多部门协作。参与系统架构设计与功能模块划分，基于Spring Boot构建后端服务，负责体检记录管理与报告生成逻辑开发；使用Vue实现前端页面开发与交互逻辑，完成预约界面、检查流程及报告查询功能；负责数据库表结构设计与优化，使用MySQL管理体检用户数据、检查项结果等。',
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
      '设计并实现前后端分离的实时频道聊天系统，前端基于Vue 3 + Element Plus构建响应式聊天界面，后端基于Spring Boot 3提供WebSocket通信，项目成功部署在阿里云服务器。实现了用户注册登录、密码加密存储、头像上传、昵称修改、密码修改等用户体系功能；实现频道消息实时收发，基于 WebSocket 推送文本、图片、文件、语音等多类型消息，并将历史消息持久化到 MySQL；实现 WebRTC 频道实时语音功能；接入 DeepSeek-V4-Bot，支持通过 @bot 在频道内触发 AI 对话；优化移动端聊天体验，加入深色/浅色主题、消息时间显示、附件暂存发送和图片粘贴上传。',
    stack: ['SpringBoot', 'Vue', 'MySQL'],
    points: [
      '基于 Spring Boot 3 与 WebSocket 实现频道消息实时收发',
      '使用 Vue 3 和 Element Plus 构建响应式聊天界面',
      '实现用户体系、消息持久化、文件上传和 WebRTC 实时语音',
      '接入 DeepSeek-V4-Bot，实现 AI 对话功能',
    ],
  },
]