import MainNavigation from "./MainNavigation";
import classes from '../css/Root.module.css'
import errorImage from '../images/error.jpeg';

function ErrorPage(){
    return(
    <>
        <MainNavigation/>
        <h1 className={classes.content}>
            <img src={errorImage} alt="ERROR"/>
            </h1>
    </> )
    
}

export default ErrorPage;