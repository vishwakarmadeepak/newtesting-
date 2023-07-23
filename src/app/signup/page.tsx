import Link from 'next/link'
import {useRouter} from "next/navigation"
import React from 'react'
import {axios} from "axois"


function page() {
  const[user,setUser]=React.useState({
    email:"",
    password:"",
    username:""
  })

  return (
    <div>page</div>
  )
}

export default page