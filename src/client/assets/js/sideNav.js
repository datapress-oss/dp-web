const sideBtnOpen = document.getElementById('sideNav-openBtn')
const sideBtnClose = document.getElementById('sideNav-closeBtn')
let isOpen = false

function openNav () {
  document.getElementById('mySidenav').style.width = '250px'
}

function closeNav () {
  document.getElementById('mySidenav').style.width = '0'
}

sideBtnOpen.onclick = () => {
  if (isOpen === false) {
    openNav()
    isOpen = true
  } else if (isOpen === true) {
    closeNav()
    isOpen = false
  }
}

sideBtnClose.onclick = () => {
  closeNav()
}
