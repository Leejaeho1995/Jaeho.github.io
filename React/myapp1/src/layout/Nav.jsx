import React from 'react'
import styled from 'styled-components'
const Navi = styled.nav`
    max-width:1300px;
    background-color:rgba(255,255,255,.65);
    margin:0 auto;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    overflow:hidden;
`;
const Li =styled.li`
    display:inline-block;
    margin:0 0.35em;
    padding:.5em 0;
    vertical-align:middle;
    font-size:.8em;
    color:rgba(0,0,0,.5);
`;
const A = styled.a`
    border:none;
    display:inline-block;
    height:2em;
    line-height:2em;
    padding:0 1.5em;
    border-radius:8px;
    box-shadow: inset 0 0 0 1px transparent;
    transition: font-size 0.2s ease;
    &:hover{
        background-color:#fff;
        box-shadow:none;

    }
`;
const Nav = () => {
  return (
    <Navi>
        <ul style={{margin:0, padding:0, textAlign:"center"}}>
            <Li>
                <A href="#">Introduction</A>
            </Li>
            <Li>
                <A href="#">First Section</A>
            </Li>
            <Li>
                <A href="#">Second Section</A>
            </Li>
            <Li>
                <A href="#">Get Started</A>
            </Li>
        </ul>
    </Navi>
  )
}

export default Nav