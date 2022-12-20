import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './carousel.css?inline';
import photo from 'src/assets/img/photo.webp'

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="container-comments">
        <div class="prev" onClick$={() => {
            const container = document.querySelector('.comment_items') as HTMLElement | null;

            if (!container) return;

            const currentIndex = Math.abs(container.scrollLeft / container.offsetWidth) | 0;
            const lastItemIndex = document.querySelectorAll('.comment_items > li').length;
            const prevCssIndex = currentIndex == 0
                ? lastItemIndex
                : currentIndex;
            const element = document.querySelector(`.comment_items > li:nth-child(${prevCssIndex})`) as HTMLElement | null;

            if (!element) return;

            element.scrollIntoView();
        }}>&lt;</div>
        <div class="next" onClick$={() => {
            const container = document.querySelector('.comment_items') as HTMLElement | null;

            if (!container) return;

            const currentIndex = Math.abs(container.scrollLeft / container.offsetWidth) | 0;
            const lastItemIndex = document.querySelectorAll('.comment_items > li').length - 1;
            const nextCssIndex = currentIndex == lastItemIndex
                ? 1
                : currentIndex + 2;
            const element = document.querySelector(`.comment_items > li:nth-child(${nextCssIndex})`) as HTMLElement | null;

            if (!element) return;

            element.scrollIntoView();
        }}>&gt;</div>
        <ul class="comment_items">
            <li>
                <div class="comment_item">
                    <div class="image">
                        <img src={photo} alt="User" loading='lazy'/>
                    </div>
                    <div class="text">
                        <h3>Rodrigo</h3>
                        <p>João Pinheiro/MG</p>
                        <br />
                        <p>Fala galera! Sou o Rodrigo, de João Pinheiro, Minas Gerais, fiz o Consórcio Nacional Kawasaki e fui contemplado na minha primeira assembleia, com uma moto z1000. Faça você também, tenho certeza que você não vai se arrepender</p>
                    </div>
                </div>
              </li>
              <li>
                <div class="comment_item">
                    <div class="image">
                        <img src={photo} alt="User" loading='lazy'/>
                    </div>
                    <div class="text">
                        <h3>Pedro</h3>
                        <p>João Pinheiro/MG</p>
                        <br />
                        <p>Fala galera! Sou o Rodrigo, de João Pinheiro, Minas Gerais, fiz o Consórcio Nacional Kawasaki e fui contemplado na minha primeira assembleia, com uma moto z1000. Faça você também, tenho certeza que você não vai se arrepender</p>
                    </div>
                </div>
              </li>
              <li>
                <div class="comment_item">
                    <div class="image">
                        <img src={photo} alt="User" loading='lazy'/>
                    </div>
                    <div class="text">
                        <h3>Bruno</h3>
                        <p>João Pinheiro/MG</p>
                        <br />
                        <p>Fala galera! Sou o Rodrigo, de João Pinheiro, Minas Gerais, fiz o Consórcio Nacional Kawasaki e fui contemplado na minha primeira assembleia, com uma moto z1000. Faça você também, tenho certeza que você não vai se arrepender</p>
                    </div>
                </div>
              </li>
        </ul>
    </div>
  );
});