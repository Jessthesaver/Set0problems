let Building = {
    equipment:[],
    users:[],
    search(string){
        for(let i in this.equipment){
            if(this.equipment[i].Name==string){
                return this.equipment[i];
            }else{
                for(let j in this.users){
                    if(this.users[i].Name==string){
                        return this.users[i];
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
    constructor(name,room, people, floor){
        this.Name=name;
        this.Room=room;
        this.Person=people;
        this.Floor=floor;
        addEquipment(this);
    }

}
class Person{
    constructor(name,floor){
        this.Name = name;
        this.Floor=floor;
        addPeople(this);
    }
}

let Potato = new Equipment('Potato','7-a','Pedro',2);
let Aby = new Person('Aby', 5);
console.log(Building);
let searched=Building.search('Aby');
console.log(searched);