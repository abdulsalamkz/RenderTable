function renderTable(id, data) {
    const body = document.getElementById(id);
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    body.appendChild(table);
    table.appendChild(thead);

    const tr = document.createElement("tr");
    thead.appendChild(tr);
    for (const key in data[0]) {
        const th = document.createElement("th");
        th.innerHTML = key;
        tr.appendChild(th);
    }
    table.appendChild(tbody)
    data.forEach((element) => {
        const tr = document.createElement("tr");
        tbody.appendChild(tr);
        for (const key in element) {
            const td = document.createElement("td");
            td.innerHTML = element[key];
            tr.appendChild(td);
        }
    });
}

async function getUsers() {
    const response = await fetch("./users.json");
    const users = await response.json();
    renderTable("body", users)
}

getUsers()


