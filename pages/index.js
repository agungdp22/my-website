import Layout from '../components/Layout';
import Header from "../components/home/Header";
import Skill from "../components/home/Skill";
import Footer from "../components/home/Footer";
import API from "../helper/helper";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [],
            content: "",
        };
    }

    static async getInitialProps({ req, res, query }) {
        var pr;
        return { pr }
    }

    async componentDidMount () {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
            .register('/service-worker.js')
            .then(registration => {
                console.log('service worker registration successful')
            })
            .catch(err => {
                console.warn('service worker registration failed', err.message)
            })
        }

        try {
            let httpApi = new API();
            const resp = await httpApi.GraphQL(`query {
                public {
                    getHomePage {
                    content, footer, skills {
                        iconHeight, className, imageUrl, name
                    }
                }
                }
            }`);
            this.setState({
                skills: resp.data.public.getHomePage.skills,
                content: resp.data.public.getHomePage.content
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const { 
            skills, content
        } = this.state;

        return (
            <main>
                <Layout 
                    title={'Agung Dwi Prasetyo'} 
                    description={'Agung Dwi Prasetyo Official Website'}>
                </Layout>
            
                <Header content={content} />
                <Skill skills={skills} />
                <Footer />
            </main>
        )
    }
}