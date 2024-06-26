let URL = `http://localhost:3000/tickets`



let main = document.getElementById("container")

getData()
async function getData() {
    try {

        let res = await fetch(`${URL}`)
        let data = await res.json()
        console.log(data);
        DisplayData(data)

    } catch (error) {
        console.log("error");
    }
}

function DisplayData(arr) {
    main.innerHTML = ""

    arr.forEach((ele) => {
        let card = document.createElement("div");


        let title = document.createElement("h3");
        title.textContent = ele.title;

        let dis = document.createElement("p");
        dis.textContent = ele.dis;

        let status = document.createElement("p");
        status.textContent = ele.status;

        let date = document.createElement("p");
        date.textContent = ele.date;

        let edtbtn = document.createElement("button")
        edtbtn.textContent = "Edit";

        edtbtn.addEventListener("click", function () {
            localStorage.setItem("EditID", ele.id);
            window.location.href = "edit.html"
        })

        let dltbtn = document.createElement("button")
        dltbtn.textContent = "Delete";

        dltbtn.addEventListener("click", async function () {
            let response = await fetch(`${URL}/${ele.id}`, {
                method: "DELETE"
            })
            getData()
        })

        card.append(title, dis, status, date, edtbtn, dltbtn);
        main.append(card);
    });

}