import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    drawer: z.string().optional(),
    tags: z.array(z.string()).optional(),
    lang: z.string().optional(),
  }),
});

// ✨ 统一代码操作：在 work 集合的底座中，正式拓宽 lang 字段的安全校验
const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
    lang: z.string().optional(), // 👈 核心保底网：放行多语言属性访问
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    drawer: z.string().optional(),
    lang: z.string().optional(),
    tags: z.array(z.string()).optional(),
    wechatURL: z.string().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
  }),
});

export const collections = { blog, work, projects };
