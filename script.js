document.addEventListener("DOMContentLoaded", function () {
    function updateTimer() {
        const eventTime = new Date("February 10, 2025 12:00:00").getTime();
        const now = new Date().getTime();
        const timeLeft = eventTime - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById("timer").innerHTML = 
                `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            document.getElementById("timer").innerHTML = "The name is revealed!";
        }
    }

    setInterval(updateTimer, 1000);
    updateTimer();

    document.getElementById("imageUpload").addEventListener("change", function (event) {
        const gallery = document.getElementById("imageGallery");
        gallery.innerHTML = "";

        Array.from(event.target.files).forEach(file => {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = document.createElement("img");
                img.src = e.target.result;
                img.width = 200;
                gallery.appendChild(img);
            };
            reader.readAsDataURL(file);
        });
    });
});
