import {data} from '/data.js'

const app = document.getElementById('app'),
    dropdown = document.createElement('select');

app.append(dropdown)
dropdown.id = "dropdown"


class Table{
    constructor(app, data) {
        this.app = app;
        this.table = null;
        this.currentTable = null;
        this.thead = null;
        this.tbody = null;
        this.data = data;

        // initial function
        this.initTable()
        document.querySelector("select").addEventListener('change',  (e) => {
            this.initTable(e.target.value)
        });
    }

    initTable(){
        //Re-render of table
        this.clearTable()
        this.createTable()
        //Get table to work with
        this.currentTable = this.data[document.getElementById("dropdown").value]
        this.createTableHead()
        this.fillTable()
    }


    clearTable(){
        //Delete table from DOM
        let table = document.querySelector('table');
        if (this.table){
            this.app.removeChild(table)
        }
    }

    createTable(){
        //Create table DOM element
        this.table = document.createElement('table')
        this.thead = document.createElement('thead')
        this.tbody = document.createElement('tbody')

        this.app.append(this.table)
        this.table.append(this.thead)
        this.table.append(this.tbody)

    }

    createTableHead(){
        //Create table head
        let theadTr = document.createElement('tr');

        for (let col = 0; col < this.currentTable.header.length; col++){
            let theadTh = document.createElement('th');
            theadTh.textContent = this.currentTable.header[col].caption;
            theadTh.id = this.currentTable.header[col].id
            theadTh.style = `text-align: center`
            theadTr.append(theadTh);
        }
        this.thead.append(theadTr)
    }

    fillTable(){
        //Fill table with currentTable Data
        for (let row = 0; row < this.currentTable.data.length; row++){
            let tbodyTr = document.createElement('tr');
            for (let col = 0; col < this.currentTable.data[row].length; col++){
                let content = this.currentTable.data[row][col],
                    align = 'left'

                let tbodyTh = document.createElement('th')

                if (typeof content === 'object') {
                    //Skipping styles here due to a task
                    content = content.d
                }

                switch (this.currentTable.header[col].type){
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
                tbodyTh.style = `text-align: ${this.currentTable.header[col].align ?? align}`;
                tbodyTr.append(tbodyTh);
            }
            this.tbody.append(tbodyTr)
        }
    }



}

function setDropdown(data){
    //Create and fill Dropdown in DOM
    for (let key in data){
        let option = document.createElement('option');
        option.value = key
        option.textContent = key
        dropdown.append(option)
    }
}

setDropdown(data)
new Table(app, data)
