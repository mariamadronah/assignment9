let container = document.querySelector('div.cards'); 
let newCard1 = document.createElement('div');
newCard1.className = ('new_div1');
let heading = document.createElement('h3');
heading.textContent = ('fourth post');
 let imag = document.createElement('img');
 imag.src='images/images (1).jpg';
let hobbies = document.createElement('p');
hobbies.textContent = ('hobbies are different for every one as a person and they also cahnge according to seasons and weather');

 newCard1.appendChild(heading);
 newCard1.appendChild(imag);
 newCard1.appendChild(hobbies);
 
 container.appendChild(newCard1);

let contain = document.querySelector('div.cards'); 
let newcard2=document.createElement('div');
newcard2.className= ('new_div2');
let heading2 = document.createElement('h3');
heading2.textContent=('fifth post');
let image = document.createElement('img');
image.src = 'images/images (2).jpg';
let foods = document.createElement('p');
foods.textContent=('foods also change depending on seasons');
newcard2.appendChild(heading2);
newcard2.appendChild(image);
newcard2.appendChild(foods);
contain.appendChild(newcard2);

