
const sizes = document.querySelectorAll('.size__tallas');
const colors = document.querySelectorAll('.sneaker__color');
const sneaker = document.querySelectorAll('.sneaker_img');

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}


function changeColor() {
    let colorg = this.getAttribute('colorg');
    let color = this.getAttribute('color');
    let sneakerColor = document.querySelector(`.sneaker_img[color="${color}"]`);

    // Remove 'active' class from all colors
    document.querySelectorAll('.sneaker__color').forEach(c => {
        c.classList.remove('active');
    });

    // Add 'active' class to the clicked color
    this.classList.add('active');

    // Set the color variable value to the custom property '--colorg'
    document.documentElement.style.setProperty('--colorg', colorg);

    // Hide all sneaker images
    sneaker.forEach(s => {
        s.classList.remove('show');
    });

    // Show the selected sneaker image
    sneakerColor.classList.add('show');
 
    // Update the background color of the quantity and price elements
    document.querySelector('.quantity__content').style.backgroundColor = color;
    document.querySelector('.price__button').style.backgroundColor = color;
    
     
}


sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(c => c.addEventListener('click', changeColor));


  