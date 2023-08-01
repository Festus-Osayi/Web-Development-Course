'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const updateGui = function(acc){
  // Display Movements..

  displayMovements(acc.movements)

  // Display balance
  calcDisplayBalance(acc)

  // Display summary
  calcDisplaySummary(acc)
}

// Display the movements
const displayMovements = function (movements, sorted = false) {

  // sorting the movements
  const movs = sorted ? movements.slice().sort((a, b) => a - b) : movements.slice().sort((a, b) => b - a)

  containerMovements.innerHTML = ''

  // looping through every movements and displaying them.
  movs.forEach(function (mov, i) {

    const type = mov > 0 ? 'deposit' : 'withdrawal'
    const movementsType = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>`


    containerMovements.insertAdjacentHTML('afterbegin', movementsType)
  });
}

displayMovements(account1.movements)

/*
compute the specified user's balance
*/
const calcDisplayBalance = function (acc) {
  const balance = acc.movements.reduce((acc, curr) => acc + curr
    , 0)
    acc.balance = balance

  labelBalance.textContent = `${acc.balance}€`
}






/*
Compute the user's name
*/
const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase().split(' ')
      .map(name => name[0]).join('')

  })
}

createUserNames(accounts)
console.log(accounts)

/*
-- compute the summary
-- of the total deposits
-- total withdrawals
*/

const calcDisplaySummary = function (account) {
  //--> compute the deposits made
  const income = account.movements.filter(summary => {
    return summary > 0
  })
    .reduce((acc, sum) => acc + sum, 0)

  labelSumIn.textContent = `${income}€`

  //--> compute withdrawals 
  const out = account.movements.filter(sum => sum < 0)
  .reduce((acc, sum)=> acc + sum, 0)
  labelSumOut.textContent = `${Math.abs(out)}€`

  //--> compute interests rate
  const interest = account.movements.filter(deposits => deposits > 0)
  .map(deposits => deposits * deposits.interestRate / 100)
  .filter(int=> int >= 1)
  .reduce((acc, deposit) => acc + deposit, 0)

  labelSumInterest.textContent = `${interest}€`

}




/*
-- compute the login functionality
*/

let current;
btnLogin.addEventListener('click', function(e){
  e.preventDefault()
  current = accounts.find((acc) => acc.username === inputLoginUsername.value)
  console.log(current)
  if (current?.pin === Number(inputLoginPin.value)){
      
    // Display a welcome message
      labelWelcome.textContent = `Welcome back, ${current.owner.split(' ')[0]}` 

    // Display the UI
    containerApp.style.opacity = '100'
    
    inputLoginUsername.value = ''
    inputLoginPin.value = ''

    // update the UI
    updateGui(current)
    
    
  }
  
  
})

/*
-- Computing the transfer functionality
*/

btnTransfer.addEventListener('click', function(e){
  e.preventDefault()

  const amount = Number(inputTransferAmount.value)
  const recieverAccount = accounts.find((acc) => acc.username === inputTransferTo.value)

  inputTransferTo.value = inputTransferAmount.value = ''
  if (amount > 0 && recieverAccount && current.balance >= amount && recieverAccount?.username !== current.username){
      current.movements.push(-amount)
      recieverAccount.movements.push(amount)
    updateGui(current)
  }
  
})

/*
-- Compute the deletion of account
-- check to see if the username
-- and password matches the specified
-- user specified
*/

btnClose.addEventListener('click', function(e){
  e.preventDefault();
  const closeUserName = inputCloseUsername.value
  const closePin = Number(inputClosePin.value)
  if(closeUserName === current.username && closePin === current.pin){
    // Delete the account
      const index = accounts.findIndex(users => users.username === current.username)
      accounts.splice(index, 1)
      containerApp.style.opacity = 0
   
  }
  inputCloseUsername.value = inputClosePin.value = ''
  
  
})


/*
-- Compute the request a loan
-- functionality
*/

btnLoan.addEventListener('click', function(e){
  e.preventDefault()
  const amount = Number(inputLoanAmount.value)
  if(amount > 0 && current.movements.some(mov => mov >= amount * 0.1)){
    current.movements.push(amount)
    updateGui(current)
  }
})

/*
computation for sort
*/

let sorted = false
btnSort.addEventListener('click', function(e){
  e.preventDefault()
  displayMovements(current.movements, !sorted)
  sorted = !sorted
})







/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

labelBalance.addEventListener('click', function(){
  const movementsUi = Array.from(document.querySelectorAll('.movements__value'), (el) => Number(el.textContent.replaceAll('€', '')))
  console.log(movementsUi)
  
})







