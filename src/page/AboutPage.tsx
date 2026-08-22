import About from "../components/About"
import EducationalBackground from "../components/EducationalBackground";
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
        <EducationalBackground />
        </>
    )
}
export default AboutPage;