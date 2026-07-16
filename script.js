document.addEventListener("DOMContentLoaded", () => {
    createLoadingScreen();
    createStars();

    const openButton = document.getElementById("openButton");

    if (openButton) {
        openButton.addEventListener("click", showSecondScreen);
    }

    setInterval(createLilyPetal, 900);
});

/* LOADING SCREEN */

function createLoadingScreen() {
    const loadingScreen = document.createElement("div");
    loadingScreen.id = "loading-screen";

    loadingScreen.innerHTML = `
        <div class="loader-content">
            <p class="loader-small">Made with love, just for you...</p>
            <h1>For Alveena ❤️</h1>
            <p class="loader-text">Preparing your surprise...</p>

            <div class="loading-bar">
                <div class="loading-progress"></div>
            </div>
        </div>
    `;

    document.body.appendChild(loadingScreen);

    setTimeout(() => {
        loadingScreen.classList.add("hidden");

        setTimeout(() => {
            loadingScreen.remove();
        }, 1000);
    }, 3200);
}

/* SECOND INTRO SCREEN */

function showSecondScreen() {
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.innerHTML = `
            <main class="intro">
                <p class="small-text">Before you keep going...</p>

                <h1>I just want you to know</h1>

                <h2>how much you mean to me ❤️</h2>

                <button onclick="continueGift()">
                    Continue →
                </button>
            </main>
        `;

        document.body.style.opacity = "1";
    }, 700);
}

/* MAIN WEBSITE */

