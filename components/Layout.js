import Link from 'next/link';
import Navbar from './Navbar';
import Head from 'next/head';

const Layout = (props) => (
    <div>
        <Head>
            <title>BitzPrice</title>
            <link 
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
            rel="stylesheet" 
            integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
            crossorigin="anonymous" />
        </Head>
        <Navbar/>
        <div className="container">
            {props.children}
        </div>
        
    </div>
);

export default Layout;