var playlist = {
  Willis: 'Die Hard',
  Abba: 'Dreams'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}