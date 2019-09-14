import {PureComponent} from "react";

export default class Skill extends PureComponent {
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

        return (
            <div className="container">
                <div className="col-md-12">
                    <div>
                        <p className="skill">
                            <img className="cpp" align="middle" src="https://storage.googleapis.com/agungdp/static/logo/cpp.png" 
                                height="70" title="C++" />
                            <img className="docker" align="middle" src="https://storage.googleapis.com/agungdp/static/logo/docker.png" 
                                height="90" title="Docker" />
                            <img className="golang" align="middle" src="https://storage.googleapis.com/agungdp/static/logo/golang.png" 
                                height="85" title="Golang" />
                            <img className="graphql" align="middle" src="https://storage.googleapis.com/agungdp/static/logo/graphql.png" 
                                height="75" title="GraphQL" />
                            <img className="mongo" align="middle" src="https://storage.googleapis.com/agungdp/static/logo/mongodb.png" 
                                height="100" title="MongoDB" />
                            <img className="node" align="middle" src="https://storage.googleapis.com/agungdp/static/logo/nodejs.png" 
                                height="55" title="Node js" />
                            <img className="postgres" align="middle" src="https://storage.googleapis.com/agungdp/static/logo/postgres.png" 
                                height="60" title="Postgres" />
                            <img className="postgres" align="middle" src="https://storage.googleapis.com/agungdp/static/logo/python.png" 
                                height="60" title="Python" />
                            <img className="postgres" align="middle" src="https://storage.googleapis.com/agungdp/static/logo/raspi.png" 
                                height="60" title="Raspberry Pi" />
                            <img className="arduino" align="middle" src="https://storage.googleapis.com/agungdp/static/logo/arduino.png" 
                                height="45" title="Arduino" />
                            <img className="react" align="middle" src="https://storage.googleapis.com/agungdp/static/logo/react.png" 
                                height="70" title="React js" />
                        </p>
                    </div>
                </div>

                <style jsx>{`
                    .cpp {
                        margin:0 0 0 0;
                    }
                    .docker {
                        margin:0px 1px 0 15px;
                    }
                    .golang {
                        margin:0px 5px;
                    }
                    .graphql {
                        margin:0px 4px;
                    }
                    .mongo {
                        margin:0px 3px;
                    }
                    .node {
                        margin:0px 8px;
                    }
                    .postgres {
                        margin:0px 12px;
                    }
                    .arduino {
                        margin:4px 10px 0px 10px;
                    }
                    .react {
                        margin:0px 8px;
                    }
                `}</style>
            </div>
        );
    }
}