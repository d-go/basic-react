import * as React from "react";

export interface ClockState { date: Date }
// export interface ClockProps { id: number }

export class Clock extends React.Component<undefined, ClockState> {
    timerID: number;

    constructor(props: any) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount(): void {
        this.timerID = setInterval( 
            () => {
                this.thick(), 1000
            }
        );
    }

    componentWillUnmount(): void {
        clearInterval(this.timerID);
    }

    thick(): void {
        this.setState({
            date: new Date()
        });
    }

    render(): JSX.Element {
        return <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    }
}