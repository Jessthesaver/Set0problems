let Building = {
    equipment:[],
    users:[],
}
let memo = {};
function search(searched){
    memo=memo || {};
    if(memo[searched] != undefined){ 
         return memo[searched]
    } else{ 
    for(let i in Building.equipment){
        if(Building.equipment[i].Name==searched){
            memo[searched]= Building.equipment[i];
            return Building.equipment[i];
        }else{
            for(let j in Building.users){
                if(Building.users[j].Name==searched){
                    memo[searched]=Building.users[j];
                    return Building.users[j];
                }
            }
        }
    }
    }
}

function addEquipment(equipment){
    Building.equipment.push(equipment);
}
function addPeople(person){
    Building.users.push(person);
}

class Equipment{
    constructor(name,floor,room, people){
        this.Name=name;
        this.Room=room;
        this.Floor=floor;
        this.Person=people;
        addEquipment(this);
    }

}
class Person{
    constructor(name,floor, room){
        this.Name = name;
        this.Floor=floor;
        this.Room=room;
        addPeople(this);
    }
}

let Potato = new Equipment('Potato',2,'2-a','Pedro');
let Aby = new Person('Aby', 5, '5-b');
let Pedro = new Person('Pedro', 3, '3-a')
let searched=search('Aby');
console.log(searched);