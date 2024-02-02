let imageDesc1 = document.getElementById('photo-desc-1');
let imageDesc2 = document.getElementById('photo-desc-2');
let imageDesc3 = document.getElementById('photo-desc-3');

let imageHolder1 = document.getElementsByClassName('img-holder')[0];
let imageHolder2 = document.getElementsByClassName('img-holder')[1];
let imageHolder3 = document.getElementsByClassName('img-holder')[2];

const showImage = (para) => {
    if (imageHolder1.style.display === 'none') {
        imageHolder1.style.display = 'block'
    }
    else {
        imageHolder1.style.display = 'none';
    }
}

const showImage2 = (para) => {
    if (imageHolder2.style.display === 'none') {
        imageHolder2.style.display = 'block'
    }
    else {
        imageHolder2.style.display = 'none';
    }
}

const showImage3 = (para) => {
    if (imageHolder3.style.display === 'none') {
        imageHolder3.style.display = 'block'
    }
    else {
        imageHolder3.style.display = 'none';
    }
}

imageDesc1.addEventListener('click', showImage);
imageDesc2.addEventListener('click', showImage2);
imageDesc3.addEventListener('click', showImage3)
