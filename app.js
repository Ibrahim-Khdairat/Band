'use strict'

let hoursWork =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

/*let seattle ={
    minCust:23,
    maxCust:65,
    avgCookei:6.3,
    random:[],

    cookeiSale:[],
    total:0,

    randomNumberCustomer : function(){
            for (let i=0;i<hoursWork.length;i++){
                this.random.push(Math.random() * (this.maxCust -this. minCust + 1) + this. minCust); 
            }
         
          
    },

    avagCoookeiSale :function(){

        for(let i=0;i<hoursWork.length;i++){
         this.cookeiSale.push (Math.ceil(this.avgCookei*this.random[i])  )
        this.total+=this.cookeiSale[i];
       
        }
    },


    render : function(){
      let divEl=document.getElementById('container');
      let h2El =document.createElement('h2');
      divEl.appendChild(h2El);
      h2El.textContent="Seattle";
      let ulEl =document.createElement('ul');
        divEl.appendChild(ulEl);
      for(let i=0;i<hoursWork.length;i++){
        let liEl =document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent=`${hoursWork[i]}: ${this.cookeiSale[i]} Cookeis`

      }
console.log(this.cookeiSale)
let liEl =document.createElement('li');
ulEl.appendChild(liEl);
liEl.textContent=`Totals: ${this.total} Cookeis`
    }
}
seattle.randomNumberCustomer();
seattle.avagCoookeiSale();
seattle.render();*/
let cityes=[];
function Cityes(cityName,minCustumer,maxCustumer,avgCookeisale){
this.cityName=cityName;
this.minCustumer=minCustumer;
this.maxCustumer=maxCustumer;
this.avgCookeisale=avgCookeisale;

this.random=[];

this.cookeiSale=[];
this.total=0;

cityes.push(this);

}
Cityes.prototype. randomNumberCustomer =function(){
    for (let i=0;i<hoursWork.length;i++){
        this.random.push(Math.random() * (this.maxCust -this. minCust + 1) + this. minCust); 
    }
 
  
};

Cityes.prototype.avagCoookeiSale =function(){

    for(let i=0;i<hoursWork.length;i++){
     this.cookeiSale.push (Math.ceil(this.avgCookei*this.random[i])  )
    this.total+=this.cookeiSale[i];
   
    }
}
;
Cityes.prototype.render=function() {





}