import PostCard from './PostCard/PostCard'
import posts from '../data/post.js'


export default function AppMain() {

    return (


        <main>
            <div className="container-main">
                {posts.map(post => <PostCard key={post.id} data={post} />)}
            </div>





        </main >
    )
}