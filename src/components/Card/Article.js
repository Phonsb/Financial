import React from 'react'
import { Button, Card } from 'antd';

const Article = (props) => {
    const { Meta } = Card;
    const openPage = () =>{
        const newWindow = window.open(props.link, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    return (
        <div style={{ margin: 15 }}>
            <Card
                hoverable
                style={{ width: 500 }}
                cover={<img alt="example" src={props.img} />}
                onClick={()=>openPage()}
            >
                <Meta description={props.describtion} />
            </Card>
        </div>
    )
}

export default Article;
