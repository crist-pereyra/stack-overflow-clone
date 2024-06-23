import { z } from 'zod';
export const questionsSchema = z.object({
  title: z
    .string()
    .min(5, { message: 'Title must be at least 5 characters.' })
    .max(130, { message: 'Title must be at most 130 characters.' }),
  explanation: z
    .string()
    .min(100, { message: 'Explanation must be at least 100 characters.' }),
  tags: z.array(z.string().min(1).max(15)).min(1).max(3),
});

export const AnswerSchema = z.object({
  answer: z
    .string()
    .min(100, { message: 'Answer must be at least 100 characters.' }),
});

export const ProfileSchema = z.object({
  name: z.string().min(5).max(50),
  username: z.string().min(5).max(50),
  bio: z.string().min(10).max(150),
  portfolioWebsite: z.string().url(),
  location: z.string().min(5).max(50),
});
