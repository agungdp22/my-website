import {PureComponent} from "react";

export default class Header extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            apiUrl: process.env.API
        }
    }

    render() {
        const {
            apiUrl
        } = this.state;
        console.log(apiUrl)

        return (
            <div className="content">
                <div>Hello, my name is Agung Dwi Prasetyo</div>
                <div>This page is still under development</div>
                <div>See my <a href="https://sourcerer.io/agungdwiprasetyo" target="blank">GitHub report</a></div>
            </div>
        );
    }
}