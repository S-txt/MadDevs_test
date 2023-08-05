//import * as data from '../Data';
let data = {
    "project profit": {
        "header": [
            {"id": "project_name", "type": "string", "caption": "Project name"},
            {"id": "total_by_project", "type": "float", "caption": "Total by project"},
            {"id": "project_type", "type": "string", "caption": "Project type", "align": "center"},
            {"id": "jan", "type": "float", "caption": "Jan"},
            {"id": "feb", "type": "float", "caption": "Feb"},
        ],
        "data": [
            ["Mimesis", 1024.3, "commercial", 2048.2, 4096.0],
            ["Mako", 2345.1, "internal", 3465.3, {"d": 12.5, "color": "red"}],
            ["Edelweiss", 54.4, "commercial", 564.8, 4652.3],
        ]
    },
    "exam result": {
        "header": [
            {"id": "first_name", "type": "string", "caption": "First name"},
            {"id": "last_name", "type": "string", "caption": "Last name"},
            {"id": "total_by_exam", "type": "float", "caption": "Total by exam", "align": "center"},
            {"id": "pass", "type": "boolean", "caption": "pass"},
            {"id": "math", "type": "float", "caption": "Math"},
            {"id": "cs", "type": "float", "caption": "Computer Science"},
            {"id": "language", "type": "float", "caption": "Language"},
        ],
        "data": [
            ["Lua", "Dou", 4.6, true, 4.1, 4.8, 4.5],
            ["Miu", "Wan", {"d": 3.2, "color": "red"}, false, 4.3, 3.0, 4.0],
            ["Emmet", "Harrison", 4.4, true, 4.1, 4.8, 4.5],
            ["Harry", "Potter", 5.0, true, 5.0, 5.0, 5.0],
            ["James", "Darson", 4.8, true, 5.0, 4.7, 5.0],
        ]
    }

}

const app = document.getElementById('app'),
        dropdown = document.createElement('select');

app.append(dropdown)
dropdown.id = "dropdown"


function ClearTable() {
    let table = document.querySelector('table');
    console.log(table)
    if (table){
        app.removeChild(table)
    }

}

function createTable(){
    let table = document.createElement('table'),
        thead = document.createElement('thead'),
        tbody = document.createElement('tbody')
    app.append(table)
    table.append(thead)
    table.append(tbody)
    console.log(app)
}
function setDropdown(data){
    for (let key in data){
        let option = document.createElement('option');
        console.log(key)
        option.value = key
        option.textContent = key
        dropdown.append(option)
    }
    dropdown.onchange = buildTable()
}



function BuildTableHead(data){
    let thead = document.querySelector('thead');
    let theadTr = document.createElement('tr');
    for (let col = 0; col < data.header.length; col++){
        let theadTh = document.createElement('th');
        theadTh.textContent = data.header[col].caption;
        theadTh.id = data.header[col].id
        theadTh.style = `text-align: ${data.header[col].align ?? 'left'}`
        theadTr.append(theadTh);
    }
    thead.append(theadTr)
}

// TODO навсякий случай должны обрабатывать пустые значения (не совпадения типов)
function FillData(data){
    let tbody = document.querySelector('tbody');
    for (let row = 0; row < data.data.length; row++){
        let tbodyTr = document.createElement('tr');
        for (let col = 0; col < data.data[row].length; col++){
            let content = data.data[row][col],
                align = 'left'

            let tbodyTh = document.createElement('th')

            if (typeof content === 'object') {
                // Тут мы опускаем стилевые значения в объектах
                content = content.d
            }
            switch (data.header[col].type){
                case 'string':
                    align = 'left';
                    break;
                case 'float':
                case 'number':
                    align = 'right';
                    break;
                case 'boolean':
                    align = 'center'
                    break;
                default:
                    align = 'left'
            }

            tbodyTh.textContent = content;
            tbodyTh.style = `text-align: ${data.header[col].align ?? align}`;
            tbodyTr.append(tbodyTh);
        }
        tbody.append(tbodyTr)
    }
}

function buildTable(){
    ClearTable()
    createTable()
    let table_name = document.getElementById("dropdown").value
    BuildTableHead(data[table_name])
    FillData(data[table_name])
}

document.querySelector("select").addEventListener('change', function (e) {
    buildTable(e.target.value)
})
setDropdown(data)
// BuildTableHead(data["project profit"])
// FillData(data["project profit"])
