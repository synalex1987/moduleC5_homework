function checkNum() {
    const num = document.querySelector(".inp_number").value;
    const resultNode = document.querySelector(".block_images");
    if (num < 1 || num > 10) {
        resultNode.innerHTML = "число вне диапазона от 1 до 10";
    }
    else useRequest(num, displayResult);
}

function useRequest(num, displayResult) {
    const url = "https://picsum.photos/v2/list?limit=" + num;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            const images = JSON.parse(xhr.response);
            if (displayResult) {
                displayResult(images);
            }
        }
    };

    xhr.onerror = function () {
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };

    xhr.send();
}

function displayResult(images) {
    const resultNode = document.querySelector(".block_images");
    html_out = '';
    images.forEach(element => {
        imgBlock = `
            <div class="block_images">
            <img src = "${element.download_url}" class="img" />
            <p class>"${element.author}"</p>
            </div>
        `
        html_out += imgBlock;
    });
    resultNode.innerHTML = html_out;
}