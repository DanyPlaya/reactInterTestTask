export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export type ReqGetPostDetailsDto = Pick<Post, 'id'>
export type ResGetPostDetailsDto = Post

export type ResGetAllPosts = Post[]
