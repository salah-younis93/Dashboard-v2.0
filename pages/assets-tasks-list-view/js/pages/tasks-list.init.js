var checkAll = document.getElementById("checkAll"),
    perPage = (checkAll && (checkAll.onclick = function() {
        for (var e = document.querySelectorAll('.form-check-all input[type="checkbox"]'), t = document.querySelectorAll('.form-check-all input[type="checkbox"]:checked').length, a = 0; a < e.length; a++) e[a].checked = this.checked, e[a].checked ? e[a].closest("tr").classList.add("table-active") : e[a].closest("tr").classList.remove("table-active");
        document.getElementById("remove-actions").style.display = 0 < t ? "none" : "block"
    }), 8),
    editlist = !1,
    options = {
        valueNames: ["id", "project_name", "tasks_name", "client_name", "assignedto", "due_date", "status", "priority"],
        page: perPage,
        pagination: !0,
        plugins: [ListPagination({
            left: 2,
            right: 2
        })]
    },
    tasksList = new List("tasksList", options).on("updated", function(e) {
        0 == e.matchingItems.length ? document.getElementsByClassName("noresult")[0].style.display = "block" : document.getElementsByClassName("noresult")[0].style.display = "none";
        var t = 1 == e.i,
            a = e.i > e.matchingItems.length - e.page;
        document.querySelector(".pagination-prev.disabled") && document.querySelector(".pagination-prev.disabled").classList.remove("disabled"), document.querySelector(".pagination-next.disabled") && document.querySelector(".pagination-next.disabled").classList.remove("disabled"), t && document.querySelector(".pagination-prev").classList.add("disabled"), a && document.querySelector(".pagination-next").classList.add("disabled"), e.matchingItems.length <= perPage ? document.querySelector(".pagination-wrap").style.display = "none" : document.querySelector(".pagination-wrap").style.display = "flex", e.matchingItems.length == perPage && document.querySelector(".pagination.listjs-pagination").firstElementChild.children[0].click(), 0 < e.matchingItems.length ? document.getElementsByClassName("noresult")[0].style.display = "none" : document.getElementsByClassName("noresult")[0].style.display = "block"
    });
const xhttp = new XMLHttpRequest;
xhttp.onload = function() {
    var e = JSON.parse(this.responseText);
    Array.from(e).forEach(function(e) {
        var t = e.assignedto,
            a = '<div class="avatar-group flex-nowrap">';
        Array.from(t.slice(0, 3)).forEach(function(e) {
            a += '<a href="javascript: void(0);" class="avatar-group-item" data-img="' + e.assigneeImg + '"  data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="' + e.assigneeName + '">                <img src="' + e.assigneeImg + '" alt="" class="rounded-circle avatar-xxs" />            </a>'
        }), 3 < t.length && (t = t.length - 3, a += '<a href="javascript: void(0);" class="avatar-group-item"  data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="' + t + ' More">            <div class="avatar-xxs">            <div class="avatar-title rounded-circle">' + t + "+</div>            </div>        </a>"), a += "</div>", tasksList.add({
            id: '<a href="apps-tasks-details.html" class="fw-medium link-primary">#VLZ' + e.id + "</a>",
            project_name: '<a href="apps-projects-overview.html" class="fw-medium link-primary">' + e.project_name + "</a>",
            tasks_name: e.tasks_name,
            client_name: e.client_name,
            assignedto: a,
            due_date: e.due_date,
            status: isStatus(e.status),
            priority: isPriority(e.priority)
        }), tasksList.sort("id", {
            order: "desc"
        }), refreshCallbacks(), tooltipElm()
    }), tasksList.remove("id", '<a href="apps-tasks-details.html" class="fw-medium link-primary">#VLZ501</a>')
}, xhttp.open("GET", "assets/json/tasks-list.json"), xhttp.send();
var isValue = (isCount = (new DOMParser).parseFromString(tasksList.items.slice(-1)[0]._values.id, "text/html")).body.firstElementChild.innerHTML,
    idField = document.getElementById("tasksId"),
    projectNameField = document.getElementById("projectName-field"),
    tasksTitleField = document.getElementById("tasksTitle-field"),
    clientNameField = document.getElementById("clientName-field"),
    assignedtoNameField = "Demo Assign",
    dateDueField = document.getElementById("duedate-field"),
    priorityField = document.getElementById("priority-field"),
    statusField = document.getElementById("ticket-status"),
    addBtn = document.getElementById("add-btn"),
    editBtn = document.getElementById("edit-btn"),
    removeBtns = document.getElementsByClassName("remove-item-btn"),
    editBtns = document.getElementsByClassName("edit-item-btn");

