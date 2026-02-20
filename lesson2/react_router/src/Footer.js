import { useStoreState } from "easy-peasy";

const Footer = () => {
    const postCount = useStoreState(state => state.postCount)
  return (
    <footer className='Footer'>
        <h1>{postCount} Blog Posts</h1>
    </footer>
  )
}

export default Footer
