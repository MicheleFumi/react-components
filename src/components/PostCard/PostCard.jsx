import style from './card.module.css'
import Button from '../button/button.jsx'

export default function postCard() {

    return (

        <div className={style.blogCard}>
            <img src="https://image-placeholder.com/images/actual-size/600x400.png" alt="" />
            <div className={style.blogDescription}>
                <h3>Titolo del post</h3>
                <div className={style.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cumque ipsam nihil, ipsa debitis reiciendis in facere, cum et numquam aliquid modi error.
                    Iste aliquid eligendi nulla, fuga quis laboriosam!
                </div>
                <Button />
            </div>
        </div>

    )
}