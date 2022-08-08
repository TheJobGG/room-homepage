const open = document.querySelector('.hamburger-icon');


open.addEventListener('click', function () {
    modal();
    open.style.display = 'none';
});


const links = {
    'home': '#',
    'shop': '#',
    'about': '#',
    'contact': '#'
}

/* Modal del menu para móvil */
function modal() {
    const closeSVG = `<svg class="close-icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z" fill="#000" fill-rule="evenodd" opacity=".201"/></svg>`


    const close = document.createElement('div')
    close.innerHTML = closeSVG;
    close.classList.add('menu-mobile');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    document.body.appendChild(modal)

    const options = document.createElement('div');
    options.classList.add('mobile-options');

    for (const key in links) {
        let link = document.createElement('a');
        link.textContent = key;
        link.setAttribute('href', `${links[key]}`);

        // Cierra el modal pero la redirección se efectuará al target especificado.
        link.addEventListener('click', function () {
            modal.remove();
            open.style.display = 'flex';
        });
        options.appendChild(link);
    }

    const copyOfOptions = options;
    close.append(copyOfOptions);
    modal.append(close);

    const closeModal = document.querySelector('.close-icon');

    closeModal.addEventListener('click', function () {
        modal.remove();
        open.style.display = 'flex';
    });

}