import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './carousel.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  function prev() {
      const container = document.querySelector('.container__carousel > div > ul') as HTMLElement | null;

      if (!container) return;

      const currentIndex = Math.abs(container.scrollLeft / container.offsetWidth);
      const element = document.querySelector(`.container__carousel > div > ul > li:nth-child(${currentIndex - 1})`) as HTMLElement | null;

      if (!element) return;

      element.scrollIntoView({ behavior: 'smooth' });
  }
  
  function next() {
      const container = document.querySelector('.container__carousel > div > ul') as HTMLElement | null;

      if (!container) return;

      const currentIndex = Math.abs(container.scrollLeft / container.offsetWidth);
      const element = document.querySelector(`.container__carousel > div > ul > li:nth-child(${currentIndex + 1})`) as HTMLElement | null;

      if (!element) return;

      element.scrollIntoView({ behavior: 'smooth' });
  }
  // parseInt( document.querySelector('.container__carousel > div > ul').scrollLeft / document.querySelector('.container__carousel > div > ul').offsetWidth )

  return (
    <div class="outside__carousel">
        <div class="container container__carousel">
            <div class="content">
                  <div class="prev" onClick$={() => {
                      const container = document.querySelector('.container__carousel > div > ul') as HTMLElement | null;

                      if (!container) return;
                
                      const currentIndex = Math.abs(container.scrollLeft / container.offsetWidth) | 0;
                      const lastItemIndex = document.querySelectorAll('.container__carousel > div > ul > li').length;
                      const prevCssIndex = currentIndex == 0
                          ? lastItemIndex
                          : currentIndex;
                      const element = document.querySelector(`.container__carousel > div > ul > li:nth-child(${prevCssIndex})`) as HTMLElement | null;
                
                      if (!element) return;
                
                      element.scrollIntoView({ behavior: 'smooth' });
                }}>&lt;</div>
                  <div class="next" onClick$={() => {
                      const container = document.querySelector('.container__carousel > div > ul') as HTMLElement | null;

                      if (!container) return;
                
                      const currentIndex = Math.abs(container.scrollLeft / container.offsetWidth) | 0;
                      const lastItemIndex = document.querySelectorAll('.container__carousel > div > ul > li').length - 1;
                      const nextCssIndex = currentIndex == lastItemIndex
                          ? 1
                          : currentIndex + 2;
                      const element = document.querySelector(`.container__carousel > div > ul > li:nth-child(${nextCssIndex})`) as HTMLElement | null;
                
                      if (!element) return;
                
                      element.scrollIntoView({ behavior: 'smooth' });
                }}>&gt;</div>
                <ul>
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