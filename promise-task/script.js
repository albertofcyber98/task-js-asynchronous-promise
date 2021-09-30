const berita = document.getElementById('test');
const data = fetch('https://newsapi.org/v2/top-headlines?category=technology&apiKey=73991280e5124b388b6c65cf1cac98c8');
data   
    .then(function(res){return res.json()})
    .then(res => {
        console.log(res);
        berita.innerHTML = render(res)
    }).catch(err=>{
        berita.innerHTML = message(err.message)
    }).finally(() => {
    });
    function render(result){
        let berita = '';
        result.articles.forEach(data =>{
            berita += `
                <div class="card col-3 mx-1 my-5 d-inline-block">
                    <img src="${data.urlToImage}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                        <p class="text-secondary">${data.author}</p>
                        <p class="text-secondary">${data.publishedAt}</p>
                        <p class="card-text">${data.description}</p>
                        <a href="#" class="btn btn-info text-white">Read</a>
                    </div>
                </div>
            `;
        })
        return berita;
    }
const searchFrom = document.querySelector('.search');
const input = document.querySelector('.input');
const newsList = document.querySelector('.news-list');
searchFrom.addEventListener('submit', retrieve)
function retrieve(e){
    e.preventDefault()
    const apiKey = '73991280e5124b388b6c65cf1cac98c8';
    let topic = input.value;
    let url = `https://newsapi.org/v2/top-headlines?category=technology&q=${topic}&apiKey=${apiKey}`;
    //
    const berita = document.getElementById('test');
    const data = fetch(url);
    data   
        .then(function(res){return res.json()})
        .then(res => {
            // console.log(res);
            berita.innerHTML = render(res)
        }).catch(err=>{
            berita.innerHTML = message(err.message)
        }).finally(() => {
        });
        function render(result){
            let berita = '';
            result.articles.forEach(data =>{
                berita += `
                    <div class="card col-3 mx-1 my-5 d-inline-block">
                        <img src="${data.urlToImage}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${data.title}</h5>
                            <p class="text-secondary">${data.author}</p>
                            <p class="text-secondary">${data.publishedAt}</p>
                            <p class="card-text">${data.description}</p>
                            <a href="#" class="btn btn-info text-white">Read</a>
                        </div>
                    </div>
                `;
            })
            return berita;
        }
}

