import { GetStaticPropsContext } from 'next';

type GlobalStaticProps = {
  props: {
    headerData: {
      googleAnalyticsId?: string | null;
    }
  }
};

export function withGlobalStaticProps(
  staticPropsFn?: (context: GetStaticPropsContext, globalProps: GlobalStaticProps) => any | Promise<any>
) {
  return async (context: GetStaticPropsContext) => {
    const globalProps = {
      props: {
        headerData: {
          googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID || null
        }
      }
    };

    if (!staticPropsFn) {
      return globalProps;
    }

    return await staticPropsFn(context, globalProps);
  }
}
