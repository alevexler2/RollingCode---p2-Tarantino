const input = document.querySelector(".form_buscar");
const btnSearch = document.querySelector("#search");
const urlMovies = "http://localhost:3000/movies";
const container = document.querySelector("#categorias_contenedor");
btnSearch.addEventListener("click", (e)=>{
    fetch(urlMovies)
        .then(response =>response.json())
        .then(data=>data.forEach(element => {
             console.log(element.title) 
             if( input.value == element.title){
             window.location = "https://github.com/alevexler2/tarantino-json-server-false-backend";
             }
        }))
})
const categorias = (e)=>{
   /*  window.location = "http://127.0.0.1:5501/categorias.html"; */
    fetch(urlMovies)
    .then(response =>response.json())
    .then(data=>data.forEach(element =>{
        if(e == element.category){
        container.innerHtml += `
        <div class="swiper-slide">
					<img src="${element.image}"
						alt="pelicula" class="img_categorias">
					<div class="card-description ">
					<div class="card-title">
						<h4>Django sin cadenas</h4>
					</div>
					<div class="card-text">
						<p>Un antiguo esclavo une sus fuerzas con un cazador y ayuda a cazar a los criminales más buscados del Sur.</p>
					</div>
					</div>
			</div>`
	}
    }))
}