import moment from 'moment';
import './assets/css/App.css'
import ImageProfiles from './components/ImageProfiles'
import Title from './components/Title';
import {   useEffect, useState } from 'react';
import  axios  from 'axios';

const enpoint = 'https://sheetdb.io/api/v1/7zkskabi3lx7g';

const  App = () => {

  const [hide, setHide] = useState(false);
  const [data, setdata] = useState([]);

  const callAPi = async () =>{
    return axios.get(enpoint).then((response) => {
      const data = response.data
      setdata(data)
    })
  }
  console.log(data)

  useEffect( () =>{
    callAPi()
  }, [])
  
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
            <p>กำลังศึกษา ปริญญาตรีชั้นปีที่ 3 ณ มหาวิทยาลัยราชภัฎสวนสุนนันทา คณะเทคโนโลยีสารสนเทศ
มีประสบการณ์ในการฝึกฝนเขียนโค้ดด้วยภาษา phpPOD และมีความสนใจในการศึกษา jarvascript และ node JS เพิ่มเติม เพื่อเพิ่มทักษะให้หลากหลาย และสามารถนำความรู้ไปใช้ในตำแหน่ง web developer ได้อย่างมีประสิทธิภาพ </p>
          </Title>


          <Title title="workExpreience">
            <p>เกี่ยวกับ web ecommerce โดยการนำ3d เข้ามาอธิบายรายละเอียดสินค้า</p>
          </Title>
          <Title title="internshift">
            <p>:ปัจจุบันฝึกงานอยู่ที่บริษัท smart shift solution ตำเเหน่ง fullstack developer เริ้มฝึกงานตั้งเเต่ 3 พฤษจิกายนจนถึงปัจจุบัน</p>
          </Title>

          <Title title="skill">
            
            <ul>
              <li>html</li>
              <li>CSS</li>
              <li>PHP</li>
              <li>react</li>
              <li>nodejs</li>
              <li>java</li>
              <li>grails</li>
              <li>jarvascript</li>
            </ul>
          </Title>


        </div>
      </div>

      <div className="tables">
        <h2>ข้อมูลคนในห้อง</h2>
          {data.map((record) => 
          <div key={record.number}>

            <table>
              <tr>
                <th>รหัสนักศึกษา</th>
                <th>ชื่อนักศึกษา</th>
              </tr>
              <tr>
                <td> {record.number}</td>
                <td>{record.name}</td>
              </tr>
            </table>
           </div>
           )}
      </div>
    </>
  )
}


export default App
