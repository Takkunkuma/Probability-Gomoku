var blocks = 18 * 18;
for (var i = 0; i < blocks; i++){
    var container = document.querySelector(".grid")
    console.log(container.innerHTML);
    container.innerHTML += '<div></div>';
}