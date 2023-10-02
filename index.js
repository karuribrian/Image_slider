document.addEventListener("DOMContentLoaded", ()=> {
const myImages =[
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg',
    'img7.jpg',
    'img8.jpg',
    'img9.jpg',
    'img10.jpeg',
]
   
const ImagesArray = [
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
];
           
ImagesArray.forEach((pic, index) =>{
    const ImagePath = `media/${myImages[index]}`;
    pic.src = ImagePath;

 });
 
 const container = document.getElementById("image-container");
 const prevButton = document.getElementById("prev");
 const nextButton = document.getElementById("next");

 let counter = ImagesArray.length -1;

 function displayCurrentImage(){
    container.innerHTML = '';
    container.appendChild(ImagesArray[counter]);
 }

 prevButton.addEventListener("click", ()=>{
    if(counter > 0){
        counter--;
        
    }else{
        counter = ImagesArray.length -1;
    }
    displayCurrentImage();
 });

 nextButton.addEventListener("click", ()=>{
 if (counter < ImagesArray.length - 1){
    counter++;
}else{
    counter = 0;
 }
 displayCurrentImage();
});

displayCurrentImage();

})