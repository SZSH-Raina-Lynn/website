import { Button, List, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { partners, info } from '../../utility/data';


export default function Footer () {
  return (
    <div className="fixed flex flex-col bg-[#D9D9D9] bottom-0 left-0 w-screen min-h-fit">
      <div className='flex flex-row px-4 py-8 justify-around items-start'>
      <div className="footer-grid">
        <Typography component="a" href="/partner" className="footer-title">合作伙伴</Typography>
        <List sx={{display: {xs:'none', md:'block'}}}>
          {partners.slice(0,5).map((company, i) =>
            <li key={i} className="text-[#2a2a2b] hover:text-white/90 font-light text-sm active:text-slate-800 active:font-medium">
              <a href={company.link}>{company.name}</a>
            </li>
          )}
          {partners.length > 5 ?
          <Button sx={{color:"primary.dark", fontWeight:500}} size="small" href='/partner'>更多...</Button>
           : null}
        </List>
      </div>
      <div className='footer-grid'>
        <Typography component={"a"} href="/info" className="footer-title">联系信息</Typography>
        <Stack className="info-stack" sx={{display: {xs:'none', md:'block'}}}>
          <Typography style={{fontSize:"small", color:"#2a2a2b"}}>{info[0].name}: {info[0].value}</Typography>
          <Stack direction="row" flexWrap={"wrap"} spacing={2}>
            <Stack direction={"column"}>
            {info.slice(1).map((item, i) =>
              <Typography key={i} style={{fontSize:"small", color:"#2a2a2b"}} component="span">{item.name}: {item.value}</Typography>)}
            </Stack>
            <Image src="/wechat-qr.png" alt="wechat qr code" width={100} height={100} style={{padding:"0.3rem"}}/>
        </Stack>
        </Stack>
      </div>
      </div>
      <div className='w-full fixed bottom-0 left-0 text-center'>
        <p className='font-extralight text-xs text-slate-700'>
        &copy; 2023 SZCC
        </p>
      </div>
    </div>
  )
}