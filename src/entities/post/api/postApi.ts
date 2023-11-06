import { baseApi } from "@/shared/api";
import { ReqGetPostDetailsDto, ResGetAllPosts, ResGetPostDetailsDto } from "../types/types";

export const postApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        posts: build.query<ResGetAllPosts, void>({
            query: () => ({
                url: '/posts'
            })
        }),
        postDetails: build.query<ResGetPostDetailsDto, ReqGetPostDetailsDto>({
            query: ({ id }) => ({
                url: `/post/${id}`
            })
        })
    })
})
export const { usePostDetailsQuery, usePostsQuery } = postApi