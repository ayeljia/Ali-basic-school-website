
let index = 0;
displayImages();
function displayImages() {
 let i;
 const images = document.getElementsByClassName("imge");
 for (i = 0; i < images.length; i++) {
   images[i].style.display = "none";
 }
 index++;
 if (index > images.length) {
   index = 1;
 }
 images[index-1].style.display = "inline";
 setTimeout(displayImages, 5000); 
}
