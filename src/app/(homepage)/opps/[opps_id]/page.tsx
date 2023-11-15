"use client"
import { getOneNews } from "@/lib/api"
import { NewsType } from "@/utility/types"
import { convertTimestamp } from "@/utility/functions"
import React, { useEffect, useState } from "react"

export default function Page ({ params }: { params: { opps_id: string } }) {

  const [isScrolled, setScrolled] = useState(false)

  const toggleScrolled = () => {
    document.body.scrollTop > 200 ? setScrolled(true) :setScrolled(false)
  }
  const goTop = () => {
    isScrolled && document.body.scrollTo({top:0,behavior:'smooth'})
  }
  useEffect(() => {
    //add eventlistener to window
    document.body.addEventListener("scroll", toggleScrolled, true);
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      document.body.removeEventListener("scroll", toggleScrolled, true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="flex flex-col items-center min-h-screen">
    <div className="flex flex-col justify-center items-center p-2 md:m-4 max-w-[960px]" id="top">
      {/* {article.content.length ?
      <div className="p-4 md:m-6 w-full md:w-3/4 flex flex-col justify-between">
        <div>
        <h1 className="text-3xl font-bold text-center mb-8">{article.title}</h1>
        <div dangerouslySetInnerHTML={{__html: article.content}} />
        <div className="text-right text-sm font-light mt-2 text-slate-400">作者：{article.author}</div>
        {article.created_time &&
        <div className="text-right text-sm font-light mt-2 text-slate-400">编辑于{convertTimestamp(article.created_time)}</div>
        }
        </div>
        <div className="bottom-20 flex flex-row justify-around items-center mt-16">
          {isScrolled && <button className='py-1 px-6' onClick={goTop}>回到顶部</button>}
          <button className="py-1 px-6"><a href="/articles">返回列表</a></button>
        </div>
      </div>
      :
      <h1 className="mt-16">正在加载，请等待...</h1>
      } */}

    </div>
    <div className='w-full bottom-0 left-0 text-center'>
        <p className='font-extralight text-xs text-slate-700'>
        &copy; 2023 SZCC
        </p>
      </div>
    </div>
  )
}