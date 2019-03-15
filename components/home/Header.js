import {PureComponent} from "react";

export default class Header extends PureComponent {
    render() {
        return(
            <div>
                Hello, my name is Agung Dwi Prasetyo <br />
                This page is under construction <br />
                See my latest resume => <a href = "/resume" target="blank">Resume</a>
            </div>
        );
    }
}