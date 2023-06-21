import type { GetStaticProps, NextPage } from 'next';
import HomePage, { type HomePageProps } from '~/pages/HomePage/HomePage';

export default HomePage as NextPage;

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  return {
    props: {},
    revalidate: Number(process.env.NEXT_PUBLIC_REVALIDATE_TIME),
  };
};
