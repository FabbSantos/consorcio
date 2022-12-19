import { component$, useStyles$ } from '@builder.io/qwik';
import photo from 'src/assets/img/photo.webp'

export default component$(() => {
    useStyles$(comment)

    return (
        <div class="comment">
            <div class="text">
                <h2>Nossos Clientes Satisfeitos</h2>
                <p>Para que você não tenha nenhuma dúvida sobre nosso consórcio, confira abaixo o que alguns contemplados Kawasaki têm para contar a vocês. Venha ser você também um contemplado!</p>
            </div>
            <div class="comment_items">
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
            </div>
        </div>
    )
})

export const comment =`
    .comment {
        margin-top: 8em;
        margin-bottom: 8em;
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
    .comment_items {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }
    .comment_item {
        position: relative;
        display: flex;
        justify-content: flex-end;
        background-color: #000;
        border-radius: 30px;
        padding: 20px;
        width: 40%;
    }
    .comment_item .text {
        text-align: right;
        width: 80%;
        margin-bottom: 0;
    }
    .comment_item h3 {
        font-weight: 800;
        font-size: 1.2em;
    }
    .comment_item p {
        font-weight: 400;
        font-size: 1em;
    }
    .comment_item .image {
        position: absolute;
        top: 0;
        left: -25%;
    }
    .comment_item .image img {
        width: 80%;
    }

    @media (max-width: 768px) {
        .comment {
            margin-top: 4em;
        }
        .comment_item {
            width: 100%;
            margin-top: 10em;
        }
        .comment_item .text {
            text-align: center;
            width: 100%;
            padding-top: 2em;
        }
        .comment_item .image {
            left: 15%;
            top: -55%;
        }
    }
`;