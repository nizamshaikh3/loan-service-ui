import {Outlet} from'react-router-dom'
import MainNavigation from './MainNavigation';
import classes from '../css/Root.module.css';

function RootLayout(){
    return( <>
                <MainNavigation/>
                <main className={classes.content}>
                    <Outlet/>
                </main>
            </>
    )
}

export default RootLayout;