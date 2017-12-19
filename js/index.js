let numbArr = [24, 789, 45, 963, 12, 4, 499, 46, 789, 753, 951, 100, 200, 300, 400];
let body = document.querySelector('body');


function fillRow(arr){
    let numbRow = 1;
    for(let i = 0; i<1000000 ; i++){

        if(arr.length < Math.pow(2, numbRow)){
            console.log(numbRow);
            for(let j = 0; j<numbRow; j++){
                let nodeWrap = document.createElement('div');
                nodeWrap.classList.add('flex-container');
                nodeWrap.id = `row${j}`;
                body.appendChild(nodeWrap);
                console.log(nodeWrap);
            }
            break;
        }
        numbRow++;

    }
}


fillRow(numbArr);

function fillObjArr (numbArr, rowId){
    numbArr.sort( (a, b) => {return a - b});
    let nodeWrap = document.querySelector(`#row${rowId}`);
    let node = document.createElement('div');
    node.classList.add('circle');
        node.innerText = `${numbArr[parseInt(numbArr.length/2)]}`;
        nodeWrap.appendChild(node);
        if(numbArr.length > 1){
            rowId++;
            if(parseInt(numbArr.length) <= 3){
                fillObjArr (numbArr.slice(0, 1), rowId);
                if(numbArr.length !== 2)
                    fillObjArr (numbArr.slice( 2), rowId);
            }
            else if (parseInt(numbArr.length/2)  ){
                fillObjArr (numbArr.slice(0, parseInt(numbArr.length/2) ), rowId);
                fillObjArr (numbArr.slice( parseInt(numbArr.length/2) + 1), rowId);

            }
        }
}

fillObjArr(numbArr, 0);
