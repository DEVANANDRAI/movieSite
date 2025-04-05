
(function() {
    'use strict';
    window.addEventListener('load', function() { 
      var forms = document.getElementsByClassName('needs-validation');
   
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
$('.collapse').collapse()
$('svg').click(function() {
  this.classList.toggle('rotated');
});


 
let api="https://imdb.iamidiotareyoutoo.com/search?q=thriller"
const getData=(api)=>{
  const response= fetch(api)
response.then((value)=>{
  return value.json();
}).then((value)=>{
  const container=document.querySelector('.section');
  let inHtml=''
  let side="ml-6 order-first order-lg-last text-lg-left";
  value.description.forEach(element => {
    
    inHtml+=` <section>
        <div class="container my-5">
          <div class="row">
            <div class="col-12 col-lg-6 ${side== "ml-6 order-first order-lg-last text-lg-left"? "text-lg-left" :"ml-6 order-first order-lg-last text-lg-left"
            }">
              <h2>MOVIE:- ${element["#AKA"]}</h2>
              <h5>Title:- <code>${element["#TITLE"]}</code></h5>
             
               <span>ACTORS :- ${element["#ACTORS"]}</span>
              <p><b>Release:- </b>${element["#YEAR"]}</p>
               <a href="${element["#IMDB_URL"]}" 
   class="btn btn-primary" 
   target="_blank">
  ▶️ Play Video
</a>
            </div>
            <div class="col-12 col-lg-6">
              <img src="${element["#IMG_POSTER"]}" style=" width:80%;max-height:300px;" alt="Responsive image television" class="img-fluid" />
            </div>
          </div>
        </div>
      </section>`
      if(side=="ml-6 order-first order-lg-last text-lg-left"){
        side="text-lg-left";
      }
      else{
        side="ml-6 order-first order-lg-last text-lg-left";
      }

    });
    container.innerHTML=inHtml;
})
}
const movieSearch=()=>{
  const movie=document.getElementById("movie").value;
 api=api=`https://imdb.iamidiotareyoutoo.com/search?q=${movie}`
 getData(api);
}
getData(api);