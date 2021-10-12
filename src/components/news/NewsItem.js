import {Card, Col, Row} from "react-bootstrap";

const NewsItem = (props) => {

    const news = props.news
    console.log(news)

    return (
        <Row className={"mt-4"}>
            <Col>
                <Card>
                    <Card.Header>{news.title}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {news.body}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default NewsItem