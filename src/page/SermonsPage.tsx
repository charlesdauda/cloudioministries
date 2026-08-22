import PageHeader from "../components/PageHeader";
import SermonsSection from "../components/SermonsSection";
import TelegramCTA from "../components/TelegramCTA";
import WordUnmuted from "../components/WordUnmuted";

const SermonsPage = () => {
    return(
        <>
        <PageHeader
        title="Sermons"
        breadcrumb="Sermon"/>
        <WordUnmuted />
        <SermonsSection />
        <TelegramCTA />
        </>
    )
}

export default SermonsPage;