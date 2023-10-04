import React from "react"
export default function Page ({ params }: { params: { article_id: string } }) {
  return (
    <div>
      单独文章页面, artile_id: {params.article_id}
    </div>
  )
}