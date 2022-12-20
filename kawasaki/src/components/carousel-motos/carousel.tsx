import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './carousel.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="outside__carousel">
        <div class="container container__carousel">
            <div class="content">
                  <div class="prev" onClick$={() => {
                      const container = document.querySelector('.motos_items') as HTMLElement | null;

                      if (!container) return;
                
                      const currentIndex = Math.abs(container.scrollLeft / container.offsetWidth) | 0;
                      const lastItemIndex = document.querySelectorAll('.motos_items > li').length;
                      const prevCssIndex = currentIndex == 0
                          ? lastItemIndex
                          : currentIndex;
                      const element = document.querySelector(`.motos_items > li:nth-child(${prevCssIndex})`) as HTMLElement | null;
                
                      if (!element) return;
                
                      element.scrollIntoView();
                }}>&lt;</div>
                  <div class="next" onClick$={() => {
                      const container = document.querySelector('.motos_items') as HTMLElement | null;

                      if (!container) return;
                
                      const currentIndex = Math.abs(container.scrollLeft / container.offsetWidth) | 0;
                      const lastItemIndex = document.querySelectorAll('.motos_items > li').length - 1;
                      const nextCssIndex = currentIndex == lastItemIndex
                          ? 1
                          : currentIndex + 2;
                      const element = document.querySelector(`.motos_items > li:nth-child(${nextCssIndex})`) as HTMLElement | null;
                
                      if (!element) return;
                
                      element.scrollIntoView();
                }}>&gt;</div>
                <ul class="motos_items">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                </ul>
            </div>
        </div>
    </div>
  );
});