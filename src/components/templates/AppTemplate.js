import { Component } from "../../core";

export class AppTemplate extends Component {
    constructor() {
        super();
    }

    render() {
        return `
            <it-header id="header"></it-header>
            <main id="main"></main>
        `
    }
}