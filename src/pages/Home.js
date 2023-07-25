import { Fragment } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
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
            <h3>TOURS</h3>
            <ListGroup>
                {tourList.map(tour => (
                    <ListGroup.Item>
                        <span>{tour.date}</span>
                        <span>{tour.place}</span>
                        <span>{tour.concertVenue}</span>
                        <Button>BUY TICKETS</Button>

                    </ListGroup.Item>

                ))}
            </ListGroup>
        </Fragment>
    )

};
export default Home;