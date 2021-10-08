import {Container} from "react-bootstrap";


const Footer = (props) => {

    return (
        <footer className={"footer py-3 text-muted fixed-bottom"}>
            <Container>
                <p className="float-start">&copy; My Company </p>
                <p className="float-end">Daniel Herrmann</p>
            </Container>
        </footer>
    )
}

export default Footer