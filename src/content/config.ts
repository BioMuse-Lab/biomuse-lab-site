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

// ✨ 终极咬合 Schema：date 字段统一规范为标准的 coerce.date()，扩展属性全部设为可选兼容
const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),               // 👈 必须是严格的日期强制转换规则
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
