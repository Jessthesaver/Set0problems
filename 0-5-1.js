let Bank={
    AddClient(client, balance){
        Bank[client.Account]=balance;
    }
}

class Client{
    constructor(money, acc){
        this.Money=money;
        this.Account=acc;
    }

    deposit(money, account){
        if(Bank[account] != null){
            if(this.Money>=money){
                Bank[account] += money;
                this.Money -= money;
            }
            else console.log('Insuficient money');
        }
        else console.log('Inexistend account')
    }

    retreive(money){
        if(Bank[this.Account]>=money){
            this.Money += money;
            Bank[this.Account] -= money;
        }
        else console.log('Insuficient funds');
    }

    balancecheck(){
        console.log(`Hi, your account has $ ${Bank[this.Account]} dollars`);
    }
}

let Pedro = new Client(500,'001');
let Pablo = new Client(0,'002')
Bank.AddClient(Pedro,100);
Bank.AddClient(Pablo,0);
Pedro.deposit(400,'003');
Pablo.balancecheck();
Pedro.balancecheck();