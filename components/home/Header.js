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
                Hello, my name is Agung Dwi Prasetyo <br />
                This page is still under development <br />
                See my GitHub report <a href="https://sourcerer.io/agungdwiprasetyo" target="blank">GitHub</a>
            </div>
        );
    }
}