// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // 1️⃣ Responsive Sidebar Toggle (for small screens)
  const sidebar = document.querySelector(".sidebar");
  const toggleBtn = document.createElement("button");
  toggleBtn.classList.add("menu-toggle");
  toggleBtn.innerHTML = "☰";
  document.body.appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  // 2️⃣ Play Button Animation
  const playButtons = document.querySelectorAll(".item .play .fa");
  playButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      const parent = e.target.closest(".item");
      const title = parent.querySelector("h4").innerText;
      alert(`🎶 Now playing: ${title}`);
    });
  });

  // 3️⃣ Playlist Scroll Buttons
  const playlists = document.querySelectorAll(".spotify-playlists .list");

  playlists.forEach(list => {
    list.addEventListener("wheel", (e) => {
      e.preventDefault();
      list.scrollLeft += e.deltaY;
    });
  });

  // 4️⃣ Login & Signup Buttons (demo)
  const loginBtn = document.querySelector(".navbar button");
  const signupBtn = document.querySelector(".preview button");

  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      alert("🔐 Login feature coming soon!");
    });
  }

  if (signupBtn) {
    signupBtn.addEventListener("click", () => {
      alert("🎧 Thank you for signing up!");
    });
  }

});
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const songTitle = document.getElementById("song-title");

let currentSongIndex = 0;
let isPlaying = false;
let audio = new Audio();

const songs = [
  { title: "Song One", src: "songs/song1.mp3" },
  { title: "Song Two", src: "songs/song2.mp3" },
  { title: "Song Three", src: "songs/song3.mp3" },
];

function loadSong(index) {
  audio.src = songs[index].src;
  songTitle.textContent = songs[index].title;
}

function playSong() {
  audio.play();
  isPlaying = true;
  playBtn.textContent = "⏸";
}

function pauseSong() {
  audio.pause();
  isPlaying = false;
  playBtn.textContent = "▶";
}

playBtn.addEventListener("click", () => {
  if (isPlaying) pauseSong();
  else playSong();
});

prevBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  playSong();
});

nextBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  playSong();
});

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100 || 0;
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value * audio.duration) / 100;
});


document.querySelectorAll(".song-item").forEach((item, index) => {
  item.addEventListener("click", () => {
    currentSongIndex = index;
    loadSong(index);
    playSong();
  });
});


loadSong(currentSongIndex);
