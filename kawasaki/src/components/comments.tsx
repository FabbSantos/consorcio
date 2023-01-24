import { component$, useStyles$ } from '@builder.io/qwik';
import CarouselComments from '~/components/carousel-comments/carousel';

export default component$(() => {
    useStyles$(comment)

    return (
        <div class="comment">
            <div class="text">
                <h2>Nossos Clientes Satisfeitos</h2>
                <p>Para que você não tenha nenhuma dúvida sobre nosso consórcio, confira abaixo o que alguns contemplados Kawasaki têm para contar a vocês. Venha ser você também um contemplado!</p>
            </div>
            <CarouselComments />
        </div>
    )
})

export const comment =`
    .comment {
        margin-top: 4em;
        margin-bottom: 2em;
        width: 100%;
        display: flex;
        flex-direction: column;

        text-align: center;
    }
    .comment h2 {
        font-weight: 800;
        font-size: 1.5em;
    }
    .comment p {
        font-size: 1em;
        font-weight: 400;
    }

    @media (max-width: 768px) {
        .comment {
            margin-top: 4em;
        }
    }
`;