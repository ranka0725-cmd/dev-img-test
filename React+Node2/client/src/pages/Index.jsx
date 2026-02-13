import React from 'react'
import {Link} from 'react-router-dom'

const Index = () => {
  /* Link 컴포넌트
    - 웹페이지에서는 링크 이동 시, a태그를 보통 사용함 
    - 하지만 a태그는 클릭 시 페이지를 새로 불러오기 때문에 SPA 인 리액트에 적합하지 않음 
    - Link 컴포넌트를 대신 사용! 
    - History API 를 통해 브라우저 주소에 경로만 바꾸는 기능이 내장되어있음 
  */
  return (
    <div>
      Index
    <hr/>
    <Link to='/about'>About</Link>  
      
    </div>
  )
}

export default Index