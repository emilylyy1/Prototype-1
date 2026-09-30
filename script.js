function playSound(number) {

    // Create a simple sound using the browser
    let audio = new Audio();

    audio.src = "sounds/sound" + number + ".mp3";

    audio.play();
}