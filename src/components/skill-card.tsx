/**
 * @author Amaan Lari
 * @copyright 2025 amaanlari
 * @license Apache-2.0
 */

type SkillCardProps = {
    imgSrc: string;
    label: string;
    desc: string;
    classes?: string;
};

const SkillCard = ({
                       imgSrc,
                       label,
                       desc,
                       classes
                   } : SkillCardProps) => {
    return (
        <div
            className={"flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group " + classes}>
            <figure
                className={"bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors"}>
                <img
                    src={imgSrc}
                    width={32}
                    height={32}
                    alt={label}
                />
            </figure>
            <div>
                <h3 className={"text-lg font-semibold"}>{label}</h3>
                <p className={"text-zinc-400 text-sm"}>{desc}</p>
            </div>
        </div>
    )
}

export default SkillCard;
