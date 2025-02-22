/**
 * @author Amaan Lari
 * @copyright 2025 amaanlari
 * @license Apache-2.0
 */
import {JSX} from "react/jsx-runtime";
import {SVGProps} from "react";

const aboutItems: never[] = [
    // {
    //     label: "Projects Completed",
    //     number: 2
    // },
    // {
    //     label: "Years of Experience",
    //     number: 1
    // }
]

const About = () => {
    return (
        <section
            id={"about"}
            className={"section"}
        >
            <div className={"container"}>
                <div className={"bg-slate-200/50 dark:bg-slate-800/50 p-7 rounded-2xl md:p-12"}>
                    <p className={"text-slate-800 dark:text-slate-300 mb-4 md:mb-8 md:text-xl"}>
                        Welcome! I'm Amaan Lari, a passionate Full-Stack Developer with a knack for building scalable
                        and high-performing applications.

                        Combining innovation and technical expertise, I transform ideas into seamless digital
                        experiences—whether it's crafting secure backend systems, designing intuitive front-end
                        interfaces, or optimizing performance for maximum efficiency. With experience in Spring Boot,
                        Node.js, React, and Angular, I bring a problem-solving mindset to every project.

                        Let's build something exceptional together!
                    </p>
                    <div className={"flex flex-wrap items-center gap-4 md:gap-7"}>
                        {
                            aboutItems.map(
                                ({label, number}, key) => (
                                    <div key={key}>
                                        <div className={"flex items-center md:mb-2"}>
                                            <span className={"text-2xl font-semibold md:text-4xl"}>{number}</span>
                                            <span className={"text-slate-400 font-semibold md:text-3xl"}>+</span>
                                        </div>

                                        <p className={"text-sm text-slate-400"}>{label}</p>
                                    </div>
                                ))
                        }
                        <div className={"ml-auto md:w-32 md:h-10"}>
                        <LogoIcon />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


function LogoIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="118"
            height="24"
            viewBox="0 0 118 24"
            className={"fill-black stroke-black dark:stroke-white dark:fill-white"}
        >
            <path
                d="M28.902 22.496C28.502 22.496 28.07 22.392 27.606 22.184C27.158 21.992 26.782 21.696 26.478 21.296C26.19 20.912 26.062 20.44 26.094 19.88C26.11 19.544 26.142 19.208 26.19 18.872C26.254 18.552 26.382 18.16 26.574 17.696C26.782 17.232 27.102 16.632 27.534 15.896C27.982 15.144 28.598 14.192 29.382 13.04C30.182 11.888 31.198 10.448 32.43 8.72C33.022 7.904 33.438 7.232 33.678 6.704C33.918 6.176 34.038 5.76 34.038 5.456C34.038 5.2 33.966 5.016 33.822 4.904C33.678 4.792 33.494 4.736 33.27 4.736C32.95 4.736 32.566 4.832 32.118 5.024C31.686 5.216 31.27 5.464 30.87 5.768C30.118 6.328 29.35 6.968 28.566 7.688C27.782 8.392 27.022 9.12 26.286 9.872C25.55 10.624 24.862 11.352 24.222 12.056C23.694 12.904 23.198 13.68 22.734 14.384C22.27 15.072 21.934 15.568 21.726 15.872C21.662 15.984 21.558 16.064 21.414 16.112C21.286 16.16 21.158 16.184 21.03 16.184C20.806 16.184 20.606 16.128 20.43 16.016C20.254 15.888 20.214 15.736 20.31 15.56C20.31 15.56 20.406 15.392 20.598 15.056C20.79 14.72 21.038 14.272 21.342 13.712C21.662 13.152 21.998 12.536 22.35 11.864C22.718 11.192 23.07 10.528 23.406 9.872C23.742 9.2 24.03 8.584 24.27 8.024C24.526 7.464 24.694 7.024 24.774 6.704C24.87 6.288 24.918 5.904 24.918 5.552C24.918 5.2 24.854 4.92 24.726 4.712C24.598 4.488 24.374 4.376 24.054 4.376C23.846 4.376 23.582 4.44 23.262 4.568C22.942 4.696 22.566 4.896 22.134 5.168C21.398 5.648 20.566 6.28 19.638 7.064C18.726 7.832 17.774 8.696 16.782 9.656C15.806 10.6 14.83 11.576 13.854 12.584C12.894 13.576 11.998 14.544 11.166 15.488C11.118 15.536 11.062 15.56 10.998 15.56C10.39 16.344 9.934 16.856 9.63 17.096C9.342 17.336 9.198 17.384 9.198 17.24C9.198 16.92 9.638 16.208 10.518 15.104C11.206 14.256 11.942 13.36 12.726 12.416C13.526 11.456 14.27 10.504 14.958 9.56C15.662 8.616 16.222 7.736 16.638 6.92C17.054 6.104 17.262 5.416 17.262 4.856C17.262 4.104 16.95 3.584 16.326 3.296C15.718 3.008 14.942 2.864 13.998 2.864C13.246 2.864 12.438 2.936 11.574 3.08C10.726 3.208 9.878 3.376 9.03 3.584C8.198 3.776 7.43 3.984 6.726 4.208C6.022 4.416 5.454 4.592 5.022 4.736C4.318 4.976 3.67 5.232 3.078 5.504C2.486 5.776 2.014 6.056 1.662 6.344C1.326 6.616 1.158 6.896 1.158 7.184C1.158 7.456 1.342 7.72 1.71 7.976C1.742 7.992 1.758 8.016 1.758 8.048C1.758 8.08 1.718 8.096 1.638 8.096C1.558 8.096 1.478 8.072 1.398 8.024C0.934 7.704 0.702 7.24 0.702 6.632C0.702 6.184 0.854 5.712 1.158 5.216C1.462 4.72 1.934 4.296 2.574 3.944C3.39 3.48 4.302 3.064 5.31 2.696C6.318 2.312 7.358 1.992 8.43 1.736C9.502 1.464 10.558 1.264 11.598 1.136C12.654 0.992 13.63 0.92 14.526 0.92C15.71 0.92 16.638 1.04 17.31 1.28C17.998 1.52 18.486 1.848 18.774 2.264C19.062 2.68 19.206 3.144 19.206 3.656C19.206 4.344 18.998 5.072 18.582 5.84C18.182 6.608 17.734 7.296 17.238 7.904C16.79 8.448 16.214 9.128 15.51 9.944C14.822 10.76 14.142 11.584 13.47 12.416C14.446 11.392 15.438 10.392 16.446 9.416C17.454 8.44 18.43 7.552 19.374 6.752C20.318 5.952 21.166 5.304 21.918 4.808C22.734 4.28 23.446 3.904 24.054 3.68C24.678 3.44 25.206 3.32 25.638 3.32C26.246 3.32 26.678 3.504 26.934 3.872C27.206 4.24 27.342 4.696 27.342 5.24C27.342 5.816 27.206 6.44 26.934 7.112C26.758 7.544 26.526 8.04 26.238 8.6C25.95 9.144 25.63 9.712 25.278 10.304C26.11 9.44 26.99 8.576 27.918 7.712C28.862 6.848 29.774 6.088 30.654 5.432C31.422 4.872 32.23 4.408 33.078 4.04C33.926 3.672 34.646 3.488 35.238 3.488C35.59 3.488 35.87 3.568 36.078 3.728C36.286 3.872 36.39 4.112 36.39 4.448C36.39 4.736 36.294 5.104 36.102 5.552C35.91 6 35.606 6.536 35.19 7.16C33.558 9.576 32.23 11.656 31.206 13.4C30.198 15.128 29.454 16.568 28.974 17.72C28.494 18.872 28.222 19.792 28.158 20.48C28.142 20.56 28.134 20.64 28.134 20.72C28.134 20.8 28.134 20.88 28.134 20.96C28.134 21.408 28.206 21.72 28.35 21.896C28.51 22.088 28.686 22.184 28.878 22.184C29.118 22.184 29.342 22.096 29.55 21.92C29.614 21.888 29.654 21.872 29.67 21.872C29.75 21.872 29.814 21.912 29.862 21.992C29.91 22.072 29.894 22.152 29.814 22.232C29.59 22.408 29.286 22.496 28.902 22.496ZM33.6833 17C33.4753 17 33.3153 16.944 33.2033 16.832C33.0273 16.688 32.9393 16.488 32.9393 16.232C32.9393 15.864 33.0833 15.528 33.3713 15.224C33.7073 14.84 34.0913 14.648 34.5233 14.648C34.6993 14.648 34.8593 14.696 35.0033 14.792C35.1793 14.936 35.2673 15.136 35.2673 15.392C35.2673 15.744 35.1233 16.08 34.8353 16.4C34.4833 16.8 34.0993 17 33.6833 17ZM42.1588 17.96C41.1668 17.96 40.2948 17.856 39.5428 17.648C38.7908 17.44 38.2548 17.208 37.9348 16.952C37.1348 16.328 36.7348 15.608 36.7348 14.792C36.7348 14.104 37.0308 13.416 37.6228 12.728C38.2308 12.024 39.1508 11.384 40.3828 10.808C41.6148 10.216 43.1668 9.752 45.0388 9.416C45.8388 9.272 46.6468 9.16 47.4628 9.08C48.2948 9 49.1268 8.96 49.9588 8.96C50.6628 8.96 51.3668 8.992 52.0708 9.056C52.7908 9.12 53.4948 9.224 54.1828 9.368C54.4068 9.416 54.6628 9.48 54.9508 9.56C55.2388 9.624 55.5348 9.704 55.8388 9.8C57.1668 8.44 58.4628 7.088 59.7268 5.744C60.9908 4.4 62.2148 3.264 63.3988 2.336C64.2308 1.68 65.0068 1.232 65.7268 0.991999C66.4468 0.751999 67.0868 0.631999 67.6468 0.631999C68.3028 0.631999 68.8388 0.735999 69.2548 0.943999C69.6868 1.136 69.9668 1.296 70.0948 1.424C70.1428 1.472 70.1428 1.52 70.0948 1.568C70.0468 1.616 69.9988 1.616 69.9508 1.568C69.8708 1.472 69.6788 1.368 69.3748 1.256C69.0708 1.144 68.6788 1.088 68.1988 1.088C67.6068 1.088 66.9108 1.224 66.1108 1.496C65.3108 1.768 64.4228 2.28 63.4468 3.032C62.2468 3.976 61.0548 5.064 59.8708 6.296C58.7028 7.512 57.5108 8.736 56.2948 9.968C56.9188 10.192 57.4868 10.496 57.9988 10.88C58.5268 11.264 58.8308 11.736 58.9108 12.296V12.392C58.9108 12.456 58.8948 12.488 58.8628 12.488C58.8148 12.488 58.7668 12.44 58.7188 12.344C58.6548 12.168 58.4708 12.016 58.1668 11.888C57.8788 11.76 57.5428 11.656 57.1588 11.576C56.7748 11.496 56.4068 11.432 56.0548 11.384C55.7028 11.336 55.4388 11.304 55.2628 11.288L54.9988 11.264C53.6708 12.544 52.2948 13.728 50.8708 14.816C49.4628 15.888 47.9668 16.696 46.3828 17.24C45.6308 17.496 44.8948 17.68 44.1748 17.792C43.4708 17.904 42.7988 17.96 42.1588 17.96ZM60.7108 19.136C59.9908 18.624 59.4628 18.008 59.1268 17.288C58.7908 16.568 58.6228 15.792 58.6228 14.96C58.6228 14.128 58.7668 13.296 59.0548 12.464C59.3428 11.616 59.7588 10.736 60.3028 9.824C60.8628 8.912 61.4708 8.024 62.1268 7.16C62.7828 6.28 63.4148 5.48 64.0228 4.76C64.6468 4.024 65.1668 3.416 65.5828 2.936C66.0148 2.456 66.2708 2.16 66.3508 2.048C66.4468 1.92 66.5188 1.856 66.5668 1.856C66.6308 1.856 66.6788 1.912 66.7108 2.024C66.7428 2.12 66.7588 2.232 66.7588 2.36C66.7588 2.616 66.7188 2.8 66.6388 2.912C66.2228 3.44 65.7268 4.112 65.1508 4.928C64.5748 5.744 63.9908 6.656 63.3988 7.664C62.8068 8.656 62.2548 9.68 61.7428 10.736C61.2308 11.792 60.8148 12.824 60.4948 13.832C60.1908 14.84 60.0388 15.76 60.0388 16.592C60.0388 17.072 60.1028 17.512 60.2308 17.912C60.3588 18.312 60.5668 18.664 60.8548 18.968C60.8708 18.984 60.8788 19.008 60.8788 19.04C60.8788 19.072 60.8628 19.104 60.8308 19.136C60.7988 19.168 60.7588 19.168 60.7108 19.136ZM42.2308 17.552C42.8228 17.552 43.4628 17.496 44.1508 17.384C44.8388 17.288 45.5508 17.128 46.2868 16.904C47.6628 16.472 49.0308 15.736 50.3908 14.696C51.7508 13.656 53.0868 12.496 54.3988 11.216C54.1908 11.2 53.9828 11.192 53.7748 11.192C53.5668 11.192 53.3508 11.192 53.1268 11.192C52.0068 11.192 50.8388 11.248 49.6228 11.36C48.4228 11.472 47.2788 11.632 46.1908 11.84C44.4308 12.144 42.9908 12.528 41.8708 12.992C40.7668 13.44 39.9508 13.912 39.4228 14.408C38.9108 14.904 38.6548 15.376 38.6548 15.824C38.6548 16.256 38.8708 16.632 39.3028 16.952C39.5268 17.112 39.8948 17.248 40.4068 17.36C40.9188 17.488 41.5268 17.552 42.2308 17.552ZM63.2614 17C63.0534 17 62.8934 16.944 62.7814 16.832C62.6054 16.688 62.5174 16.488 62.5174 16.232C62.5174 15.864 62.6614 15.528 62.9494 15.224C63.2854 14.84 63.6694 14.648 64.1014 14.648C64.2774 14.648 64.4374 14.696 64.5814 14.792C64.7574 14.936 64.8454 15.136 64.8454 15.392C64.8454 15.744 64.7014 16.08 64.4134 16.4C64.0614 16.8 63.6774 17 63.2614 17ZM75.3754 15.008C75.0394 15.008 74.7514 14.96 74.5114 14.864C74.2874 14.768 74.1594 14.688 74.1274 14.624C74.1114 14.592 74.1114 14.568 74.1274 14.552C74.1434 14.52 74.1674 14.52 74.1994 14.552C74.2954 14.616 74.4794 14.648 74.7514 14.648C75.0554 14.648 75.4394 14.568 75.9034 14.408C76.3674 14.232 76.8634 13.888 77.3914 13.376C77.8234 12.944 78.2634 12.416 78.7114 11.792C79.1594 11.152 79.6394 10.464 80.1514 9.728C79.6234 9.616 79.1274 9.448 78.6634 9.224C78.2154 8.984 77.9194 8.64 77.7754 8.192C77.7434 8.064 77.7514 8 77.7994 8C77.8474 8 77.8874 8.04 77.9194 8.12C78.0314 8.296 78.2714 8.416 78.6394 8.48C79.0074 8.528 79.3834 8.552 79.7674 8.552C80.0074 8.552 80.2314 8.544 80.4394 8.528C80.6634 8.512 80.8314 8.504 80.9434 8.504H81.0154C81.8314 7.368 82.7594 6.24 83.7994 5.12C84.8394 3.984 86.0474 3.032 87.4234 2.264C88.3354 1.752 89.2394 1.4 90.1354 1.208C91.0474 1 91.9194 0.896 92.7514 0.896C93.5994 0.896 94.3194 1.112 94.9114 1.544C95.5194 1.96 95.8234 2.52 95.8234 3.224C95.8234 4.056 95.3274 4.96 94.3354 5.936C93.3434 6.912 91.7994 7.784 89.7034 8.552C88.5354 8.984 87.2954 9.336 85.9834 9.608C84.6874 9.864 83.3994 9.968 82.1194 9.92C81.9114 9.92 81.6874 9.912 81.4474 9.896C81.2074 9.88 80.9514 9.848 80.6794 9.8C80.1034 10.68 79.5674 11.496 79.0714 12.248C78.5754 12.984 78.1034 13.568 77.6554 14C77.2554 14.384 76.8474 14.648 76.4314 14.792C76.0154 14.936 75.6634 15.008 75.3754 15.008ZM81.6154 8.432C82.7034 8.304 83.8394 8.08 85.0234 7.76C86.2234 7.44 87.3434 7.088 88.3834 6.704C90.3994 5.968 91.8474 5.224 92.7274 4.472C93.6234 3.704 94.0714 3.04 94.0714 2.48C94.0714 2.064 93.8874 1.76 93.5194 1.568C93.1514 1.376 92.7274 1.28 92.2474 1.28C91.6234 1.28 90.8954 1.376 90.0634 1.568C89.2474 1.744 88.4154 2.056 87.5674 2.504C86.3514 3.144 85.2554 4.008 84.2794 5.096C83.3034 6.168 82.4154 7.28 81.6154 8.432ZM89.9914 18.632C89.8794 18.632 89.8474 18.552 89.8954 18.392C89.9114 18.344 89.9194 18.28 89.9194 18.2C89.9194 17.88 89.6314 17.576 89.0554 17.288C88.4794 17.016 87.6714 16.8 86.6314 16.64C85.5914 16.464 84.3594 16.376 82.9354 16.376C82.0554 16.376 81.1994 16.416 80.3674 16.496C79.5354 16.56 78.7674 16.672 78.0634 16.832C77.5674 16.944 77.0314 17.088 76.4554 17.264C75.8954 17.44 75.3594 17.6 74.8474 17.744C74.3354 17.904 73.8954 17.984 73.5274 17.984C73.2874 17.984 73.0954 17.936 72.9514 17.84C72.7914 17.76 72.7114 17.592 72.7114 17.336C72.7114 16.968 72.9434 16.568 73.4074 16.136C73.8874 15.688 74.7034 15.312 75.8554 15.008C76.7994 14.736 77.6634 14.568 78.4474 14.504C79.2314 14.44 80.0154 14.408 80.7994 14.408C83.9834 14.408 86.3434 14.744 87.8794 15.416C89.4314 16.088 90.2074 16.944 90.2074 17.984C90.2074 18.048 90.2074 18.104 90.2074 18.152C90.2074 18.216 90.1994 18.288 90.1834 18.368C90.1674 18.544 90.1034 18.632 89.9914 18.632ZM91.6247 17.024C91.1287 17.024 90.7447 16.872 90.4727 16.568C90.2007 16.248 90.0647 15.84 90.0647 15.344C90.0647 14.88 90.1847 14.368 90.4247 13.808C90.6807 13.248 91.0807 12.68 91.6247 12.104C92.1847 11.496 92.8807 11.008 93.7127 10.64C94.5447 10.256 95.3367 10.064 96.0887 10.064C96.6967 10.064 97.2167 10.2 97.6487 10.472C98.0807 10.728 98.3687 11.056 98.5127 11.456C98.6887 11.456 98.9047 11.504 99.1607 11.6C99.4327 11.696 99.5687 11.872 99.5687 12.128C99.5687 12.304 99.4807 12.504 99.3047 12.728C99.1927 12.888 98.9927 13.128 98.7047 13.448C98.4327 13.768 98.1767 14.112 97.9367 14.48C97.7447 14.768 97.5927 15.04 97.4807 15.296C97.3687 15.536 97.3127 15.744 97.3127 15.92C97.3127 16.16 97.4327 16.28 97.6727 16.28C97.9447 16.28 98.3527 16.128 98.8967 15.824C99.4887 15.488 100.057 15.104 100.601 14.672C101.145 14.24 101.569 13.896 101.873 13.64C101.953 13.576 102.009 13.544 102.041 13.544C102.105 13.544 102.137 13.584 102.137 13.664C102.137 13.76 102.097 13.848 102.017 13.928C101.873 14.056 101.593 14.296 101.177 14.648C100.761 15 100.281 15.368 99.7367 15.752C99.2087 16.136 98.6887 16.448 98.1767 16.688C97.9207 16.8 97.6807 16.888 97.4567 16.952C97.2487 17 97.0567 17.024 96.8807 17.024C96.4487 17.024 96.1207 16.904 95.8967 16.664C95.6727 16.408 95.5607 16.08 95.5607 15.68C95.5607 15.52 95.5847 15.352 95.6327 15.176C95.6807 15 95.7367 14.824 95.8007 14.648L95.9687 14.24C95.5527 14.752 95.1367 15.184 94.7207 15.536C94.3047 15.872 93.8887 16.168 93.4727 16.424C93.1207 16.632 92.7847 16.784 92.4647 16.88C92.1607 16.976 91.8807 17.024 91.6247 17.024ZM92.3687 16.4C92.6567 16.4 93.0727 16.232 93.6167 15.896C94.1607 15.544 94.7927 15.008 95.5127 14.288C95.6087 14.192 95.7847 14.024 96.0407 13.784C96.3127 13.528 96.6007 13.248 96.9047 12.944C97.2087 12.624 97.4647 12.312 97.6727 12.008C97.8967 11.688 98.0087 11.424 98.0087 11.216C98.0087 10.912 97.7447 10.76 97.2167 10.76C96.7527 10.76 96.1927 10.944 95.5367 11.312C94.8967 11.664 94.2807 12.192 93.6887 12.896C93.0807 13.616 92.6327 14.24 92.3447 14.768C92.0727 15.28 91.9367 15.672 91.9367 15.944C91.9367 16.248 92.0807 16.4 92.3687 16.4ZM105.319 17.024C104.631 17.024 104.167 16.896 103.927 16.64C103.687 16.368 103.567 16.072 103.567 15.752C103.567 15.336 103.727 14.896 104.047 14.432C104.239 14.16 104.455 13.856 104.695 13.52C104.935 13.168 105.159 12.84 105.367 12.536C105.575 12.232 105.719 12.016 105.799 11.888C105.911 11.728 105.975 11.624 105.991 11.576C106.023 11.512 106.039 11.448 106.039 11.384C106.039 11.288 105.975 11.2 105.847 11.12C105.735 11.024 105.543 10.976 105.271 10.976C105.191 10.976 105.119 10.984 105.055 11C105.007 11 104.951 11 104.887 11C104.759 11 104.687 10.992 104.671 10.976L104.599 11.072C104.151 11.664 103.671 12.248 103.159 12.824C102.647 13.384 102.087 13.904 101.479 14.384C101.415 14.432 101.367 14.456 101.335 14.456C101.271 14.456 101.239 14.424 101.239 14.36C101.239 14.232 101.335 14.088 101.527 13.928C102.023 13.512 102.511 13.048 102.991 12.536C103.471 12.008 103.903 11.456 104.287 10.88C104.143 10.784 104.071 10.592 104.071 10.304C104.071 9.872 104.207 9.408 104.479 8.912C104.671 8.576 104.879 8.328 105.103 8.168C105.343 7.992 105.551 7.904 105.727 7.904C106.063 7.904 106.231 8.104 106.231 8.504C106.231 8.76 106.135 9.08 105.943 9.464C105.863 9.656 105.703 9.904 105.463 10.208C105.239 10.496 105.015 10.704 104.791 10.832C105.127 10.72 105.551 10.648 106.063 10.616C106.591 10.568 107.031 10.544 107.383 10.544C107.591 10.544 107.847 10.608 108.151 10.736C108.455 10.848 108.607 11.056 108.607 11.36C108.607 11.568 108.511 11.792 108.319 12.032C108.271 12.096 108.143 12.248 107.935 12.488C107.727 12.728 107.495 13.016 107.239 13.352C106.999 13.688 106.775 14.024 106.567 14.36C106.359 14.664 106.191 14.944 106.063 15.2C105.951 15.456 105.895 15.672 105.895 15.848C105.895 16.104 106.039 16.232 106.327 16.232C106.663 16.232 107.111 16.072 107.671 15.752C108.231 15.432 108.831 15.024 109.471 14.528C110.127 14.016 110.727 13.488 111.271 12.944C111.335 12.88 111.391 12.848 111.439 12.848C111.503 12.848 111.535 12.888 111.535 12.968C111.535 13.064 111.495 13.152 111.415 13.232C110.855 13.792 110.231 14.368 109.543 14.96C108.871 15.536 108.167 16.024 107.431 16.424C106.711 16.824 106.007 17.024 105.319 17.024ZM115.743 9.656C115.519 9.656 115.351 9.584 115.239 9.44C115.127 9.296 115.071 9.144 115.071 8.984C115.071 8.664 115.223 8.352 115.527 8.048C115.831 7.728 116.151 7.568 116.487 7.568C116.711 7.568 116.879 7.64 116.991 7.784C117.103 7.928 117.159 8.08 117.159 8.24C117.159 8.576 117.007 8.896 116.703 9.2C116.415 9.504 116.095 9.656 115.743 9.656ZM112.071 17.024C111.415 17.024 110.967 16.888 110.727 16.616C110.503 16.328 110.391 16.008 110.391 15.656C110.391 15.368 110.439 15.096 110.535 14.84C110.631 14.568 110.711 14.376 110.775 14.264C110.871 14.104 110.999 13.92 111.159 13.712C111.335 13.504 111.527 13.28 111.735 13.04C111.415 13.312 111.111 13.576 110.823 13.832C110.551 14.088 110.327 14.28 110.151 14.408C110.103 14.456 110.055 14.48 110.007 14.48C109.943 14.48 109.911 14.44 109.911 14.36C109.911 14.232 109.999 14.104 110.175 13.976C110.591 13.624 110.991 13.24 111.375 12.824C111.775 12.408 112.151 12.024 112.503 11.672C112.855 11.304 113.167 11.048 113.439 10.904C113.727 10.744 113.959 10.64 114.135 10.592C114.311 10.544 114.455 10.52 114.567 10.52C114.743 10.52 114.871 10.552 114.951 10.616C115.031 10.664 115.047 10.72 114.999 10.784C114.727 11.056 114.455 11.408 114.183 11.84C113.927 12.256 113.687 12.696 113.463 13.16C113.239 13.624 113.055 14.064 112.911 14.48C112.783 14.896 112.719 15.248 112.719 15.536C112.719 15.936 112.879 16.136 113.199 16.136C113.503 16.136 113.895 16 114.375 15.728C114.871 15.44 115.383 15.08 115.911 14.648C116.455 14.216 116.959 13.792 117.423 13.376C117.487 13.312 117.543 13.28 117.591 13.28C117.671 13.28 117.711 13.32 117.711 13.4C117.727 13.48 117.711 13.536 117.663 13.568C117.135 14.064 116.535 14.584 115.863 15.128C115.207 15.656 114.543 16.104 113.871 16.472C113.215 16.84 112.615 17.024 112.071 17.024Z"
            />
        </svg>
    );
}

export default About;