 // item-2 contents

 const revealBtn = document.querySelector('.reveal-btn');

 const hiddenContent = document.querySelector('.hidden-content');

 function revealContent() {
    if (hiddenContent.classList.contains('reveal-btn')) {
        hiddenContent.classList.remove('reveal-btn')
    } else {
        hiddenContent.classList.add('reveal-btn')
    }
 }


 revealBtn.addEventListener('click', revealContent)


 let alienShip = {
    invade() {
        console.log('They are coming to invade SA')
    },
    takeOff() {
        console.log('its time to go now, let us retreat!')
    }
 };



 alienShip.takeOff()

  delete alienShip.invade();

  console.log(alienShip)