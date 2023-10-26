import { defineCollection, z } from "astro:content";

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

// 共通のバリデーション関数
const validateDateFormat = (value: string) => dateRegex.test(value);
const validateDateFormatOptional = (value: string | undefined) => (value ? validateDateFormat(value) : true);

const dateField = z.string().refine(validateDateFormat, {
    message: "YYYY-MM-DDのフォーマットにしてください。",
});

const dateFieldOptional = z.string().optional().refine(validateDateFormatOptional, {
    message: "YYYY-MM-DDのフォーマットにしてください。",
});

// 共通のスキーマ定義
const baseSchema = {
    title: z.string(),
    description: z.string(),
    pubDate: dateField,
    updatedDate: dateFieldOptional,
};

const blog = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            ...baseSchema,
            thumbnail: image(),
        }),
});

const news = defineCollection({
    type: "content",
    schema: z.object(baseSchema),
});

export const collections = { blog, news };
