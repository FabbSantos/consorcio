import { component$, Slot } from '@builder.io/qwik';
import Footer from '~/components/footer';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
});
