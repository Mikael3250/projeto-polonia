const hino = document.querySelector('.hino');
const video = document.getElementById("video");
const botaoFecharModal = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal")
const linkDoVideo = video.src;

hino.addEventListener("click", ()=> {
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);
})

console.log("mostrar video")

botaoFecharModal.addEventListener("click",() =>{
modal.classList.remove("aberto")
video.setAttribute("src","");
});
