class Player{
    constructor(name,platform){
        this.name=name
        this.platform=platform
        this.gamestotry=['Mario bros', 'Sonic']
    }
    finishedgame(game){
        if(this.gamestotry.includes(game)){
            return this.gamestotry=this.gamestotry.filter(item => item !== game)
        }else throw `error, im not playing that game`
    }
    addrecomendation(game){
        if(this.gamestotry.includes(game)){
            throw 'Im already playing that game'
        }else{this.gamestotry.push(game)}
    }
}

class ShooterPlayer extends Player{
    constructor(name,platform){
        super(name,platform)
    
        this.gamestotry=['Call of duty', 'Fortnite']
    }
}

class RPGPlayer extends Player{
    constructor(name,platform){
        super(name,platform)
        this.gamestotry.push('Final Fantasy', 'Fable')
    }
}

class SoulsbornePlayer extends RPGPlayer{
    constructor(name,platform){
        super(name,platform)
        this.numberofragequits= 0
        this.gamestotry.push('Dark Souls', 'Bloodborne')
    }

    ragequit(){
        this.numberofragequits+=1
    }
}

let jesus= new SoulsbornePlayer('jesus','ps4')
jesus.ragequit()
console.log(jesus)
jesus.addrecomendation('Sekiro')
jesus.finishedgame('Mario bros')
console.log(jesus)