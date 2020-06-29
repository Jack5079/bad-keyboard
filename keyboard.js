const keys = `\`1234567890-=\!@#$%^&*()_+|qwertyuiop[]QWERTYUIOP{}asdfghjkl;'ASDFGHJKL:"zxcvbnm,./ZXCVBNM<>?`.split('')
const keycont = document.getElementById('keys')

/**
 * @param {string | any[]} arr
 */
const random = arr => arr[Math.floor(Math.random() * arr.length)]
const randomPercent = () => random([...Array(100).keys()]) + '%'

const align = ['left', 'right', 'center']
function randomColor () {
  var letters = '0123456789ABCDEF'.split('')
  var color = '#'
  for (var i = 0; i < 6; i++) color += random(letters)
  return color
}

function shuffle () {
  keycont.innerHTML = ''

  keycont.style.textAlign = random(align)
    ;[...keys, '<a href=".">↻</a>'].sort(() => Math.random() - 0.5).forEach(string => {
      const key = document.createElement('span')
      key.style.background = Math.random() > 0.5 ? `linear-gradient(to top right, ${randomColor()}, ${randomColor()})` : randomColor()
      key.style.textAlign = random(align)
      key.style.color = randomColor()
      key.style.borderRadius = randomPercent()
      key.style.width = randomPercent()
      key.style.height = randomPercent()
      key.innerHTML = string
      keycont.appendChild(key)
    })

}
const inp = document.querySelector('input')
inp.addEventListener('keydown', event => event.preventDefault())
inp.addEventListener('input', shuffle)
shuffle()
