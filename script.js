// Theme state stored in memory (not localStorage)
let currentTheme = "dark";
const items = document.querySelector('.items');
const item = document.querySelector('.item');
const msg = document.querySelector('.msg-container');
const msgBox = document.querySelector('.msg-box');
const h1msg = document.querySelector('.msg-box h1');
const pmsg = document.querySelector('.msg-box p');

function toggleTheme() {
    currentTheme = currentTheme === "light" ? "dark" : "light";
    applyTheme(currentTheme);
}

function applyTheme(theme) {
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const aboutus = document.querySelector('.aboutus');
    const faci = document.querySelector('.faci');
    const connect = document.querySelector('.connect');
    const contactContent = document.querySelector('.contact');
    const quotes = document.querySelector('.quotes');
    const contactFinal = document.querySelector('.contact-final');
    const msg = document.querySelector('#msg');
    const msgBox = document.querySelector('.msg-box');
    const pmsg = document.querySelector('.msg-box p');

    if (theme === 'dark') {
        body.classList.add('dark-theme');
        if (hero) {
            hero.classList.add('dark-theme');
            heroContent.classList.add('dark-theme');
        }
        if (themeIcon) {
            themeIcon.className = 'fas fa-sun theme-icon';
        }
        if (aboutus) {
            aboutus.classList.add('dark-theme');
        }
        if (faci) {
            faci.classList.add('dark-theme');
        }
        if (connect) {
            connect.classList.add('dark-theme');
        }
        if (contactContent) {
            contactContent.classList.add('dark-theme');
        }
        if (quotes) {
            quotes.classList.add('dark-theme');
        }

        if (contactFinal) {
            contactFinal.classList.add('dark-theme');
        }

        if (msg) {
            msg.classList.add('dark-theme');
        }

        if (msgBox) {
            msgBox.classList.add('dark-theme');
        }

        if (pmsg) {
            pmsg.classList.add('dark-theme');
        }
    } else {
        body.classList.remove('dark-theme');
        if (hero) {
            hero.classList.remove('dark-theme');
            heroContent.classList.remove('dark-theme');
        }
        if (themeIcon) {
            themeIcon.className = 'fas fa-moon theme-icon';
        }
        if (aboutus) {
            aboutus.classList.remove('dark-theme');
        }
        if (faci) {
            faci.classList.remove('dark-theme');
        }
        if (quotes) {
            quotes.classList.remove('dark-theme');
        }

        if (contactFinal) {
            contactFinal.classList.remove('dark-theme');
        }

        if (msg) {
            msg.classList.remove('dark-theme');
        }

        if (msgBox) {
            msgBox.classList.remove('dark-theme');
        }

        if (pmsg) {
            pmsg.classList.remove('dark-theme');
        }
    }
}

// Initialize theme on page load
document.addEventListener("DOMContentLoaded", function () {
    applyTheme(currentTheme);
});


function getMsg(id) {
    if (id === "compLab") {
        h1msg.innerHTML = "Rani Laxmi Bai";
        pmsg.innerHTML =
            "Rani Laxmi Bai, the legendary Queen of Jhansi, was a pivotal figure in India’s 1857 War of Independence. Refusing to surrender her kingdom to British annexation, she transformed from a queen into a fierce warrior leader. Renowned for her mastery of strategy and swordsmanship, she famously led her troops into battle with her infant son strapped to her back. Though she fell in battle at Gwalior, her defiance and courage earned her the title of Jhansi ki Rani, immortalizing her as a premier symbol of Indian resistance and female empowerment.";
    } else if (id === "library") {
        h1msg.innerHTML = "Tantia Tope";
        pmsg.innerHTML =
            "<strong>Tantia Tope</strong> was a brilliant military strategist and a key leader during the <strong>Indian Rebellion of 1857</strong>. As a close associate of <strong>Nana Sahib</strong>, he was instrumental in the liberation of <strong>Kanpur</strong> and later joined forces with <strong>Rani Laxmi Bai</strong> to capture the <strong>Gwalior Fort</strong>. He was a master of <strong>guerrilla warfare</strong>, using his agility and knowledge of the terrain to evade the British army for years.Despite his eventual betrayal and execution in 1859, his< strong > tactical genius</strong > and relentless spirit remain a powerful symbol of< strong > Indian resistance</strong >.";
    } else if (id === "transport") {
        h1msg.innerHTML = "Nana Saheb";
        pmsg.innerHTML =
            "<strong>Nana Saheb</strong>, born as <strong>Dhondo Pant</strong>, was a prominent leader of the <strong>1857 Indian Rebellion</strong> and the adopted son of the last Maratha Peshwa, <strong>Baji Rao II</strong>. Driven by the British refusal to recognize his claim to his father's pension, he led the uprising at <strong>Kanpur</strong>, becoming a powerful voice for <strong>Indian independence</strong>. Along with his loyal general <strong>Tantia Tope</strong>, he challenged colonial rule with great determination. Although he disappeared into the <strong>Nepal hills</strong> after the fall of Kanpur, his defiance made him a <strong>legendary figure</strong> in the history of the freedom struggle.";
    } else if (id === "auditorium") {
        h1msg.innerHTML = "Kunwar Singh";
        pmsg.innerHTML =
            "<strong>Kunwar Singh</strong> was a remarkable leader of the <strong>Indian Rebellion of 1857</strong>, leading the resistance in <strong>Bihar</strong> at the incredible age of 80. As the zamindar of <strong>Jagdishpur</strong>, he defied the British authorities and organized a specialized military force to challenge colonial rule. He is famous for his <strong>guerrilla tactics</strong> and his daring crossing of the <strong>Ganges River</strong>, where he reportedly amputated his own injured hand to continue the fight. Known as <strong>Veer Kunwar Singh</strong>, his unmatched bravery and <strong>military skill</strong> made him a legendary hero of the freedom struggle in Eastern India.";
    } else if (id === "sports") {
        h1msg.innerHTML = "Bahadur Shah Zafar";
        pmsg.innerHTML =
            "<strong>Bahadur Shah Zafar</strong> was the last <strong>Mughal Emperor</strong> of India and a symbolic figurehead during the <strong>Indian Rebellion of 1857</strong>. Despite being an elderly monarch and a <strong>noted poet</strong>, he was proclaimed the <strong>Emperor of India</strong> by the sepoys who marched to <strong>Delhi</strong>. His support provided the rebellion with <strong>political legitimacy</strong> and united different factions against British rule. After the fall of Delhi, he was captured by the British, tried for treason, and <strong>exiled to Rangoon</strong> (Myanmar). His death in 1862 marked the formal end of the <strong>Mughal Empire</strong>, leaving behind a legacy of <strong>patriotic poetry</strong> and resistance.";
    } else if (id === "classRoom") {
        h1msg.innerHTML = "Mangal Pandey";
        pmsg.innerHTML =
            "<strong>Mangal Pandey</strong> was a soldier in the <strong>34th Bengal Native Infantry</strong> whose actions served as the spark for the <strong>Indian Rebellion of 1857</strong>. On March 29, 1857, at <strong>Barrackpore</strong>, he openly revolted against British officers in protest of the <strong>greased cartridges</strong>, which were rumored to contain animal fat that offended the religious beliefs of Indian soldiers. His act of <strong>individual defiance</strong>  and subsequent execution made him a <strong>martyr</strong> and a household name across India. His bravery inspired thousands of other soldiers to join the struggle for <strong>freedom</strong>, leading to the rise of the term <strong>Pandey</strong> as a synonym for a rebel.";
    }
}

