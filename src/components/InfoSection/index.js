import React from 'react';
import { InfoContainer, InfoWrapper,InfoBg,Heading,InfoContent} from './InfoElements'
import Navbar from '../Navbar';

const InfoSection = ({}) => {
  return (
    <>
    <Navbar/>
    <InfoContainer id='home' >
           <InfoBg>
            {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4'/> */}
           </InfoBg>
           <InfoContent>
            <Heading>Turing Machine Visualisation</Heading>
            <InfoWrapper>
              Design the Turing Machine based on the problem and test it with the required Strings
            </InfoWrapper>
            </InfoContent>
        </InfoContainer>
    </>
  )
}

export default InfoSection

/*
import { Button } from '../ButtonElement'; 

BtnWrap,

<BtnWrap>
<Button to = 'home' 
smooth={true}
duration={500}
spy={true}
exact="true"
offset={-80}
primary={primary ? 1 : 0}
dark = {dark ? 1 : 0}
dark2={dark2 ? 1 : 0}
>{buttonLabel}</Button>
</BtnWrap> */