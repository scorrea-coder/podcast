const elements = {
  scrollDownButton: document.querySelector('.app__hero__content__scroll'),
  podcast: document.querySelector('.podcast'),
  podcastGroup: document.querySelectorAll('.podcast__group'),
  showMore: document.querySelector('.show__more'),
  img: document.querySelectorAll('img')
};

class Audio {
  constructor(name, cover, track) {
    this.name = name;
    this.track = track;
    this.cover = cover;
  }
}
class Podcast {
  constructor(tracks = []) {
    this.tracks = tracks;
  }

  addAudio() {
    return this.tracks;
  }
}
const showMore = (podcastElements, show) => {
  show.addEventListener('click', () => {
    podcastElements.forEach((element) => {
      if (element.className.includes('hide')) {
        element.classList.toggle('hide');
      }
    });
  });
};

const scrollDown = (elementFrom, elementTo) => {
  if (elementFrom && elementTo) {
    elementFrom.addEventListener('click', (event) => {
      event.preventDefault();
      elementTo.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
      });
    });
    return true;
  }
  return false;
};

const playAudio = (image) => {
  const playing = [];
  image.forEach((img) => {
    const audio = img.getAttribute('data-audio');
    if (audio) {
      img.addEventListener('click', () => {
        playing.unshift(audio);
        const element = document.querySelector(`.${playing[0]}`);
        if (element.paused) {
          element.play();
        } else {
          element.pause();
        }
      });
    }
  });
};

scrollDown(elements.scrollDownButton, elements.podcast);
showMore(elements.podcastGroup, elements.showMore);
playAudio(elements.img);
export { scrollDown, Audio, Podcast };
