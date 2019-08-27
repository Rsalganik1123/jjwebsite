const nav1 = document.getElementById('nav-stuff1')
nav1.style.visibility="hidden"
const nav2 = document.getElementById('nav-stuff2')
nav2.style.visibility="hidden"
const nav3 = document.getElementById('nav-stuff3')
nav3.style.visibility="hidden"

const head1 = document.getElementById('nav-opt1')
const head2 = document.getElementById('nav-opt2')
const head3 = document.getElementById('nav-opt3')

head1.addEventListener('mouseover', (e) => {
    nav1.style.visibility="visible"
})
head1.addEventListener('mouseleave', (e) => {
    nav1.style.visibility="hidden"
})
head2.addEventListener('mouseover', (e) => {
    nav2.style.visibility="visible"
})
head2.addEventListener('mouseleave', (e) => {
    nav2.style.visibility="hidden"
})
head3.addEventListener('mouseover', (e) => {
    nav3.style.visibility="visible"
})
head3.addEventListener('mouseleave', (e) => {
    nav3.style.visibility="hidden"
})