function continueGift() {
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.innerHTML = `
            <div id="stars"></div>

            <main class="gift-page">

                <section class="gift-section reveal">
                    <p class="small-text">For my favourite person</p>

                    <h1>Happy Birthday, Alveena ❤️</h1>

                    <p class="message">
                        I wanted to make something completely personal,
                        because you deserve more than just a normal gift.
                    </p>
                </section>

                <section class="gift-section reveal">
                    <h2>Our Memories 📸</h2>

                    <div class="photo-grid">
                        <div>
                            <img class="memory-photo photo-one"
                                 src="images/photo1.jpg"
                                 alt="Our memory">

                            <p class="photo-caption">
                                One of my favourite moments with you.
                            </p>
                        </div>

                        <div>
                            <img class="memory-photo photo-two"
                                 src="images/photo2.jpg"
                                 alt="Our memory">

                            <p class="photo-caption">
                                You make every normal moment feel special.
                            </p>
                        </div>

                        <div>
                            <img class="memory-photo photo-three"
                                 src="images/photo3.jpg"
                                 alt="Our memory">

                            <p class="photo-caption">
                                I hope we make a million more memories together.
                            </p>
                        </div>
                    </div>
                </section>

                <section class="gift-section reveal">
                    <h2>A Letter For You 💌</h2>

                    <div class="letter">
                        <p>My dear Alveena, ❤️</p>

                        <p>
                            <strong>Happy Birthday, my love.</strong>
                        </p>

                        <p>
                            I know things have been tough for you lately, and I know
                            some days have been really hard. I just want you to know
                            that you are never alone. No matter what happens, I'll
                            always be here for you—through the good days, the bad
                            days, and everything in between.
                        </p>

                        <p>
                            You mean everything to me. You're the best thing that has
                            ever happened to me, and I'm thankful every single day
                            that Allah brought you into my life. You make my days
                            better just by being you, and your smile has a way of
                            making everything feel okay.
                        </p>

                        <p>
                            I wish you could see yourself the way I see you. You're
                            kind, caring, beautiful, and so much stronger than you
                            give yourself credit for. Even when you're unsure about
                            things, I'll always believe in you. Whenever you feel like
                            giving up, I'll remind you of how amazing you truly are.
                        </p>

                        <p>
                            On your birthday, I'm making du'a that Allah fills your
                            heart with happiness and peace. I pray that He makes every
                            hardship easy for you, keeps you safe, blesses you with
                            success in everything you do, and keeps that beautiful
                            smile on your face.
                        </p>

                        <p>
                            Thank you for being you. Thank you for making me laugh,
                            caring about me, and always being there. You are my safe
                            place, and you make my life better in more ways than
                            you'll ever know.
                        </p>

                        <p>
                            I made this website so that whenever life feels
                            overwhelming or you need a reminder, you can come back
                            and remember how loved you are. It may not be the biggest
                            gift in the world, but I made it with my whole heart, and
                            it is completely yours.
                        </p>

                        <p>
                            I love you so much, and I hope this is only the first of
                            many birthdays we celebrate together, In shā’ Allāh.
                        </p>

                        <p>
                            <strong>Happy Birthday, my beautiful girl. ❤️</strong>
                        </p>

                        <p>
                            Love always,<br>
                            Adil
                        </p>
                    </div>
                </section>

                <section class="gift-section reveal">
                    <p class="small-text">
                        Because normal words weren't enough...
                    </p>

                    <h2>قصيدة لكِ ❤️</h2>

                    <div class="arabic-poem" dir="rtl">
                        <p>
                            يا نور قلبي، ويا أجمل حلم رأيته<br>
                            أنتِ دعائي الذي أرجو إجابته كل يوم
                        </p>

                        <p>
                            إذا ابتسمتِ، أشرقت الدنيا في عيني<br>
                            وإذا تكلمتِ، صار كلامك أعذب من الألحان
                        </p>

                        <p>
                            لا أريد من الدنيا إلا قربك<br>
                            ففي وجودك سكينة، وفي حبك حياة
                        </p>

                        <p>
                            أسأل الله أن يجمعني بك في الحلال<br>
                            وأن يجعل حبنا رحمة، ومودة، وبركة
                        </p>

                        <p>
                            يا حبيبة روحي<br>
                            سأبقى أحبك ما دام القلب ينبض<br>
                            وما دامت النجوم تزين السماء
                        </p>
                    </div>
                </section>

                <section class="gift-section reveal">
                    <h2>A Du’a For You 🤲</h2>

                    <div class="dua-card">
                        <p>Ya Allah, fill her heart with peace and happiness.</p>

                        <p>Replace every hardship she faces with ease.</p>

                        <p>
                            Protect her, guide her, and bless her in everything
                            she does.
                        </p>

                        <p>
                            Grant her success in this life and the next, keep her
                            safe, and always keep her beautiful smile shining.
                        </p>

                        <p><strong>Āmīn. ❤️</strong></p>
                    </div>
                </section>

                <section class="gift-section reveal">
                    <h2>Reasons I Love You ❤️</h2>

                    <div class="reasons">
                        <div class="reason-card">
                            The way you always make me feel loved
                        </div>

                        <div class="reason-card">
                            How beautiful you are, even when you don't see it
                        </div>

                        <div class="reason-card">
                            The way you make normal moments feel special
                        </div>

                        <div class="reason-card">
                            How much you care about me
                        </div>

                        <div class="reason-card">
                            Your smile and how it instantly makes me happier
                        </div>

                        <div class="reason-card">
                            Because being with you feels like home
                        </div>
                    </div>
                </section>

                <section class="gift-section reveal">
                    <p class="small-text">
                        Your favourite song, for my favourite person...
                    </p>

                    <h2>Your Song 🎧</h2>

                    <div class="song-card">
                        <h3>In My Head</h3>
                        <p>Kado</p>

                        <button onclick="playSong()">
                            Play Your Favourite Song ❤️
                        </button>
                    </div>
                </section>

                <section class="gift-section reveal">
                    <h2>These Are For You 🤍</h2>

                    <div class="meowl-card">
                        <img
                            class="meowl-image"
                            src="images/meowl-lilies.png"
                            alt="Meowl holding lilies">

                        <p>
                            Meowl brought you your favourite flowers from me 🌸
                        </p>

                        <h3>I remembered your lilies. 🤍</h3>
                    </div>
                </section>

                <section class="gift-section reveal">
                    <h2>Until Your Next Birthday 🎂</h2>

                    <div id="birthday-countdown" class="countdown-card">
                        Calculating...
                    </div>
                </section>
<section class="gift-section reveal">
    <h2>One More Thing... 🐱🤍</h2>

    <img src="images/meowl.png" class="meowl" alt="Meowl">

    <p class="message">
        Even Meowl remembered your favourite flowers...
    </p>

    <h3>I brought you lilies. 🤍🌸</h3>
</section>
                <section class="gift-section final-section reveal">
                    <h2>Happy Birthday, my love ❤️</h2>

                    <p class="message">
                        I hope this year brings you happiness, peace, success,
                        and everything your heart wants. I am so grateful for
                        you, and I hope I get to celebrate many more birthdays
                        with you.
                    </p>

                    <button onclick="celebrateBirthday()">
                        One Last Surprise 🎉
                    </button>

                    <div class="final-reminder">
                        <p>
                            Whenever life gets hard again, come back to this website.
                        </p>

                        <p>
                            No matter how many times you read it, one thing will
                            never change...
                        </p>

                        <h3>You will always be loved. ❤️</h3>

                        <p class="ending-text">
                            See you next birthday, In shā’ Allāh 🤍
                        </p>
                    </div>
                </section>

            </main>
        `;

        document.body.style.opacity = "1";
        document.body.style.overflow = "auto";

        createStars();
        updateBirthdayCountdown();
        setupRevealAnimations();
    }, 700);
}

