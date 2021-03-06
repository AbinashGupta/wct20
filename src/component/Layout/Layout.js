import React from 'react';

import Auxi from '../../hoc/auxi';
import classes from './Layout.css';

const layout = ( props ) => (
    <Auxi>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxi>
);

export default layout;