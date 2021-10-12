import {useEffect, useState} from "react";
import axios from "../common/axios"
import {Col, Container, Row, Spinner} from "react-bootstrap";
import NewsItem from "../components/news/NewsItem";
import {useTranslation} from "react-i18next";
import useError from "../common/hooks/useError";
import {useHistory} from "react-router-dom";

const NewsPage = () => {

    const {t} = useTranslation()
    const { addError } = useError();

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    const history = useHistory();

    useEffect(() => {

        setLoading(true)

        axios.get('/v1/posts')
            .then((response) => {
                console.log(response)
                setPosts(response.data['data'])
            }).catch(err => {
                if (err.response) {
                    addError("danger", err.response);
                } else if (err.request) {
                    addError("danger", "Unable to send request, the API might be down. Please try again later")
                } else {
                    addError("danger", "An unexpected error occurred, please try again later")
                }
                history.push("/")
            }).finally(() => {
                setLoading(false)
        })
    }, [addError, history])


    return (
        <Container>
            <Row>
                <Col xs>
                    <h1>{t('News')}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    {loading ? <Spinner animation="grow" /> : null}
                </Col>
            </Row>
            {posts.map((post) => {
                return (<NewsItem news={post} />)
            })}
        </Container>

    )
}

export default NewsPage