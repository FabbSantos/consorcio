import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */


export const RouterHead = component$(() => {

  const clarity = `(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "f635ucsahn");`

    // < !--Meta Pixel Code -->
  const pixel = ` !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '510661534225018');
  fbq('track', 'PageView');`

  const noscript = `<img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=510661534225018&ev=PageView&noscript=1"
    />`

// <!--End Meta Pixel Code-- >
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
     []

      {head.meta.map((m) => (
        <meta {...m} />
        ))}

      {head.links.map((l) => (
        <link {...l} />
        ))}

      {head.styles.map((s) => (
        <style {...s.props} dangerouslySetInnerHTML={s.style} />
        ))}
        <script > {clarity} </script>
        <script> {pixel} </script>
        <noscript>{noscript}</noscript>
    </>
  );
});
