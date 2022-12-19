import { component$, useStyles$ } from '@builder.io/qwik';

export default component$(() => {

    useStyles$(about)

    return (
        <div class="outside">
            <div class="container">

            </div>
        </div>
    )

})

export const about = `
    .outside {
        height: 100vh;
        width: 100vw;

        background-image: url("src/assets/img/bg-moto.webp");
        background-size: cover;
        background-repeat: no-repeat;
    }
`;
