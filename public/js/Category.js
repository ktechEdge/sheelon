let ServerData = [];
GetTableData().then(CreateTable);

async function GetTableData() {
    let res = await fetch('/categories/List');
    ServerData = await res.json();
}

function CreateTable() {
    let str = '';
    for (let line of ServerData) {
        str += `<tr>`;
        str += `<td>${line.ID}</td>`;
        str += `<td>${line.Category_Text}</td>`;
        str += `<td onclick="DeleteLine(${line.ID})" class="tableBtn">מחק שורה</td>`;
        str += `<td onClick="EditLine(${line.ID})" class="tableBtn">ערוך שורה</td>`;
        str += `</tr>`;
    }
    document.querySelector('tbody').innerHTML = str;
    document.getElementById('UpdateInput').value = "";
}

async function AddLine() {
    let CatContent = document.getElementById('UpdateInput').value;
    if (CatContent === "") return;
    await fetch('/categories/Add', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'CatContent': CatContent})
    });
    GetTableData().then(CreateTable);
}

async function DeleteLine(id) {
    await fetch('/categories/Del', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'Cat_id': id})
    });
    GetTableData().then(CreateTable);
}

async function EditLine(id) {
    let CatContent = document.getElementById('UpdateInput').value;
    if (CatContent === "") return;
    await fetch('/categories/Edit', {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'CatContent': CatContent, 'Cat_id': id})
    });
    GetTableData().then(CreateTable);
}
