import { LitElement, html, css } from 'lit-element';
import '../../component-giphy/component-giphy';

export class ListGiphy extends LitElement {

    static get is() {
        return 'list-giphy';
      }

    static get properties() {
        return {
          data: { type: Array },
        };
    }

    successResponseApi(e) {
        console.log('successResponseApi', e);
        this.data = e.data;
        console.log('Hello from list-giphy', this.data);
    }

    static get styles() {
        return css`
            .container {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
            }
        `;
    }


    render() {
        return html`
        <h1>Components Giphy</h1>
          <div class="container" >
            ${this.data?.map((item) => html`
                <component-giphy
                    title="${item.title}"
                    img="${item.images.original.url}"
                >
                </component-giphy>
            `)}
          </div>
        `;
    }
}