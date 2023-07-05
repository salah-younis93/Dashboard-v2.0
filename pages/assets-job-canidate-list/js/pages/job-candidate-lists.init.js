var url = "assets/json/",
    allcandidateList = "",
    prevButton = document.getElementById("page-prev"),
    nextButton = document.getElementById("page-next"),
    currentPage = 1,
    itemsPerPage = 8,
    getJSON = function(e, t) {
        var a = new XMLHttpRequest;
        a.open("GET", url + e, !0), a.responseType = "json", a.onload = function() {
            var e = a.status;
            t(200 === e ? null : e, a.response)
        }, a.send()
    };

function loadCandidateListData(e, t) {
    var a = Math.ceil(e.length / itemsPerPage);
    a < (t = t < 1 ? 1 : t) && (t = a), document.querySelector("#candidate-list").innerHTML = "";
    for (var n, i, s = (t - 1) * itemsPerPage; s < t * itemsPerPage && s < e.length; s++) e[s] && (n = e[s].bookmark ? "active" : "", i = e[s].userImg ? '<img src="' + e[s].userImg + '" alt="" class="member-img img-fluid d-block rounded" />' : '<div class="avatar-title border bg-light text-primary rounded text-uppercase fs-16">' + e[s].nickname + "</div>", document.querySelector("#candidate-list").innerHTML += '<div class="col-md-6 col-lg-12">        <div class="card mb-0">            <div class="card-body">                <div class="d-lg-flex align-items-center">                    <div class="flex-shrink-0">                        <div class="avatar-sm rounded">' + i + '</div>                    </div>                    <div class="ms-lg-3 my-3 my-lg-0">                        <a href="pages-profile.html"><h5 class="fs-16 mb-2">' + e[s].candidateName + '</h5></a>                        <p class="text-muted mb-0">' + e[s].designation + '</p>                    </div>                    <div class="d-flex gap-4 mt-0 text-muted mx-auto">                        <div><i class="ri-map-pin-2-line text-primary me-1 align-bottom"></i> ' + e[s].location + '</div>                        <div><i class="ri-time-line text-primary me-1 align-bottom"></i> ' + isStatus(e[s].type) + '</div>                    </div>                    <div class="d-flex flex-wrap gap-2 align-items-center mx-auto my-3 my-lg-0">                        <div class="badge text-bg-success">                            <i class="mdi mdi-star me-1"></i>' + e[s].rating[0] + '                        </div>                        <div class="text-muted">' + e[s].rating[1] + '</div>                    </div>                    <div>                        <a href="#!" class="btn btn-soft-success">View Details</a>                        <a href="#!" class="btn btn-ghost-danger btn-icon custom-toggle ' + n + '" data-bs-toggle="button">                            <span class="icon-on"><i class="ri-bookmark-line align-bottom"></i></span>                            <span class="icon-off"><i class="ri-bookmark-3-fill align-bottom"></i></span>                        </a>                    </div>                </div>            </div>        </div>    </div>');
    selectedPage(), 1 == currentPage ? prevButton.parentNode.classList.add("disabled") : prevButton.parentNode.classList.remove("disabled"), currentPage == a ? nextButton.parentNode.classList.add("disabled") : nextButton.parentNode.classList.remove("disabled")
}

function isStatus(e) {
    switch (e) {
        case "Part Time":
            return '<span class="badge badge-soft-danger">' + e + "</span>";
        case "Full Time":
            return '<span class="badge badge-soft-success">' + e + "</span>";
        case "Freelancer":
            return '<span class="badge badge-soft-secondary">' + e + "</span>"
    }
}

function selectedPage() {
    for (var e = document.getElementById("page-num").getElementsByClassName("clickPageNumber"), t = 0; t < e.length; t++) t == currentPage - 1 ? e[t].parentNode.classList.add("active") : e[t].parentNode.classList.remove("active")
}

function paginationEvents() {
    function e() {
        return Math.ceil(allcandidateList.length / itemsPerPage)
    }
    prevButton.addEventListener("click", function() {
        1 < currentPage && loadCandidateListData(allcandidateList, --currentPage)
    }), nextButton.addEventListener("click", function() {
        currentPage < e() && loadCandidateListData(allcandidateList, ++currentPage)
    });
    var t = document.getElementById("page-num");
    t.innerHTML = "";
    for (var a = 1; a < e() + 1; a++) t.innerHTML += "<div class='page-item'><a class='page-link clickPageNumber' href='javascript:void(0);'>" + a + "</a></div>";
    document.addEventListener("click", function(e) {
        "A" == e.target.nodeName && e.target.classList.contains("clickPageNumber") && (currentPage = e.target.textContent, loadCandidateListData(allcandidateList, currentPage))
    }), selectedPage()
}
getJSON("job-candidate-list.json", function(e, t) {
    null !== e ? console.log("Something went wrong: " + e) : (loadCandidateListData(allcandidateList = t, currentPage), paginationEvents())
});
var searchElementList = document.getElementById("searchJob");
searchElementList.addEventListener("keyup", function() {
    var e = searchElementList.value.toLowerCase();
    t = e;
    for (var t, e = allcandidateList.filter(function(e) {
            return -1 !== e.designation.toLowerCase().indexOf(t.toLowerCase()) || -1 !== e.candidateName.toLowerCase().indexOf(t.toLowerCase())
        }), a = (0 == e.length ? document.getElementById("pagination-element").style.display = "none" : document.getElementById("pagination-element").style.display = "flex", document.getElementById("page-num")), n = (a.innerHTML = "", Math.ceil(e.length / itemsPerPage)), i = 1; i < n + 1; i++) a.innerHTML += "<div class='page-item'><a class='page-link clickPageNumber' href='javascript:void(0);'>" + i + "</a></div>";
    loadCandidateListData(e, currentPage)
});