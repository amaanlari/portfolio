/**
 * @author Amaan Lari
 * @copyright 2025 amaanlari
 * @license Apache-2.0
 */
import {Card, CardContent} from "@/components/ui/card.tsx";

const skillItem = [
    {
        imgSrc: `${import.meta.env.BASE_URL}/images/java.svg`,
        label: 'Java',
        desc: 'Language'
    },
    {
        imgSrc: `${import.meta.env.BASE_URL}/images/python.svg`,
        label: 'Python',
        desc: 'Language'
    },
    {
        imgSrc: `${import.meta.env.BASE_URL}/images/javascript.svg`,
        label: 'JavaScript',
        desc: 'Language'
    },
    {
        imgSrc: `${import.meta.env.BASE_URL}/images/css3.svg`,
        label: 'CSS',
        desc: 'Frontend'
    },
    {
        imgSrc: `${import.meta.env.BASE_URL}/images/nodejs.svg`,
        label: 'NodeJS',
        desc: 'Web Server'
    },
    {
        imgSrc: `${import.meta.env.BASE_URL}/images/expressjs.svg`,
        label: 'ExpressJS',
        desc: 'Node Framework'
    },
    {
        imgSrc: `${import.meta.env.BASE_URL}/images/mongodb.svg`,
        label: 'MongoDB',
        desc: 'Database'
    },
    {
        imgSrc: `${import.meta.env.BASE_URL}/images/postgresql.svg`,
        label: 'PostgreSQL',
        desc: 'Database'
    },
    {
        imgSrc: `${import.meta.env.BASE_URL}/images/spring.svg`,
        label: 'Spring Boot',
        desc: 'Framework'
    },
    {
        imgSrc: `${import.meta.env.BASE_URL}/images/flask.svg`,
        label: 'Flask',
        desc: 'Framework'
    },
    {
        imgSrc: `${import.meta.env.BASE_URL}/images/react.svg`,
        label: 'React',
        desc: 'Framework'
    },
    {
        imgSrc: `${import.meta.env.BASE_URL}/images/tailwindcss.svg`,
        label: 'TailwindCSS',
        desc: 'User Interface'
    },
    {
        imgSrc: `${import.meta.env.BASE_URL}/images/figma.svg`,
        label: 'Figma',
        desc: 'Design tool'
    },
];


const Skill = () => {
    return (
        <section className={"pt-12 pb-8"}>
            <div className={"container"}>
                <h2 className={"headline-2 mb-5"}>Skills</h2>
                <div className={"grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]"}>
                    {
                        skillItem.map(({imgSrc, label, desc}, key) =>
                            (
                                <Card className={`h-fit border-0 flex items-center gap-3 ring-2 ring-inset dark:bg-slate-950 dark:ring-slate-50/10 dark:hover:bg-slate-800 ring-slate-900/10 hover:bg-slate-100 rounded-2xl transition-colors group`} key={key}>
                                    <CardContent className={"flex gap-3 p-3"}>
                                        <figure className={"rounded-lg overflow-hidden w-12 h-12 p-2 dark:bg-zinc-700/50 dark:group-hover:bg-zinc-900 bg-zinc-600 group-hover:bg-zinc-700 transition-colors"}>
                                        <img
                                            src={imgSrc}
                                            alt={label}
                                            width={48}
                                            height={48}
                                        />
                                        </figure>
                                        <div>
                                            <h3 className={"text-lg font-semibold"}>{label}</h3>
                                            <p className={"text-zinc-400"}>{desc}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skill