import {PureComponent} from "react";
import API from "../../helper/helper";

export default class Header extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            apiUrl: process.env.API
        }
    }

    render() {
        const {
            content
        } = this.props;

        return (
            <div className="container">
                <div className="content">
                <div dangerouslySetInnerHTML={ { __html: content } }></div>
                </div>
            </div>
        );
    }
}