// Quality of Life

function target(selector) {
    output = document.querySelector(selector)
    return output
}

function targets(selector) {
    output = document.querySelectorAll(selector)
    return output
}

function check(input) {
    console.log(input)
}

// Get Nav Bar button
navButton = target("#mini-nav")
navExit = target("#nav-exit")
navExit_2 =  target("#nav-contact-button")

navButton.addEventListener("click", function(){
    target("nav").setAttribute(`class`,`opened`)
})
navExit.addEventListener("click", function(){
    target("nav").setAttribute(`class`,``)
})
navExit_2.addEventListener("click", function(){
    target("nav").setAttribute(`class`,``)
})