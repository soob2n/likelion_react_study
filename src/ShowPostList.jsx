import {
  PostSection,
  PostTitleDiv,
  PostTitle,
  PostListDiv,
  EachPostLi,
  PostLink,
  PostRepl,
  PagingSection,
  PagenumberDiv,
  LoadingDiv,
  LoadingImg,
} from './styledComponent';

import {
  faArrowsRotate,
  faPenToSquare,
  faLocationPin,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EachPost from './EachPost';

function ShowPostList({ isPost, loading, addPost, postList }) {
  return (
    <>
    <PostSection>
      <PostTitleDiv>
        <FontAwesomeIcon onclick={addPost} icon={faArrowsRotate}/>
        <PostTitle>익명게시판</PostTitle>
        <FontAwesomeIcon icon={faPenToSquare}/>
      </PostTitleDiv>
      <PostListDiv>
        {loading? (
          <LoadingDiv>
            <LoadingImg src={'./loading.svg'} />
          </LoadingDiv>
        ) : 
          isPost?(
            <LoadingDiv>아직 기록된 글이 없습니다</LoadingDiv>
          ):(
          <ul>
            {postList.map((element) => (
              <EachPost 
                key={element.id} 
                title={element.title} 
                replCount={element.replCount}
              />
            ))}
          </ul>
        )}     
      </PostListDiv>
    </PostSection>

    <PagingSection>
      <PagenumberDiv>
        <FontAwesomeIcon icon={faArrowLeft}/>
      </PagenumberDiv>
      <PagenumberDiv>2</PagenumberDiv>
      <PagenumberDiv>
        <FontAwesomeIcon icon={faArrowRight}/>
      </PagenumberDiv>
    </PagingSection>
    </>
  )
}

export default ShowPostList