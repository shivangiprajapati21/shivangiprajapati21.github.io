```javascript
/* =========================================
   LUMI — INTERACTIVE JAVASCRIPT
   Made with ♡ by Shivangi Prajapati
========================================= */


/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            themeToggle.textContent = "☀";
        } else {
            themeToggle.textContent = "☾";
        }

    });

}


/* =========================================
   MOOD SELECTOR
========================================= */

const moodButtons = document.querySelectorAll(".mood");
const moodMessage = document.getElementById("moodMessage");

moodButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active state
        moodButtons.forEach(item => {
            item.classList.remove("active");
        });

        // Add active state
        button.classList.add("active");

        // Get message
        const message = button.getAttribute("data-message");

        if (moodMessage && message) {

            moodMessage.style.opacity = "0";

            setTimeout(() => {

                moodMessage.textContent = message;

                moodMessage.style.opacity = "1";

            }, 200);

        }

    });

});


/* =========================================
   LITTLE LETTER / ENVELOPE
========================================= */

const envelope = document.querySelector(".envelope");

if (envelope) {

    envelope.addEventListener("click", () => {

        envelope.classList.toggle("open");

        const clickText = document.querySelector(".click-text");

        if (clickText) {

            if (envelope.classList.contains("open")) {

                clickText.textContent =
                    "A little reminder: you are doing better than you think. ♡";

            } else {

                clickText.textContent =
                    "Click the envelope to open your little letter ✉";

            }

        }

    });

}


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
    ".journal-card, .mood, .memory, .author, .section-title"
);

revealElements.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   SMOOTH NAVIGATION
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================
   MEMORY GARDEN CLICK EFFECT
========================================= */

const memories = document.querySelectorAll(".memory");

memories.forEach(memory => {

    memory.addEventListener("click", () => {

        const note = memory.querySelector(".memory-note");

        if (!note) return;

        note.style.transform = "scale(1.08)";

        setTimeout(() => {

            note.style.transform = "scale(1)";

        }, 300);

    });

});


/* =========================================
   FLOATING HEARTS
========================================= */

function createHeart() {

    const heart = document.createElement("div");

    heart.textContent = Math.random() > 0.5 ? "♡" : "✦";

    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize =
        Math.random() * 15 + 10 + "px";

    heart.style.color =
        Math.random() > 0.5
            ? "#e99aaa"
            : "#b9a8d9";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    heart.style.opacity = "0.65";

    document.body.appendChild(heart);


    const duration =
        Math.random() * 4000 + 4000;


    heart.animate(
        [
            {
                transform:
                    "translateY(0) rotate(0deg)",
                opacity: 0
            },

            {
                transform:
                    "translateY(-50vh) rotate(90deg)",
                opacity: 0.8
            },

            {
                transform:
                    "translateY(-105vh) rotate(180deg)",
                opacity: 0
            }
        ],
        {
            duration: duration,
            easing: "ease-out"
        }
    );


    setTimeout(() => {

        heart.remove();

    }, duration);

}


/* Create floating decoration every few seconds */

setInterval(createHeart, 3500);


/* =========================================
   BUTTON RIPPLE EFFECT
========================================= */

const buttons = document.querySelectorAll(
    ".primary-btn, .secondary-btn, .mood, .theme-btn"
);

buttons.forEach(button => {

    button.addEventListener("click", function(event) {

        const ripple = document.createElement("span");

        ripple.style.position = "absolute";

        ripple.style.width = "10px";
        ripple.style.height = "10px";

        ripple.style.borderRadius = "50%";

        ripple.style.background =
            "rgba(255,255,255,0.5)";

        ripple.style.pointerEvents = "none";

        ripple.style.left =
            event.offsetX + "px";

        ripple.style.top =
            event.offsetY + "px";

        ripple.style.transform =
            "translate(-50%, -50%)";

        ripple.style.animation =
            "rippleEffect 0.6s ease-out";

        button.style.position = "relative";
        button.style.overflow = "hidden";

        button.appendChild(ripple);


        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/* =========================================
   RIPPLE ANIMATION
========================================= */

const rippleStyle = document.createElement("style");

rippleStyle.innerHTML = `

@keyframes rippleEffect {

    0% {
        width: 10px;
        height: 10px;
        opacity: 0.8;
    }

    100% {
        width: 250px;
        height: 250px;
        opacity: 0;
    }

}

`;

document.head.appendChild(rippleStyle);


/* =========================================
   PARALLAX EFFECT FOR HERO ROOM
========================================= */

const room = document.querySelector(".room");

if (room && window.innerWidth > 800) {

    document.addEventListener("mousemove", event => {

        const x =
            (window.innerWidth / 2 - event.clientX) / 80;

        const y =
            (window.innerHeight / 2 - event.clientY) / 80;

        room.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}


/* =========================================
   WELCOME MESSAGE
========================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        console.log(
            "♡ Welcome to LUMI — made with love by Shivangi Prajapati ♡"
        );

    }, 500);

});


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}
```