/* SONG */

function playSong() {
    window.open(
        "https://open.spotify.com/track/7miL2oNzEqVzDy9N71elyx",
        "_blank"
    );
}

/* CONFETTI */

function celebrateBirthday() {
    const colours = [
        "#ff78b7",
        "#ffffff",
        "#ffd2e7",
        "#fff2a8"
    ];

    for (let i = 0; i < 130; i++) {
        const confetti = document.createElement("div");

        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration =
            Math.random() * 3 + 2 + "s";

        confetti.style.background =
            colours[Math.floor(Math.random() * colours.length)];

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

/* LILY PETALS */

function createLilyPetal() {
    const petal = document.createElement("div");

    petal.classList.add("lily-petal");
    petal.innerHTML = "🤍";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize =
        Math.random() * 14 + 12 + "px";

    petal.style.animationDuration =
        Math.random() * 5 + 6 + "s";

    petal.style.opacity =
        Math.random() * 0.4 + 0.25;

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 11000);
}

/* TWINKLING STARS */

function createStars() {
    let starsContainer = document.getElementById("stars");

    if (!starsContainer) {
        starsContainer = document.createElement("div");
        starsContainer.id = "stars";
        document.body.prepend(starsContainer);
    }

    starsContainer.innerHTML = "";

    for (let i = 0; i < 70; i++) {
        const star = document.createElement("span");

        star.classList.add("star");
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.animationDelay =
            Math.random() * 4 + "s";

        star.style.animationDuration =
            Math.random() * 3 + 2 + "s";

        starsContainer.appendChild(star);
    }
}

/* SCROLL TRANSITIONS */

function setupRevealAnimations() {
    const sections = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    sections.forEach(section => {
        observer.observe(section);
    });
}

/* BIRTHDAY COUNTDOWN */

function updateBirthdayCountdown() {
    const countdown =
        document.getElementById("birthday-countdown");

    if (!countdown) return;

    const now = new Date();

    let birthday = new Date(
        now.getFullYear(),
        6,
        16
    );

    const today =
        now.getMonth() === 6 &&
        now.getDate() === 16;

    if (today) {
        countdown.innerHTML =
            "Today is your birthday! Happy Birthday ❤️";

        return;
    }

    if (now > birthday) {
        birthday = new Date(
            now.getFullYear() + 1,
            6,
            16
        );
    }

    const difference = birthday - now;

    const days = Math.ceil(
        difference / (1000 * 60 * 60 * 24)
    );

    countdown.innerHTML =
        `${days} days until I get to celebrate you again ❤️`;
}