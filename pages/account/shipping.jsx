import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import BreadCrumb from '~/components/elements/BreadCrumb';
import Shipping from '~/components/partials/account/Shipping';
import { getCart } from '~/store/cart/action';
import ContainerPage from '~/components/layouts/ContainerPage';

const ShippingPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shopping Cart',
            url: '/account/shopping-cart',
        },
        {
            text: 'Checkout Information',
            url: '/account/checkout',
        },
        {
            text: 'Shipping',
        },
    ];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    return (
        <ContainerPage title="Shipping" boxed={true}>
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <Shipping />
            </div>
        </ContainerPage>
    );
};

export default connect()(ShippingPage);
