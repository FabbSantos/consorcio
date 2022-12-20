import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> */}
      <meta name="msapplication-TileImage" content="cropped-bandeira-sem-fundo-1-1-270x270.png" />
      <link rel="icon" href="cropped-bandeira-sem-fundo-1-1-32x32.png" sizes="32x32" />
      <link rel="icon" href="cropped-bandeira-sem-fundo-1-1-192x192.png" sizes="192x192" />

      {head.meta.map((m) => (
        <meta {...m} />
      ))}

      {head.links.map((l) => (
        <link {...l} />
      ))}

      {head.styles.map((s) => (
        <style {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
