import {Footer} from "@/components/layout/footer";
import {SermonHero} from "@/components/pages/sermons/sermon-hero";
import SermonGrid from "@/components/pages/sermons/sermon-grid";

export default function LivePage() {
    return (
        <>
            <SermonHero/>
            <SermonGrid/>
            <Footer/>
        </>
    );
}