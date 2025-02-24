/**
 * @author Amaan Lari
 * @copyright 2025 amaanlari
 * @license Apache-2.0
 */
import {
    Timeline,
    TimelineDescription,
    TimelineHeader,
    TimelineItem,
    TimelineSubTitle,
    TimelineTime,
    TimelineTitle
} from "@/components/timeline.tsx";
import {TimelineItemType, TimelineItemTypeProject} from "@/index.ts";
import {Link} from "react-router-dom";


const experiences: TimelineItemType[] = [
    {
        id: 1,
        title: 'Software Developer Intern',
        subTitle: 'Viral Fission',
        description: [
            "Designed architecture of the notification system using Redis and Kafka, to improve the performance by replacing inefficient cron-based monitoring.",
            "Enhanced API error handling by integrating Global Exception Handler and custom exceptions, simplifying integration for mobile developers.",
            "Developed the corporate website backend with CMS features for content updates, improving admin usability.",
            "Revamped the code with coding best practices, including environment-specific configuration management with YAML/Properties files."
        ],
        time: 'Jul 2024 – Dec 2024',
    },
    {
        id: 2,
        title: 'Open Source Collaborator',
        subTitle: 'Oppia',
        description: [
            "Automated data seeding for dev testing in the local server via the admin dashboard, reducing setup time from 5 minutes to a few seconds.",
            "Removed obsolete feature flags and migrated components to the Angular router, streamlining the codebase."
        ],
        time: 'Nov 2023 – Sep 2024',
    }
];

const projects: TimelineItemTypeProject[] = [
    {
        id: 1,
        title: 'Blogger Hub',
        link: '', // No subtitle provided
        description: [
            "Built RESTful APIs using Spring Boot for blog management and user operations.",
            "Designed Redis-based OTP storage and delivery with Gmail SMTP.",
            "Implemented role-based access control and JWT authentication (access and refresh tokens).",
            "Stored blog content in Markdown format and integrated Cloudinary for image uploads.",
            "Deployed on Azure and conducted endpoint testing with Postman."
        ],
        githubLink: 'https://github.com/amaanlari/blogger-hub/',
        githubPreview: "https://opengraph.githubassets.com/e5b213f65ae0a8871db338ff71431bd83f913ddb90ae2e9e3f9a29ba154e0b7c/amaanlari/blogger-hub"
    },
    {
        id: 2,
        title: 'Canteen Connect',
        link: '', // No subtitle provided
        description: [
            "Major team project; built and deployed an MVP of a real-time food ordering system.",
            "Created a user portal website using React and a mobile app using Flutter.",
            "Designed a simple backend for food ordering with integrated payment functionality.",
            "Implemented token-based pickup verification for seamless operations.",
            "Deployed the backend to enable takeaway orders, minimal user experience for ordering, and token sharing with the admin (canteen)."
        ],
        githubLink: 'https://github.com/amaanlari/canteen-connect-backend/',
        githubPreview: "https://opengraph.githubassets.com/b20b648964453031b72339c80943b74f6966062b72c651b1dbf2b45334df1b9f/amaanlari/canteen-connect-backend"
    },
    {
        id: 3,
        title: 'Social Media API',
        link: '',
        description: [
            "Developed RESTful APIs for user profiles, posts, and comments using Spring Boot and MySQL.",
            "Secured APIs with JWT authentication and improved documentation with Swagger/OpenAPI."
        ],
        githubLink: 'https://github.com/amaanlari/social-media-rest-api',
        githubPreview: "https://opengraph.githubassets.com/4f4eb7afbe86f0d636974fa0bbfe2b1f1f8dc9678ced8b7cd811d627e47855de/amaanlari/social-media-rest-api"
    }
];

const Resume = () => {

    return (
        <div className={"w-full"}>
            <h2 className='text-3xl font-bold text-primary mt-3 md:mt-10'>Experience</h2>
            <Timeline className='mt-4 md:mt-8 md:ml-6 ml-1'>
                {experiences.map((item) => (
                    <TimelineItem key={item.id}>
                        <TimelineHeader variant={"ghost"}>
                            <TimelineTitle>{item.title}</TimelineTitle>
                            <TimelineSubTitle>{item.subTitle}</TimelineSubTitle>
                            <TimelineTime variant={"outline"}
                                          className={"justify-start border-0 pl-0"}>{item.time}</TimelineTime>
                        </TimelineHeader>
                        {item.description && (
                            <TimelineDescription>
                                <div className={"flex"}>
                                    <ul className={"ml-4 w-full text-primary"}>
                                        {item.description.map((desc, index) => (
                                            <li key={index} className={"list-item list-disc"}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            </TimelineDescription>
                        )}
                    </TimelineItem>
                ))}
            </Timeline>
            <h2 className='text-3xl font-bold text-primary mt-4 md:mt-10'>Projects</h2>
            <Timeline className='mt-3 md:mt-8 md:ml-6 ml-1 h-96'>
                {projects.map((item) => (
                    <TimelineItem key={item.id} className={""}>
                        <div className={"flex justify-between"}>
                            <div className={"flex-col md:w-3/4 md:me-3"}>
                                <TimelineHeader variant={"ghost"} className={""}>
                                    <TimelineTitle>{item.title}</TimelineTitle>
                                </TimelineHeader>
                                {item.description && (
                                    <TimelineDescription>
                                        <ul className={"m-4 text-primary"}>
                                            {item.description.map((desc, index) => (
                                                <li key={index} className={"list-item list-disc"}>{desc}</li>
                                            ))}
                                        </ul>
                                    </TimelineDescription>
                                )}
                            </div>
                            <figure className={"hidden md:flex"}>
                                <Link to={item.githubLink || "/"} target={"_blank"}>
                                    <img src={item.githubPreview} alt="Placeholder" width={300} height={200}
                                         className={"rounded-2xl"}/>
                                </Link>
                            </figure>
                        </div>
                    </TimelineItem>
                ))}
            </Timeline>
        </div>
    )
};

export default Resume;
