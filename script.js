/**
 * Syamimi Edora - Executive Administrator Portfolio / CV
 * Interactive JavaScript Functions
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileNav();
    initScrollSpy();
    initPrint();
    initFooterYear();
    initGallery();
});

/* ===================================================================
   1. Theme Management (Light / Dark Mode)
   =================================================================== */
function initTheme() {
    const themeToggleBtn = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set initial theme
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (systemPrefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }

    // Toggle event
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            showToast(`Mode ${newTheme === 'dark' ? 'Gelap (Dark)' : 'Terang (Light)'} diaktifkan`);
        });
    }
}

/* ===================================================================
   2. Mobile Navigation Menu
   =================================================================== */
function initMobileNav() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            const isOpen = navMenu.classList.contains('open');
            mobileMenuBtn.setAttribute('aria-expanded', isOpen);
        });

        // Close mobile nav when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('open')) {
                    navMenu.classList.remove('open');
                }
            });
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navMenu.classList.remove('open');
            }
        });
    }
}

/* ===================================================================
   3. ScrollSpy (Active Section in Navbar)
   =================================================================== */
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSection = '';
        const scrollPosition = window.pageYOffset + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
}

/* ===================================================================
   4. Print CV Action
   =================================================================== */
function initPrint() {
    const printBtn = document.getElementById('printBtn');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }
}

/* ===================================================================
   5. Dynamic Footer Year
   =================================================================== */
function initFooterYear() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

/* ===================================================================
   6. Copy Text to Clipboard & Toast
   =================================================================== */
window.copyText = function(text, successMessage) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(successMessage || 'Teks berhasil disalin!');
        }).catch(err => {
            fallbackCopyText(text, successMessage);
        });
    } else {
        fallbackCopyText(text, successMessage);
    }
};

function fallbackCopyText(text, successMessage) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
        showToast(successMessage || 'Teks berhasil disalin!');
    } catch (err) {
        showToast('Gagal menyalin teks.');
    }
    document.body.removeChild(textArea);
}

/* ===================================================================
   7. Toast Notification Utility
   =================================================================== */
let toastTimeout;
window.showToast = function(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');

    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3200);
};

/* ===================================================================
   8. Contact Form Submission
   =================================================================== */
window.handleFormSubmit = function(event) {
    event.preventDefault();

    const senderName = document.getElementById('senderName').value.trim();
    const senderEmail = document.getElementById('senderEmail').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!senderName || !senderEmail || !message) {
        showToast('Mohon lengkapi formulir terlebih dahulu.');
        return;
    }

    // Tampilkan notifikasi konfirmasi
    showToast(`Terima kasih, ${senderName}! Pesan Anda telah disiapkan.`);

    // Opsi untuk langsung membuka aplikasi email pengirim (mailto)
    setTimeout(() => {
        const mailtoLink = `mailto:syamimiedora@email.com?subject=${encodeURIComponent(`[Peluang Kerja/Kontak] ${subject}`)}&body=${encodeURIComponent(`Halo Syamimi,\n\nNama: ${senderName}\nEmail: ${senderEmail}\n\nPesan:\n${message}`)}`;
        window.location.href = mailtoLink;
    }, 1200);

    // Reset formulir
    document.getElementById('contactForm').reset();
};

/* ===================================================================
   9. Galeri Kegiatan (Filter & Lightbox Preview)
   =================================================================== */
let currentLightboxIndex = 0;

function initGallery() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryCards = document.querySelectorAll('.gallery-card');

    if (!filterButtons.length || !galleryCards.length) return;

    // Filter Buttons Click
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            galleryCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // Keyboard navigation for lightbox
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('lightboxModal');
        if (!modal || !modal.classList.contains('active')) return;

        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            changeLightboxItem(-1);
        } else if (e.key === 'ArrowRight') {
            changeLightboxItem(1);
        }
    });
}

function getVisibleCards() {
    const allCards = Array.from(document.querySelectorAll('.gallery-card'));
    return allCards.filter(card => !card.classList.contains('hidden'));
}

window.openLightbox = function(index) {
    const allCards = Array.from(document.querySelectorAll('.gallery-card'));
    if (!allCards[index]) return;

    currentLightboxIndex = index;
    updateLightboxUI(allCards[index]);

    const modal = document.getElementById('lightboxModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

window.closeLightbox = function() {
    const modal = document.getElementById('lightboxModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

window.handleLightboxBackdrop = function(event) {
    if (event.target.id === 'lightboxModal') {
        closeLightbox();
    }
};

window.changeLightboxItem = function(direction) {
    const allCards = Array.from(document.querySelectorAll('.gallery-card'));
    if (!allCards.length) return;

    currentLightboxIndex += direction;

    if (currentLightboxIndex >= allCards.length) {
        currentLightboxIndex = 0;
    } else if (currentLightboxIndex < 0) {
        currentLightboxIndex = allCards.length - 1;
    }

    updateLightboxUI(allCards[currentLightboxIndex]);
};

function updateLightboxUI(card) {
    const imgEl = card.querySelector('.gallery-img');
    const badgeEl = card.querySelector('.gallery-badge');
    const dateEl = card.querySelector('.gallery-date');
    const titleEl = card.querySelector('.gallery-title');
    const snippetEl = card.querySelector('.gallery-snippet');

    const modalImg = document.getElementById('lightboxImg');
    const modalBadge = document.getElementById('lightboxBadge');
    const modalDate = document.getElementById('lightboxDate');
    const modalTitle = document.getElementById('lightboxTitle');
    const modalDesc = document.getElementById('lightboxDesc');

    if (modalImg && imgEl) {
        modalImg.src = imgEl.src;
        modalImg.alt = imgEl.alt || 'Foto Kegiatan';
    }
    if (modalBadge && badgeEl) modalBadge.textContent = badgeEl.textContent;
    if (modalDate && dateEl) modalDate.textContent = dateEl.textContent;
    if (modalTitle && titleEl) modalTitle.textContent = titleEl.textContent;
    if (modalDesc && snippetEl) modalDesc.textContent = snippetEl.textContent;
}
