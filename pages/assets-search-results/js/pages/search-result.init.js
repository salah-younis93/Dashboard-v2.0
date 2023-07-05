var swiper = new Swiper(".images-menu", {
        slidesPerView: "auto",
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: !0
        }
    }),
    lightbox = GLightbox({
        selector: ".image-popup",
        title: !1
    });

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var r = 0, t = Array(e.length); r < e.length; r++) t[r] = e[r];
        return t
    }
    return Array.from(e)
}
var currentItems, loadmore = document.querySelector("#loadmore");
loadmore && (currentItems = 3, loadmore.addEventListener("click", function(e) {
    var r = [].concat(_toConsumableArray(document.querySelectorAll(".list .list-element")));
    if (r) {
        for (var t = currentItems; t < currentItems + 3; t++) r[t] && (r[t].style.display = "block");
        (currentItems += 3) >= r.length && (event.target.style.display = "none")
    }
}));