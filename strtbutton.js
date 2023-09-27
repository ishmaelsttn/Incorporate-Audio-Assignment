/*Ishmael suton*/

function start()
/*lines 6 through 12 determine from the html file wheter or not the start and stop buttons are active or inactive*/
{
    document.getElementById( "start").disabled = true;
    document.getElementById("stop").disabled = false;
}
function stop()
{
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
}
/* line 15 through 19 is a function that activates the play button to play the audio input thats on the webpage*/
function Playsound()
{
    mysound = new sound("Migos-stir-fry-instrumentalfx.mp3");
    mysound.play();
}
/*lines 21 through 27 initiates the value of the buttons that play and pause the instrumental*/
function sound(src)
{
this.sound = document.createElement("audio");
this.sound.src = src;
this.play = function() {
this.sound.play();
    }
}
function Stopsound()
{
window.location.reload()
}