import { EachPostLi, PostLink, PostRepl } from './styledComponent';
import { useNavigate } from 'react-router-dom';

import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function EachPost({ title, postID }) {
  const navigate = useNavigate();

  const goPost = () => {
    navigate(`${'/post/' + postID}`)
  }
  return (
    <EachPostLi onClick={goPost}>
      <div>
        <FontAwesomeIcon icon={faLocationPin} />
        <PostLink>{ title }</PostLink>
      </div>
    </EachPostLi>
  );
}

export default EachPost