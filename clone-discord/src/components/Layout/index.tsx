import React from 'react';
import {Grid} from './styles';
import ServerList from '../ServerList'
const Layout : React.FC = () => {
    return (
        <Grid>
            <ServerList/>
            Hello
        </Grid>
    );
};

export default Layout;