function tooltipElm() {
    [...document.querySelectorAll('[data-bs-toggle="tooltip"]')].map(e => new bootstrap.Tooltip(e))
}

function filterOrder(e) {
    var t = e;
    tasksList.filter(function(e) {
        e = (matchData = (new DOMParser).parseFromString(e.values().status, "text/html")).body.firstElementChild.innerHTML;
        return "All" == e || "All" == t || e == t
    }), tasksList.update()
}

function updateList() {
    var t = document.querySelector("input[name=status]:checked").value;
    data = userList.filter(function(e) {
        return "All" == t || e.values().sts == t
    }), userList.update()
}
refreshCallbacks(), document.getElementById("showModal").addEventListener("show.bs.modal", function(e) {
    e.relatedTarget.classList.contains("edit-item-btn") ? (document.getElementById("exampleModalLabel").innerHTML = "Edit Task", document.getElementById("showModal").querySelector(".modal-footer").style.display = "block", document.getElementById("add-btn").innerHTML = "Update") : e.relatedTarget.classList.contains("add-btn") ? (document.getElementById("exampleModalLabel").innerHTML = "Add Task", document.getElementById("showModal").querySelector(".modal-footer").style.display = "block", document.getElementById("add-btn").innerHTML = "Add Task") : (document.getElementById("exampleModalLabel").innerHTML = "List Task", document.getElementById("showModal").querySelector(".modal-footer").style.display = "none")
}), document.getElementById("showModal").addEventListener("hidden.bs.modal", function() {
    clearFields()
}), document.querySelector("#tasksList").addEventListener("click", function() {
    ischeckboxcheck()
});
var table = document.getElementById("tasksTable"),
    tr = table.getElementsByTagName("tr"),
    trlist = table.querySelectorAll(".list tr"),
    count = 11,
    forms = document.querySelectorAll(".tablelist-form"),
    example = (Array.prototype.slice.call(forms).forEach(function(a) {
        a.addEventListener("submit", function(e) {
            var t;
            a.checkValidity() ? (e.preventDefault(), "" === projectNameField.value || "" === tasksTitleField.value || "" === clientNameField.value || "" === dateDueField.value || "" === priorityField.value || "" === statusField.value || editlist ? "" !== projectNameField.value && "" !== tasksTitleField.value && "" !== clientNameField.value && "" !== dateDueField.value && "" !== priorityField.value && "" !== statusField.value && editlist && (t = tasksList.get({
                id: idField.value
            }), Array.from(t).forEach(function(e) {
                (isid = (new DOMParser).parseFromString(e._values.id, "text/html")).body.firstElementChild.innerHTML == itemId && e.values({
                    id: '<a href="javascript:void(0);" class="fw-medium link-primary">' + idField.value + "</a>",
                    project_name: '<a href="apps-projects-overview.html" class="fw-medium link-primary">' + projectNameField.value + "</a>",
                    tasks_name: tasksTitleField.value,
                    client_name: clientNameField.value,
                    assignedto: assignToUsers(),
                    due_date: fomateDate(dateDueField.value),
                    status: isStatus(statusField.value),
                    priority: isPriority(priorityField.value)
                })
            }), document.getElementById("close-modal").click(), clearFields(), Swal.fire({
                position: "center",
                icon: "success",
                title: "Task updated Successfully!",
                showConfirmButton: !1,
                timer: 2e3,
                showCloseButton: !0
            })) : (tasksList.add({
                id: '<a href="apps-tasks-details.html" class="fw-medium link-primary">#VLZ' + count + "</a>",
                project_name: '<a href="apps-projects-overview.html" class="fw-medium link-primary">' + projectNameField.value + "</a>",
                tasks_name: tasksTitleField.value,
                client_name: clientNameField.value,
                assignedto: assignToUsers(),
                due_date: fomateDate(dateDueField.value),
                status: isStatus(statusField.value),
                priority: isPriority(priorityField.value)
            }), tasksList.sort("id", {
                order: "desc"
            }), document.getElementById("close-modal").click(), clearFields(), refreshCallbacks(), count++, Swal.fire({
                position: "center",
                icon: "success",
                title: "Task inserted successfully!",
                showConfirmButton: !1,
                timer: 2e3,
                showCloseButton: !0
            }))) : (e.preventDefault(), e.stopPropagation())
        }, !1)
    }), new Choices(priorityField, {
        searchEnabled: !1
    })),
    statusVal = new Choices(statusField, {
        searchEnabled: !1
    });