function showMsg() {
    msg.classList.remove("hide");
}

items.addEventListener("click", function (e) {
    let id = e.target.id;
    getMsg(id);
    showMsg();
    console.log(id);
});

item.addEventListener("click", function (e) {
    let id = e.target.id;
    getMsg(id);
    showMsg();
    console.log(id);
});

msg.addEventListener("click", function () {
    msg.classList.add("hide");
});

msgBox.addEventListener("click", function (e) {
    e.stopPropagation();
});

document.querySelectorAll('#compLab, #classRoom, #library, #transport , #auditorium , #sports').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = y / rect.height * 50;
        const rotateY = -x / rect.width * 50;
        card.style.transform = `perspective(500px) scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(500px) scale(1) rotateX(0deg) rotateY(0deg)'
    });
});



document.addEventListener("DOMContentLoaded", function () {

    gsap.from('.hero', {
        x: 1300,
        duration: 2,
        rotate: 360,
        borderRadius: '50%',
        scale: 0.5
    });

    const mediaQuery1 = window.matchMedia('(min-width: 424px)');
    const mediaQuery2 = window.matchMedia('(min-width: 767px)');
    const mediaQuery3 = window.matchMedia('(min-width: 1023px)');
    const mediaQuery4 = window.matchMedia('(min-width: 1439px');




    if (mediaQuery4.matches) {
        gsap.from(".aboutus", {
            xPercent: -60,
            opacity: 0,
            duration: 2.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".aboutus",
                start: "top 71%",
                toggleActions: "play none none none",
                once: true
            }
        });
    }


    else if (mediaQuery3.matches) {
        gsap.from(".aboutus", {
            xPercent: -60,
            opacity: 0,
            duration: 2.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".aboutus",
                start: "top 85%",
                toggleActions: "play none none none",
                once: true
            }
        });
    }


    else if (mediaQuery2.matches) {
        gsap.from(".aboutus", {
            xPercent: -75,
            opacity: 0,
            duration: 2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".aboutus",
                start: "top 90%",
                toggleActions: "play none none none",
                once: true
            }
        });
    }

    else if (mediaQuery1.matches) {
        { }
    }


    // Initialize Swiper for the gallery
    const gallerySwiper = new Swiper('.gallery-swiper', {
        // Force single slide visible everywhere
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        speed: 600,
        effect: 'slide',

    });

    const autoplayBtn = document.getElementById("autoplayBtn");


    let isAutoplayOn = true;

    autoplayBtn.addEventListener("click", () => {
        isAutoplayOn = !isAutoplayOn;

        if (isAutoplayOn) {
            gallerySwiper.autoplay.start();
            autoplayBtn.textContent = "AUTO PLAY - ON";
        } else {
            gallerySwiper.autoplay.stop();
            autoplayBtn.textContent = "AUTO PLAY - OFF";
        }
    });


    ScrollTrigger.refresh();  // Refresh after tweens are set up
});




// var tl = gsap.timeline();

// tl.to('#contact h2', {
//     x:1400,
//     duration: 2.5,

// })

// tl.to('.social-big', {
//     x:1400,
//     rotate:360,
//     duration: 2.5
// })

// tl.to('.contact-info', {
//     x:800,
//     rotate:-360,
//     duration: 2.5
// })

// tl.to('.feed', {
//     x:800,
//     rotate:-360,
//     duration: 2.5
// })

