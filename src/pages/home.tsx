/**
 * @author Amaan Lari
 * @copyright 2025 amaanlari
 * @license Apache-2.0
 */
import Hero from "@/components/hero.tsx";

function Home() {

    return (
        <div>
            <title>Amaan Lari</title>
            <main className={"container max-sm:hidden"}>
                <Hero/>
            </main>

            <main className={"container sm:hidden"}>
                <Hero/>
            </main>
        </div>
    )
}

export default Home;