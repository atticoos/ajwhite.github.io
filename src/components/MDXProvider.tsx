import { MDXProvider as BaseMDXProvider } from '@mdx-js/react';
import Image from 'next/image';
import { ReactNode } from 'react';
import 'highlight.js/styles/github.css';

const ResponsiveImage = (props: any) => (
  <Image
    alt={props.alt}
    layout="responsive"
    {...props}
  />
);

const components = {
  img: ResponsiveImage
};

type Props = {
  children: ReactNode;
}

export function MDXProvider ({ children }: Props): JSX.Element {
  return (
    <BaseMDXProvider components={components}>
      {children}
    </BaseMDXProvider>
  )
}
