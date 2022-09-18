import React, { useEffect } from 'react'
import styled from 'styled-components'
import { auth, provider} from '../firebase';
import { signInWithPopup, signOut  } from 'firebase/auth';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate  } from "react-router-dom";
import { 
  selectUserName, 
  selectUserPhoto, 
  setUserLoginDetails,
  setSignOutState,
} from '../features/user/userSlice'
import { async } from '@firebase/util';



function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate ();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if(user){
        setUser(user);
        navigate('/')
      }
    })
  }, [])

  const signIn = () => {
    signInWithPopup(auth, provider).then(res => {
      console.log(res)
      setUser(res.user);
      navigate('/')
    }).catch(err => {
      alert(err)
    });
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      }
    )
  )};
  
  const outUser = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(setSignOutState());
      navigate('/login')
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <Nav>
        <Logo src="images/logo.svg" />
        {!userName ?
        <LoginContainer>
          <Login onClick={ signIn }>Login</Login>
        </LoginContainer>
           :
          <>
            <NavMenu>
              <a>
                <img src="/images/home-icon.svg"></img>
                <span>Home</span>
              </a>

              <a>
                <img src="/images/search-icon.svg"></img>
                <span>Search</span>
              </a>

              <a>
                <img src="/images/watchlist-icon.svg"></img>
                <span>Watcthlist</span>
              </a>

              <a>
                <img src="/images/original-icon.svg"></img>
                <span>Originals</span>
              </a>

              <a>
                <img src="/images/movie-icon.svg"></img>
                <span>Movies</span>
              </a>

              <a>
                <img src="/images/series-icon.svg"></img>
                <span>Series</span>
              </a>

          </NavMenu>
        
          <UserImg onClick={ outUser } src="images\my-image.jpg" />
          </>
          }
        

    

    </Nav>
  )
}

export default Header


const Nav = styled.nav`
    height:70px;
    background: #090b13;
    display:flex;
    align-items:center;
    padding: 0 36px;
    justify-content:space-between;
`

const Logo = styled.img`
    width:80px;
`

const NavMenu = styled.div`
  display:flex;
  flex: 1;
  margin-left: 20px;
  align-items:center;

    a {
      display:flex;
      align-items:center;
      padding: 0 12px;
      cursor:pointer;

      img {
        height: 20px;
      }

      span {
        font-size: 13px;
        letter-spacing: 1.42px;
        text-transform: uppercase;
        position:relative;

        &::after {
          content: "";
          height: 2px;
          background: white;
          position:absolute;
          left:0;
          right:0;
          bottom:-6px;
          opacity:0;
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          transform: scaleX(0);
        }

      }

      &:hover {
        span::after {
          opacity:1;
          transform:scaleX(1)
        }

      }

    }

  @media (max-width: 768px) {
    display:none;
  }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius:50%;
    cursor:pointer;
`

const LoginContainer = styled.div`
  display:flex;
  flex:1;
  justify-content: end;
`

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  text-transform: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 250ms ease 0s;
  cursor:pointer;
  
  &:hover{
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`