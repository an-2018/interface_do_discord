import React from 'react';
import {Button} from './styles';

import Logo from '../../assets/logo-rocketseat.svg';
import Sewage_logo from '../../assets/seweage-projet-logo.png';

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}

const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions
}) => {
    return (
        <Button 
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            className={selected? 'active':''}
        >
            {isHome && <img src={Sewage_logo} alt='Sewage_logo' />}
        </Button>
    );
};

export default ServerButton;