import About from "../components/About"
import MinistryStats from "../components/MinistryStats";
import PageHeader from "../components/PageHeader";

const AboutPage = () => {
    return (
        <>
        <PageHeader
        title="About"
        breadcrumb="about"
         />
        <About />
        <MinistryStats />
        </>
    )
}
export default AboutPage;