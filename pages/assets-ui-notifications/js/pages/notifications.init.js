var toastTrigger2 = document.getElementById("borderedToast1Btn"),
    toastLiveExample2 = document.getElementById("borderedToast1"),
    toastTrigger3 = (toastTrigger2 && toastLiveExample2 && toastTrigger2.addEventListener("click", function() {
        new bootstrap.Toast(toastLiveExample2).show()
    }), document.getElementById("borderedToast2Btn")),
    toastLiveExample3 = document.getElementById("borderedToast2"),
    toastTrigger4 = (toastTrigger3 && toastLiveExample3 && toastTrigger3.addEventListener("click", function() {
        new bootstrap.Toast(toastLiveExample3).show()
    }), document.getElementById("borderedTost3Btn")),
    toastLiveExample4 = document.getElementById("borderedTost3"),
    toastTrigger5 = (toastTrigger4 && toastLiveExample4 && toastTrigger4.addEventListener("click", function() {
        new bootstrap.Toast(toastLiveExample4).show()
    }), document.getElementById("borderedToast4Btn")),
    toastLiveExample5 = document.getElementById("borderedToast4");
toastTrigger5 && toastLiveExample5 && toastTrigger5.addEventListener("click", function() {
    new bootstrap.Toast(toastLiveExample5).show()
}), (toastPlacement = document.getElementById("toastPlacement")) && document.getElementById("selectToastPlacement").addEventListener("change", function() {
    toastPlacement.dataset.originalClass || (toastPlacement.dataset.originalClass = toastPlacement.className), toastPlacement.className = toastPlacement.dataset.originalClass + " " + this.value
}), Array.from(document.querySelectorAll(".bd-example .toast")).forEach(function(t) {
    new bootstrap.Toast(t, {
        autohide: !1
    }).show()
});