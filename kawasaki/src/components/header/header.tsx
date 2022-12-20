import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { KawaLogo } from '../icons/kawasaki';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <a href="#" target="_blank">
          <KawaLogo />
        </a>
      </div>
      <ul>
        <li>
          <a href="#" target="_blank">
            Home
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Quem Somos
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Como Funciona
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <button class="sim">Faça uma Simulação</button> 
          </a>
        </li>
      </ul>
    </header>
  );
});
