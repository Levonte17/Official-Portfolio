
function Comment({ comment, createdTime }) {
    return (
      <div className='comment'>
        <h3>"{comment.body}"</h3>
      </div>
    );
  }
  
  export default Comment;
  