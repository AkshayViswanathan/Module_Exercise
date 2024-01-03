class Bank {

    constructor(firstname, lastname, accountno, accountBalance, despoite ){
        this.firstname = firstname;
        this.lastname = lastname;
        this.accountno = accountno;
        this.accountBalance =accountBalance;
        this.despoite = despoite;
    }


accountdeatils( ){
    console.log("Your account number is:" + this.accountno);
}

checkBalance(){
    console.log("your Current balance:"+ this.accountBalance);
}

depositeAmount(despoite){
    this.accountBalance = this.accountBalance + despoite;

    console.log(`You deposited: ${despoite} , Total amount : ${this.accountBalance} `)
}

withdrawAmount(Withdraw){
    if(Withdraw <= this.accountBalance){
        this.accountBalance = this.accountBalance - Withdraw
        console.log(`Sucessfully withdrawn: ${Withdraw}, your current balance:${this.accountBalance}`);
    } else{
        console.log("InSufficient fund");
    }

}

}

Bank.prototype.fullname = function(){
    return console.log(`Ac Holder name : ${this.firstname} ${this.lastname}`)
    }
    

let person1 = new Bank("akshay", "viswanathan", "234567890", 1000)
let person2 = new Bank("sajar", "mohmmad", "123562345", 10000)
let person3 = new Bank("ajay", "kumar", "123562345", 5000)
let person4 = new Bank("pranav", "babu", "123562345", 2000)


person2.fullname()  
person1.accountdeatils()
person3.checkBalance()
person4.depositeAmount(500)
person3.depositeAmount(1000)
person1.withdrawAmount(100)