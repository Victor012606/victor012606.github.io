document.addEventListener("DOMContentLoaded", function(event) {
let targetImage = document.querySelector("#smart-image");
  targetImage.addEventListener("click", function() {
    targetImage.classList.remove("small");
   }); 
  if (targetImage.classList.contains("small")) {
   targetImage.classList.add("small");
} else {
   targetImage.classList.add("small");
}
});
