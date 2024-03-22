const currentImgContainer = document.querySelector(".img-container.current");
const imgs = document.querySelectorAll(".img-container img");
const darkPart = document.querySelector(".img-container.current .dark-part");

for(let i = 0; i < imgs.length; i++) {
    const currentImg = imgs[i].cloneNode(true);
    imgs[i].addEventListener("click", event => {
        currentImgContainer.appendChild(currentImg);
        currentImgContainer.classList.add("active");
    });
    darkPart.addEventListener("click", event => {
        currentImgContainer.innerHTML = "";
        currentImgContainer.appendChild(darkPart);
        currentImgContainer.classList.remove("active");
    });
}