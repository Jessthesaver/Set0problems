class Bank{
    #accounts;
    constructor(){
        this.#accounts =[]
    }
    AddClient(client, balance){
        client.Bank= this;
        if(client.getpockets()<balance){
            throw new Error('Insufficient money')
        }else{
            client.setMoney(client.getpockets()-balance)
        }
        this.#accounts[client.getAccount()]=balance;
    }

    deposit(client,money, account){
        if(this.#accounts[account] != null){
            if(client.getpockets()>=money){
                this.#accounts[account] += money;
                client.setMoney(client.getpockets()-money);
            }
            else throw new Error('Error Insuficient money');
        }
        else throw new Error('Error Inexistend account');
    };

    retreive(money,client){
        if(this.#accounts[client.getAccount()]){ 
            if(this.#accounts[client.getAccount()]>=money){
                let temp = client.getpockets() + money;
                client.setMoney(temp);
                this.#accounts[client.getAccount()] -= money;
            }
            else throw new Error('Error Insuficient funds');
        }else throw new Error('Error, inexsistent account')
    }

    balancecheck(client){
        return `Hi, your account has $ ${this.#accounts[client.getAccount()]} dollars`;
    }
}

class Client{
    #Money;
    #Account;
    constructor(money, acc){
        this.#Money=money;
        this.#Account=acc;
        this.Bank=[]
    }

    checkpockets(){
        return `I have $ ${this.getpockets()} in my pockets`;
    }

   

    getpockets(){return this.#Money};
    setMoney(money){this.#Money=money;}
    getAccount(){return this.#Account};

}

const WellsFargo= new Bank
let Pedro = new Client(500,'001');
let Pablo = new Client(0,'002')
WellsFargo.AddClient(Pedro,100);
WellsFargo.AddClient(Pablo,0);
console.log(WellsFargo.balancecheck(Pedro));
//WellsFargo.deposit(Pedro,400,'003');
WellsFargo.retreive(50,Pedro)
console.log(WellsFargo.balancecheck(Pedro));
console.log(Pedro.checkpockets());