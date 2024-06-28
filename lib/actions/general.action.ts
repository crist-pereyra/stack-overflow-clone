'use server';

import Question from '@/database/question.model';
import { connectToDatabase } from '../mongoose';
import { SearchParams } from './shared.types';
import Answer from '@/database/answer.model';
import User from '@/database/user.model';
import Tag from '@/database/tag.model';

const SearchableTypes = ['question', 'answer', 'user', 'tag'];
export const globalSearch = async (params: SearchParams) => {
  try {
    await connectToDatabase();

    const { query, type } = params;
    const regexQuery = { $regex: query, $options: 'i' };
    let results = [];
    const modelsAndTypes = [
      { model: Question, searchField: 'title', type: 'question' },
      { model: Answer, searchField: 'content', type: 'answer' },
      { model: User, searchField: 'name', type: 'user' },
      { model: Tag, searchField: 'name', type: 'tag' },
    ];
    const typeLower = type?.toLowerCase();
    if (!typeLower || !SearchableTypes.includes(typeLower)) {
      // search across everything
      for (const { model, searchField, type } of modelsAndTypes) {
        const queryResult = await model
          .find({ [searchField]: regexQuery })
          .limit(2);

        results.push(
          ...queryResult.map((result) => ({
            title:
              type === 'answer'
                ? `Answers containing "${query}"`
                : result[searchField],
            type,
            id:
              type === 'user'
                ? result.clerkId
                : type === 'answer'
                  ? result.question
                  : result._id,
          }))
        );
      }
    } else {
      // search specific type
      const modelInfo = modelsAndTypes.find(
        (modelAndType) => modelAndType.type === type
      );

      if (!modelInfo) {
        throw new Error('Invalid search type');
      }

      const queryResult = await modelInfo.model
        .find({ [modelInfo.searchField]: regexQuery })
        .limit(8);

      results = queryResult.map((result) => ({
        title:
          type === 'answer'
            ? `Answers containing "${query}"`
            : result[modelInfo.searchField],
        type,
        id:
          type === 'user'
            ? result.clerkId
            : type === 'answer'
              ? result.question
              : result._id,
      }));
    }
    return JSON.stringify(results);
  } catch (error) {
    console.log(`Error fetching global results, ${error}`);
    throw error;
  }
};
