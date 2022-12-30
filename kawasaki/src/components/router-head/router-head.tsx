import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */


export const RouterHead = component$(() => {

  const clarity = `(function(c,l,a,r,i,t,y){
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) }};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "f635ucsahn");`

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
      <script type="text/javascript"> {clarity} </script>
     

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
