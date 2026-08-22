import ContactSection from "../components/ContactSection"
import PageHeader from "../components/PageHeader"

const ContactPage = () => {
    return (
        <>
         <PageHeader
        title="Contact"
        breadcrumb="Contact"
        />
        <ContactSection />
        </>
    )
}

export default ContactPage