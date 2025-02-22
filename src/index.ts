export type TimelineItemType = {
    id: number;
    title: string;
    subTitle?: string;
    description?: string[];
    time?: string;
};

export type TimelineVariant = 'left' | 'stacked';

export type TimelineItemTypeProject = {
    id: number;
    title: string;
    link?: string;
    description?: string[];
    githubLink?: string;
    githubPreview?: string;
};
