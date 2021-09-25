import React, { useEffect, useState } from 'react'
import { Button, Carousel } from 'antd'
import Article from '../Card/Article'


const data = [
    {
        title: 'test2',
        describtion: '5 "วิธีออมเงิน" ง่าย ๆ ที่คนเก็บเงินไม่เก่งก็ทำได้',
        link: 'https://www.moneybuffalo.in.th/saving-tips/saving-money',
        img: 'https://www.moneybuffalo.in.th/wp-content/uploads/2020/09/5%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%AD%E0%B8%AD%E0%B8%A1%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%9A%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%80%E0%B8%81%E0%B9%88%E0%B8%87%E0%B8%97%E0%B8%B3%E0%B9%84%E0%B8%94%E0%B9%89-web.jpg'
    },
    {
        title: 'test2',
        describtion: '10 แอปลงทุนที่ต้องมี ปี 2021 อัปเดตไว ไม่พลาดทุกการลงทุน',
        link: 'https://thomasthailand.co/investment/%E0%B9%81%E0%B8%AD%E0%B8%9B%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99/',
        img: 'https://thomasthailand.co/wp-content/uploads/elementor/thumbs/Artboard-1100-3-p20pu6oo7ay0tjdk1p0gxb86kjsw3qdeqjdzlrea7k.jpg'
    },
    {
        title: 'test2',
        describtion: 'เจียดมาได้เต็มที่เดือนละ 1,000 จะเริ่มออมหรือลงทุนอย่างไรดี ?',
        link: 'https://www.finnomena.com/devranger/1000-per-month/',
        img: 'https://www.finnomena.com/wp-content/uploads/2019/10/line-devranger-1000-web3.jpg'
    },
    {
    title: 'test',
        describtion: 'วิธี "หาเงิน 1 ล้านบาท" ภายใน 1 ปี ต้องทำยังไง ?',
        link: 'https://www.moneybuffalo.in.th/saving-tips/how-can-i-make-a-million-baht-in-a-year?fbclid=IwAR0VPIqElLXThHiP4mc-CmYoxxcFFoZfwmUWnpA8X2z-70sy0TMPHz3yzHI',
        img: 'https://www.moneybuffalo.in.th/wp-content/uploads/2016/09/%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%AB%E0%B8%B2%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%991%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%9A%E0%B8%B2%E0%B8%97%E0%B9%83%E0%B8%991%E0%B8%9B%E0%B8%B5-web-1.jpeg'
    },
    
    
]

const Home = () => {

    const [newData,setNewdata] = useState([])
    
    function onChange(a) {
        console.log(a);
    }
    const openPage = (link) => {
        const newWindow = window.open(link, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const contentStyle = {
        height: '500px',
        width: '1000px',
        margin: 'auto',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    useEffect(()=>{
        const filterData = data.filter((item)=> item.title == 'test2')
        console.log(filterData);
        setNewdata(filterData)
    },[])

    return (
        <div>
            <div > 

                <Carousel autoplay={true} afterChange={onChange}>
                    {
                        newData.map((item, index) => {
                            return <div key={index}>
                                <div onClick={() => openPage(item.link)} style={contentStyle}>
                                    <img src={item.img}></img>
                                </div>
                            </div>
                        })
                    }

                </Carousel>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', paddingLeft: 100, paddingRight: 100 }}>
                {data.map((item, index) => {
                    return <div key={index}>
                        <Article title={item.title} describtion={item.describtion} link={item.link} img={item.img}/>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Home;