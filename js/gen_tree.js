let wrap = document.querySelector('.wrap');
let numbRow = 1;

function fillRow(quantity){
    for(let i = 0; i<1000000 ; i++){

        if(quantity < Math.pow(2, numbRow)){
            for(let j = 0; j<numbRow; j++){
                let nodeWrap = document.createElement('div');
                nodeWrap.classList.add('flex-container');
                nodeWrap.id = `row${j}`;
                wrap.appendChild(nodeWrap);
            }
            break;
        }
        numbRow++;
    }
}


function fillObjArr (person, rowId){
    let nodeWrap = document.querySelector(`#row${rowId}`);
    let node = document.createElement('div');
    node.classList.add('person');

    let circle = document.createElement('div');
    circle.classList.add('circle');
    node.appendChild(circle);

    let photo = document.createElement('img');
    photo.classList.add('photo');
    photo.src = person['photo'];
    circle.appendChild(photo);

    let name = document.createElement('div');
    name.classList.add('name');
    name.innerHTML = person.name;
    node.appendChild(name);

    nodeWrap.appendChild(node);
    if(person['mother'] !== null && person['father'] !== null){
        rowId--;
        fillObjArr(person['mother'], rowId);
        fillObjArr(person['father'], rowId);
    }
}

fillRow(7);
fillObjArr(rayanGosling, numbRow-1);