/**
 * @author Amaan Lari
 * @copyright 2025 amaanlari
 * @license Apache-2.0
 */
import {Button} from "@/components/ui/button.tsx";
import {DownloadIcon, LucideMail} from "lucide-react";
import {Link} from "react-router-dom";

const linkedinLogoDark = "/images/InBug-White.png";
const linkedinLogoLight = "/images/InBug-Black.png";

const Hero = () => {
    return (
        <section className={"pt-20 lg:pt-28"}>
            <div className={"items-center lg:grid lg:grid-cols-2 lg:gap-10"}>
                <div>
                    <div className={"flex items-center gap-3"}>
                        <figure className={"img-box w-9 h-9 rounded-lg"}>
                            <img
                                src={"/images/avatar.png"}
                                width={40}
                                height={40}
                                alt={"portrait"}
                                className={"img-cover"}
                            />
                        </figure>
                        <div
                            className={"flex items-center gap-1.5 text-zinc-800 dark:text-zinc-400 text-sm tracking-wide"}>
                            <span className={"relative w-2 h-2 rounded-full bg-emerald-400"}>
                                <span className={"absolute inset-0 rounded-full bg-emerald-400 animate-ping"}></span>
                            </span>
                            Available for work
                        </div>
                    </div>
                    <h2 className={"headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10"}>Building
                        Scalable Modern Websites and Software for the Future</h2>
                    <div className={"flex flex-col gap-3"}>
                        <div className={"flex gap-3"}>
                            <Button variant={"default"} className={"w-fit"}> Download CV <DownloadIcon/></Button>
                            <Button variant={"outline"}
                                    className={"w-fit border-2 border-slate-600"}> E-mail <LucideMail/></Button>
                        </div>
                        <div className={"flex gap-3"}>
                            <Link to={"https://linkedin.com/in/amaanlari"} target={"_blank"}>
                                <Button variant={"outline"}
                                        className={"dark:hover:bg-slate-800 dark:bg-slate-600 bg-slate-300 hover:"}>
                                    About me <img src={linkedinLogoDark} alt={"Linkedin Logo Image Dark Mode"}
                                                  className={"h-4 hidden dark:inline"}/>
                                    <img src={linkedinLogoLight} alt={"Linkedin Logo Image Light mode"}
                                         className={"h-4 dark:hidden"}/>
                                </Button>
                            </Link>
                            <Link to={"https://github.com/amaanlari"} target={"_blank"}>
                                <Button variant={"outline"}
                                        className={"dark:hover:bg-slate-800 dark:bg-slate-600 bg-slate-300 hover:"}>
                                    Github <img src={"/images/github-mark.svg"} alt={"Github Logo"}
                                                className={"dark:hidden h-5"}/>
                                    <img src={"/images/github-mark-white.svg"} alt={"GitHub Logo - dark mode"}
                                         className={"h-5 hidden dark:inline"}/>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={"hidden lg:block"}>
                    <figure
                        className={
                            "w-full max-w-[480px] ml-auto bg-gradient-to-t from-slate-300 via-25% via-slate-300/40 to-65% rounded-[60px] pb-0.5 dark:from-slate-400 dark:via-25% dark:via-slate-400/40 dark:to-65%"
                        }
                    >
                        <img
                            src={"/images/hero-bitmoji.png"}
                            width={656}
                            height={800}
                            alt={"hero"}
                            className={"w-full"}
                        />
                    </figure>
                </div>
            </div>
        </section>
    )

}

export default Hero;