class ProgressBar {
  constructor(elementId, options = {}) {
    this.progressBar = document.getElementById(elementId);
    this.duration = options.duration || '3s';
    this.bgclr = options.bgclr || '#000';
    this.bgstart = options.bgstart || 'rgba(100, 0, 0, 0.1)';
    this.bgfinish = options.bgfinish || 'rgba(255, 0, 0, 1)';
    this.percent = options.percent || '1%';

    this.initialize();
  }

  initialize() {
    this.setStyles();
    this.animateProgressBar();
  }

  setStyles() {
    document.documentElement.style.setProperty('--duration', this.duration);
    document.documentElement.style.setProperty('--bgclr', this.bgclr);
    document.documentElement.style.setProperty('--bgstart', this.bgstart);
    document.documentElement.style.setProperty('--bgfinish', this.bgfinish);
    this.progressBar.setAttribute('data-percent', this.percent);
  }

  animateProgressBar() {
    const valueWithoutPercent = parseFloat(this.percent);
    let width = 1;
    const interval = setInterval(() => {
      width += parseFloat((parseFloat(this.duration) / 10) / 5);
      this.progressBar.style.setProperty('--width', `${width}%`);
      if (Math.round(width) >= Math.round(valueWithoutPercent)) {
        clearInterval(interval);
      }
    }, 1);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const progressBar = new ProgressBar('progressbar', {
    duration: '3s',
    bgclr: '#000',
    bgstart: 'rgba(100, 0, 0, 0.1)',
    bgfinish: 'rgba(255, 0, 0, 1)',
    percent: '80%', // Example: change this to your actual coverage percentage
  });
});
