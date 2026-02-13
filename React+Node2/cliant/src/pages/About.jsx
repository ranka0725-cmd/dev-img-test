import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  /* useNavigate 
    - 페이지 이동을 도와주는 React hook 
    - 만약 회원이라면 mypage로, 비회원이라면 main으로 이동하자     
  */

    const nav = useNavigate()
    let auth = true; 

  return (
    <div>
      About
      <hr></hr>
      <button onClick={()=>{
        auth ? nav('/mypage') : nav('/')
      }}>마이페이지로 이동</button>
      </div>
  )
}

export default About