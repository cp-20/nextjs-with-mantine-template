import Head from 'next/head';

export const Description: React.FC = () => {
  const title = '';
  const description = '';
  const pageTitle = `${title} - ${description}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta content={description} name="description" />

      {/* OGP */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://no-log-chat.vercel.app/" />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="ja" />
      <meta
        property="og:image"
        content="https://no-log-chat.vercel.app/ogp.png"
      />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@__cp20__" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://no-log-chat.vercel.app/ogp.png"
      />
    </Head>
  );
};
