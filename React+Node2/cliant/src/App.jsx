import {Routes, Route, Link} from 'react-router-dom'
import Index from './pages/Index'
import About from './pages/About'
import MyPage from './pages/MyPage'
import Product from './pages/Product'
import NotFound from './pages/NotFound'

function App() {

  /* React Router
  1. 설치 : npm i react-router-dom
  2. main.jsx 로 이동해서 App을 BrowserRouter로 감싸기 ★ 필수 ★   
  3. 길을 만드는 작업! Routes, Route 
    - Routes : 여러 경로 (Route) 를 감싸서 그 중 조건에 맞는 경로 하나만 렌더링 해줌 
                과거에는 Switch 라는 이름으로 문법을 사용했다 
    - Route : 경로 작성 (길)
              필수 속성 path, element 
              path => 만약 나한테 이렇게 요청하면~
              element => 이거 보여줄게~                
   */

  return (
    <>
      <h1>React Router</h1>
      {/* 페이지별 이동이 가능한 헤더를 만들자 ( Link ) */}
      {/* 'about' -> about페이지
          'mypage' -> mypage 페이지
          'product' -> product 페이지 
      */}

        <Link to='/about'>About</Link>
        <span> | </span>
        <Link to='/mypage'>MyPage</Link>
        <span> | </span>
        <Link to='/product'>Product</Link>
      

      <Routes>
        <Route path='/' element={<Index></Index>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/mypage' element={<MyPage></MyPage>}></Route>
        <Route path='/product/:num' element={<Product></Product>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  )
}

export default App
