
$(() => {

  let icons = []

  $('.sidenav').sidenav();
let glycemia = $('#level').text()
let iconColor = $('.circle')
// if(glycemia > 220){
//   iconColor.addClass('red')
// } else if(glycemia < 220 && glycemia > 90){
//   iconColor.addClass('green')
// } else if(glycemia < 90){
//   iconColor.addClass('red')
// }
let over220 = Number >220
let under220 = Number <220
switch(glycemia) {
  case over220:
    iconColor.addClass('red')
    break;
  case under220:
    iconColor.addClass('green')
    break;
  }
})
