import { component$, useStyles$ } from '@builder.io/qwik';
import ancora from "src/assets/img/ancora.webp"
import kawasaki from "src/assets/img/kawasaki.webp"

export default component$(() => {

    useStyles$(foot)

    return (
        <div class="outside__footer">
            <div class="container container__footer">
                <div class="content__footer">
                    <div class="s-row">
                        <div class="item">
                            <p>
                                Âncora Administradora de Consórcios S.A.<br />
                                CNPJ.: 60.375.243/0001-36<br />
                                Av. Dr Antônio Barbosa Filho, 1260<br />
                                Jd. Consolação - Franca/SP<br />
                                CEP: 14400-005<br />
                                Banco Central do Brasil / www.bcb.gov.br / 145<br/>
                                Aut. Bacen 03/00/188/89</p>
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