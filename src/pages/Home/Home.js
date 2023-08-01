import { Fragment } from 'react';
import classes from './home.module.css';
const Home = () => {
    const tourList = [
        {
            date: 'JUL 16',
            place: 'DETROIT,MI',
            concertVenue: 'DTE ENERGY MUSIC THEATRE'
        },
        {
            date: 'JUL 19',
            place: 'TORONTO,ON',
            concertVenue: 'BUDWEISER STAGE'
        },
        {
            date: 'JUL 22',
            place: 'BRISTOW,VA',
            concertVenue: 'JIGGY LUBE LIVE'
        },
        {
            date: 'JUL 29',
            place: 'PHOENIX,AZ',
            concertVenue: 'AK-CHIN PAVILION'
        },
        {
            date: 'AUG 2',
            place: 'LAS VEGAS,NV',
            concertVenue: 'T-MOBILE ARENA'
        },
        {
            date: 'AUG 7',
            place: 'CONCORD,CA',
            concertVenue: 'CONCORD PAVILION'
        },
    ]
    return (
        <Fragment>
            <div className={classes.title}>TOURS</div>
            <div>
                <ul className={classes.ul}>
                    {tourList.map(tour => (
                        <li className={classes.li}>
                            <div>
                        <span className={classes.item}>{tour.date}</span>
                        <span className={classes.item}>{tour.place}</span>
                        <span className={classes.item}>{tour.concertVenue}</span>
                                
                            </div>
                            <div>
                                <button className={classes.button}>BUY TICKETS</button>
                        </div>

                    </li>

                ))}
                </ul>
            </div>
        </Fragment>
    )

};
export default Home;