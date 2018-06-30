"use strict";

var NameDB = function () {
    LocalContractStorage.defineProperties(this,{
                                          isOpen: null,
                                          admAdd: null,
                                          seed:null,
                                          balance:null,
                                          readtext:null,
                                          historyno:null,
                                          version:null,
                                          inheritanceno:null
                                 
                                          });

};

NameDB.prototype = {
    init: function () {
        this.admAdd="n1UgJZNkysMiFwvaj6HxZ1Bi6SGT3yMpeJm";
        this.isOpen = true;
        this.balance = new BigNumber(0);
        this.seedno = 1;
        this.version = 1;
        this.seed = 0;
        this.inheritanceno=0;

        //acient gene merge下个版本开放
    },
    //view 拿信息
    getseedno: function() {
        return this.historyno;
    },
    
    getIsOpen: function() {
        return this.isOpen;
    },
    
    gettotalcell: function() {
        return this.totalcell;
    },
    
    getAdminAddress: function() {
        return this.admAdd;
    },
    //设置开始
    setIsOpen: function(isopen) {
        if (Blockchain.transaction.from === this.admAdd) {
            this.isOpen = isopen;
        } else {
            throw new Error("Admin only");
        }
    },
    
    setSeed: function(seed) {
        if (Blockchain.transaction.from === this.admAdd) {
            this.seedno++;
            this.seed=seed;
        } else {
            throw new Error("Admin only");
        }
    },
    setSeedno: function(seedno) {
        if (Blockchain.transaction.from === this.admAdd) {
            this.seedno = seedno;
        } else {
            throw new Error("Admin only");
        }
    },
    setVersion: function(versionno) {
        if (Blockchain.transaction.from === this.admAdd) {
            this.isOpen = versionno;
        } else {
            throw new Error("Admin only");
        }
    },
    
    newbattlelseed:function(){
        var from = Blockchain.transaction.from;
        var value = Blockchain.transaction.value;
        var bvalue = new BigNumber(Blockchain.transaction.value);
        
        if (value < 0.00001) {
            throw new Error("not enough to get seed");
        }else{
            
            this.seedno ++;
            
        }
        
        this.balance = bvalue.add(this.balance);
        
    
    },
randomize:function(lower,upper) {
    return Math.floor((Math.random() * (upper - lower) + lower));
},
  

getseeddetail:function() {
    
    
    var seedArr=[];
    seedArr.push(this.randomize(0,100));
    seedArr.push(this.randomize(0,100));
    seedArr.push(this.randomize(0,100));
    seedArr.push(this.seedno);
    
    
    return seedArr;
    
},
    
    getbalance: function () {

        return this.balance;
        
    }
    
    
    
};
module.exports = NameDB;
