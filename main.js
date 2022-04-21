async function start(){
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json();
    createBreedList(data.message);
}

start()

function createBreedList(breedList){
    document.getElementById("breed").innerHTML=  `
    <select onchange="loadByBreed(this.value)">
        <option>Choose your favorite dog breed</option>
        ${Object.keys(breedList).map(function (breed){
           return `<option>${breed}</option>`
        }).join('')}
       
    </select> 
    `
}

async function loadByBreed(breed){
    if(breed != "Choose your favorite dog breed"){
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
      const data = await response.json()
      createCarusel(data.message);
    }
}

function createCarusel(bImage){
    document.getElementById("breedImage").innerHTML=`
<div id="carouselExampleControls" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-interval="3000">
      <img src="${bImage[0]}" class="d-block img-fluid " alt="...">
    </div>
    <div class="carousel-item" data-interval="3000">
      <img src="${bImage[1]}" class="d-block img-fluid" alt="...">
    </div>
    <div class="carousel-item" data-interval="3000">
      <img src="${bImage[2]}" class="d-block img-fluid" alt="...">
    </div>
  </div>
 <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
`
}
