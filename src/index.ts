import { Gameboard } from "./Gameboard";

const mountPoint = document.querySelector('#game')
console.log(mountPoint);
if (mountPoint) {
    let oldChild: HTMLDivElement;
    const render = () => {
        let newChild = game.render()
        mountPoint.replaceChild(newChild, oldChild)
        oldChild = newChild
        
    }
    const game = new Gameboard(render)

    oldChild = game.render()
    mountPoint.appendChild(oldChild)
}