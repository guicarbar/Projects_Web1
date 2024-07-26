function navbar() {
    const nav = document.getElementById('navbar')

    if (nav.style.display === 'none') {
        nav.style.display = 'flex'
    } else {
        nav.style.display = 'none'
    }
}