export const profile = {
  name: '刘政',
  role: '后端开发 / 全栈开发方向',
  location: '中国',
  email: '2419554425@qq.com',
  github: 'https://github.com/yourname',
  intro:
    '我关注前端工程化、交互体验和 Web 产品落地，能够使用 Vue 3、Vite 和现代 CSS 快速完成从需求拆解到线上部署的完整流程。',
  highlights: [
    '熟悉 Vue 3 组件化开发和 Vite 构建流程',
    '具备 HTML、CSS、JavaScript 基础和页面还原能力',
    '能够使用 AI 工具辅助需求分析、代码生成、问题排查和部署说明整理',
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
    title: '个人介绍网站',
    period: '2026',
    summary:
      '使用 Vue 3 + Vite 搭建的个人展示网站，包含个人简介、技术能力、项目经历、AI 使用说明和联系方式。',
    stack: ['Vue 3', 'Vite', 'JavaScript', 'CSS3', 'Vercel'],
    points: ['组件化组织页面结构', '使用数据文件集中维护内容', '适配桌面端和常见移动端宽度'],
  },
  {
    title: '项目经历示例',
    period: '可替换',
    summary:
      '这里填写你真实做过的课程设计、实习项目、毕业设计或开源项目，突出你的职责和技术亮点。',
    stack: ['Vue', 'API', 'Git'],
    points: ['负责页面开发和样式优化', '整理项目文档和部署说明', '使用 AI 工具辅助排查问题'],
  },
]

export const aiUsage = [
  '使用 Codex 辅助拆解题目要求，明确个人介绍网站和外网部署的交付目标。',
  '使用 AI 生成 Vue 组件结构、页面文案草稿和 CSS 样式方案。',
  '手动调整个人信息、项目经历、页面布局、颜色和交互细节，确保内容符合真实情况。',
  '通过 AI 分析 npm 安装和 Vite 构建问题，并选择稳定版本完成本地构建验证。',
]
