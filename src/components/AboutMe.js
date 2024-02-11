import React from 'react';

function AboutMe() {
  return(
    <div class="page__introduction introduction">
      <h2 class="visually-hidden">About Me</h2>
      <p class="t-body">
        <span class="t-display">Hello!</span>
        <span class="introduction__heading t-display">I'm Chris,</span>
        a User Experience Developer with passions for photography, ceramics, and soccer.
      </p>
      <p class="t-body">With accessibility and usability in mind, I specialize in translating designs into scalable and maintainable code. Prioritizing browser-native behavior, I use semantic HTML, modular CSS, and lightweight JS to build experiences that empower and delight users.</p>
      <ul class="t-list introduction__social">
        <li class="introduction__social__link"><a class="t-link" target="_blank" href="mailto:hello@christophergoodwin.me" rel="noopener noreferrer">
          <span>Email</span>
        </a></li>
        <li class="introduction__social__link"><a class="t-link" target="_blank" href="https://github.com/goodwinchris" rel="noopener noreferrer">
          <span>GitHub</span>
        </a></li>
        <li class="introduction__social__link"><a class="t-link" target="_blank" href="https://unsplash.com/@itsallgoodie" rel="noopener noreferrer">
          <span>Unsplash</span>
        </a></li>
        <li class="introduction__social__link"><a class="t-link" target="_blank" href="./files/ChristopherGoodwinResume.pdf" rel="noopener noreferrer">
          <span>Resume</span>
        </a></li>
      </ul>
    </div>
  )
}

export default AboutMe;