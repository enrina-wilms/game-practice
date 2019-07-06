import { SquareTypes } from "./types"

export interface ISqaureProps {
    clicked: boolean;
    value: SquareTypes;
    id: number;
    onclick: (id: number) => void;
}

export class Sqaure {
    constructor (public props: ISqaureProps) {}

    render () {
        const self = document.createElement('div')
        self.textContent = this.props.value
        self.className = this.props.clicked ? 'square--clicked' : 'square--unclicked'
        self.onclick = () => {
            this.props.onclick(this.props.id)
        };
        return self
    }
}