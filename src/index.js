import './styles.css'
import pages from './pages.js'

const nav = document.querySelectorAll('nav > button')
for (const [index, button] of nav.entries()) {
    button.addEventListener('click', () => {
        document.querySelector('.selected').classList.remove('selected')
        pages[index].display()
        button.classList.add('selected')
    })
}
pages[0].display()