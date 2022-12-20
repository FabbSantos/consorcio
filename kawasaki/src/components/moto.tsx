import { component$, useStyles$ } from '@builder.io/qwik';
import moto2 from 'src/assets/img/moto2.webp'

export default component$(() => {
    useStyles$(moto)

    return (
        <div class="outside outside__moto">
            <div class="container container__moto">
                <div class="content__moto">
                    <div class="f-row">
                        <div class="left">
                            <div class="text">
                                <h2>Ninja 400</h2>
                                <p>R$35.810</p>
                            </div>

                            <button>Fale com um Consultor</button>
                        </div>
                        <div class="right">
                            <img src={moto2} alt="Ninja 400" loading='lazy' height="315px" width="530px" />
                        </div>
                    </div>
                    <div class="s-row">
                        <div class="carac">
                            <div class="item">
                                <h4>48cv-10rpm</h4>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                            </div>
                            <div class="item">
                                <h4>399cc</h4>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                </span>
                            </div>
                            <div class="item">
                                <h4>4T/2C/8V</h4>
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export const moto = `
    .outside__moto {
        // background-image: url("second_part.webp");
        background-size: cover;
        background-repeat: no-repeat;
    }
    .container__moto {
        min-height: 90vh;
        width: 100%;
    }
    .content__moto {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .content__moto .f-row {
        display: flex;
        justify-content: space-around;   
        align-items: center;
        gap: 0em;
        padding: 0 5em;
    }
    .content__moto .f-row .left {
        display: flex;;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        text-align: left;
        gap: 1em;
    }
    .content__moto .f-row .left .text { 
        width: 50%;
        font-weight: 800;
        text-align: left;
    }
    .content__moto .f-row .left .text h2{ 
        font-size: 2.3em;
    }
    .content__moto .f-row .left .text p{
        font-size: 1.5em;
    } 
    .content__moto .f-row .left button{
        background-color: var(--green-k);
        border: none;
        font-family: "Montserrat", sans-serif;
        font-weight: bold;
        font-size: 1.2em;
        color: white;
        border-radius: 30px 5px 30px 5px;
        padding: 15px 30px;
    }
    .content__moto .f-row .left button:hover{
        cursor: pointer;
        filter: contrast(80%);
    }
    
    
    .content__moto .s-row {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .content__moto .s-row .carac {
        border-radius: 30px 5px 30px 5px;
        padding: 10px;
        width: 80%;
        margin: 2em 3em;
    }
    .content__moto .s-row .carac .item {
        gap: 0;
        display: flex;
        flex-direction: column;
    }
    .content__moto .s-row .carac .item span {
        height: 40px;
        width: 40px;
    }

    @media (max-width: 768px) {
        .content__moto .f-row .right img {
            width:300px;
            height: auto;
        }
        .content__moto .f-row {
            flex-direction: column;
        }
        .container__moto {
            padding: 20px 0;
            width: 95%;
        }
        .outside__moto {
            background-image: none;
            background-color: black;
            min-height: auto;
        }
        .content__moto .s-row .carac {
            flex-direction: row;
            gap: .8em;
            width: 100%;
        }
        .content__moto .f-row .left button {
            width: 80%;
            margin-bottom: 1em;
        }
        .content__moto .f-row .left {
            width: 100%;
        }
        .content__moto .f-row .left .text {
            width: 100%;
            text-align: center;
        }
        .content__moto .f-row {
            padding: 0;
        }
        .content__moto .s-row .carac .item span {
            height: 30px;
            width: 30px;
        }
    }

`;