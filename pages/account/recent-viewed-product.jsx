import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import RecentViewedProducts from '~/components/partials/account/RecentViewedProducts';
import ContainerPage from '~/components/layouts/ContainerPage';

const RecentViewedProductsPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Recent Viewed Products',
        },
    ];
    return (
        <ContainerPage title="Recent Viewed Products">
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <RecentViewedProducts />
            </div>
        </ContainerPage>
    );
};

export default RecentViewedProductsPage;
