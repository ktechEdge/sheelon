let ServerData = [];
GetTableData().then(CreateTable);

async function GetTableData() {
    let res = await fetch('/categories/List');
    ServerData = await res.json();
}

async function AddLine() {
    let CatContent = document.getElementById('Add-row-Input').value;
    if (CatContent === "") return;
    await fetch('/categories/Add', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'CatContent': CatContent})
    });
    GetTableData().then(CreateTable);
}

async function DeleteLine(id) {
    let str = "Are you Sure you want to delete Category?"
    if (!confirm(str)) return;
    await fetch('/categories/Del', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'Cat_id': id})
    });
    GetTableData().then(CreateTable);
}

async function EditLine(id) {
    let CatContent = document.getElementById('Update-row-Input').value;
    if (CatContent === "") return alert("Please Enter Name");
    await fetch('/categories/Edit', {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'CatContent': CatContent, 'Cat_id': id})
    });
    document.querySelector('.popup').close();
    GetTableData().then(CreateTable);
}

function CreateTable() {
    let str = '';
    for (let line of ServerData) {
        str += `<tr>`;
        str += `<td>${line.ID}</td>`;
        str += `<td>${line.Category_Text}</td>`;
        str += `<td onclick="DeleteLine(${line.ID})" class="tableBtn">מחק שורה</td>`;
        str += `<td onClick="togglePopup(${line.ID},'${line.Category_Text}')" class="tableBtn">ערוך שורה</td>`;
        str += `</tr>`;
    }
    document.querySelector('tbody').innerHTML = str;
    document.getElementById('Add-row-Input').value = "";
    document.getElementById('Update-row-Input').value = "";
}

function togglePopup(CatId = 0, CatName = " ") {
    let popup = document.querySelector('.popup');
    let span = document.querySelector('#Current-Category');
    let btn = document.querySelector('#Update-Btn');
    if (CatId) {
        let str = `שם נוכחי: `;
        str += `${CatName}.`;
        span.innerHTML = str;
        str = `<button type="submit" onclick="EditLine(${CatId})">ערוך שורה</button>`;
        btn.innerHTML = str;
        popup.showModal();
    } else popup.close();
}
