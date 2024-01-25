enum socialMedia {
    VK, Telegram
}
type socialCardProps = {
    icon: socialMedia, 
    text: string,
    href: string,
}

export {socialMedia}

export type {
    socialCardProps
}