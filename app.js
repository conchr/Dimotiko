/* ============================================================
   1ο ΔΗΜΟΤΙΚΟ ΣΧΟΛΕΙΟ ΦΑΡΣΑΛΩΝ — PRESENTATION SCRIPT
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

    const slidesData = [

        // --------------------------------------------------------
        // SLIDE 1 — Κάλυμμα
        // --------------------------------------------------------
        {
            cover: true,
            eyebrow: 'Δήμος Φαρσάλων · 2026',
            title: 'Ένα Κτήριο, Μια Ιστορία',
            subtitle: 'Η πορεία του 1ου Δημοτικού Σχολείου Φαρσάλων',
            image: {
                src: 'https://raw.githubusercontent.com/conchr/Dimotiko/main/Dimotiko.jpg',
                alt: '1ο Δημοτικό Σχολείο Φαρσάλων',
                caption: 'Το ιστορικό κτήριο του 1ου Δημοτικού Σχολείου Φαρσάλων'
            }
        },

        // --------------------------------------------------------
        // SLIDE 2 — Ταυτότητα Κτηρίου
        // --------------------------------------------------------
        {
            title: 'Η Ταυτότητα του Κτηρίου',
            content: `
                <ul class="bullet-list">
                    <li>Στεγάζει τη σύγχρονη <strong>Αρχαιολογική Συλλογή Φαρσάλων</strong>.</li>
                    <li>Φιλοξενεί ευρήματα από όλη την επαρχία, συμπεριλαμβανομένου του <strong>Κάστρου Καλλιθέας</strong>.</li>
                    <li>Πρόκειται για το ιστορικό <strong>1ο Δημοτικό Σχολείο</strong> της πόλης.</li>
                    <li>Ένα κτήριο που συνδέει την <strong>εκπαιδευτική ιστορία</strong> με την <strong>αρχαία κληρονομιά</strong>.</li>
                </ul>

                <div class="highlight-box">
                    <h3 class="box-title"><i class="fas fa-landmark"></i> Διπλή Κληρονομιά</h3>
                    <p class="box-text">Ένα κτήριο που φιλοξένησε γενιές μαθητών, σήμερα φιλοξενεί τα αρχαία ευρήματα της περιοχής — μια σπάνια μετάβαση από την εκπαίδευση στον πολιτισμό.</p>
                </div>
            `
        },

        // --------------------------------------------------------
        // SLIDE 3 — Έτος Ορόσημο
        // --------------------------------------------------------
        {
            title: 'Το Έτος Ορόσημο',
            content: `
                <div class="year-highlight">1928</div>
                <p class="slide-text center-text" style="font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: clamp(1rem, 1.5vw, 1.35rem); color: var(--gold-light); margin: 0.25rem 0 1rem;">Έτος Κατασκευής</p>

                <p class="slide-text center-text">Το κτήριο κατασκευάστηκε το <strong>1928</strong>, μετά τη συγχώνευση του Αρρεναγωγείου και του Παρθεναγωγείου της πόλης (1927) στο νέο <strong>6-τάξιο Α' Δημοτικό Σχολείο</strong>.</p>

                <div class="cards-grid" style="margin-top: 1rem;">
                    <div class="info-card">
                        <i class="fas fa-calendar-alt icon-big"></i>
                        <h3>1927</h3>
                        <p>Συγχώνευση Αρρεναγωγείου &amp; Παρθεναγωγείου</p>
                    </div>
                    <div class="info-card">
                        <i class="fas fa-school icon-big"></i>
                        <h3>1928</h3>
                        <p>Κατασκευή του νέου 6-τάξιου σχολείου</p>
                    </div>
                </div>
            `
        },

        // --------------------------------------------------------
        // SLIDE 4 — Εθνικό Πρόγραμμα
        // --------------------------------------------------------
        {
            title: 'Ένα Εθνικό Πρόγραμμα',
            content: `
                <p class="slide-text center-text">Μέρος του <strong>πανελλαδικού προγράμματος ανέγερσης σχολικών κτηρίων</strong> της κυβέρνησης Ελευθερίου Βενιζέλου.</p>

                <div class="cards-grid" style="margin-top: 1rem;">
                    <div class="info-card">
                        <i class="fas fa-user-tie icon-big"></i>
                        <h3>Ελευθέριος Βενιζέλος</h3>
                        <p>Πρωθυπουργός της Ελλάδας — εμπνευστής του εκπαιδευτικού προγράμματος</p>
                    </div>
                    <div class="info-card">
                        <i class="fas fa-book-open icon-big"></i>
                        <h3>Γεώργιος Παπανδρέου</h3>
                        <p>Υπουργός Παιδείας — υπεύθυνος για την υλοποίηση</p>
                    </div>
                </div>

                <div class="highlight-box" style="margin-top: 1rem;">
                    <h3 class="box-title"><i class="fas fa-flag"></i> Εθνική Εκπαιδευτική Μεταρρύθμιση</h3>
                    <p class="box-text">Τη δεκαετία του 1920, η Ελλάδα επένδυσε μαζικά στη δημόσια εκπαίδευση. Χιλιάδες σχολικά κτήρια χτίστηκαν σε όλη τη χώρα, με το 1ο Δημοτικό Σχολείο Φαρσάλων να αποτελεί ένα από τα πιο χαρακτηριστικά παραδείγματα.</p>
                </div>
            `
        },

        // --------------------------------------------------------
        // SLIDE 5 — Αρχιτεκτονική & Αξία
        // --------------------------------------------------------
        {
            title: 'Αρχιτεκτονική &amp; Ιστορική Αξία',
            content: `
                <div class="cards-grid">
                    <div class="info-card">
                        <i class="fas fa-award icon-big"></i>
                        <h3>Νεότερο Μνημείο</h3>
                        <p>Χαρακτηρίστηκε <strong>ομόφωνα</strong> από το Κεντρικό Συμβούλιο Νεωτέρων Μνημείων (ΚΣΝΜ) του Υπουργείου Πολιτισμού.</p>
                    </div>
                    <div class="info-card">
                        <i class="fas fa-drafting-compass icon-big"></i>
                        <h3>Αρχιτεκτονική Κληρονομιά</h3>
                        <p>Αντιπροσωπευτικό δείγμα της <strong>τυποποιημένης σχολικής αρχιτεκτονικής</strong> της εποχής, με ιδιαίτερη σημασία για την ιστορία της εκπαίδευσης.</p>
                    </div>
                    <div class="info-card">
                        <i class="fas fa-lightbulb icon-big"></i>
                        <h3>Φάρος Γνώσης</h3>
                        <p>Λειτούργησε για δεκαετίες ως ο κύριος <strong>εκπαιδευτικός πυρήνας</strong> της πόλης, φιλοξενώντας γενιές μαθητών.</p>
                    </div>
                </div>
            `
        },

        // --------------------------------------------------------
        // SLIDE 6 — Η Μεταμόρφωση
        // --------------------------------------------------------
        {
            title: 'Η Μεταμόρφωση',
            content: `
                <div class="cards-grid">
                    <div class="info-card" style="grid-column: 1 / -1;">
                        <i class="fas fa-handshake icon-big"></i>
                        <h3>Παραχώρηση</h3>
                        <p>Ο <strong>Δήμος Φαρσάλων</strong> παραχώρησε τη χρήση του κτηρίου στο <strong>Υπουργείο Πολιτισμού για 99 έτη</strong>, αναγνωρίζοντας την ιστορική του αξία.</p>
                    </div>
                    <div class="info-card" style="grid-column: 1 / -1;">
                        <i class="fas fa-hammer icon-big"></i>
                        <h3>Αποκατάσταση</h3>
                        <p>Το κτήριο <strong>ανακαινίστηκε πλήρως</strong> και αποκαταστάθηκε μέσω προγράμματος <strong>ΕΣΠΑ</strong>, σεβόμενο απόλυτα την αρχική του μορφή και αρχιτεκτονική.</p>
                    </div>
                </div>
            `
        },

        // --------------------------------------------------------
        // SLIDE 7 — Το Κτήριο Σήμερα
        // --------------------------------------------------------
        {
            title: 'Το Κτήριο Σήμερα',
            content: `
                <div class="highlight-box green">
                    <h3 class="box-title"><i class="fas fa-check-circle"></i> Νέος Ρόλος</h3>
                    <p class="box-text">Από τον <strong>Ιούνιο του 2025</strong>, λειτουργεί ως η σύγχρονη <strong>Αρχαιολογική Συλλογή Φαρσάλων</strong>.</p>
                </div>

                <div class="highlight-box blue">
                    <h3 class="box-title"><i class="fas fa-history"></i> Γέφυρα μεταξύ Εποχών</h3>
                    <p class="box-text">Ένας πολιτιστικός χώρος που συνδέει το <strong>παρελθόν της εκπαίδευσης</strong> με το <strong>αρχαιολογικό παρελθόν</strong> της περιοχής.</p>
                </div>

                <div class="highlight-box amber">
                    <h3 class="box-title"><i class="fas fa-monument"></i> Διπλό Μνημείο</h3>
                    <p class="box-text">Αποτελεί πλέον ένα <strong>διπλό μνημείο</strong>: μνημείο αρχιτεκτονικής και <strong>κιβωτό μνήμης</strong>.</p>
                </div>
            `
        },

        // --------------------------------------------------------
        // SLIDE 8 — Τέλος
        // --------------------------------------------------------
        {
            title: 'Σας Ευχαριστούμε',
            content: `
                <div class="cover-content">
                    <p class="slide-eyebrow">Τέλος Παρουσίασης</p>
                    <h1 class="cover-title" style="font-size: clamp(1.5rem, min(4vw, 5.5vh), 3rem);">Ευχαριστώ</h1>

                    <div class="cover-divider" aria-hidden="true">
                        <span class="cover-divider-line"></span>
                        <span class="cover-divider-diamond">◆</span>
                        <span class="cover-divider-line"></span>
                    </div>

                    <p class="slide-text center-text">Ερωτήσεις;</p>

                    <div class="final-actions">
                        <button class="action-button action-btn-gold" onclick="goToFirstSlide()">
                            <i class="fas fa-redo"></i> Ξαναδές την Παρουσίαση
                        </button>
                        <a href="https://conchr.github.io/Farsala-Center-Page/" class="action-button action-btn-purple">
                            <i class="fas fa-home"></i> Κεντρική Σελίδα
                        </a>
                    </div>
                </div>
            `
        }

    ];

    // --------------------------------------------------------
    // DOM
    // --------------------------------------------------------
    const slidesContainer = document.getElementById('slides-container');
    const prevBtn         = document.getElementById('prevBtn');
    const nextBtn         = document.getElementById('nextBtn');
    const progressBar     = document.getElementById('progress-bar');
    const currentPageSpan = document.getElementById('currentPage');
    const totalPagesSpan  = document.getElementById('totalPages');

    let currentPageIndex = 1;
    const totalPages = slidesData.length;

    totalPagesSpan.textContent = totalPages;

    // --------------------------------------------------------
    // BUILD SLIDES
    // --------------------------------------------------------
    function buildSlides() {
        slidesData.forEach((slide, idx) => {
            const el = document.createElement('div');
            el.className = 'slide';
            el.id = 'page-' + (idx + 1);

            let content = '';

            if (slide.cover) {
                // Cover slide
                content = `
                    <div class="slide-content cover-content">
                        <p class="slide-eyebrow">${slide.eyebrow}</p>
                        <h1 class="cover-title">${slide.title}</h1>
                        <div class="cover-divider" aria-hidden="true">
                            <span class="cover-divider-line"></span>
                            <span class="cover-divider-diamond">◆</span>
                            <span class="cover-divider-line"></span>
                        </div>
                        <p class="cover-subtitle">${slide.subtitle}</p>
                        ${slide.image ? `
                            <div class="image-container">
                                <img src="${slide.image.src}" alt="${slide.image.alt}">
                                ${slide.image.caption ? `<p class="image-caption">${slide.image.caption}</p>` : ''}
                            </div>
                        ` : ''}
                    </div>
                `;
            } else {
                // Regular slide
                content = `
                    <div class="slide-content">
                        <h2 class="slide-title">${slide.title}</h2>
                        ${slide.content}
                    </div>
                `;
            }

            el.innerHTML = content;
            slidesContainer.appendChild(el);
        });
    }

    // --------------------------------------------------------
    // NAVIGATION
    // --------------------------------------------------------
    function updateProgress() {
        const pct = (currentPageIndex / totalPages) * 100;
        progressBar.style.width = pct + '%';
        currentPageSpan.textContent = currentPageIndex;
    }

    function showPage(index) {
        if (index < 1 || index > totalPages) return;

        document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));

        const target = document.getElementById('page-' + index);
        if (target) {
            target.classList.add('active');
            target.scrollTop = 0;
        }

        currentPageIndex = index;
        prevBtn.disabled = (index === 1);
        nextBtn.disabled = (index === totalPages);

        if (index === totalPages) {
            nextBtn.innerHTML = 'Τέλος';
        } else {
            nextBtn.innerHTML = 'Επόμενη <i class="fas fa-arrow-right"></i>';
        }

        updateProgress();
    }

    function nextPage() {
        if (currentPageIndex < totalPages) showPage(currentPageIndex + 1);
    }

    function prevPage() {
        if (currentPageIndex > 1) showPage(currentPageIndex - 1);
    }

    window.goToFirstSlide = function () {
        showPage(1);
    };

    // --------------------------------------------------------
    // EVENTS
    // --------------------------------------------------------
    prevBtn.addEventListener('click', prevPage);
    nextBtn.addEventListener('click', nextPage);

    // Keyboard
    document.addEventListener('keydown', (e) => {
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            nextPage();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevPage();
        } else if (e.key === 'Home') {
            e.preventDefault();
            showPage(1);
        } else if (e.key === 'End') {
            e.preventDefault();
            showPage(totalPages);
        }
    });

    // Touch swipe
    let touchStartX = 0;
    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    document.addEventListener('touchend', e => {
        const touchEndX = e.changedTouches[0].screenX;
        const threshold = 50;

        if (touchEndX < touchStartX - threshold && currentPageIndex < totalPages) {
            nextPage();
        } else if (touchEndX > touchStartX + threshold && currentPageIndex > 1) {
            prevPage();
        }
    }, { passive: true });

    // --------------------------------------------------------
    // INIT
    // --------------------------------------------------------
    buildSlides();
    showPage(1);
});