export interface Test {
    message: string,
}

export interface PostShort {
    id: string,
    title: string,
    tags: string[],
    author: string,
    date: string,   // xx/xx/xx format
    description: string,
}