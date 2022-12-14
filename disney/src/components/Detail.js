import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import db from "../firebase";
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { async } from '@firebase/util';


function Detail() {
  const { id } = useParams();

  const [ detailData, setDetailData ] = useState({});
  

  useEffect(()  => {
    const fetchData = async () => {
      const docRef  = doc(db, 'movies', id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setDetailData(docSnap.data())
        // console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }

    fetchData()

  }, [id]);

  return (
    <Container>
      <Background>

        <img alt={detailData.title} src={detailData.backgroundImg} />
      </Background>
      <ImageTitle>
        <img src={detailData.titleImg} />
      </ImageTitle>
        <Controls>
          
          <PlayButton>
            <img src="/images/play-icon-black.png" />
            <span>Play</span>
          </PlayButton>

          <TrailerButton>
            <img src="/images/play-icon-white.png" />
            <span>Trailer</span>
          </TrailerButton>

          <AddButton>
            <span>+</span>
          </AddButton>

          <GroupWatchButton>
            <img src="/images/group-icon.png" />
          </GroupWatchButton>

        </Controls>

        <SubTitle>
          {detailData.subTitle}
        </SubTitle>

        <Description>
        {detailData.description}
        </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
  min-height: calc(100vh-70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`

const Background = styled.div`
  position: fixed;
  top:0;
  left:0;
  bottom: 0;
  right:0;
  z-index: -1;
  opacity: 0.8;

  img {
    width:100%;
    height: 100%;
    object-fit: cover;
  }

`

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin-top: 60px;

  img {
    width:100%;
    height:100%;
    object-fit: contain;
  }
`

const Controls = styled.div`
  display:flex;
  align-items: center;
  gap: 20px;
`

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  display:flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border:none;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover{
    background: rgba(198, 198, 198);
  }

`

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(249, 249, 249);

  &:hover{
    background: rgba(198, 198, 198, 0.5);
  }
`

const AddButton = styled.button`
  width: 44px;
  height:44px;
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border:2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor:pointer;
  span{
    font-size: 30px;
    color: white;
  }
`

const GroupWatchButton = styled(AddButton)`
  background: rgb(0,0,0)
`


const SubTitle = styled.div`
  color:rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 760px;
`