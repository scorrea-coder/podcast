import { scrollDown, Audio, Podcast } from '../assets/javascript/app';

describe('Scroll', () => {
  it('Should scroll down to element', () => {
    document.body.innerHTML = '<div class="scrollFrom"></div><div class="scrollTo"></div>';
    const scrollFrom = document.querySelector('.scrollFrom');
    const scrollTo = document.querySelector('.scrollTo');
    expect(scrollDown(scrollFrom, scrollTo)).toBe(true);
  });
});

describe('Podcast', () => {
  it('should add Audio to Podcast', () => {
    new Podcast(new Audio('name', 'cover', 'track'));
    const podcast = new Podcast();
    console.log(podcast);
    expect(podcast.tracks[0]).toBe('name');
  });
});
