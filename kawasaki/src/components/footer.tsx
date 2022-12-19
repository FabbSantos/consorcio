import { component$, useStyles$ } from '@builder.io/qwik';
import ancora from "src/assets/img/ancora.webp"
import kawasaki from "src/assets/img/kawasaki.webp"

export default component$(() => {

    useStyles$(foot)

    return (
        <div class="outside__footer">
            <div class="container container__footer">
                <div class="content__footer">
                    <div class="f-row">
                        <div class="item">
                            <h3>Âncora Consórcios</h3>
                            <p>© 2022 - Todos direitos reservados</p>
                        </div>
                        <div class="item">
                            <h3>Institucional</h3>
                            <a href="#">Fale Conosco</a>
                            <a href="#">Quem Somos</a>
                            <a href="#">Política de Privacidade</a>

                        </div>
                        <div class="item">
                            <h3>Consórcio</h3>
                            <a href="#">Sobre o Consórcio</a>
                            <a href="#">Tire suas Dúvidas</a>
                            <a href="#">Consulta de Cancelados</a>

                        </div>
                        <div class="item">
                            <h3>Central de vendas</h3>
                            <a href="#">0800 943 3500</a>
                            <p>Segunda a Sexta, das 9h às 18h</p>
                        </div>
                        <div class="item">
                            <button>Área do Cliente</button>
                            <button>Área da Concessionária</button>
                        </div>
                    </div>
                    <div class="s-row">
                        <div class="item">
                            <p>Âncora Administradora de Consórcios S.A.CNPJ.: 60.375.243/0001-36Av. Dr Antônio Barbosa Filho, 1260Jd. Consolação - Franca/SP - CEP.: 14400-005Banco Central do Brasil / www.bcb.gov.br / 145Aut. Bacen 03/00/188/89</p>
                        </div>
                        <div class="item"><img src={ancora} alt="Âncora" loading='lazy'  width="275px" height="73px"/>
                        </div>
                        <div class="item"><img src={kawasaki} alt="Kawasaki" loading='lazy' width="275px" height="73px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export const foot =`
    .content__footer {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .content__footer .f-row {
        display: flex;
        gap: 5em;
        padding: 40px 0px;
        justify-content: space-around;
        align-items: flex-start; 
    }
    .content__footer .f-row .item {
        display: flex;
        gap: 1em;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        text-align: left;
        
        width: calc(100%/5);
    }
    .content__footer .f-row .item a {
        color: white;
        text-decoration: none; 
    }
    .content__footer .f-row .item a:hover {
        color: var(--green-k);
        text-decoration: underline;
    }
    .content__footer .f-row .item a:visited {
        color: var(--green-k);
    }
    .content__footer .f-row .item button {
        font-family: "Montserrat", sans-serif;
        font-size: .9em;
        font-weight: bold;
        border-radius: 30px; 
        text-align: center;
        background-color: var(--green-k);
        color: white;
        width: 100%;
        padding: 10px 20px; 
    }
    .content__footer .f-row .item button:hover {
        filter: contrast(80%);
        cursor: pointer;
    }
    .content__footer .s-row {
        display: flex;
        gap: 5em;
        padding: 40px 0px;
        justify-content: space-around;
        align-items: flex-start; 
    }
    .content__footer .s-row .item {
        width: calc(100%/3);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .content__footer .s-row .item img {
        width: 80%;
    }
    .content__footer .s-row .item p {
        text-align: left;
        font-weight: bold;
        font-size: 1em;
    }

    @media (max-width: 768px) {
        .container__footer {
            width: 100%;
        }
        .content__footer .f-row {
            flex-wrap: wrap
        }
        .content__footer .f-row .item {
            width: calc(100%/3);
        }
        .content__footer .f-row .item:last-child {
            width: calc(100%/1.5);
        }
        .content__footer .s-row {
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center; 
        }
        .content__footer .s-row .item {
            width: calc(100%/1.2);
            text-align: center;
        }
    }
`;