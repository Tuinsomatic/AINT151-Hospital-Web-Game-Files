function CreatePlayer()
{
  document.getElementById("name").innerHTML = document.getElementById("playername").value;
  var col = document.getElementById("playercolour").value;
  document.getElementById("colour").style = "width:50px;height:50px;background-color:" + col + ";"
  document.getElementById("health").innerHTML = document.getElementById("playerhealth").value;
  var wep = document.getElementById("playerweapon").value;
  if (wep == 1)
  {
    document.getElementById("weapon").innerHTML = "Crossbow of much hurting";
  }
  else if (wep == 2)
  {
    document.getElementById("weapon").innerHTML = "Broadsword of so slicing";
  }
  else
  {
    document.getElementById("weapon").innerHTML = "Wand of amaze magics";
  }
}
