let URL = `http://localhost:3000/tickets`

document.querySelector("form").addEventListener("submit", function () {
    getData();
})

async function getData() {
    event.preventDefault()

    let title = document.getElementById("input1").value
    let discription = document.getElementById("input2").value
    let status = document.getElementById("input3").value
    let duedate = document.getElementById("input4").value


    let obj = {
        title,
        discription,
        status,
        duedate
    }

    await fetch(`${URL}`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(obj)
    })
    window.location.href = "index.html";
}