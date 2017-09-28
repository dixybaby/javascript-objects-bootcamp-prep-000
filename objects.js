var playlist = {
  Willis: 'Die Hard',
  Smith : 'Men in Black'
}

function updatePlaylist(playlist, artistName, songTitle) {
  return playlist.assign({}, playlist {[artistName]}: songTitle )
}
