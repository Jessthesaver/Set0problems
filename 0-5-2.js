let Building = {
    equipment:[],
    users:[],
}

function search(string, memo){
    memo=memo || {};
    if(memo[string] != undefined){ 
         return memo[string]
    } else{ 
    for(let i in Building.equipment){
        if(Building.equipment[i].Name==string){
            memo[string]= Building.equipment[i];
            return Building.equipment[i];
        }else{
            for(let j in Building.users){
                if(Building.users[j].Name==string){
                    memo[string]=Building.users[j];
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