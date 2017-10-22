import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, undefined> { 
    readonly element = (        
        <h1>Hello from {this.props.compiler} and {this.props.framework}</h1>
    );

    render(): JSX.Element {
        return this.element;
    }
}