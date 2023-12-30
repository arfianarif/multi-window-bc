const avatar = document.getElementById('avatar')

const channel = new BroadcastChannel('avatar_channel')

const elMovement = (e) => {
  const x = e.clientX
  const y = e.clientY
  avatar.style.left = x + 'px'
  avatar.style.right = ''
  avatar.style.top = y + 'px'
  avatar.style.bottom = ''
  channel.postMessage({ x, y })
}

channel.onmessage = (e) => {
  const { x, y } = e.data
  avatar.style.left = ''
  avatar.style.right = x + 'px'
  avatar.style.top = y + 'px'
  avatar.style.bottom = ''
}

addEventListener('mousemove', elMovement)