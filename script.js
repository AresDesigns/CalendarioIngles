   document.addEventListener('DOMContentLoaded', () => {
            const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
            const nivelA2 = document.getElementById('nivel-a2');
            
            if (!scrollToTopBtn || !nivelA2) {
                console.error("No se encontraron los elementos necesarios.");
                return;
            }

            // Muestra u oculta el botón al hacer scroll
            window.addEventListener('scroll', () => {
                const a2Position = nivelA2.getBoundingClientRect();
                if (a2Position.top <= window.innerHeight && a2Position.bottom >= 0) {
                    scrollToTopBtn.classList.add('visible');
                } else if (window.scrollY > nivelA2.offsetTop) {
                     scrollToTopBtn.classList.add('visible');
                } else {
                    scrollToTopBtn.classList.remove('visible');
                }
            });

            // Acción al hacer clic en el botón
            scrollToTopBtn.addEventListener('click', () => {
                const targetElement = document.getElementById('resumen-del-plan-anual');
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        });
