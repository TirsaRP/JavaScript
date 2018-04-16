//1.Strings! 
//1.1
let myString = "hello,this,is,a,difficult,to,read,sentence";
//1.2
console.log(myString.length);
//1.3
myString = "hello "+"this "+"is "+"a "+"difficult "+"to "+"read "+"sentence";
//1.4
console.log(myString);

//Arrays!
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
//2.1
favoriteAnimals.push('turtle'); 
//2.2
console.log(favoriteAnimals);
//2.3
favoriteAnimals.splice(1,0,'meerkat');
//2.4
console.log("the new value of the array will be ='blowfish, meerkat, capricorn, giraffe, turtle'");
//2.5
console.log(favoriteAnimals);
//2.6
console.log("The array has a length of:" + favoriteAnimals.length);
//2.7
favoriteAnimals.splice(3,1);
//2.8
console.log(favoriteAnimals);
//2.9
favoriteAnimals.indexOf('meerkat');
//2.10
console.log("The item you are looking for is at index:" + favoriteAnimals.indexOf('meerkat'));
