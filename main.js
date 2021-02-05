var images=[
    "family book.jpg","dad.jpg","mom.jpg","sister.jpg"
];
var family_names=[
    "Family!!","My dad","My mom","My sister"
];
var updated_images=images;
var updated_names=family_names;
var i=0;
function next(){
    document.getElementById("imgbk").src=updated_images[i];
    document.getElementById("display_names").innerHTML=updated_names[i];
    i++
    if(i==4){
        i=0;
    }
}
