window.addEventListener('scroll', function() {
    const nav = document.getElementById('mainNav');
    const scroll_threshold = 50;
    if (window.scrollY > scroll_threshold) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

const translations = {
    en: {
        navHome: "Home",
        navHouses: "Houses",
        navRules: "Rules", // Nova tradução
        navAbout: "About Us",
        heroTitle: "CASATEMPORADA",
        heroSubtitle: "Cavalcante - CHAPADA DOS VEADEIROS - BRAZIL",
        housesMainTitle: "Our Houses",
        barrocoName: "BARROCO HOUSE",
        santaBarbaraName: "SANTA BARBARA HOUSE",
        prataName: "PRATA HOUSE",
        rulesMainTitle: "House Rules & Information", // Nova tradução
        mapTitle: "Our Location",
        placeholderTitle: "Additional Section",
        placeholderText: "Demonstration content here."
    },
    pt: {
        navHome: "Home",
        navHouses: "Casas",
        navRules: "Regras", // Nova tradução
        navAbout: "Sobre Nós",
        heroTitle: "CASATEMPORADA",
        heroSubtitle: "Cavalcante - CHAPADA DOS VEADEIROS - BRASIL",
        housesMainTitle: "Nossas Casas",
        barrocoName: "CASA BARROCO",
        santaBarbaraName: "CASA SANTA BÁRBARA",
        prataName: "CASA PRATA",
        rulesMainTitle: "Regras da Casa & Informações", // Nova tradução
        mapTitle: "Nossa Localização",
        placeholderTitle: "Seção Adicional",
        placeholderText: "Conteúdo de demonstração aqui."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langPtButton = document.getElementById('lang-pt');
    const langEnButton = document.getElementById('lang-en');

    function updateButtonStyles(selectedLang) {
        if (selectedLang === 'pt') {
            langPtButton.classList.add('active');
            langEnButton.classList.remove('active');
        } else {
            langEnButton.classList.add('active');
            langPtButton.classList.remove('active');
        }
    }

    function setLanguage(lang) {
        // Atualiza textos simples usando data-translate
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Alterna a visibilidade das descrições das casas e regras
        document.querySelectorAll('.lang-content').forEach(div => {
            if (div.classList.contains(`lang-${lang}`)) {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
        });

        // Alterna a visibilidade das imagens específicas do idioma (ex: na seção de regras)
        document.querySelectorAll('.lang-image').forEach(img => {
            if (img.classList.contains(`lang-${lang}-image`)) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });

        document.documentElement.lang = lang;
        localStorage.setItem('preferredLanguage', lang);
        updateButtonStyles(lang);
    }

    langPtButton.addEventListener('click', () => setLanguage('pt'));
    langEnButton.addEventListener('click', () => setLanguage('en'));

    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'pt';
    setLanguage(preferredLanguage);
});