/**
 * @author Amaan Lari
 * @copyright 2025 amaanlari
 * @license Apache-2.0
 */

// Blog page : No blogs yet
import {Link} from "react-router-dom";

function Blog() {
    return (
        <main className={"container flex mx-auto justify-center items-center h-[80dvh]"}>
            <div className={"flex flex-col items-center justify-center"}>
            <h1 className={"text-4xl"}>No blogs yet</h1>
            <Link to="/" className={"font-semibold text text-primary hover:text-slate-500"}>Go back to home</Link>
            </div>
        </main>
    )
}

export default Blog;