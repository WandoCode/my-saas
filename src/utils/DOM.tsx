const activeScroll = () => {
  document.body.classList.remove('no-scroll-mobile')
}

const desactiveScroll = () => {
  document.body.classList.add('no-scroll-mobile')
}

export { activeScroll, desactiveScroll }
