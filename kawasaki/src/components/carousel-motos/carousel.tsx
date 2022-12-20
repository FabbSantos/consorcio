import { component$, useStylesScoped$ } from '@builder.io/qwik';
import Moto from '../moto';
import styles from './carousel.css?inline';
import Moto from '../moto';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="outside__carousel">
        <div class="container container__carousel">
            <div class="content">
                  <div class="prev" onClick$={() => {
                      const container = document.querySelector('.motos_items') as HTMLElement | null;

                      if (!container) return;
                
                      const currentIndex = Math.round(container.scrollLeft / container.offsetWidth) | 0;
                      const lastItemIndex = document.querySelectorAll('.motos_items > li').length - 1;
                      const prevCssIndex = currentIndex == 0
                          ? lastItemIndex
                          : currentIndex - 1;
                      
                      container.scrollTo({behavior: 'smooth', left: container.offsetWidth * prevCssIndex});
                }}>&lt;</div>
                  <div class="next" onClick$={() => {
                      const container = document.querySelector('.motos_items') as HTMLElement | null;

                      if (!container) return;
                
                      const currentIndex = Math.round(container.scrollLeft / container.offsetWidth) | 0;
                      const lastItemIndex = document.querySelectorAll('.motos_items > li').length - 1;
                      const nextCssIndex = currentIndex == lastItemIndex
                          ? 0
                          : currentIndex + 1;
                      container.scrollTo({behavior: 'smooth', left: container.offsetWidth * nextCssIndex});
                }}>&gt;</div>
                <ul class="motos_items">
                      <li><Moto /></li>
                      <li><Moto /></li>
                      <li><Moto /></li>
                      <li><Moto /></li>
                      <li><Moto /></li>
                      <li><Moto /></li>
                </ul>
            </div>
        </div>
    </div>
  );
});