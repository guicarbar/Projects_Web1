class news extends HTMLElement {
    constructor () {
        super()

        const shadow = this.attachShadow({mode: "open"})

        shadow.appendChild(this.build())
        shadow.appendChild(this.style())
    }

    build() {
        var main = document.createElement('div')
        main.setAttribute("class", "newsItem")

        var autor = document.createElement('p')
        autor.setAttribute("class", "autor")
        autor.textContent = "Guilherme Carvalho"
        main.appendChild(autor)

        var titulo = document.createElement('h2')
        titulo.textContent = this.getAttribute('tituloNews')
        main.appendChild(titulo)

        var text = document.createElement('p')
        text.setAttribute("class", "conteudo")
        text.textContent = this.getAttribute('conteudoNews')
        main.appendChild(text)

        return main
    }

    style() {
        var style = document.createElement('style')
        style.textContent = `
            .newsItem {
                border: 2px solid var(--color1);
                box-shadow: 10px 10px 15px var(--color1);
                border-radius: 30px;
                padding: 1em;
                margin: 10px;
            }

            .autor {
                color: gray;
            }

            h2 {
                margin: 10px 10px;
            }

            .conteudo {
                text-indent: 1em;
            }
        `

        return style
    }
}

customElements.define("card-news", news)