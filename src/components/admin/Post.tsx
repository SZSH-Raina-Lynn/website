
import { Button } from "@mui/material"
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import "./admin.css"
import React from "react"


export default function Post () {
  return (
    <div className="flex flex-col justify-center items-center">
      <form className="w-3/4 px-10 pt-4 flex-center flex-col">
        <div className="input_box">
          <label className="post_label">标题： </label>
          <input type="text" placeholder="标题" className="post_input"/>
        </div>
        <div className="input_box">
          <label>新闻日期：</label>
          <input type="date" className="post_input" placeholder="MM/DD/YYYY"/>
        </div>
        <div className="input_box">
          <label>标签： </label>
          <input type="text" placeholder="标签用空格隔开" className="post_input"/>
        </div>

        <div className="input_box mb-1">
          <label className="flex-center">是否标记为重要事件: </label>
          {['yes', 'no'].map((b, i) =>
            <div key={i} className="flex-center flex-row ml-2 cursor-pointer">
              <input id={b === 'yes'? "important" : "noimportant"} type="radio" value={b} />
              <label htmlFor={b === 'yes'? "important" : "noimportant"} className="m-1 ">{b === 'yes' ? '是' : '否'}</label>
            </div>
          )}
        </div>
        <p className="text-xs mb-4">*重要事件会显示在“关于我们”的时间轴上</p>
        <div className="input_box">
          <label className="flex-center">是否群发: </label>
          {['yes', 'no'].map((b, i) =>
            <div key={i} className="flex-center flex-row ml-2 cursor-pointer">
              <input id={b === 'yes'? "emailAll" : "noEmail"} type="radio" value={b} />
              <label htmlFor={b === 'yes'? "emailAll" : "noEmail"} className="m-1 ">{b === 'yes' ? '是' : '否'}</label>
            </div>
          )}
        </div>
        <div className="input_box">
          <label>上传图片： </label>
          <input type="file" placeholder="请选择文件" className="post_input"/>
        </div>
        <ReactQuill theme="snow" className="h-80 mt-4 mb-10 w-full"/>
      </form>
          <div style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'center'}}>
           <Button type="submit" variant="outlined" size="small" sx={{border:2, m:"1rem", px:'8rem'}}>发布</Button>
           <Button type="reset" variant="contained" size="small" sx={{border:2, m:"1rem", px: '8rem'}}>重置</Button>
          </div>

    </div>
  )
}