const introString = "My creative universe, where every piece of art tells a story.".split(" ");
const introText = document.querySelector(".intro-text");


let count = 0.1;
introString.forEach(value => {
    const span = document.createElement("span");
    span.textContent = `${value}`;
    introText.appendChild(span);
    introText.append(document.createTextNode(" "));
    span.style.animation = `fade-in 1s ${count}s forwards cubic-bezier(0.11, 0, 0.5, 0)`;
    count += 0.1;
});