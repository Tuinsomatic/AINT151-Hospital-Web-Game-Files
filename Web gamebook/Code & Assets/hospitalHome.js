function LetterWord() //pA = placesArray[ind]
{
  switch (placesArray[index].text.charAt(char))
  {
    case "1":
      makeSound("door.wav");
      char++;
      break;
    case "2":
      makeSound("search.wav");
      char++;
      break;
    case "3":
      makeSound("hit.wav");
      char++;
      break;
  }
  if (char < placesArray[index].text.length)
  {

    document.getElementById("placeText").innerHTML +=  placesArray[index].text.charAt(char);
    char ++;
    setTimeout(LetterWord, 10);
  }
  else {
    char = 0;
  }
}

function LetterWordInternal()
{
  if (char < internalString.length)
  {
    document.getElementById("placeText").innerHTML +=  internalString.charAt(char);
    char ++;
    setTimeout(LetterWordInternal, 10);
  }
  else {
    char = 0;
  }
}

function OnLoad()
{
  document.getElementById("playerName").innerHTML = localStorage.playName;
  EnterRoom(0);
}

function makeSound(str)
{
  var sound = document.createElement("audio");
  sound.src = str;
  sound.play();
}

var hasHook, hasPliers, hasKey2, hasKey1, hasBrick, hasHandle, elecTrigger, pliersEventTriggered;
var char = 0;
var index = 0;
var internalString;

