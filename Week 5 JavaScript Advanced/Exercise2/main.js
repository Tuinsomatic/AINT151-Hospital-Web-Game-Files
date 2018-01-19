
function StorePlayerData()
{
	var name = document.forms[0]["playername"].value;
	var health = document.forms[0]["playerhealth"].value;
	var colour = document.forms[0]["playercolour"].value;

	localStorage.setItem("pname", name);
	localStorage.setItem("phealth", health);
	localStorage.setItem("pcolour", colour);
}
