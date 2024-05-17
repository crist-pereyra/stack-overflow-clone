import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import RenderTag from './RenderTag';
const topQuestions = [
  { _id: 1, title: 'How do I use express as a custom server in NextJS?' },
  { _id: 2, title: 'How do I use express as a custom server in NextJS?' },
  { _id: 3, title: 'How do I use express as a custom server in NextJS?' },
  { _id: 4, title: 'How do I use express as a custom server in NextJS?' },
  { _id: 5, title: 'How do I use express as a custom server in NextJS?' },
];
const popularTags = [
  { _id: 1, name: 'Javascript', totalQuestions: 5 },
  { _id: 2, name: 'react', totalQuestions: 5 },
  { _id: 3, name: 'next', totalQuestions: 5 },
  { _id: 4, name: 'vue', totalQuestions: 5 },
  { _id: 5, name: 'redux', totalQuestions: 5 },
];
const RightSidebar = () => {
  return (
    <section className='background-light900_dark200 custom-scrollbar light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col justify-start overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden'>
      <div>
        <h3 className='h3-bold text-dark100_light900'>Top Questions</h3>
        <div className='mt-7 flex w-full flex-col gap-[30px]'>
          {topQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className='flex cursor-pointer items-center justify-between gap-7'
            >
              <p className='body-medium text-dark500_light700'>
                {question.title}
              </p>
              <Image
                src='/assets/icons/chevron-right.svg'
                width={20}
                height={20}
                alt='chevron-right'
                className='invert-colors'
              />
            </Link>
          ))}
        </div>
      </div>
      <div className='mt-16'>
        <h3 className='h3-bold text-dark100_light900'>Popular Tags</h3>
        <div className='mt-7 flex flex-col gap-4'>
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
