const w = window.innerWidth;
const h = window.innerHeight;

const html = document.documentElement;

html.addEventListener("mousemove", function(e) {

    const x = Math.round(100 * e.clientX / w);
    const y = Math.round(100 * e.clientY / h);

    html.style.setProperty("--x", `${x}%`);
    html.style.setProperty("--y", `${y}%`);

})