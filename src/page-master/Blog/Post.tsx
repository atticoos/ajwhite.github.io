import { ReactNode } from 'react';

type PostMeta = {
  title: string;
  date: string;
  permalink: string;
  project?: string;
  tags?: string[]
  excerpt?: string;
  seo_title?: string;
  seo_description?: string;
};

type Props = {
  meta?: PostMeta;
  children?: ReactNode;
}

export function Post ({meta, children}: Props): JSX.Element {
  console.log('meta!', meta)
  return (
    <>
      {children}
    </>
  )
}
