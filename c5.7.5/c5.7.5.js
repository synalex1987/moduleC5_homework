document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('images')) {
        displayResult(JSON.parse(localStorage.getItem('images')));
    }
})


function checkNum() {
    const page = document.querySelector(".inp_page").value;
    const limit = document.querySelector(".inp_limit").value;
    const resultNode = document.querySelector(".block_images");
    if ((page < 1 || page) > 10 && (limit < 1 || limit > 10)) {
        resultNode.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
    }
    else if (page < 1 || page > 10) {
        resultNode.innerHTML = "Номер страницы вне диапазона от 1 до 10";
    }
    else if (limit < 1 || limit > 10) {
        resultNode.innerHTML = "Лимит вне диапазона от 1 до 10";
    }
    else useRequest(page, limit);
}

function useRequest(page, limit) {
    const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((images) => {
            displayResult(images);
        })
        .catch(() => {
            console.log('error');
        })

}

function displayResult(images) {
    const resultNode = document.querySelector(".block_images");
    html_out = '';
    //localStorage.clear();
    for (let index = 0; index < images.length; index++) {
        imgBlock = `
            <div class="block_image">
            <img src = "${images[index].download_url}" class="img img${index}" />
            </div>
        `
        html_out += imgBlock;
    }
    resultNode.innerHTML = html_out;
    localStorage.setItem('images', JSON.stringify(images));
}