function EnterRoom(ind)
{
  //var n = document.getElementById("placeName").innerHTML, t = document.getElementById("placeText").innerHTML;
  document.getElementById("placeName").innerHTML = placesArray[ind].name;
  document.getElementById("placeOptions").innerHTML = "";
  document.getElementById("picture").innerHTML = '<img src="room'+ind+'.png">';

  if (ind == 0)
  {
    hasHook = false;
    hasPliers = false;
    hasKey2 = false;
    hasKey1 = false;
    hasBrick = false;
    hasHandle = false;
    elecTrigger = false;
    pliersEventTriggered = false;

    for(i = 1; i < 7; i++)
    {
      document.getElementsByClassName("lower").innerHTML = '<img src="noitem.png">';
    }//Just in case you lose and go back to the start, this ensures all variables are set back to false and you lose all your items
  }

  document.getElementById("placeText").innerHTML = "";
  index = ind;

  //Index 6 has 2 possible outcomes depending on whether you have tampered with the electrics or not
  if (ind == 6 && elecTrigger == true)
  {
    internalString = "You press the button by the door and surprisingly, the door opens! You walk inside and start pressing some buttons to see if the lift still works. While in the lift, the door shuts behind you. You frantically try pressing the button to open the door again and it opens! You quickly leave the lift.";
    LetterWordInternal();
    setTimeout(function but(){
      var buttonHtml = "<button onClick='EnterRoom(4)'>Continue</button>";
      document.getElementById("placeOptions").innerHTML += buttonHtml;
    }, 5000);
  }
  //---------------------------------------------------------------------------------------
  else if (ind == 8 && pliersEventTriggered == true) //Index 8 has 2 possible outcomes depending on whether you've been there before or not
  {
    makeSound("search.wav")
    internalString = "There's nothing of interest here.";
    LetterWordInternal();
    setTimeout(function but(){
      var buttonHtml = "<button onClick='EnterRoom(5)'>Continue</button>";
      document.getElementById("placeOptions").innerHTML += buttonHtml;
    }, 50);
  }
  //---------------------------------------------------------------------------------------
  else if (ind == 11 && hasPliers == true) //Index 11 has 2 possible outcomes depending on whether you have pliers or not
  {
    internalString = "On inspecting the contents of the box, it looks like the wiring can be tampered with. You rearrange some wiring using your pliers in case the electric is still running. After about half a minute, you lose your grip and you drop your pliers. They are beyond your reach.";
    LetterWordInternal();
    setTimeout(function but(){
      var buttonHtml = "<button onClick='EnterRoom(7)'>Continue</button>";
      document.getElementById("placeOptions").innerHTML += buttonHtml;
      hasPliers = false;
      document.getElementById("item2").innerHTML = '<img src="noitem.png">';
      elecTrigger = true;
    }, 2500);
  }
  //---------------------------------------------------------------------------------------
  else if (ind == 12 && hasKey1 == true) //Index 12 has 2 possible outcomes depending on whether you have the downstairs office key or not
  {
    internalString = "The door is locked. You try your key and the door opens!";
    LetterWordInternal();
    setTimeout(function but(){
      var buttonHtml = "<button onClick='EnterRoom(16)'>Continue</button>";
      document.getElementById("placeOptions").innerHTML += buttonHtml;
    }, 50);
  }
  //---------------------------------------------------------------------------------------
  else if (ind == 17 && hasKey2 == true) //Index 17 has 2 possible outcomes depending on whether you have the upstairs office key or not
  {
    internalString = "The door is locked. You try your key and the door opens!";
    LetterWordInternal();
    setTimeout(function but(){
      var buttonHtml = "<button onClick='EnterRoom(22)'>Continue</button>";
      document.getElementById("placeOptions").innerHTML += buttonHtml;
    }, 50);
  }
  //---------------------------------------------------------------------------------------
  else if (ind == 20 && hasKey1 == true) //Index 20 has 2 possible outcomes depending on whether you've been there before or not
  {
    makeSound("search.wav")
    internalString = "There's nothing of interest here.";
    LetterWordInternal();
    setTimeout(function but(){
      var buttonHtml = "<button onClick='EnterRoom(15)'>Continue</button>";
      document.getElementById("placeOptions").innerHTML += buttonHtml;
    }, 50);
  }
  //---------------------------------------------------------------------------------------
  else if (ind == 21 && hasKey2 == true) //Index 21 has 2 possible outcomes depending on whether you've been there before or not
  {
    makeSound("search.wav")
    internalString = "There's nothing of interest here.";
    LetterWordInternal();
    setTimeout(function but(){
      var buttonHtml = "<button onClick='EnterRoom(16)'>Continue</button>";
      document.getElementById("placeOptions").innerHTML += buttonHtml;
    }, 50);
  }
  //---------------------------------------------------------------------------------------
  else if (ind == 23 && hasHook == true) //Index 23 has 2 possible outcomes depending on whether you've got the hook & rope or not
  {
    makeSound("hit.wav");
    internalString = "You approach the open doorway and realise it's the lift shaft. You lose your footing and fall onto the top of the lift. You try and scramble back up but it's no use. You reach into your bag and realise you can throw the hook onto a handle through the doorway. You do so and climb up the rope. As you get back up, your foot slips. You grab onto the ledge and climb up but your hook & rope fall onto the lift. ";
    LetterWordInternal();
    setTimeout(function but(){
      var buttonHtml = "<button onClick='EnterRoom(18)'>Continue</button>";
      document.getElementById("placeOptions").innerHTML += buttonHtml;
      hasHook = false;
      document.getElementById("item1").innerHTML = '<img src="noitem.png">';
    }, 5000);
  }
  //---------------------------------------------------------------------------------------
  else if (ind == 25 && hasBrick == true) //Index 25 has 2 possible outcomes depending on whether you've been there before or not
  {
    makeSound("search.wav")
    internalString = "There's nothing of interest here.";
    LetterWordInternal();
    setTimeout(function but(){
      var buttonHtml = "<button onClick='EnterRoom(18)'>Continue</button>";
      document.getElementById("placeOptions").innerHTML += buttonHtml;
    }, 50);
  }
  //---------------------------------------------------------------------------------------
  else if (ind == 27 && hasBrick == true && (hasHandle == true || hasHook == true)) //Index 27 has 2 possible outcomes depending on whether you have the right items or not
  {
    makeSound("glass.wav");
    internalString = "The window runs from the floor to the roof, and it is definitely breakable. You pull out the brick from your backpack, take a few paces back and throw it at the window. Upon breaking the window you notice a telephone line leading close to the ground. Quickly, you realise you can hold onto the handle and hook it over the wire. You do so and ride outside to safety. You've escaped the hospital, but empty handed...";
    LetterWordInternal();
    setTimeout(function but(){
      var buttonHtml = "<button onClick='EnterRoom(30)'>Continue</button>";
      document.getElementById("placeOptions").innerHTML += buttonHtml;
      hasBrick == false;
      document.getElementById("item5").innerHTML = '<img src="noitem.png">';
    }, 5000);
  }
  //---------------------------------------------------------------------------------------
  else if (ind == 29 && hasHandle == true) //Index 29 has 2 possible outcomes depending on whether you've been there before or not
  {
    makeSound("search.wav")
    internalString = "There's nothing of interest here.";
    LetterWordInternal();
    setTimeout(function but(){
      var buttonHtml = "<button onClick='EnterRoom(24)'>Continue</button>";
      document.getElementById("placeOptions").innerHTML += buttonHtml;
    }, 50);

  }
  //---------------------------------------------------------------------------------------
  else if (ind == 32) //Restart
  {
  }
  //---------------------------------------------------------------------------------------
  else
  {
    LetterWord();
    setTimeout(function forloop(){
      for(i = 0; i < placesArray[ind].options.length; i++)
      {
        var buttonHtml = "<button onClick='EnterRoom(" + placesArray[ind].options[i].index + ")'>" + placesArray[ind].options[i].text + "</button>";
        document.getElementById("placeOptions").innerHTML += buttonHtml;
      }
    }, 2500);

  }
  //-----------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------
  if(ind == 2)
  {
    hasHook = true;
    document.getElementById("item1").innerHTML = '<img src="hook.png">';
  }
  if(ind == 8)
  {
    hasPliers = true;
    pliersEventTriggered = true;
    document.getElementById("item2").innerHTML = '<img src="pliers.png">';
  }
  if(ind == 20)
  {
    hasKey1 = true;
    document.getElementById("item3").innerHTML = '<img src="key1.png">';
  }
  if(ind == 21)
  {
    hasKey2 = true;
    document.getElementById("item4").innerHTML = '<img src="key2.png">';
  }
  if(ind == 25)
  {
    hasBrick = true;
    document.getElementById("item5").innerHTML = '<img src="brick.png">';
  }
  if(ind == 29)
  {
    hasHandle = true;
    document.getElementById("item6").innerHTML = '<img src="handle.png">';
  }
}
