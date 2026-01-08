import { getOwnPost } from "@/lib/ownPost"
import { notFound } from "next/navigation"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { format } from "date-fns"
import {ja} from "date-fns/locale"
import { auth } from "@/auth"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHightlight from "rehype-highlight"
import "highlight.js/styles/github.css"

type Params = {
    params: Promise<{ id: string }>
}

export default async function ShowPage({ params }: Params) {
    const session = await auth()
      const userId = session?.user?.id
    
      if(!session?.user?.email || !userId){
        throw new Error('不正なリクエストです')
      }
    const { id } = await params
    const post = await getOwnPost(userId,id)

    if (!post) {
        notFound()
    }
    return (
        <div className="container mx-auto px-4 py-8">
            <Card className="max-w-3xl mx-auto p-0">
                {post.topImage && (
                    <div className="relative w-full h-64 lg:h-96">
                        <Image
                            src={post.topImage}
                            alt={post.title}
                            fill
                            className="rounded-t-md object-cover"
                            sizes="100vw"
                            priority
                        />
                    </div>
                )}
                <CardHeader>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-sm text-gray-500">
                            投稿者：{post.author.name}
                        </p>
                        <time className="text-sm text-gray-500">
                            {format(new Date(post.createdAt), 'yyyy年MM月dd日', {locale: ja})}
                        </time>
                    </div>
                    <CardTitle className="text-3xl font-bold">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-5">
                    <div className="prose max-w-none">
                                    <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    rehypePlugins={[rehypeHightlight]}
                                    skipHtml={false}//HTMLスキップを無効化
                                    unwrapDisallowed={true}//Markdownの改行を解釈
                                    >{post.content}</ReactMarkdown>
                                </div>
                </CardContent>
            </Card>
        </div>
    )
}
