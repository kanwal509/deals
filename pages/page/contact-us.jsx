import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ContactInfo from '~/components/partials/page/ContactInfo';
import ContactForm from '~/components/partials/page/ContactForm';
import ContactMap from '~/components/partials/page/ContactMap';
import ContainerPage from '~/components/layouts/ContainerPage';

const ContactUsPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'ContactUs',
        },
    ];

    return (
        <ContainerPage title="Contact Us" boxed={true}>
            <div className="ps-page--single" id="contact-us">
                <BreadCrumb breacrumb={breadCrumb} />
                <ContactMap />
                <ContactInfo />
                <ContactForm />
            </div>
        </ContainerPage>
    );
};

export default ContactUsPage;
