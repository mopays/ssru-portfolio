import moment from 'moment';
import './assets/css/App.css'
import ImageProfiles from './components/ImageProfiles'
import Title from './components/Title';
import { useState } from 'react';

function App() {

  const [hide, setHide] = useState(false);
  
  return (
    <>
      <div className="main">
        <div className="leftPort">
          <ImageProfiles images="/src/assets/imge/profile.jpg" />

          <Title title="สันติพงษ์ วรรัตน์ชัยกุล">
            <p>FullStack</p>
          </Title>


          <Title title="Contract">
            <p>{moment("2003/09/25").format("DD/MM/YYYY")}</p>

            <p style={{ display: hide ? 'none' : 'block' }}>tel: +66123123</p>
            <button onClick={() => setHide(!hide)}>{hide ? 'show' : 'hide'}</button>
            <p>Email: example@gmail.com</p>
            <p>www.example.com</p>
          </Title>

          <Title title="eduction">
            <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ </p>
            <p>มหาลัย</p>
          </Title>

        </div>

        <div className="rightPort">

          <Title title="Profile">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, libero tempore voluptas at rem aut corporis magnam, quia animi consectetur deserunt ullam provident. Tempora quidem, velit officiis reiciendis ad culpa? </p>
          </Title>


          <Title title="workExpreience">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, libero tempore voluptas at rem aut corporis magnam, quia animi consectetur deserunt ullam provident. Tempora quidem, velit officiis reiciendis ad culpa? </p>
          </Title>

          <Title title="skill">
            <p>skill1</p>
            <p>skill1</p>
            <p>skill1</p>
          </Title>

        </div>
      </div>
    </>
  )
}


export default App
