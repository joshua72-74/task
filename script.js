let obj1 = {
    id: 1,
    name: "Joshua",
    grades: grd ={
        subject: "Mathematics",
        grade: "A"
    }
}

let obj2 = {
    id: 2,
    name: "James",
    grades: grd ={
        subject: "Science",
        grade: "A"
    }
}

let obj3 = {
    id: 3,
    name: "James",
    grades: grd ={
        subject: "Science",
        grade: "A"
    }
}

let arr = [obj1, obj2, obj3];
console.log(arr);


// for(let result in obj){
//     console.log(obj);
// }

function add(){
    let i = prompt("Enter id:");
    let n = prompt("Enter name:");
    let g = prompt("Enter grade:");

    let temp = {
        id: i,
        name: n,
        grade: g
    }
    
    return arr.push(temp);
}


function rem(){
    let id = prompt("Enter id to be removed");
    arr.splice(id, id);
    return arr;
}

rem();
console.log(arr);