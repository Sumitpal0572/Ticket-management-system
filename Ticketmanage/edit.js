let URL = `http://localhost:3000/tickets`


document.getElementById("edit").addEventListener("click", function () {
    editData();
})

async function editData() {
    let id = localStorage.getItem("EditID")

    let value = document.getElementById("input1").value;

    let obj = {
        title: value
    }
    console.log(obj);

    await fetch(`${URL}/${id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(obj)
    })
    window.location.href = "index.html"
}