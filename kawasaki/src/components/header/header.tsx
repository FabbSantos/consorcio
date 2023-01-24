import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { KawaLogo } from '../icons/kawasaki';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
          <KawaLogo />
      </div>
    </header>
  );
});