function SearchData() {
    var i = document.getElementById("idStatus").value,
        l = document.getElementById("demo-datepicker").value,
        n = l.split(" to ")[0],
        r = l.split(" to ")[1];
    tasksList.filter(function(e) {
        var t = (matchData = (new DOMParser).parseFromString(e.values().status, "text/html")).body.firstElementChild.innerHTML,
            a = !1,
            s = !1,
            a = "all" == t || "all" == i || t == i,
            s = new Date(e.values().due_date.slice(0, 12)) >= new Date(n) && new Date(e.values().due_date.slice(0, 12)) <= new Date(r);
        return a && s || (a && "" == l ? a : s && "" == l ? s : void 0)
    }), tasksList.update()
}

function ischeckboxcheck() {
    Array.from(document.getElementsByName("chk_child")).forEach(function(a) {
        a.addEventListener("change", function(e) {
            1 == a.checked ? e.target.closest("tr").classList.add("table-active") : e.target.closest("tr").classList.remove("table-active");
            var t = document.querySelectorAll('[name="chk_child"]:checked').length;
            e.target.closest("tr").classList.contains("table-active"), document.getElementById("remove-actions").style.display = 0 < t ? "block" : "none"
        })
    })
}

function refreshCallbacks() {
    removeBtns && Array.from(removeBtns).forEach(function(e) {
        e.addEventListener("click", function(e) {
            e.target.closest("tr").children[1].innerText, itemId = e.target.closest("tr").children[1].innerText;
            e = tasksList.get({
                id: itemId
            });
            Array.from(e).forEach(function(e) {
                var t = (deleteid = (new DOMParser).parseFromString(e._values.id, "text/html")).body.firstElementChild;
                deleteid.body.firstElementChild.innerHTML == itemId && document.getElementById("delete-record").addEventListener("click", function() {
                    tasksList.remove("id", t.outerHTML), document.getElementById("deleteRecord-close").click()
                })
            })
        })
    }), editBtns && Array.from(editBtns).forEach(function(e) {
        e.addEventListener("click", function(e) {
            e.target.closest("tr").children[1].innerText, itemId = e.target.closest("tr").children[1].innerText;
            e = tasksList.get({
                id: itemId
            });
            Array.from(e).forEach(function(e) {
                var t, a = (isid = (new DOMParser).parseFromString(e._values.id, "text/html")).body.firstElementChild.innerHTML;
                a == itemId && (editlist = !0, idField.value = a, a = (project = (new DOMParser).parseFromString(e._values.project_name, "text/html")).body.firstElementChild.innerHTML, statusVal.setChoiceByValue(t), projectNameField.value = a, tasksTitleField.value = e._values.tasks_name, clientNameField.value = e._values.client_name, dateDueField.value = e._values.due_date, Array.from(document.querySelectorAll('input[name="assignedTo[]"]')).forEach(function(t) {
                    var a = t.parentElement.querySelector(".flex-grow-1").innerHTML;
                    (new DOMParser).parseFromString(e._values.assignedto, "text/html").querySelectorAll(".avatar-group .avatar-group-item").forEach(function(e) {
                        e.getAttribute("data-bs-title") == a && t.setAttribute("checked", "checked")
                    })
                }), statusVal && statusVal.destroy(), statusVal = new Choices(statusField, {
                    searchEnabled: !1
                }), t = (val = (new DOMParser).parseFromString(e._values.status, "text/html")).body.firstElementChild.innerHTML, statusVal.setChoiceByValue(t), example && example.destroy(), example = new Choices(priorityField, {
                    searchEnabled: !1
                }), a = (val = (new DOMParser).parseFromString(e._values.priority, "text/html")).body.firstElementChild.innerHTML, example.setChoiceByValue(a), flatpickr("#duedate-field", {
                    dateFormat: "d M, Y",
                    defaultDate: e._values.due_date
                }))
            })
        })
    })
}

