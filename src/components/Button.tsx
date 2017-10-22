import * as React from "react"

export interface ButtonState { active: boolean }
export interface ButtonProps { color: string }

export class Button extends React.Component<ButtonProps, ButtonState> {

    constructor(props: ButtonProps) {
        super(props);
        this.state = { active: true }
        this.toggleState = this.toggleState.bind(this);
    }

    toggleState(): void {        
        this.setState(prevState => ({
            active: !prevState.active
        }));
    }

    render(): JSX.Element {
        return (
            <button onClick={this.toggleState} disabled={!this.state.active} className={this.props.color}>
                { this.state.active ? "ACTIVE" : "INACTIVE" }
            </button>
        );
    }

}