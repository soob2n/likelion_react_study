import { MediaDiv, Main } from './styledComponent';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './styles';
import Header from './Header';
import Slogun from './Slogun';
import ShowPostList from './ShowPostList';
import Footer from './Footer';
import { useState } from 'react';


function App() {
  const initialPostList = [
    {id: 1, title: '게시판 공지사항', replCount: 1},
    {id: 2, title: '안녕하세요~', replCount: 2},
    {id: 3, title: '학보, 대학기자상 취재', replCount: 10},
  ]
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isPost, setIsPost]  = useState(false);
  const [postList, setPostList] = useState(initialPostList);

  const addPost = () => {
    setPostList((postList) => [
      ...postList, 
      {id:4, title: '친구하실분', repleCount: 21 },
    ]);
  };

  return (
    <>
      <ThemeProvider theme={darkMode?darkTheme:lightTheme}>
        <GlobalStyles />
        <MediaDiv>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Slogun />
            <ShowPostList 
              Loading={loading}
              isPost={isPost} 
              postList={postList}
              addPost={addPost}
            />
          </Main>
          <Footer />
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}

export default App;