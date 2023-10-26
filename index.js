
// This sound effects are from pixabay.com
var soundEffectBeginning = new Audio('resources/a-piano-with-a-creepy-atmosphere-for-scary-stories-demo-version-158423.mp3');
var creakyDoor = new Audio('resources/door-2-6841.mp3');
var pageTurn = new Audio('resources/pageturn-102978.mp3');



soundEffectBeginning.loop = true;
var play = $(".button-89");

play.click(function () {
    $(".tutorial").fadeOut("slow");
    $("#startButton").fadeOut("slow");
    $("#beginning").fadeIn("slow");
    soundEffectBeginning.play();
});



$(".buttonOption").click(function () {
  var classOfButton = $(this).attr("id");
  console.log(classOfButton);


  switch(classOfButton){

    // Amelia decides to enter the mansion.

    case "firstOption0":
        creakyDoor.play();
        $("#beginning").slideUp("slow");
        $("#firstOption").fadeIn("slow");
       
    break;

    // Amelia decides to search for more information.

    case "secondOption0":
        pageTurn.play();
        $("#beginning").slideUp("slow");
        $("#secondOption").fadeIn("slow");

    break;

    // Amelia decides to leave the town and forget about the key.

    case "thirdOption0":
        pageTurn.play();
        $("#beginning").slideUp("slow");
        $("#thirdOption").fadeIn("slow");

    break;


    // Amelia flees the mansion
    case "firstChoice":
        pageTurn.play();
        $("#firstOption").slideUp("slow");
        $("#firstOption1").fadeIn("slow");

    break;

    case "secondChoice":
        pageTurn.play();
        $("#firstOption").slideUp("slow");
        $("#secondOption1").fadeIn("slow");

    break;

    case "firstChoice2":
        pageTurn.play();
        $("#secondOption").slideUp("slow");
        $("#firstOption2").fadeIn("slow");

    break;

    case "secondChoice2":
        pageTurn.play();
        $("#secondOption").slideUp("slow");
        $("#secondOption2").fadeIn("slow");

    break;






    case "firstChoice3":
        $("#thirdOption").slideUp("slow");
        $("#firstOption3").fadeIn("slow");

    break;
    
    case "secondChoice3":
        $("#thirdOption").slideUp("slow");
        $("#secondOption3").fadeIn("slow");

    break;







    default:
    }








});

