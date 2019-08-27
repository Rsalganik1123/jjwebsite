const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const p3 = document.getElementById('p3')



p1.addEventListener('mouseover', (e) => {
    document.getElementById('im1').style.display = "block"
    document.getElementById('im1').style.margin = "2% 20% 0% 35%"
})
p1.addEventListener('mouseout', (e) => {
    document.getElementById('im1').style.display = "none" 
})
p2.addEventListener('mouseover', (e) => {
    document.getElementById('im2').style.display = "block"
    document.getElementById('im2').style.margin = "2% 20% 0% 35%"
})
p2.addEventListener('mouseout', (e) => {
    document.getElementById('im2').style.display = "none" 
})
p3.addEventListener('mouseover', (e) => {
    document.getElementById('im3').style.display = "block"
    document.getElementById('im3').style.margin = "2% 20% 0% 35%"
})
p3.addEventListener('mouseout', (e) => {
    document.getElementById('im3').style.display = "none" 
})

// p1.addEventListener('mouseover', (e) => {
//     document.getElementById('im1').style.visibility = "visible"
// })
// p1.addEventListener('mouseout', (e) => {
//     document.getElementById('im1').style.visibility = "hidden"
// })
// p2.addEventListener('mouseover', (e) => {
//     document.getElementById('im2').style.visibility = "visible"
// })
// p2.addEventListener('mouseout', (e) => {
//     document.getElementById('im2').style.visibility = "hidden"
// })
// p3.addEventListener('mouseover', (e) => {
//     document.getElementById('im1').style.visibility = "visible"
// })
// p3.addEventListener('mouseout', (e) => {
//     document.getElementById('im1').style.visibility = "hidden"
// })