document.addEventListener('DOMContentLoaded', function () {
    const navbarCollapse = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Fecha a sanfona do celular suavemente após clicar em um item
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });
});