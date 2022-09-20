import { LitElement, html,css } from 'lit-element';

export class ComponentGiphy extends LitElement {

    static get is() {
        return 'component-giphy';
      }

    static get properties() {
        return {
          title: { type: String },
          img: { type: String },
        };
    }

    static get styles() {
        return css`
            .container{
                width: 320px;
                margin: 10px;
                display:inline-block;
            }
            .containerInfo {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                align-items: center;
                background-color: #003366;
            }
            h1{
                color: white;
                text-align: center;
            }
            img {
                width: 100%;
                max-height: 300px;
            }
            button {
                padding: 10px;
                background-color: #4CAF50;
                color: white;
                font-family: sans-serif;
                font-size: 16px;
                cursor: pointer;
            }
        `;
    }

    handleClick() {
        this.dispatchEvent(new CustomEvent('add-to-cart', {
            detail: {
            },
        }));
        console.log('navego jsajsajja')
    }


    render() {
        return html`
            <div class="container">
                <div class="containerInfo" >
                    <h1>${this.title}</h1>
                    <img src="${this.img}" alt="giphy">
                    <button @click=${this.handleClick}  >Agregar al carrito</button>
                </div>
            </div>
        `;
    }
}