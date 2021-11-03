const imagenes = document.querySelectorAll('.propiedad__imagen');
window.addEventListener('scroll', ()=>{
    const scroll = this.scrollY/-20;
    imagenes.forEach(x=>x.style.backgroundPositionY = `${scroll}px`);
})