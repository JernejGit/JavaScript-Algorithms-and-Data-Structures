const MONEY_TABLE = {
    PENNY: 1,
    NICKEL: 5,
    DIME: 10,
    QUARTER: 25,
    ONE: 100,
    FIVE: 500,
    TEN: 1000,
    TWENTY: 2000,
    "ONE HUNDRED": 10000
  }
  
  function checkCashRegister(price, cash, cid) {
    //store variable with amount of change due
    const changeDue = cash - price;
   //convert to cents >>RIGHT AWAY<<
    let changeDueCents = changeDue * 100; 
  
    //sum up all of the money in cents in the cash drawer
    const cashForChange = cid.reduce((acc, moneySlot) =>{
      return acc + moneySlot[1] * 100
    }, 0)
    //if money in cid === change due, 
    //return {status: "CLOSED", change: cid}
    if (changeDueCents === cashForChange) {
      return {status: "CLOSED", change: cid}
    }
    //calculate how much change we can give based on the slots in the cid
    //reverse the cid, create an array of slots, based on adding up on each slot the amount of money we'll pay with that slot
    const changeInHand = cid.reverse().map(([billOrCoinName, valueInSlot]) =>{
    
      // Instantiate the amount of money of that bill type as 0
      let totalCash = 0;
      //get the value of that slot's worth
      const denomination = MONEY_TABLE[billOrCoinName];
      //convert amount to cents
      let valueInSlotCents = Math.round(valueInSlot * 100);
     
  
      //loop: while the amount of money in that slot >0 and the value of that slot is > amount of remainig change due
      while(valueInSlotCents >0 && denomination <=changeDueCents) {
        //add one bill's worth to the total
        totalCash += denomination
  
        //subtract that amount from the change due
        changeDueCents -= denomination;
  
        //subtract that amount from the amount available in that slot
        valueInSlotCents -= denomination;
      }
      return [billOrCoinName, totalCash/100]
  
    }) //filter out all the coins or bill types that have 0 money
    .filter(([, value]) => value > 0)
    
  
    //if there is still change due, we either don't have enough money, or our money types don't add up
    if (changeDueCents > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    return {status: "OPEN", change: changeInHand}
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));