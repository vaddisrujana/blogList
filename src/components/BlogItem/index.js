import './index.css'

const BlogItem = props => {
  const {blogsList} = props
  const {title, description, publishedDate} = blogsList
  return (
    <li className="list">
      <div className="back">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
      <hr />
    </li>
  )
}

export default BlogItem
