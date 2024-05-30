import QuestionCard from '@/components/cards/QuestionCard';
import HomeFilters from '@/components/home/HomeFilters';
import Filter from '@/components/shared/Filter';
import NoResult from '@/components/shared/NoResult';
import LocalSearchbar from '@/components/shared/search/LocalSearchbar';
import { Button } from '@/components/ui/button';
import { HomePageFilters } from '@/constants/filters';
import { getQuestions } from '@/lib/actions/question.action';
import Link from 'next/link';
import React from 'react';

const questions = [
  {
    _id: '1',
    title: 'What is the best programming language to learn?',
    tags: [
      { _id: '1', name: 'python' },
      { _id: '2', name: 'java' },
    ],
    author: {
      _id: '1',
      name: 'John Doe',
      picture: 'https://example.com/pictures/john.jpg',
    },
    upvotes: 234240,
    views: 100000000,
    answers: [
      {
        content:
          'It depends on what you want to achieve. Python is great for beginners and web development, while Java is widely used in enterprise environments.',
      },
      {
        content:
          'Consider the job market and your personal interest. Both Python and Java are highly valued skills.',
      },
    ],
    createdAt: new Date('2022-01-01T12:00:00.000Z'),
  },
  {
    _id: '2',
    title: 'How to center an image in CSS?',
    tags: [
      { _id: '3', name: 'css' },
      { _id: '2', name: 'java' },
    ],
    author: {
      _id: '1',
      name: 'John Doe',
      picture: 'https://example.com/pictures/john.jpg',
    },
    upvotes: 10,
    views: 100,
    answers: [
      { content: "Use the CSS property 'display: block; margin: auto;'" },
      {
        content:
          "You can also use Flexbox: 'display: flex; justify-content: center; align-items: center;'",
      },
    ],
    createdAt: new Date('2023-01-01T12:00:00.000Z'),
  },
];
const Home = async () => {
  const result = await getQuestions({});

  return (
    <>
      <div className='flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center'>
        <h1 className='h1-bold text-dark100_light900'>All Questions</h1>
        <Link href='/ask-question' className='flex justify-end max-sm:w-full'>
          <Button className='primary-gradient min-h-[46px] px-4 py-3 !text-light-900'>
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className='mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center'>
        <LocalSearchbar
          route={'/'}
          iconPosition='left'
          imgSrc='/assets/icons/search.svg'
          placeholder='Search for questions'
          otherClasses='flex-1'
        />
        <Filter
          filters={HomePageFilters}
          otherClasses='min-h-[56px] sm:w-[170px]'
          containerClasses='hidden max-md:flex'
        />
      </div>
      <HomeFilters />
      <div className='mt-10 flex w-full flex-col gap-6'>
        {result.questions.length > 0 ? (
          result.questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title='There’s no question to show'
            description='Be the first to break the silence! 🚀 Ask a Question and kickstart the
        discussion. our query could be the next big thing others learn from. Get
        involved! 💡'
            link='/ask-question'
            linkTitle='Ask a Question'
          />
        )}
      </div>
    </>
  );
};

export default Home;
