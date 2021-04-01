const video = Array.from(document.getElementsByTagName('video')).map(v => new Plyr(v)),
      audio = Array.from(document.getElementsByTagName('audio')).map(a => new Plyr(a));

video.forEach(instance => {
  instance.on('play', e => { stopOtherPlayers(e, instance) })
  instance.on('pause', e => { detexture(e) })
  instance.on('ended', e => { detexture(e) })
})
audio.forEach(instance => {
  instance.on('play', e => { stopOtherPlayers(e, instance) })
  instance.on('pause', e => { detexture(e) })
  instance.on('ended', e => { detexture(e) })
})

function stopOtherPlayers(e, media) {
  console.log('yo');
  audio.forEach( instance => {
    if(instance.id !== media.id){ instance.pause(); }
  })
  video.forEach( instance => {
    if(instance.id !== media.id){ instance.pause(); }
  })
  texture(e);
}

function texture(e){
  const el_texture = e.target.closest('.texture');
  if(el_texture){ el_texture.className += " texture--active"; }
}

function detexture(e){
  const el_texture = e.target.closest('.texture');
  if(el_texture){ el_texture.className = "texture"; }
}
