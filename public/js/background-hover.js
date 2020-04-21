// for ( var i = 1;  i <= 2500; i++){
//     $('.mega-container').append('<div class="box"></div>');
// }

let array = [];
for (let i = 0; i <= 2500; i++) {
  array.push('<div class="box"></div>')
}
document.querySelector(".mega-container").innerHTML = array.join("");
