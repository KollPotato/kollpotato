declare namespace App {
}

declare type Theme = "light" | "dark"

declare interface Project {
    name: string
    description: string
    preview: {
        url: string,
        alt: string
    }
    tags: string[]
    links: { text: string, href: string }[]
}