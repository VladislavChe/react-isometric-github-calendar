import Header from "./components/Header/Header";
import CalendarBlock from "./components/CalendarBlock/BlockCalendar/CalendarBlock";
import GitHubActivityBlock from "./components/GitHubActivityBlock/GitHubActivityBlock";
import StickersBlock from "./components/StickersBlock/StickersBlock";
import Footer from "./components/Footer/Footer";
function App () {
    return (
        <>
            <Header />
            <GitHubActivityBlock />
            <CalendarBlock />
            <StickersBlock />
            <Footer />
        </>
    )

}

export default App;