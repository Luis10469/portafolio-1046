// Navegación responsiva - Toggle menú hamburguesa
(function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
        navToggle.setAttribute('aria-expanded', !expanded);
        navMenu.classList.toggle('nav-menu_visible');
        navToggle.classList.toggle('nav-toggle_active');
    });

    // Cerrar menú al seleccionar un enlace (en móvil)
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('nav-menu_visible')) {
                navMenu.classList.remove('nav-menu_visible');
                navToggle.setAttribute('aria-expanded', false);
                navToggle.classList.remove('nav-toggle_active');
            }
        });
    });
})();

// Animaciones al hacer scroll para secciones-CODIGO DE JAVA 
(function () {
    const animatedSections = document.querySelectorAll('.animated-section');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
            rect.bottom >= 0
        );
    }

    function runAnimations() {
        animatedSections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('fade-slide-in');
            }
        });
    }

    window.addEventListener('scroll', runAnimations);
    window.addEventListener('load', runAnimations);
})();

// Validación simple del formulario de contacto
(function () {
    const form = document.getElementById('contact-form');
    const inputs = {
        nombre: form.elements['nombre'],
        email: form.elements['email'],
        mensaje: form.elements['mensaje']
    };
    const errors = {
        nombre: document.getElementById('nombre-error'),
        email: document.getElementById('email-error'),
        mensaje: document.getElementById('mensaje-error')
    };
    const feedback = form.querySelector('.form-feedback');

    function validateNombre() {
        const value = inputs.nombre.value.trim();
        if (value.length < 2) {
            errors.nombre.textContent = 'El nombre debe tener al menos 2 caracteres.';
            return false;
        }
        if (value.length > 50) {
            errors.nombre.textContent = 'El nombre no puede superar 50 caracteres.';
            return false;
        }
        errors.nombre.textContent = '';
        return true;
    }

    function validateEmail() {
        const value = inputs.email.value.trim();
        // Email regex simple para validación básica
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
            errors.email.textContent = 'Por favor, introduce un correo electrónico válido.';
            return false;
        }
        errors.email.textContent = '';
        return true;
    }

    function validateMensaje() {
        const value = inputs.mensaje.value.trim();
        if (value.length < 10) {
            errors.mensaje.textContent = 'El mensaje debe tener al menos 10 caracteres.';
            return false;
        }
        if (value.length > 500) {
            errors.mensaje.textContent = 'El mensaje no puede superar 500 caracteres.';
            return false;
        }
        errors.mensaje.textContent = '';
        return true;
    }

    inputs.nombre.addEventListener('input', validateNombre);
    inputs.email.addEventListener('input', validateEmail);
    inputs.mensaje.addEventListener('input', validateMensaje);

    form.addEventListener('submit', event => {
        event.preventDefault();
        feedback.textContent = '';
        const isNombreValid = validateNombre();
        const isEmailValid = validateEmail();
        const isMensajeValid = validateMensaje();

        if (isNombreValid && isEmailValid && isMensajeValid) {
            // Aquí se podría integrar backend o servicio de envío
            feedback.textContent = 'Gracias por tu mensaje. Me pondré en contacto contigo pronto.';
            feedback.style.color = 'var(--color-primary)';
            form.reset();
        } else {
            feedback.textContent = 'Por favor, corrige los errores antes de enviar.';
            feedback.style.color = '#cc0000';
        }
    });
})();