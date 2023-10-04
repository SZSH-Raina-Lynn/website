import { Typography, Stack } from "@mui/material"
import Image from "next/image"
import React from "react"
const info = [
  {name: "商会地址", value: "8100 Boone Blvd, Suite 230, Vienna, VA 22182, USA "},
  {name: "邮箱", value: "dcszcc.org@gmail.com"},
  {name: "微信", value:"690238933"}
]
export default function Page () {
  return (
    <div>
       <Typography>联系信息</Typography>
        <Stack className="info-stack" sx={{display: {xs:'none', md:'block'}}}>
          <Typography style={{fontSize:"small"}}>{info[0].name}: {info[0].value}</Typography>
          <Stack direction="row" flexWrap={"wrap"} spacing={2}>
            <Stack direction={"column"}>
            {info.slice(1).map((item, i) =>
              <Typography key={i} style={{fontSize:"small"}} component="span">{item.name}: {item.value}</Typography>)}
            </Stack>
            <Image src="/wechat-qr.png" alt="wechat qr code" width={100} height={100} style={{padding:"0.3rem"}}/>
        </Stack>
        </Stack>
    </div>
  )
}