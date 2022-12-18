import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <a href="#" target="_blank">
          <QwikLogo />
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
