let Bank={
    _accounts:[],
    AddClient(client, balance){
        client.getMoney -=balance;
        this._accounts[client.getAccount()]=balance;
    },
    retreive(money,client){
        if(this._accounts[client.getAccount()]){ 
            if(this._accounts[client.getAccount()]>=money){
                let temp = client.getpockets() + money;
                client.setMoney(temp);
                this._accounts[client.getAccount()] -= money;
            }
            else throw new Error('Error Insuficient funds');
        }else throw new Error('Error, inexsistent account')
    },

    balancecheck(client){
        return `Hi, your account has $ ${this._accounts[client.getAccount()]} dollars`;
    }
}

class Client{
    #Money;
    #Account;
    constructor(money, acc){
        this.#Money=money;
        this.#Account=acc;
    }

    checkpockets(){
        return `I have $ ${this.getpockets()} in my pockets`;
    }

    deposit(money, account){
        if(Bank[account] != null){
            if(this.#Money>=money){
                Bank[account] += money;
                this.Money -= money;
            }
            else throw new Error('Error Insuficient money');
        }
        else throw new Error('Error Inexistend account');
    };

    getpockets(){return this.#Money};
    setMoney(money){this.#Money=money;}
    getAccount(){return this.#Account};

}


let Pedro = new Client(500,'001');
let Pablo = new Client(0,'002')
Bank.AddClient(Pedro,100);
Bank.AddClient(Pablo,0);
console.log(Bank)
//Pedro.deposit(400,'003');
Bank.retreive(50,Pedro)
console.log(Bank.balancecheck(Pedro));
console.log(Pedro.checkpockets());