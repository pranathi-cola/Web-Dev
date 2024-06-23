let visitor = prompt("Enter your name: ");
visitor = visitor.toLowerCase();
let wishes = document.querySelector(".wishes");
let content = document.querySelector(".content");
let image = document.querySelector('img[src="background.png"]');

if(visitor===null || visitor.trim()==="")
{
    alert("Cancelled");
}
else if(visitor.includes("prajna"))
{
    let bday = prompt("Enter your bday, month in the format dd/mm: ")
    if(bday===null || bday.trim()==="")
    {
        alert("Cancelled!");
    }
    else if (bday.includes("24/06") || bday.includes("24/6") || bday.includes("2406") || bday.includes("246"))
    {
        wishes.textContent = "Happy Birthday!!!";
        content.textContent = "May all your dreams and wishes come true this year, I wish you the best of the best and the happiest birthday! You better not bring this up at all. Anyways, Happy Birthday, bitch.";
        image.src = "prajna.png";
    }
    else
    {
        alert("Impersonating is bad!");
    }
}
else 
{
    alert("You don't have access");
}