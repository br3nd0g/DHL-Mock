var addresses = ["1 fart lane", "2 dawg avenue", "5 yippee street"];
var draggedAddress;
var draggedNode;

var tbody = document.getElementById("reorder").getElementsByTagName("table")[0].getElementsByTagName("tbody")[0];

function addToTable(){
    for(var i = 0;i < addresses.length;i++){
        tbody.insertAdjacentHTML("beforeend", `
        <tr>
            <td>${i+1}</td>
            <td class="addressRow" draggable="true" ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="dragStart(event)">${addresses[i]}</td>
        </tr>
        `);
    }
}

addToTable();

function dragStart(ev){
    draggedAddress = ev.target.innerText;
    draggedNode = ev.target;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev){
    var tempStoreAddress = ev.target.innerText;
    ev.target.innerText = draggedAddress;
    draggedNode.innerText = tempStoreAddress;
}