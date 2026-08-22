import Ministry from "../components/Ministry";
import PageHeader from "../components/PageHeader";
import MinistrySection from "../components/MinistrySection";

const MinistryPage = () =>{
    return(
        <>
        <PageHeader
        title="Ministry"
        breadcrumb="Ministry"
         />
        <MinistrySection />
        <Ministry />
        </>
    )
}

export default MinistryPage;