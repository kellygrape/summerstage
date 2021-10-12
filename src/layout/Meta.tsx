import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";

import { AppConfig } from "../utils/AppConfig";

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${router.basePath}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
        />
        <link
          rel="mask-icon"
          href={`${router.basePath}/safari-pinned-tab.svg`}
          color="#5bbad5"
        />
        <link rel="manifest" href={`${router.basePath}/site.webmanifest`} />

        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:url" content="https://www.udsummerstage.org/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Upper Darby Summer Stage" />
        <meta
          property="og:description"
          content="Bringing the Magic of Live Theater to our community since 1976"
        />
        <meta
          property="og:image"
          content={`${router.basePath}/opengraph.jpg`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="udsummerstage.org" />
        <meta property="twitter:url" content="https://www.udsummerstage.org/" />
        <meta name="twitter:title" content="Upper Darby Summer Stage" />
        <meta
          name="twitter:description"
          content="Bringing the Magic of Live Theater to our community since 1976"
        />
        <meta
          name="twitter:image"
          content={`${router.basePath}/opengraph.jpg`}
        />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  );
};

export { Meta };
