const musics = [
    "../assets/sounds/main_music1.mp3",
    "../assets/sounds/main_music2.mp3",
    "../assets/sounds/main_music3.mp3",
    "../assets/sounds/main_music4.mp3"
]

var main_music = new Audio();
main_music.volume = 0.1;
main_music.loop = true;

var win_music = new Audio("../assets/sounds/win.mp3");
win_music.volume = 0.1;

var defeat_music = new Audio("../assets/sounds/defeat.mp3");
defeat_music.volume = 0.1;

function PlayMainMusic() {
    win_music.pause();
    defeat_music.pause();

    main_music.src = musics[Math.floor(Math.random() * musics.length)];
    main_music.play();
}

function PlayWinMusic() {
    win_music.play();
    defeat_music.pause();
    main_music.pause();
}

function PlayDefeatMusic() {
    win_music.pause();
    defeat_music.play();
    main_music.pause();
}

function MuteMusic() {
    win_music.muted = !win_music.muted;
    defeat_music.muted = !defeat_music.muted;
    main_music.muted = !main_music.muted;
}