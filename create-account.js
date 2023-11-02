function createAccount(firstPin, startingBalance) {
    let pin = firstPin;
    let balance = startingBalance;
  
    return {
      checkBalance(pinInput) {
        if (pinInput === pin) {
          return `Current balance: $${balance}.`;
        } else {
          return "Invalid PIN.";
        }
      },
  
      deposit(pinInput, amount) {
        if (pinInput === pin) {
          balance += amount;
          return `Successfully deposited $${amount}. Current balance: $${balance}.`;
        } else {
          return "Invalid PIN.";
        }
      },
  
      withdraw(pinInput, amount) {
        if (inputPin === pin) {
          if (amount <= balance) {
            balance -= amount;
            return `Successfully withdrew $${amount}. Current balance: $${balance}.`;
          } else {
            return "Insufficient funds.";
          }
        } else {
          return "Invalid PIN.";
        }
      },
  
      changePin(oldPin, newPin) {
        if (oldPin === pin) {
          pin = newPin;
          return "PIN successfully changed.";
        } else {
          return "Invalid PIN.";
        }
      }
    };
  }
  
  module.exports = { createAccount };


  let account = createAccount("1234", 100);
  
  console.log(account.checkBalance("oops")); // "Invalid PIN."
  
  console.log(account.deposit("1234", 250)); // "Successfully deposited $250. Current balance: $350."

  console.log(account.withdraw("1234", 300)); // Output: "Successfully withdrew $300. Current balance: $50."

  console.log(account.withdraw("1234", 10)); // Output: "Withdrawal amount exceeds account balance. Transaction cancelled."

  console.log(account.changePin("1234", "5678")); // Output: "PIN successfully changed!"