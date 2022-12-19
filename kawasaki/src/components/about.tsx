import { component$, useStyles$ } from '@builder.io/qwik';
import moto from 'src/assets/img/moto.webp'

export default component$(() => {

    useStyles$(about)

    return (
        <div class="outside__about">
            <div class="container container__about">
                <div class="content">
                    <div class="left">
                        <img src={moto} alt="Moto Ninja 400" loading='lazy'  height="440px" width="440px"/>
                    </div>
                    <div class="right">
                        <div class="why">
                            <h2>Porque escolher o Consórcio Kawasaki Brasil?</h2>
                            <p>
                                O Consórcio Kawasaki está presente no mercado desde 2010, realizando o sonho de milhares de brasileiros de terem sua própria moto Kawasaki. O consórcio tem atuação nacional, sendo comercializado através de call center, representantes e concessionárias.
                                O Consórcio é administrado pela Âncora Consórcios, que atua nesse setor há mais de 3 décadas, é autorizado pelo Banco Central do Brasil e regulamentado pela ABAC, garantindo a segurança no investimento.
                            </p>

                            <p>
                                <br />Confira abaixo alguns motivos para você realizar o seu sonho com a gente:
                                <ul>
                                    <li>É sem entrada.</li>
                                    <li>Sem juros.</li>
                                    <li>Planos que cabem no seu bolso e se adequam a sua realidade.</li>
                                    <li>Sem a burocracia de um financiamento.</li>
                                    <li>Você sempre será contemplado com a moto do ano.</li>
                                    <li>Atendimento humanizado e prático.</li>
                                </ul>
                            </p>
                            <button>
                                Fale com um Consultor
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

})

export const about = `
    .outside__about {
        min-height: 100vh;
        width: 100vw;

        background-image: url("src/assets/img/bg-about.webp");
        background-size: cover;
        background-repeat: no-repeat;
    }
    .container__about {
        padding: 3em 0;
        background-color: #000;
        min-height: 100vh;
    }
    .content {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        gap: 2em;
    }
    .left, .right {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .why {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        width: 80%;
        background-color: #212121;
        border-radius: 40px;
        color: white;
        padding: 30px;
    }
    .why h2 {
        text-align: center;
        font-weight: bold;
        font-size: 1.2em;
        margin-bottom: 1em;
    }
    .why p {
        text-align: left;
        font-weight: 400;
        font-size: 1em;
    }
    .why li {
        padding-bottom: .5em;
    }
    .why ul {
        list-style-type: disc;
    }
    .why li::marker {
        color: var(--green-k);
    }
    .why button {
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: var(--green-k);
        border: none;
        padding: 20px;
        border-radius: 30px 5px 30px 5px;

        font-size: 1.2em;
        color: white;
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
        cursor: pointer;

        transition: 0.3s ease;
    }
    .why button:hover {
        filter: contrast(80%);
    }

    @media (max-width: 768px){
        .container__about {
            height: auto;
            width: 100%;
            padding: 5%;
            display: block;
        }
        .outside__about {
            background-image: none;
        }
        .content {
            flex-direction: column;
        }
        .right {
            width: auto;
        }
        .left {
            display: none;
        }
        .why {
            padding: 30px 10px;
            width: 90%;
        }
        .why p {
            text-align: center;
        }
    }
`;