function clearFields() {
    projectNameField.value = "", tasksTitleField.value = "", clientNameField.value = "", assignedtoNameField.value = "", dateDueField.value = "", document.querySelectorAll('input[name="assignedTo[]"]').forEach(function(e) {
        e.removeAttribute("checked")
    }), example && example.destroy(), example = new Choices(priorityField), statusVal && statusVal.destroy(), statusVal = new Choices(statusField)
}

function isStatus(e) {
    switch (e) {
        case "Pending":
            return '<span class="badge badge-soft-warning text-uppercase">' + e + "</span>";
        case "Inprogress":
            return '<span class="badge badge-soft-secondary text-uppercase">' + e + "</span>";
        case "Completed":
            return '<span class="badge badge-soft-success text-uppercase">' + e + "</span>";
        case "New":
            return '<span class="badge badge-soft-info text-uppercase">' + e + "</span>"
    }
}

function isPriority(e) {
    switch (e) {
        case "High":
            return '<span class="badge bg-danger text-uppercase">' + e + "</span>";
        case "Low":
            return '<span class="badge bg-success text-uppercase">' + e + "</span>";
        case "Medium":
            return '<span class="badge bg-warning text-uppercase">' + e + "</span>"
    }
}

function fomateDate(e) {
    var e = new Date(e),
        t = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][e.getMonth()];
    return e.getDate() + " " + t + ", " + e.getFullYear()
}

function assignToUsers() {
    var s = [],
        e = document.querySelectorAll('input[name="assignedTo[]"]:checked'),
        e = (Array.from(e).forEach(function(e) {
            var e = e.parentElement,
                t = e.querySelector(".avatar-xxs").getAttribute("src"),
                e = e.querySelector(".flex-grow-1").innerHTML,
                a = {};
            a.assigneeName = e, a.assigneeImg = t, s.push(a)
        }), s),
        t = '<div class="avatar-group flex-nowrap">';
    return Array.from(e.slice(0, 3)).forEach(function(e) {
        t += '<a href="javascript: void(0);" class="avatar-group-item" data-img="' + e.assigneeImg + '"  data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="' + e.assigneeName + '">            <img src="' + e.assigneeImg + '" alt="" class="rounded-circle avatar-xxs" />        </a>'
    }), 3 < e.length && (e = e.length - 3, t += '<a href="javascript: void(0);" class="avatar-group-item"  data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="' + e + ' More">        <div class="avatar-xxs">        <div class="avatar-title rounded-circle">' + e + "+</div>        </div>    </a>"), t += "</div>"
}

function deleteMultiple() {
    ids_array = [];
    var e, t = document.getElementsByName("chk_child");
    for (i = 0; i < t.length; i++) 1 == t[i].checked && (e = t[i].parentNode.parentNode.parentNode.querySelector("td a").innerHTML, ids_array.push(e));
    "undefined" != typeof ids_array && 0 < ids_array.length ? (Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: !0,
        confirmButtonClass: "btn btn-primary w-xs me-2 mt-2",
        cancelButtonClass: "btn btn-danger w-xs mt-2",
        confirmButtonText: "Yes, delete it!",
        buttonsStyling: !1,
        showCloseButton: !0
    }).then(function(e) {
        if (e.value) {
            for (i = 0; i < ids_array.length; i++) tasksList.remove("id", `<a href="apps-tasks-details.html" class="fw-medium link-primary">${ids_array[i]}</a>`);
            document.getElementById("remove-actions").style.display = "none", document.getElementById("checkAll").checked = !1, Swal.fire({
                title: "Deleted!",
                text: "Your data has been deleted.",
                icon: "success",
                confirmButtonClass: "btn btn-info w-xs mt-2",
                buttonsStyling: !1
            })
        }
    }), document.getElementById("checkAll").checked = !1) : Swal.fire({
        title: "Please select at least one checkbox",
        confirmButtonClass: "btn btn-info",
        buttonsStyling: !1,
        showCloseButton: !0
    })
}
document.querySelector(".pagination-next").addEventListener("click", function() {
    document.querySelector(".pagination.listjs-pagination") && document.querySelector(".pagination.listjs-pagination").querySelector(".active") && document.querySelector(".pagination.listjs-pagination").querySelector(".active").nextElementSibling.children[0].click()
}), document.querySelector(".pagination-prev").addEventListener("click", function() {
    document.querySelector(".pagination.listjs-pagination") && document.querySelector(".pagination.listjs-pagination").querySelector(".active") && document.querySelector(".pagination.listjs-pagination").querySelector(".active").previousSibling.children[0].click()
});