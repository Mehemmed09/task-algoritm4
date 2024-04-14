let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
  ];
  
  function countVoted(voters) {
    return voters.reduce((totalVoted, currentVoter) => {
      return currentVoter.voted ? totalVoted + 1 : totalVoted;
    }, 0);
  }
  
  console.log(countVoted(voters));

//   voted qaytarmaq
let wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
  ];
  
  function totalWishlistPrice(wishlist) {
    return wishlist.reduce((totalPrice, item) => {
      return totalPrice + item.price;
    }, 0);
  }
  
  console.log(totalWishlistPrice(wishlist));

//   cem qyatarmaq
function findLongestWord(str) {
    const words = str.split(' ');
    
    let longestWord = '';
    
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    
    return longestWord;
  }
  
  const inputString = 'Web Development Tutorial';
  console.log(findLongestWord(inputString));
//   en uzun sozu tapmaq
function kesilmis(str, numWords) {
    const words = str.split(' ');
    
    if (numWords >= words.length) {
      return str;
    }
    
    const kesilmissoz = words.slice(0, numWords);
    
    const kesilmisstring = kesilmissoz.join(' ');
    
    return kesilmisstring;
  }
  
  console.log(kesilmis('The quick brown fox jumps over the lazy dog', 4));
  
  