document.querySelectorAll(".plan-nav .nav-item .nav-link") && Array.from(document.querySelectorAll(".plan-nav .nav-item .nav-link")).forEach(function(e) {
    var n, t = document.getElementsByClassName("month"),
        a = document.getElementsByClassName("annual");
    1 == e.classList.contains("active") && (n = 0, Array.from(t).forEach(function(e) {
        a[n].style.display = "none", e.style.display = "block", n++
    }))
}), document.getElementById("month-tab") && document.getElementById("month-tab").addEventListener("click", function() {
    var e = document.getElementsByClassName("month"),
        n = document.getElementsByClassName("annual"),
        t = 0;
    Array.from(e).forEach(function(e) {
        n[t] && (n[t].style.display = "none"), e && (e.style.display = "block"), t++
    })
}), document.getElementById("annual-tab") && document.getElementById("annual-tab").addEventListener("click", function() {
    var e = document.getElementsByClassName("month"),
        n = document.getElementsByClassName("annual"),
        t = 0;
    Array.from(e).forEach(function(e) {
        n[t] && (n[t].style.display = "block"), e && (e.style.display = "none"), t++
    })
});