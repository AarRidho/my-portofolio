import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
    return <>
        <Component {...pageProps} />
    </>;
}

export default MyApp;
