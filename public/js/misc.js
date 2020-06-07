


$(() => {

  let icons = []

  $('.sidenav').sidenav();


let glycemia = $('.level').text()
let iconColor = $('.circle')

let color = ''

if(glycemia > 220){
  color = 'red'
} else if(glycemia < 220 && glycemia > 110){
  color = 'orange'
} else if(glycemia < 110 && glycemia > 90){
  color = 'green'
}


})
