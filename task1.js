var para = "Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!";
para = para.replace(/[0123456789]/g,"X");

//replaced the digits with X above and now splitting the string and saving in an array.

var arr = para.match(/[^\.!\?]+[\.!\?]+/g);
var tTemp = "";
var sTemp = [];
var brr = [];
var counter = 0;

//counting the no. of words in each sentence now after trimming and splitting the spaces
for(var num in arr)
  {
    tTemp = arr[num].trim();
    sTemp = tTemp.split(" ");
    
    for(var i in sTemp)
      {
        counter++;
      }
    
    if(counter>3)
      {
        brr.push(arr[num]);
      }
    counter=0;
    
  }

for (let i = 0; i < brr.length; i++)
{
    console.log((i+1) + ". " + brr[i]);
}


