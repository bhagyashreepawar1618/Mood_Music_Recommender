// store base urls of both the Apis which we are going to use 
//for Quotes=Quotes API
//for Music= Music API (Deezer)
const qouteBaseURL=" https://api.quotable.io/random?tags=";
const musicBaseURL= "https://api.deezer.com/search?q=";

//according to api needs we have to create mood map
const moodMap = {
    happy: "songs",
    sad: "songs",
    focus: "focus",
    chill: "vibes",
};


//access mood of user
const mood=document.getElementById("moodSelect");

//access search music btn
const searchMusic=document.getElementById("searchMusic");
//add eventlistner on btn

searchMusic.addEventListener("click",async (e)=>
{
    e.preventDefault();
    //access exact mood happy,sad etc
    const moodValue=mood.value ;

    //access from mood map
    const a=moodMap[moodValue];

    // fetch music
    // this will need backend due to cors problem
    const URL=`${musicBaseURL}${moodValue}&limit=5`;
    let response=await fetch(URL);
    const data=await response.json();
    console.log(data);

    //fetch quote
    const quoteURL=`${qouteBaseURL}${a}`;
    console.log(quoteURL);
    // const response= await fetch (quoteURL);
    // const data= await response.json();
    console.log(data);

})

