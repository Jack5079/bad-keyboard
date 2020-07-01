const keys = Array(5000).fill(0).map((_, i) => String.fromCharCode(i)).splice(33)
//`\`1234567890-=\!@#$%^&*()_+|qwertyuiop[]QWERTYUIOP{}asdfghjkl;'ASDFGHJKL:"zxcvbnm,./ZXCVBNM<>?`.split('')
const keycont = document.getElementById('keys')


const align = ['left', 'right', 'center']

const random = {
  /**
   * @param {string | any[]} arr
   */
  fromArray (arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  },

  get percent () {
    return this.fromArray([...Array(100).keys()]) + '%'
  },
  get color () {
    var letters = '0123456789ABCDEF'.split('')
    var color = '#'
    for (var i = 0; i < 6; i++) color += this.fromArray(letters)
    return color
  }
}
function shuffle () {
  keycont.innerHTML = ''

  keycont.style.textAlign = random.fromArray(align)
  keys.sort(() => Math.random() - 0.5).forEach(string => {
    const key = document.createElement('span')
    key.style.background = Math.random() > 0.5 ? `linear-gradient(to top right, ${random.color}, ${random.color})` : random.color
    key.style.textAlign = random.fromArray(align)
    key.style.color = random.color
    key.style.borderRadius = random.percent
    key.style.width = random.percent
    key.style.height = random.percent
    key.innerHTML = string
    keycont.appendChild(key)
  })

}
const inp = document.querySelector('input')
inp.addEventListener('keydown', event => event.preventDefault())
inp.addEventListener('input', shuffle)
shuffle()
