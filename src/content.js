export default class Content {
    content = document.getElementById('content')
    sections = []
    constructor(num) {
        for (let i = 0; i < num; i++) this.sections.push({children: []})
    }

    format(index, array) {
        if (index >= this.sections.length) return console.log('No element found.')
        this.sections[index].parent = document.createElement('div')
        for (let i = 0; i < array.length; i++) {
            this.sections[index].children.push(document.createElement(array[i]))
            this.sections[index].parent.appendChild(this.sections[index].children[i])
        }
    }

    fill(k, l, text) {
        if (k >= this.sections.length || l >= this.sections[k].children.length)
            return console.log('No element found.')
        this.sections[k].children[l].textContent = text
    }

    display() {
        this.content.replaceChildren()
        for (const section of this.sections) this.content.appendChild(section.parent)
    }
}