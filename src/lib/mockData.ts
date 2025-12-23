
export interface NewsItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  source: string;
  time: string;
  url: string;
}

export const mockNews: NewsItem[] = [
  {
    id: '1',
    title: 'OpenAI 发布 GPT-5 开发者预览版',
    category: '模型更新',
    summary: 'OpenAI 推出 GPT-5，具备更强的推理能力和更低的延迟，专为复杂编程任务优化。',
    source: 'OpenAI Blog',
    time: '2小时前',
    url: 'https://openai.com/blog'
  },
  {
    id: '2',
    title: 'GitHub Copilot X 新增语音编程模式',
    category: '开发工具',
    summary: '开发者现在可以通过自然语言语音指令进行免提编程，彻底改变交互方式。',
    source: 'GitHub',
    time: '4小时前',
    url: 'https://github.com/features/copilot'
  },
  {
    id: '3',
    title: 'Google DeepMind AlphaCode 2 击败人类选手',
    category: '竞赛编程',
    summary: 'AlphaCode 2 在编程竞赛中达到宗师级水平，高效解决复杂算法问题。',
    source: 'DeepMind',
    time: '6小时前',
    url: 'https://deepmind.google/technologies/alphacode/'
  },
  {
    id: '4',
    title: 'LangChain 推出全新 Agent 框架',
    category: '框架库',
    summary: '利用 LangChain 强大的新状态管理工具，简化自主 AI 代理的构建过程。',
    source: 'LangChain',
    time: '8小时前',
    url: 'https://blog.langchain.dev/'
  },
  {
    id: '5',
    title: 'Vercel 发布 AI SDK 3.0',
    category: 'Web开发',
    summary: '提供流式传输支持和 React Server Components 集成，加速 AI 应用开发。',
    source: 'Vercel',
    time: '10小时前',
    url: 'https://vercel.com/blog'
  },
  {
    id: '6',
    title: 'Anthropic Claude 3 Opus API 全面开放',
    category: '模型更新',
    summary: 'Claude 3 Opus 在编程基准测试中超越 GPT-4，提供更大的上下文窗口。',
    source: 'Anthropic',
    time: '12小时前',
    url: 'https://www.anthropic.com/news'
  },
  {
    id: '7',
    title: 'Meta 开源 Llama 3 70B 模型',
    category: '开源模型',
    summary: '迄今最强大的开源模型，针对代码生成和逻辑推理进行了深度优化。',
    source: 'Meta AI',
    time: '14小时前',
    url: 'https://ai.meta.com/llama/'
  },
  {
    id: '8',
    title: 'Cursor 编辑器用户量突破百万',
    category: 'IDE',
    summary: 'VS Code 的分支 Cursor 原生集成 AI，精准预测代码编辑，深受工程师喜爱。',
    source: 'TechCrunch',
    time: '16小时前',
    url: 'https://cursor.sh/'
  },
  {
    id: '9',
    title: 'Hugging Face 发布 StarCoder2',
    category: '开源模型',
    summary: '代码生成模型的重大升级，基于 4 倍数据训练，提供更精准的代码建议。',
    source: 'Hugging Face',
    time: '18小时前',
    url: 'https://huggingface.co/blog/starcoder2'
  },
  {
    id: '10',
    title: 'Stability AI 推出 Stable Code 3B',
    category: '轻量模型',
    summary: '轻量级 3B 参数模型，可在笔记本电脑上本地运行，适合离线编程辅助。',
    source: 'Stability AI',
    time: '20小时前',
    url: 'https://stability.ai/news'
  }
];
