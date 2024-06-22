import Image from 'next/image';
import Link from 'next/link';

interface Props {
  imgUrl: string;
  href?: string;
  title: string;
}
const ProfileLink = ({ imgUrl, href, title }: Props) => {
  return (
    <div className='flex-center gap-1'>
      <Image src={imgUrl} alt='icon' width={20} height={20} />
      {href ? (
        <Link
          className='paragraph-medium text-blue-500'
          href={href}
          target='_blank'
        >
          {title}
        </Link>
      ) : (
        <p className='paragraph-medium text-dark400_light700'>{title}</p>
      )}
    </div>
  );
};

export default ProfileLink;
