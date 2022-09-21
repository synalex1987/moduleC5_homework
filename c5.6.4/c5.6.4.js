function checkNum() {
    const width = document.querySelector(".inp_width").value;
    const height = document.querySelector(".inp_height").value;
    const resultNode = document.querySelector(".block_image");
    if (width < 100 || width > 300 || height < 100 || height > 300) {
        resultNode.innerHTML = "одно из чисел вне диапазона от 100 до 300";
    }
    else useRequest(width, height);
}

function useRequest(width, height) {
    const url = `https://picsum.photos/${width}/${height}`;
    result = fetch(url)
        .then((response) => {
            displayResult(response['url'], width, height);
    })
}

function displayResult(url_image, width, height) {
    const resultNode = document.querySelector(".block_image");
    resultNode.innerHTML = `
    <img src="${url_image}" width="${width}" height="${height}">
    `
}