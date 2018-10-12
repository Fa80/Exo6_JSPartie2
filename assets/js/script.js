function changeimage(){
  document.getElementById("image1").src ="assets/img/image1_2.jpg";
  document.getElementById("image2").src ="assets/img/image2_2.jpg";
  document.getElementById("image3").src ="assets/img/image3_2.jpg";
  document.getElementById("image4").src ="assets/img/image4_2.jpg";
  document.getElementById("image5").src ="assets/img/image5_2.jpg";
  }
  function changeimage2(){
    document.getElementById("image1").src ="assets/img/image1.jpg";
    document.getElementById("image2").src ="assets/img/image2.jpg";
    document.getElementById("image3").src ="assets/img/image3.jpg";
    document.getElementById("image4").src ="assets/img/image4.jpg";
    document.getElementById("image5").src ="assets/img/image5.jpg";
 }

 /* Deuxième solution mais dans ce cas mettre (this) dans le html dans les parentheses de changeimage  ie dans onemouseover="changeimage"(this).
 function changeimage(image) {
   image.src = "assets/img/" + image.id + "_2.jpg";
 }
 function changeimage2(image) {
   image.src = "assets/img/" + image.id + ".jpg";
}
 */
