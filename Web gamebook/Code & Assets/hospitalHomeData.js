var placesArray = [
	{
		name:"Intro", //0
		text:"You've arrived. Looming over you behind a tall metal fence is the abandoned hospital. After hearing on local news that a manager of the hospital - recently passed away - had untold wealth, you decided to search the once active hospital for some of his possessions. Carefully, you haul yourself over the fence, making sure not to get any of your clothes caught. You duck behind a couple of bushes and make your way to the left hand side of the building.",
		options:[
			{
				text:"Continue",
				index:1
			}
		]
	},
	{
		name:"Outside", //1
		text:"You are ready to explore the abandoned hospital. There is a wall with bushes in front of you and the entrance to your left. ",
		options:[
			{
				text:"Check bushes",
				index:2
			},
			{
				text:"Enter the hospital",
				index:3
			}
		]
	},
	{
		name:"Bushes", //2
		text:"You walk to the bushes hoping to find some untold wealth. After a few minutes lifting leaves and twigs you spot a hook. You pick it up and it is tied to some strong rope. You take it, thinking it might be worth something.",
		options:[
			{
				text:"Enter the hospital",
				index:3
			}
		]
	},
	{
		name:"Reception", //3
		text:"1You approach the large double doors. They are slightly ajar. You pry them apart and enter the hospital reception. The doors slam shut behind you. Try as you might, you cannot get them open! Trying to think of another way out, you decide to explore. ",
		options:[
			{
				text:"Continue",
				index:4
			}
		]
	},
	{
		name:"Reception", //4
		text:"There are three doors: One in the wall to the left and two in the wall in front of you. The left-hand door in front of you is clearly the doorway to a lift. Which door do you take? ",
		options:[
			{
				text:"Left door",
				index:5
			},
			{
				text:"Lift door",
				index:6
			},
			{
				text:"Right door",
				index:7
			}
		]
	},
	{
		name:"Op Theatre", //5
		text:"You're in the operation theatre! A raised bed sits in the middle of the room with loose floor tiles and various drawers and cupboards surrounding it. There is a door to the East and a door to the South. Might be worth having a look around.",
		options:[
			{
				text:"Look around",
				index:8
			},
			{
				text:"Take the South door",
				index:4
			},
			{
				text:"Take the East door",
				index:9
			}
		]
	},
	{
		name:"Lift", //6
		text:"You press the button by the door and surprisingly, the door opens! You walk inside and start pressing some buttons to see if the lift still works. While in the lift, the door shuts behind you. You frantically try pressing the button to open the door again but it's no use. You're trapped. Refresh the page to start again.",
		options:[
			{
				text:"You lose.",
				index:32
			}
		]
	},
	{
		name:"Stairs", //7
		text:"You end up in a room with a staircase against the southern wall, doors to the East and West and an open electrics box opposite. Do you... ",
		options:[
			{
				text:"Go upstairs",
				index:10
			},
			{
				text:"Take the West door",
				index:4
			},
			{
				text:"Take the East door",
				index:9
			},
			{
				text:"Go to the electrics box",
				index:11
			}
		]
	},
	{
		name:"Op Theatre", //8
		text:"2After a few minutes looking through the cupboards and amongst the rubble, you find a set of pliers. After searching some more and finding nothing else of interest, you take the pliers.",
		options:[
			{
				text:"Continue",
				index:5
			}
		]
	},
	{
		name:"Storage Room", //9
		text:"You're in the storage room. Shelves full of cardboard boxes and plastic containers take up all the space. There's a door to the North, a door to the West and a door to the South. Worth a look around?",
		options:[
			{
				text:"North door",
				index:5
			},
			{
				text:"South door",
				index:12
			},
			{
				text:"West door",
				index:7
			},
			{
				text:"Explore",
				index:13
			}
		]
	},
	{
		name:"Stairs", //10
		text:"You're on the first floor. There isn't much here. You can only go up a floor, down a floor or through a door to the North.",
		options:[
			{
				text:"Go upstairs",
				index:14
			},
			{
				text:"Go downstairs",
				index:7
			},
			{
				text:"Take the door",
				index:15
			}
		]
	},
	{
		name:"Electrics Box", //11
		text:"On inspecting the contents of the box, it looks like the wiring can be tampered with.",
		options:[
			{
				text:"Continue",
				index:7
			}
		]
	},
	{
		name:"Ground Floor Offices", //12
		text:"The door is locked.",
		options:[
			{
				text:"Continue",
				index:9
			}
		]
	},
	{
		name:"Storage Room", //13
		text:"2You spend a good few minutes looking through all the boxes, hoping to find something valuable as well as something to assist you on your way out. Sadly most of the boxes are empty and you find nothing of interest.",
		options:[
			{
				text:"Continue",
				index:9
			}
		]
	},
	{
		name:"Stairs", //14
		text:"There isn't much here. You can either go downstairs or enter the door to the West.",
		options:[
			{
				text:"Go downstairs",
				index:10
			},
			{
				text:"Take the door",
				index:17
			}
		]
	},
	{
		name:"Hospital Beds", //15
		text:"You're surrounded by hospital beds and cabinets. There's a door to the South and corners to the East and West.",
		options:[
			{
				text:"South door",
				index:10
			},
			{
				text:"Head West",
				index:18
			},
			{
				text:"Head East",
				index:19
			},
			{
				text:"Explore",
				index:20
			}
		]
	},
	{
		name:"Ground Floor Offices", //16
		text:"The furniture is almost intact in here. There's plenty of drawers to look in, and you're bound to find something valuable!",
		options:[
			{
				text:"Explore",
				index:21
			},
			{
				text:"Go back",
				index:9
			}
		]
	},
	{
		name:"Second Floor Office", //17
		text:"The door is locked.",
		options:[
			{
				text:"Continue",
				index:14
			}
		]
	},
	{
		name:"Hospital Beds", //18
		text:"You're surrounded by hospital beds and cabinets. There's a door to the East and corners to the North and South.",
		options:[
			{
				text:"East door",
				index:23
			},
			{
				text:"Head North",
				index:15
			},
			{
				text:"Head South",
				index:24
			},
			{
				text:"Explore",
				index:25
			}
		]
	},
	{
		name:"Hospital Beds", //19
		text:"You're surrounded by hospital beds and cabinets. There are corners to the North and South.",
		options:[
			{
				text:"Head North",
				index:15
			},
			{
				text:"Head South",
				index:24
			},
			{
				text:"Explore",
				index:26
			}
		]
	},
	{
		name:"Hospital Beds", //20
		text:"2After a while looking through the cabinets, you find a key! You take the key.",
		options:[
			{
				text:"Continue",
				index:15
			}
		]
	},
	{
		name:"Ground Floor Offices", //21
		text:"2After a while looking through the desks, you find a key! You take the key.",
		options:[
			{
				text:"Continue",
				index:16
			}
		]
	},
	{
		name:"Second Floor Office", //22
		text:"The desks have nothing on them and the drawers are empty. In the corner of the room, there is a slightly cracked window. There is a doorway to the East.",
		options:[
			{
				text:"Take a look at the window",
				index:27
			},
			{
				text:"Go to the door",
				index:28
			},
			{
				text:"Go back",
				index:14
			}
		]
	},
	{
		name:"Lift", //23
		text:"You approach the open doorway and realise it's the lift shaft. You lose your footing3 and fall onto the top of the lift. You try and scramble back up but it's no use. You're trapped. Refresh the page to start again.",
		options:[
			{
				text:"You lose",
				index:32
			}
		]
	},
	{
		name:"Hospital Beds", //24
		text:"You're surrounded by hospital beds and cabinets. There are corners to the East and West.",
		options:[
			{
				text:"Head East",
				index:19
			},
			{
				text:"Head West",
				index:18
			},
			{
				text:"Explore",
				index:29
			}
		]
	},
	{
		name:"Hospital Beds", //25
		text:"2All the cabinets are empty but you find a brick on the floor. You think it might be useful later so you take it. It's a bit heavy in your backpack though!",
		options:[
			{
				text:"Continue",
				index:18
			}
		]
	},
	{
		name:"Hospital Beds", //26
		text:"2In what seemed to be the biggest section filled with beds and drawers, you find absolutely nothing. Disappointed, you return to the centre of the room.",
		options:[
			{
				text:"Continue",
				index:19
			}
		]
	},
	{
		name:"Second Floor Office", //27
		text:"The window looks breakable, but it's a long way down and probably not worth it.",
		options:[
			{
				text:"Continue",
				index:22
			}
		]
	},
	{
		name:"Lift", //28
		text:"You approach the open doorway and realise it's the lift shaft. You lose your footing3 and fall onto the top of the lift. It's a long fall and you land dead on your feet. The shock travels up your back and you quickly fall on your knees. You've successfully broken both your ankles. You're a long way down and you're losing consciousness... Refresh the page to start again.",
		options:[
			{
				text:"You lose",
				index:32
			}
		]
	},
	{
		name:"Hospital Beds", //29
		text:"2You don't find much, but you do see a handle that appears to have come off a stretcher or something along those lines. It's a large handle with good grip. You decide to take it.",
		options:[
			{
				text:"Continue",
				index:24
			}
		]
	},
	{
		name:"Outside", //30
		text:"It's a rush zip-lining down a telephone line with only a metal handle to hold onto! Especially as it's cold outside. You jump off near the end of the line, almost smacking into the telegraph pole! As you get to your feet, you hear sirens in the background. It's probably best you leave empty handed.",
		options:[
			{
				text:"Credits",
				index:31
			}
		]
	},
	{
		name:"Credits", //31
		text:"Credit to 'Timbre' on freesound.org for the glass breaking sound effect. Everything else was made by Sam Rowsell. It's been fun :) Refresh the page if you want to play again.",
		options:[
			{
				text:"You win.",
				index:32
			}
		]
	}
]
