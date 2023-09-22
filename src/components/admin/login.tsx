"use client"
import { Container, Box, Button, FormControl, InputLabel, InputAdornment,IconButton, InputBase, Typography } from "@mui/material";
import { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { logIn } from "@/lib/api";
import { useRouter } from "next/navigation";
export default function Login() {
  const [admin, setAdmin] = useState<Record<string, string>>({email:"", pw:""})
  const [inputError, setError] = useState<Record<string,boolean>>({email:false, pw:false})
  const [showPw, setShow] = useState<boolean>(false)
  const route = useRouter()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError({email:false, pw:false})
    if (!admin.email.length) {
      setError({...inputError, email:true})
    }
    if (!admin.pw.length) {
      setError({...inputError, pw:true})
    }
    if (admin.email.length && admin.pw.length){

      //send request to login api
      const res = await logIn(admin.email, admin.pw)
      console.log('res login fe:', res)
      if (res === 'success') {
        console.log(admin)
        route.push('/admin/edit')
        setAdmin({email:"", pw:""})
      }
    }

  }
  return (
    <div className="text-center pt-6">
      <h1 className="text-3xl">管理员登陆</h1>
      <div style={{height:'60vh', display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="admin_email">管理员邮箱</label>
          <input
            id="admin_email"
            type="text"
            placeholder="Admin Email"
            className="h-8 mb-2"
            onChange={(e) => setAdmin({...admin, email: e.target.value})}
            value={admin.email}
          />
          <label htmlFor="admin_pw">密码</label>
          <div className="relative">
            <input
              id="admin_pw"
              placeholder="Password"
              className="h-8 mb-4"
              type={showPw ? 'text' : 'password'}
              onChange={(e) => setAdmin({...admin, pw: e.target.value})}
              value={admin.pw}
            />
            <div
              aria-label="toggle password visibility"
              onClick={() => setShow(!showPw)}
              className="cursor-pointer h-8 absolute inset-y-0 right-0 pr-3 flex items-center text-sm"
            >
              {showPw ? <VisibilityOff /> : <Visibility />}
            </div>
          </div>
          <div className="text-center">
            <input
              aria-label="login_submit"
              className="font-extralight text-slate-50 border w-full bg-blue-900 hover:opacity-80 active:opacity-100 shadow-sx border rounded-md px-4 py-1 text-m my-2 focus:outline-none focus:ring-2"
              type="submit"
              value="登陆"
            />

          </div>
        </form>

      </div>
      </div>
  )
}
