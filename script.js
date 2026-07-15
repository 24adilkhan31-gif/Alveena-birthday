const openButton = document.getElementById("openButton");

openButton.addEventListener("click", () => {
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
});

function continueGift() {
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.innerHTML = `
            <main class="gift-page">

                <section class="gift-section">
                    <p class="small-text">For my favourite person</p>
                    <h1>Happy Birthday, Alveena ❤️</h1>
                    <p class="message">
                        I wanted to make something that was completely personal,
                        because you deserve more than just a normal gift.
                    </p>
                </section>

                <section class="gift-section">
                    <h2>Our Memories 📸</h2>

                    <div class="photo-grid">
    <img class="memory-photo photo-one" src="images/photo1.jpg" alt="Our memory">
    <img class="memory-photo photo-two" src="images/photo2.jpg" alt="Our memory">
    <img class="memory-photo photo-three" src="images/photo3.jpg" alt="Our memory">
</div>
                </section>

                <section class="gift-section">
                    <h2>A Letter For You 💌</h2>

                    <div class="letter">
                        <p>
                            My dear Alveena,
                        </p>

                        <p>
                            <p>
    You genuinely mean the world to me. I do not think you even realize how important you are to me or how much better you have made my life. You are honestly the best thing that has ever happened to me, and I am so grateful to have you in my life.
</p>

<p>
    No matter what we go through, at the end of the day, it is always you. I hope you know how much I love and appreciate you, not just today because it is your birthday, but every single day.
</p>
                        </p>

                        <p>
                            Love, Adil ❤️
                        </p>
                    </div>
                </section>
<section class="gift-section">
    <p class="small-text">And because normal words weren't enough...</p>
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
                <section class="gift-section">
                    <h2>Reasons I Love You ❤️</h2>

                    <div class="reasons">
                        <div class="reason-card">The way you always make me feel loved</div>
<div class="reason-card">How beautiful you are, even when you do not see it</div>
<div class="reason-card">The way you can make any normal moment feel special</div>
<div class="reason-card">How much you care about me</div>
<div class="reason-card">Your smile and the way it instantly makes me happier</div>
<div class="reason-card">Because being with you feels like home</div>
                    </div>
                </section>
<section class="gift-section">
    <p class="small-text">For your favourite person, with your favourite song...</p>

    <h2>Your Song 🎧</h2>

    <div class="song-card">
        <h3>In My Head</h3>
        <p>Kado</p>

        <button onclick="playSong()">
            Play Your Favourite Song ❤️
        </button>
    </div>
</section>
               <section class="gift-section final-section">
    <h2>Happy Birthday, my love ❤️</h2>

    <p class="message">
        I hope this year brings you happiness, peace, success, and everything your heart wants.
        I am so grateful for you, and I hope I get to celebrate many more birthdays with you.
    </p>

    <button onclick="celebrateBirthday()">
        One Last Surprise 🎉
    </button>
</section>

            </main>
        `;

        document.body.style.opacity = "1";
        document.body.style.overflow = "auto";
    }, 700);
}function celebrateBirthday() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
        confetti.style.opacity = Math.random();
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}function playSong() {
    window.open("https://open.spotify.com/track/7miL2oNzEqVzDy9N71elyx", "_blank");
}