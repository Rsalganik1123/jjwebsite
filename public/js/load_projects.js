const sndbtn1 = document.getElementById('snd1btn')
const sndbtn2 = document.getElementById('snd2btn')
const sndbtn3 = document.getElementById('snd3btn')
const sndbtn4 = document.getElementById('snd4btn')
const sndbtn5 = document.getElementById('snd5btn')
const description = document.getElementById('projName')
description.style.visibility = "hidden"


sndbtn1.addEventListener('mouseover', (e) => {
    const musBox = document.getElementById('musBox')
    musBox.innerHTML = 
    '<audio controls><source src="../music/Reel.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>'
    const description = document.getElementById('projName')
    const name = sndbtn1.innerText
    description.innerText = name
    description.style.visibility = "visible"
})
sndbtn2.addEventListener('mouseover', (e) => {
    const musBox = document.getElementById('musBox')
    musBox.innerHTML = 
    '<audio controls><source src="../music/Snow.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>'
    const description = document.getElementById('projName')
    const name = sndbtn2.innerText
    description.innerText = name
    description.style.visibility = "visible"
})
sndbtn3.addEventListener('mouseover', (e) => {
    const musBox = document.getElementById('musBox')
    musBox.innerHTML = 
    '<audio controls><source src="../music/IntoAlien.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>'
    const description = document.getElementById('projName')
    const name = sndbtn3.innerText
    description.innerText = name
    description.style.visibility = "visible"
})
sndbtn4.addEventListener('mouseover', (e) => {
    
    const musBox = document.getElementById('musBox')
    musBox.innerHTML = 
    '<audio controls><source src="../music/HMC.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>'
    const description = document.getElementById('projName')
    const name = sndbtn4.innerText
    description.innerText = name
    description.style.visibility = "visible"
})
sndbtn5.addEventListener('mouseover', (e) => {
    
    const musBox = document.getElementById('musBox')
    musBox.innerHTML = 
    '<audio controls><source src="../music/walk.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>'
    const description = document.getElementById('projName')
    const name = sndbtn5.innerText
    description.innerText = name
    description.style.visibility = "visible"
})
