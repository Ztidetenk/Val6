const songs = [
  {
    caption: "When I imagine holding you",
    platform: "YouTube",
    embed: "https://open.spotify.com/embed/track/72CkpVdvmc8t28o8I9N32J?utm_source=generator&theme=0",
  },
  {
    caption: "Slow dancing in the kitchen",
    platform: "Spotify",
    embed:
      "https://open.spotify.com/embed/track/0800NFKDicegzMbus9LiuH?utm_source=generator&theme=0",
  },
  {
    caption: "The night I knew it was you",
    platform: "YouTube",
    embed: "https://open.spotify.com/embed/track/3IZhkhpuGU7iNWDcQ30nZm?utm_source=generator&theme=0",
  },
  {
    caption: "Your voice in my headphones",
    platform: "Spotify",
    embed:
      "https://open.spotify.com/embed/track/2tjWCe2W7sgvS3C8NHcdtI?utm_source=generator&theme=0",
  },
  {
    caption: "Dream with your hand in mine",
    platform: "YouTube",
    embed: "https://open.spotify.com/embed/track/1hQia6rxgfM1ly2hE3StWp?utm_source=generator&theme=0",
  },
  {
    caption: "Love notes I never send",
    platform: "Spotify",
    embed:
      "https://open.spotify.com/embed/track/5PvwPy5eRO8BPwpRzCHK3D?utm_source=generator&theme=0",
  },
  {
    caption: "Staring at the ceiling, smiling",
    platform: "YouTube",
    embed: "https://open.spotify.com/embed/track/3P167vmmGRGKHoy7uDugvy?utm_source=generator&theme=0",
  },
  {
    caption: "Forever feels like this",
    platform: "Spotify",
    embed:
      "https://open.spotify.com/embed/track/0ojpEubhy4JNeVftmVuiN7?utm_source=generator&theme=0",
  },
  {
    caption: "Two coffees, one playlist",
    platform: "YouTube",
    embed: "https://open.spotify.com/embed/track/0645eBDehHcqfiF15hscQV?utm_source=generator&theme=0",
  },
  {
    caption: "Kissing you at the red lights",
    platform: "Spotify",
    embed:
      "https://open.spotify.com/embed/track/0VjIjW4GlUZAMYd2vXMi3b?utm_source=generator&theme=0",
  },
  {
    caption: "The quiet after you say goodnight",
    platform: "YouTube",
    embed: "https://open.spotify.com/embed/track/1As2Jo89VTF9V3D6GuOPr9?utm_source=generator&theme=0",
  },
  {
    caption: "Dreaming in the same key",
    platform: "Spotify",
    embed:
      "https://open.spotify.com/embed/track/2si0ZNx4yRbggTvrIom8A2?utm_source=generator&theme=0",
  },
];

const songsGrid = document.getElementById("songs-grid");
const cardTemplate = document.getElementById("song-card-template");
const shuffleButton = document.querySelector("[data-shuffle]");
const scrollButton = document.querySelector("[data-scroll]");

const createCard = (song, index) => {
  const cardFragment = cardTemplate.content.cloneNode(true);
  const card = cardFragment.querySelector("[data-song-card]");
  const platform = cardFragment.querySelector("[data-platform]");
  const caption = cardFragment.querySelector("[data-caption]");
  const iframe = cardFragment.querySelector("[data-embed]");

  card.id = `song-${index}`;
  platform.textContent = song.platform;
  caption.textContent = song.caption;
  iframe.src = song.embed;
  iframe.title = `${song.caption} - ${song.platform}`;

  return cardFragment;
};

const renderSongs = () => {
  songsGrid.innerHTML = "";
  songs.forEach((song, index) => {
    songsGrid.appendChild(createCard(song, index));
  });
};

const shuffleSong = () => {
  if (!songs.length) return;
  const randomIndex = Math.floor(Math.random() * songs.length);
  const target = document.getElementById(`song-${randomIndex}`);

  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    target.animate(
      [
        { boxShadow: "0 0 0 rgba(242, 169, 198, 0)" },
        { boxShadow: "0 0 36px rgba(242, 169, 198, 0.6)" },
        { boxShadow: "0 0 0 rgba(242, 169, 198, 0)" },
      ],
      { duration: 1200, easing: "ease" }
    );
  }
};

const scrollToSection = () => {
  const targetId = scrollButton?.dataset.scroll;
  if (!targetId) return;
  const section = document.getElementById(targetId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const initializePage = () => {
  renderSongs();
  shuffleButton?.addEventListener("click", shuffleSong);
  scrollButton?.addEventListener("click", scrollToSection);
};

initializePage();
