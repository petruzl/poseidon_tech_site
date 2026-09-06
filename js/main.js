let lastScrollTop = 0;

window.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navbarCollapse = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Fecha a sanfona do menu se o usuário rolar com ela aberta
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) {
                bsCollapse.hide();
            }
        }

        // Se estiver no topo, garante que a navbar está visível
        if (scrollTop <= 10) {
            navbar.classList.remove('navbar-hidden');
            lastScrollTop = scrollTop;
            return;
        }

        // Rola para baixo: esconde a barra | Rola para cima: mostra a barra
        if (scrollTop > lastScrollTop) {
            navbar.classList.add('navbar-hidden');
        } else {
            navbar.classList.remove('navbar-hidden');
        }

        lastScrollTop = scrollTop;
    });
});