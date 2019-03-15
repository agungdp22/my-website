import Layout from '../components/Layout';
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps({ req, res, query }) {
        var pr;
        return { pr }
    }

    componentDidMount () {
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
    }

    render() {
        return (
            <main>
                <Layout 
                    title={'Agung Dwi Prasetyo'} 
                    description={'Agung Dwi Prasetyo Official Website'}>
                </Layout>

                <Header />
                <Footer />
            </main>
        )
    }
}