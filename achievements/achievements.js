// Handle navbar toggle
$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        const target = $(this).attr('href');
        const element = $(target);
        
        // Jika elemen ada di halaman ini, smooth scroll
        if (element.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: element.offset().top,
            }, 500, 'linear')
        }
        // Jika elemen tidak ada, biarkan browser handle navigation (untuk link ke halaman lain)
    });
});

// Global achievements data
let allAchievements = [];

// Load achievements data and display
async function loadAchievements() {
    try {
        const response = await fetch("../achievements.json");
        allAchievements = await response.json();
        
        // Only run on achievements page
        const pageContainer = document.getElementById("achievementsPageContainer");
        if (pageContainer) {
            displayAllAchievements(allAchievements, pageContainer);
            setupFilters(allAchievements, pageContainer);
        }
    } catch (error) {
        console.error("Error loading achievements:", error);
    }
}

function displayAllAchievements(achievements, container) {
    let html = "";
    achievements.forEach(achievement => {
        html += `
        <div class="box tilt">
            <img draggable="false" src="../assets/images/achievement/${achievement.image}.png" alt="${achievement.name}" />
            <div class="content">
                <div class="tag">
                    <h3>${achievement.name}</h3>
                </div>
                <div class="desc">
                    <p>${achievement.desc}</p>
                    <div class="btns">
                        <a href="${achievement.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                    </div>
                </div>
            </div>
        </div>`;
    });
    container.innerHTML = html;
    
    // Apply tilt effect
    VanillaTilt.init(document.querySelectorAll(".achievements-page .box.tilt"), {
        max: 15,
    });
    
    // Scroll reveal animation
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });
    srtop.reveal('.achievements-page .box', { interval: 200 });
}

function setupFilters(achievements, container) {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button state
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter and display achievements
            if (filter === 'all') {
                displayAllAchievements(achievements, container);
            } else {
                const filtered = achievements.filter(a => a.category === filter);
                displayAllAchievements(filtered, container);
            }
        });
    });
}

// Load achievements when page is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAchievements);
} else {
    loadAchievements();
}
