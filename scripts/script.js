var btn = document.querySelector(".btn")
var products = document.querySelectorAll("ul li")
var divTotalPrice = document.querySelector(".divTotalPrice")
var choosenProducts = document.querySelector(".choosenProducts")
var totalPrice = 0

products.forEach(function(item){
    item.onclick = function(){
        choosenProducts.innerHTML += item.textContent + "  "
        totalPrice += +(item.getAttribute("price"))
        if (choosenProducts != "") {
            btn.style.display = "block"
            choosenProducts.style.display = "block"
        }

    }
})
btn.onclick = function() {
    divTotalPrice.innerHTML = totalPrice + " EGP"
}
