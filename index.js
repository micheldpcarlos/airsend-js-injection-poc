// File to be injected in airsend

alert("🅈🄾🅄 🄷🄰🅅🄴 🄱🄴🄴🄽 🄷🄰🄲🄺🄴🄳");



const { shell } = require('electron');

if (shell) {
  
  shell.openExternal('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  
} else {

  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')
}

