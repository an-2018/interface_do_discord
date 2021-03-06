import styled from 'styled-components';

import {Props} from '.';

export const Button = styled.button<Props>`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0; // nao comprimir

    width: 48px;
    height: 48px;
    border-radius: 50%;

    margin-bottom: 8px;

    background-color: ${props => props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};

    position:relative;
    cursor:pointer;

    >img{
        width: 24px;
        height: 24px;
    }

    &::before{
        width:9px;
        height:49px;

        position: absolute;
        left: -17px;
        top: 0;//calc(100% - 4.5px);

        background-color: var(--white);
        border-radius: 50%;

        content: '';
        display: ${(props) => (props.hasNotifications ? 'inline' : 'none')};
    
    }

    &::after{

    }
    
    transition: border-radius .2s, background-color .2s;

    &.active,
    &:hover{
        border-radius:16px;
        background-color:${props => props.isHome ? 'var(--rocketseat)' : 'var(--discord)'};
    }
`;

