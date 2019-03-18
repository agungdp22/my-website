import React, {PureComponent} from "react";
import Head from "next/head";

import '../styles/style.scss';

export default class Layout extends PureComponent {
    render() {
        const { title, description } = this.props;

        return (
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="keywords" content="Agung Dwi Prasetyo" /> 
                <link href="https://agungdp.storage.googleapis.com/wedding/static/css/bootstrap.css" type="text/css" rel="stylesheet" media="all" />
                <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                <link rel="shortcut icon" href="https://storage.googleapis.com/agungdp/static/agungdwiprasetyo.com/code.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet" />

                <link rel="manifest" href="/static/manifest.webmanifest" />
                <meta name="theme-color" content="#337ab7" />
                <link rel="apple-touch-icon" href="https://storage.googleapis.com/agungdp/static/agungdwiprasetyo.com/code.png" />
                <meta name="apple-mobile-web-app-title" content="Agung Dwi Prasetyo" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="mobile-web-app-capable" content="yes" />
            </Head>
        );
    }
}