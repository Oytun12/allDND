const toggleMenu = () => {
    const menu = document.getElementById('hamburger-menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('visible');
    } else {
        menu.classList.remove('visible');
        menu.classList.add('hidden');
    }
};

// En yakın başlık (h1, h2, h3, h4, h5, h6) bulma fonksiyonu
const findNearestHeading = (element) => {
    let sibling = element.previousElementSibling;
    while (sibling) {
        if (/^H[1-6]$/.test(sibling.tagName)) {
            return sibling;
        }
        sibling = sibling.previousElementSibling;
    }
    return null;
};

// Bir sonraki başlığı bulma fonksiyonu
const findNextVisibleHeading = (element) => {
    let sibling = element.nextElementSibling;
    while (sibling) {
        if (/^H[1-6]$/.test(sibling.tagName) && sibling.offsetParent !== null) {
            return sibling;
        }
        sibling = sibling.nextElementSibling;
    }
    return null;
};

// Menü dışında bir yere tıklanınca menüyü gizle
document.addEventListener('click', (event) => {
    const menu = document.getElementById('hamburger-menu');
    const menuIcon = document.querySelector('.menu-icon');

    // Eğer tıklama menüde veya menü ikonu üzerindeyse bir şey yapma
    if (menu.contains(event.target) || menuIcon.contains(event.target)) {
        return;
    }

    // Aksi halde menüyü gizle
    if (menu.classList.contains('visible')) {
        menu.classList.remove('visible');
        menu.classList.add('hidden');
    }

    // Tıklanan eleman collapsible öğesi veya onun içeriği değilse collapsible içeriklerini gizle
    const collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach(collapsible => {
        const content = collapsible.nextElementSibling;
        if (content && content.classList.contains('visible') && !collapsible.contains(event.target) && !content.contains(event.target)) {
            content.classList.remove('visible');
            content.classList.add('hidden');

            // Bir sonraki başlığa kaydır
            const nextHeading = findNextVisibleHeading(collapsible);
            if (nextHeading) {
                nextHeading.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const collapsibles = document.querySelectorAll(".collapsible");

    collapsibles.forEach(collapsible => {
        collapsible.addEventListener("click", function() {
            const content = this.nextElementSibling;
            if (content) {
                const isVisible = content.classList.contains('visible');
                content.classList.toggle("hidden");
                content.classList.toggle("visible");

                // İçeriğin açılma/kapanma işlemi tamamlandıktan sonra kaydırma işlemini gerçekleştir
                setTimeout(() => {
                    this.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 0);
            }
        });
    });
});
