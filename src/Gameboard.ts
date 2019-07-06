import { Sqaure, ISqaureProps } from "./Square";
import { SquareTypes } from "./types";

export class Gameboard {
    private grid = [
        [
            {value: SquareTypes.near1, clicked: false}, {value: SquareTypes.bomb, clicked: false}, {value: SquareTypes.near1, clicked: false}
        ],
        [
            {value: SquareTypes.near1, clicked: false}, {value: SquareTypes.near1, clicked: false}, {value: SquareTypes.near1, clicked: false}
        ],
        [
            {value: SquareTypes.near0, clicked: false}, {value: SquareTypes.near0, clicked: false}, {value: SquareTypes.near0, clicked: false}
        ]
    ] as {value:SquareTypes, clicked: boolean}[][]

    constructor (public renderTrigger: () => void) {}

    click (id: number) {
        let row = Math.floor(id/3);
        this.grid[row][id % 3].clicked = true
        this.renderTrigger()
    }

    render () {
        const self = document.createElement('div')

        let count = 0;
        this.grid.forEach((row) => {
            row.forEach((col) => {
                const s = new Sqaure(Object.assign({id: count, onclick: this.click.bind(this)}, col)).render()
                count++;
                self.appendChild(s)
            })
            const d = document.createElement("br");
            self.appendChild(d);
        })
        return self
    }
}