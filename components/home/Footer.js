import React, { PureComponent } from "react";

export default class Footer extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                <div className="container">
                    <ul className="list-inline">
                        <li>
                            <a href="https://github.com/agungdwiprasetyo" target="_blank" title="Visit My Github Repository"><i className="fa fa-github fa-fw fa-3x"></i></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/agung-dwi-prasetyo" target="_blank" title="See My Curriculum Vitae"><i className="fa fa-linkedin fa-fw fa-3x"></i></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/agungdp22" target="_blank"><i className="fa fa-instagram fa-fw fa-3x"></i></a>
                        </li>
                        <li>
                            <a href="https://web.facebook.com/agungdwip22" target="_blank"><i className="fa fa-facebook fa-fw fa-3x"></i></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/agungdwprasetyo" target="_blank"><i className="fa fa-twitter fa-fw fa-3x"></i></a>
                        </li>
                    </ul>
                    <p>© {(new Date()).getFullYear()} Agung Dwi Prasetyo | Software Engineer & Machine Learning Enthusiast</p>
                </div>
            </footer>
        );
    }
}