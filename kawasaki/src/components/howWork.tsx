import { component$, useStyles$ } from '@builder.io/qwik';
import Comments from './comments';

export default component$(() => {
    useStyles$(how)

    return(
        <div class="outside__how">
            <div class="container container__how">
                <div class="content__how">
                    <div class="how__work">
                        <div class="text">
                            <h2> Como Funciona o Consórcio?</h2>
                            <p>Ajudamos você a realizar seu sonho. Mas devemos explicar a você como tudo isso funciona.</p>
                        </div>
                        <div class="items">
                            <div class="item">
                                <span class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                </span>
                                <h3>Pagamentos</h3>
                                <p>Os pagamentos são mensais e sem juros.</p>
                            </div>
                            <div class="item">
                                <span class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                    </svg>

                                </span>
                                <h3>Assembleias</h3>
                                <p>O consorciado participa de assembleias mensais e pode ser contemplado por sorteio ou lance.</p>
                            </div>
                            <div class="item">
                                <span class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                    </svg>

                                </span>
                                <h3>Ao ser contemplado</h3>
                                <p>A administradora disponibiliza o crédito, e após a aprovação, o cliente esta apto a retirar a moto em qualquer concessionária credenciada.</p>
                            </div>
                            <div class="item">
                                <span class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                    </svg>

                                </span>
                                <h3>Término do plano</h3>
                                <p>Até o término do plano, todos os clientes serão contemplados ou receberão seu dinheiro de volta.</p>
                            </div>
                        </div>
                    </div>
                    <Comments />
                </div>
            </div>
        </div>
    )
})

export const how =`
    .outside__how{
        min-height: 100vh;
        width: 100vw;

        background-image: url("sobre_c.webp");
        background-size: cover;
        background-repeat: no-repeat;
    }
    .container__how {
        min-height: 100vh;
        max-height: 100%;
    }
    .content__how {
        margin-top: 4em;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .how__work {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center; 

        background-color: #212121;
        padding: 30px;
        border-radius: 30px;
    }
    .text {
        text-align: center;
    }
    .text h2 {
        font-weight: 800;
        font-size: 1.5em;
        margin-bottom: .5em;
    }
    .text p {
        font-weight: 400;
        font-size: 1em:
    }
    .items {
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
    }
    .items .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 25%;

        text-align: center;

        margin: 5px 10px;
    }
    .item .icon {
        height: 40px;
        width: 40px;
        margin-bottom: .8em;
    }
    .item h3 {
        font-weight: 800;
        font-size: 1.3em;
        margin-bottom: .8em;
    }
    .item p {
        font-weight: 400;
        font-size: .8em;
    }

    @media (max-width: 768px){
        .how__work{
            margin-top: 2em;
            max-width: 100vw;
        }
        .content__how{
            width: 100%;
        }
        .how__work .items {
            flex-direction: column;
        }
       .how__work .text .items {
            align-items: center;
        }
        .text {
            margin-bottom: 2em;
        }
       .items .item {
            width: 90%;
        }
        .item .icon{
            margin-top: 2em;   
        }
    }
`;