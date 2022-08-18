import { MediaDiv, Main } from './styledComponent';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './styles';
import Header from './Header';
import Slogun from './Slogun';
import ShowPostList from './ShowPostList';
import Footer from './Footer';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ShowPost from './ShowPost';
import WritePost from './WritePost';

const API_URL = 'https://reactapitest.pythonanywhere.com/api/';

function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeProvider theme={darkMode?darkTheme:lightTheme}>
        <GlobalStyles />
        <MediaDiv>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Slogun />
            <Routes>
              <Route
                path="/"
                element={ <ShowPostList
                apiUrl={API_URL} />}></Route>
              <Route path="/write" element={<WritePost />}></Route>
              <Route 
                path="/post/:postID" 
                element={<ShowPost />}>
              </Route>
            
            </Routes>

          </Main>
          <Footer />
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}

export default App;