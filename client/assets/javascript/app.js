const elements = {
  scrollDownButton: document.querySelector('.app__hero__content__scroll'),
  podcast: document.querySelector('.podcast'),
  podcastGroup: document.querySelectorAll('.podcast__group'),
  showMore: document.querySelector('.show__more'),
  img: document.querySelectorAll('img'),
  modal: document.querySelector('.modal__audio')
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

const addProgressBar = (audio) => {
  const range = document.querySelector('.audio__range');
  range.setAttribute('max', audio.duration / 60);
  range.setAttribute('value', audio.currentTime);
}

const openModal = (image) => {
  image.forEach((img) => {
    img.addEventListener('click', () => {
      addAudio(img)
    });
  });
};

const playPodcast = (audio) => {
  if(audio.paused) {
    audio.play();
  } else {
    audio.paused();
  }
} 

const addAudio = (image) => {
  const className = image.getAttribute('data-audio');
  elements.modal.insertAdjacentHTML('afterend', `<img
  src="${image.src}"
  alt="${image.alt}"
/>
<div class="modal__audio__box">
  <input  
    type="range"
    class="audio__range"
    name="audio__range"
    min="0"
    max="0"
    value="0"
  />
  <audio controls 
    class="audio ${className}"
  >
    <source
      src="${image.getAttribute('data-link')}"
    />
  </audio>
</div>`);

const audio = document.querySelector(`.${className}`);
playPodcast(audio)
addProgressBar(audio)
}


scrollDown(elements.scrollDownButton, elements.podcast);
showMore(elements.podcastGroup, elements.showMore);
openModal(elements.img);
export { scrollDown, Audio, Podcast };
