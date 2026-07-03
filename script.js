
        let search = document.querySelector(".search")
        let img = document.querySelector(".poster")
        let title = document.querySelector(".title")
        let year = document.querySelector(".year")
        let language = document.querySelector(".language")
        let rating = document.querySelector(".rating")
        let inputval = document.querySelector(".inputValue")
        
        let movie = "swades"
        
        const addmovie = ()=>{
            // input se detail bhari
            movie = inputval.value;
            console.log(inputval.value);
            // fir function ko call kiya 
            getmoviedata();
            // ab jo hai input clear kr do
            inputval.value = ""
        }


        const getmoviedata = async()=>{
            
          const apiurl =  `https://www.omdbapi.com/?apikey=d1d94b76&t=${movie}`
          try{
            const res = await fetch(apiurl)
           const data = await res.json()
           console.log(data);
          title.innerHTML = `<strong>Title :  </strong> ${data.Title}`;
          year.innerHTML = `<strong>Year : </strong> ${data.Year}`;
          language.innerHTML = `<strong>Language : </strong> ${data.Language}`;
          rating.innerHTML = `<strong>IMDb Rating : </strong> ⭐ ${data.imdbRating}`;

           img.innerHTML = `<img src = "${data.Poster}" alt="Movie Poster"/> `

          }
          catch(error){
            console.log(error);
          }
        }

        search.addEventListener("click",addmovie)
        window.addEventListener("load",getmoviedata);