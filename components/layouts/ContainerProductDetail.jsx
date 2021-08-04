import React from 'react';
import Head from 'next/head';
import Newletters from '~/components/partials/commons/Newletters';
import FooterFullwidth from '~/components/shared/footers/FooterFullwidth';
import HeaderMobileProduct from '~/components/shared/header-mobile/HeaderMobileProduct';

const ContainerProductDetail = ({ children, title }) => {
    let titleView;
    if (title !== null) {
        titleView = process.env.title + ' | ' + title;
    } else {
        titleView = process.env.title + ' | ' + process.env.titleDescription;
    }

    return (
        <div className="martfury">
            <Head>
                <title>{titleView}</title>
            </Head>
            <HeaderMobileProduct />
            <main>{children}</main>
            <Newletters />
            <FooterFullwidth />
        </div>
    );
};

export default ContainerProductDetail;
