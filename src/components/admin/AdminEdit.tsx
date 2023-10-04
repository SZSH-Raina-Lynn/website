"use client"
import { Box, Tabs, Tab} from "@mui/material";
import TabPanel from "./TabPanel";
import React, { useState } from "react"
import Post from "./Post";
import Change from "./Change";
import Partner from "./Partner";
import { Email } from "@mui/icons-material";
import { logOut } from "../../lib/api";
import { useRouter  } from "next/navigation";
const labels = ["发布新内容","更换首页内容", "管理合作伙伴","群发邮件" ]
const elements = [<Post key={0} />, <Change key={1}/>, <Partner key={2}/>, <Email key={3}/>]

export default function AdminEdit () {
  const [value, setValue] = useState(0);
  const route = useRouter()
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const handleLogOut = async () => {
    console.log('logout clicked')
    const res = await logOut();
    if (res === 'logout') {
      route.push('/admin')
    }

  }
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          {labels.map((item, i) => <Tab key={i} label={item} {...a11yProps(i)} />)}
          <Tab label="登出" onClick={handleLogOut}/>
        </Tabs>
      </Box>
      {labels.map((item, i) => <TabPanel key={i} value={value} index={i}>{elements[i]}</TabPanel>)}
    </Box>
  )
}