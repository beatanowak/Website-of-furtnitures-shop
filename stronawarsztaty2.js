var aboutCompany = document.querySelector('.company');
var companyList = document.querySelector('.o_firmie');

//rozwijane menu

aboutCompany.addEventListener('mouseover', function(event){
    companyList.style.display = 'block';
});

aboutCompany.addEventListener('mouseleave', function(){
    companyList.style.display = 'none';
});

//podpisy obrazkow

var chair1 = document.querySelector('.chair1');
var chairName = chair1.querySelector('.opacity');

chair1.addEventListener('mouseenter', function(){
    chairName.style.display = 'none';
});

chair1.addEventListener('mouseleave', function(){
    chairName.style.display = 'block';
});

var chair2 = document.querySelector('.chair2');
var chairName2 = chair2.querySelector('.opacity');

chair2.addEventListener('mouseenter', function(){
    chairName2.style.display = 'none';
});

chair2.addEventListener('mouseleave', function(){
    chairName2.style.display = 'block';
});

//slider

var nextPict = document.querySelector('.nextPict');
var previousPict = document.querySelector('.previousPict');
var elementsLi = document.querySelectorAll('.slider .slide-img');

var indexNumber = 0;

console.log(nextPict);
console.log(previousPict);
console.log(elementsLi);

elementsLi[indexNumber].classList.add('visible');

nextPict.addEventListener('click', function(){
    console.log('Clik!');
    elementsLi[indexNumber].classList.remove('visible');
    indexNumber++;

    if(indexNumber >= elementsLi.length) {
        indexNumber = 0;
    }
    elementsLi[indexNumber].classList.add('visible');

});

previousPict.addEventListener('click', function(){
    console.log('Clik!');
    elementsLi[indexNumber].classList.remove('visible');
    indexNumber--;


    if(indexNumber < 0) {
        indexNumber = elementsLi.length-1
    }

    elementsLi[indexNumber].classList.add('visible');

});