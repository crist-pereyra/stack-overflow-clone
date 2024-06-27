'use client';
import React from 'react';
import { Button } from '../ui/button';
import { formUrlQuery } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
interface Props {
  pageNumber: number;
  isNext: boolean;
}
const Pagination = ({ pageNumber, isNext }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleNavigation = (direction: string) => {
    const newPageNumber =
      direction === 'next' ? pageNumber + 1 : pageNumber - 1;

    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: 'page',
      value: newPageNumber.toString(),
    });
    router.push(newUrl);
  };
  if (pageNumber === 1 && !isNext) return null;
  return (
    <div className='flex w-full items-center justify-center gap-2'>
      <Button
        className='light-border-2 btn flex min-h-[36px] items-center justify-center gap-2 border'
        disabled={pageNumber === 1}
        onClick={() => handleNavigation('prev')}
      >
        <p className='body-medium text-dark200_light800'>Prev</p>
      </Button>
      <div className='flex items-center justify-center rounded-md bg-primary-500 px-3.5 py-2'>
        <p className='body-semibold text-light-900'>{pageNumber}</p>
      </div>
      <Button
        className='light-border-2 btn flex min-h-[36px] items-center justify-center gap-2 border'
        disabled={!isNext}
        onClick={() => handleNavigation('next')}
      >
        <p className='body-medium text-dark200_light800'>Next</p>
      </Button>
    </div>
  );
};

export default Pagination;
