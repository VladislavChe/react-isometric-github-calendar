import './StickersBlock.css';
import { ReactComponent as Html } from '../../img/html.svg'
import { ReactComponent as Css } from '../../img/css3.svg'
import React from "react";
function StickersBlock () {
    const [active, setActive] = React.useState(-1)

    const stickersArr = [
        {
            name: 'html',
            img: <Html />
        },
        {
            name: 'css',
            img: <Css />
        },
        {
            name: 'css',
            img: <Css />
        },
        {
            name: 'css',
            img: <Css />
        },
        {
            name: 'css',
            img: <Css />
        },
        {
            name: 'css',
            img: <Css />
        },
        {
            name: 'css',
            img: <Css />
        },
        {
            name: 'css',
            img: <Css />
        },
        {
            name: 'css',
            img: <Css />
        },
        {
            name: 'css',
            img: <Css />
        },
        {
            name: 'css',
            img: <Css />
        },
        {
            name: 'css',
            img: <Css />
        },
        {
            name: 'css',
            img: <Css />
        },
        {
            name: 'css',
            img: <Css />
        },
        {
            name: 'css',
            img: <Css />
        },
        {
            name: 'css',
            img: <Css />
        },
        {
            name: 'css',
            img: <Css />
        },
        {
            name: 'css',
            img: <Css />
        },
        {
            name: 'css',
            img: <Css />
        },
        {
            name: 'css',
            img: <Css />
        }
    ]


    const handlerMouseLeave = () => {
        setTimeout(() => {
            setActive(-1)
        }, 1000);

    }

    const handlerClick = (i: number) => {
        setActive(i)
    }

    return (
        <div className='stickersBlock'>
            <div className="container">
                <h2 className="stickersBlock__title">Стикеры на крышке</h2>
                <ul className="stickersBlock__list">
                    {stickersArr.map((el, i) => (
                        <li key={i} onClick={() => handlerClick(i)} onMouseLeave={handlerMouseLeave} >
                            <div className={active === i ? 'flip-card flipping' : 'flip-card'}>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        {el.img}
                                    </div>
                                    <div className="flip-card-back">
                                        <h3>{el.name}</h3>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}

                </ul>
            </div>

        </div>
    )

}

export default StickersBlock;