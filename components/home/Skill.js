import {PureComponent} from "react";

export default class Skill extends PureComponent {
    render() {
        const { skills } = this.props;

        return (
            <div className="container">
                <div>
                    <p className="skill">
                        { skills.map( (skl) => (
                            <img className={skl.className} align="middle" src={skl.imageUrl} height={skl.iconHeight} title={skl.name} />
                        ))}
                    </p>
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