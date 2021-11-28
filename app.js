function changeBgColor () {
    var bgColor = prompt("Enter Color for Background Color")
    var section1 = document.getElementById("sec1")
    section1.style.backgroundColor = bgColor
}  


function changeTxtColor () {
    var txtColor = prompt("Enter Color for Text Color")
    var headings = document.getElementsByClassName("headings1")
    var buttons = document.getElementsByClassName("btns1")
    headings[0].style.color = txtColor
    buttons[0].style.color = txtColor
    buttons[0].style.borderColor = txtColor
    headings[1].style.color = txtColor
    buttons[1].style.color = txtColor
    buttons[1].style.borderColor = txtColor
}


function showImage(){
    var image = document.getElementById("img1")
    image.className = ""
}
function bigImage() {
    var image = document.getElementById("img1")
    image.className = "big"
}
function smallImage(){
    var image = document.getElementById("img1")
    image.className = ""
}
function hideImage(){
    var image = document.getElementById("img1")
    image.className = "hide"
}


function bulbOn(element) {
    element.src = "./images/bulbOn.png"
}
function bulbOff(element) {
    element.src = "./images/bulbOff.png"
}


function changeParaColor() {
    var paragraphs = document.getElementsByTagName("p")
    var para1 = prompt("Enter Color Name for Paragraph 1")
    var para2 = prompt("Enter Color Name for Paragraph 2")
    var para3 = prompt("Enter Color Name for Paragraph 3")
    var para4 = prompt("Enter Color Name for Paragraph 4")
    paragraphs[0].style.color = para1
    paragraphs[1].style.color = para2
    paragraphs[2].style.color = para3
    paragraphs[3].style.color = para4
}