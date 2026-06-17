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

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

// ✨ 核心修正：扩充字段，全面对齐你的作品灵感 Front Matter 属性
const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),               // 保持与博客一致的强制 Date 转换
    draft: z.boolean().optional(),
    drawer: z.string().optional(),       // 👈 允许封面图路径
    lang: z.string(),                    // 👈 必须要有 lang 属性用于隔离
    tags: z.array(z.string()),           // 👈 必须要有 tags 数组
    微信公众号URL: z.string().optional(), // 👈 允许中文键名属性（可选）
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
  }),
});

export const collections = { blog, work, projects };
