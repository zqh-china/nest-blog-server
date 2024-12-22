import { Controller, Get, ParseIntPipe, Query } from "@nestjs/common";
import { PostService } from "./post.service";
import { wrapperResponse } from "src/utils";
import { Public } from "../auth/public.decorator";

const publishLists = ['published', 'draft', 'archived', 'all_'];

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {}
    @Public()
      @Get('')
      async getAllArticles(
        @Query('publish_status') publish_status?: string, 
        @Query('page') page?: string, 
        @Query('size') size?: string) {
        if (!publishLists.includes(publish_status)) {
            return wrapperResponse(Promise.reject("不支持的操作类型"), "")
        }
        console.log(publish_status);
        
        publish_status ?? 'all_'
        page = page ?? '1';
        size = size ?? '4';
        return wrapperResponse(this.postService.findAll(publish_status, parseInt(page), parseInt(size)), "")
    }
}