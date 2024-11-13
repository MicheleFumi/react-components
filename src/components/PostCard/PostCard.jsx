import style from './card.module.css'
import Button from '../button/button.jsx'


export default function postCard({ data }) {

    return (

        <div className={style.blogCard}>
            <img src={data.image} alt="" />
            <div className={style.blogDescription}>
                <h3>{data.title}</h3>
                <div className={style.description}>
                    {data.content}
                </div>
                {data.tags}
                <Button />

            </div>
        </div>

    )
}