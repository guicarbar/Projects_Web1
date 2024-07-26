class carrousel extends HTMLElement {
    constructor () {
        super()
        
        const shadow = this.attachShadow({mode: "open"})
        
        shadow.appendChild(this.build())
        shadow.appendChild(this.style())
    }

    build() {
        var main = document.createElement('div')
        main.setAttribute('class', 'itemCarrousel')

        var title = document.createElement('h3')
        title.textContent = this.getAttribute('titulo')
        main.appendChild(title)

        var div = document.createElement('div')
        div.setAttribute("class", "texto")
        div.textContent = this.getAttribute('conteudo')
        main.appendChild(div)

        return main
    }

    style() {
        var style = document.createElement('style')
        style.textContent = `
            .itemCarrousel {
                background-image: url('img/Pc.png');
                background-position: center center;
                background-size: cover;
                width: 100%;
                height: 300px;
                display: flex;
                flex-flow: column nowrap;
                justify-content: space-between;
                align-items: center;
                border-radius: 30px;
            }

            h3 {
                margin: 1em 0px 0px;
                padding: 1em 3em;
                text-align: center;
                background-color: var(--color2);
                border-radius: 30px;
                color: var(--color5);
                font-weight: 800;
                border: 1px solid var(--color5);
                box-shadow: 0px 0px 15px var(--color5);
            }

            .texto {
                background-color: var(--color2);
                margin: 10px 1em;
                text-align: center;
                border-radius: 30px;
                border: 1px solid var(--color5);
                box-shadow: 0px 0px 15px var(--color5);
                color: var(--color5);
                padding: 1em 2em;
            }

            @media only screen and (min-width: 600px) {
                .itemCarrousel {
                    height: 506px;
                }
            }
        `

        return style
    }
}

customElements.define('carrousel-item', carrousel)