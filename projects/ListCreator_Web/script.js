var itemSequencia = 1
var lista = document.getElementById('lista')

function criar(event) {
    event.preventDefault()

    var inputText = document.getElementById('input').value
    if (inputText.trim() === "") {
        alert("Por favor, digite algo.")
        return
    }

    var itemLista = `
        <div class="item" id="item${itemSequencia}">
            <p>${inputText}</p>
            <button onclick="deleteItem('item${itemSequencia}')">
                <span class="material-symbols-outlined">delete</span>
            </button>
        </div>
    `

    lista.insertAdjacentHTML('beforeend', itemLista)
    itemSequencia += 1
    document.getElementById('input').value = ""
}

function deleteItem(itemId) {
    var item = document.getElementById(itemId)
    if (item) {
        item.remove()
    }
}
