var favouriteBtn = document.querySelectorAll(".favourite-btn");
favouriteBtn && Array.from(document.querySelectorAll(".favourite-btn")).forEach(function(t) {
    t.addEventListener("click", function(t) {
        this.classList.toggle("active")
    })
});