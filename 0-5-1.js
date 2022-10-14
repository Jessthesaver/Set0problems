let Bank={
    accounts:[],
    AddClient(client, balance){
        client.Money -=balance;
        this.accounts[client.Account]=balance;
    },
    retreive(money,client){
        if(this.accounts[client.Account]){ 
        if(this.accounts[client.Account]>=money){
            client.Money += money;
            this.accounts[client.Account] -= money;
        }
        else throw 'Error Insuficient funds';
    }else throw 'Error, inexsistent account'
},

    balancecheck(client){
        console.log(`Hi, your account has $ ${this.accounts[client.Account]} dollars`);
        return this.accounts[client.Account]
    }

}

class Client{
    constructor(money, acc){
        this.Money=money;
        this.Account=acc;
    }

    checkpockets(){
        console.log(`I have $ ${this.Money} in my pockets`);
        return this.Money;
    }

    deposit(money, account){
        if(Bank[account] != null){
            if(this.Money>=money){
                Bank[account] += money;
                this.Money -= money;
            }
            else throw 'Error Insuficient money';
        }
        else throw 'Error Inexistend account'
    }
}


let Pedro = new Client(500,'001');
let Pablo = new Client(0,'002')
Bank.AddClient(Pedro,100);
console.log(Bank)
Bank.AddClient(Pablo,0);
//Pedro.deposit(400,'003');
Bank.retreive(50,Pedro)
Bank.balancecheck(Pedro);
Pedro.checkpockets();