import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/01E873C686EF29975B3760568B754A514BF7D4B5C3E8F89B180C8753EE1D0D78/scale?width=1440&aspectRatio=1.78&format=jpeg" />
      </Background>

      <ImageTitle>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E83AAB9620FC72320D8CBA8D5E1421635AC4C961B08ADC3F691B031A24D7CD38/scale?width=1440&aspectRatio=1.78&format=png" />
      </ImageTitle>
      <KeepLeft>
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
          2018 • 7m • Family, Fantasy, Kids, Animation
        </SubTitle>

        <Description>
        A Chinese mom who’s sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.
        </Description>
      </KeepLeft>
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

  img {
    width:100%;
    height:100%;
    object-fit: contain;
  }
`

const KeepLeft = styled.div`
  max-width: 874px;
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
`