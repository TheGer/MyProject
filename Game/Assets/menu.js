#pragma strict
//similar to a CSS style sheet for the button
//on the screen
var style:GUISkin;

//creating a function to draw the button
function OnGUI ()
{
	GUI.skin = style;
	//create a button in the middle of the screen
	GUI.Button(Rect(400-50,300-50,100,100),"Play Game");
}


function Start () {

}

function Update () {

}