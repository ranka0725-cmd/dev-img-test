import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Product = () => {


  /* useParams()
   - url의 파라미터 정보를 가져올 수 있음 
   - 물품의 고유한 ID 값을 설정하는데 적합, 왜? 하나만 가져올 수 있음 

    1. Route 작성하는 곳에서 path에 ':파라미터정보' 
    2. 사용하는 컴포넌트 
        const { 파라미터정보 } = useParams() 
    
    ex) 상품 페이지의 상품번호, 게시물 번호 .. etc 

  */
  const {num}= useParams()
  console.log('게시물 번호', num)

  /* useSearchParams() 
   - url의 물음표 뒤 쿼리값을 가져와서 사용 
   - 여러 값 사용 가능    

    ** useParams vs useSearchParams 비교!
    - useParams 는 하나만 사용할 수 있다.
      따라서, 그 컴포넌트가 가지고 있는 고유한 성질을 담는데 사용
      ex) 상품 고유번호, 게시물 고유번호 
    - useSearchParams는 쿼리에 입력만 가능하다면 여러개 사용이 가능하다 
      ex) 검색어, 상품의 상태, 인기글, 품절 상태 등등.. 

  */

   const [query, setQuery]= useSearchParams()
   console.log('게시물 유형', query.get('type'))

  return (
    <div>Product</div>
  )
}

export default Product