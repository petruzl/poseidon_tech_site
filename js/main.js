let lastScrollTop = 0;

window.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navbarCollapse = document.getElementById('navbar');

    // Fecha o menu no celular apenas se clicar em link da mesma página (âncoras como #servicos)
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', () => {
            const href = link.getAttribute('href');
            if (href && (href.startsWith('#') || href.includes('#'))) {
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });

    // Animação de esconder ao rolar para baixo e mostrar ao subir
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Fecha o menu sanfona se o usuário começar a rolar a tela
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }

        // Não esconde a barra enquanto estiver perto do topo
        if (scrollTop <= 20) {
            navbar.classList.remove('navbar-hidden');
            lastScrollTop = scrollTop;
            return;
        }

        // Descendo: oculta | Subindo: exibe
        if (scrollTop > lastScrollTop) {
            navbar.classList.add('navbar-hidden');
        } else {
            navbar.classList.remove('navbar-hidden');
        }

        lastScrollTop = scrollTop;
    });
});