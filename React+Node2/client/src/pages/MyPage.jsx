import React from 'react'
import { Link } from 'react-router-dom'

const MyPage = () => {
  return (
    <div>
      MyPage 내가 쓴 글
      <div>
        <Link to='/product/1?type=popular'>
            [1] 캠핑 용품 거래하실분?
        </Link>
      </div>
      
      <div>
        <Link to='/product/2?type=new'>
            [2] 정보처리기사 스터디 하실 분?
        </Link>
      </div>
      
      <div>
        <Link to='/product/3'>
            [3] React 프로젝트 만드실 분?
        </Link>
      </div>
      
    </div>
  )
}

export default MyPage