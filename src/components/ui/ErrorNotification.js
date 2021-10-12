import {Alert} from "react-bootstrap";
import useError from "../../common/hooks/useError";


function ErrorNotification() {

    const { error, removeError } = useError();

    const handleClose = () => {
        removeError()
    }

    if (error) {
        return (
            <Alert variant={error.severity} onClose={handleClose} dismissible>
                {error.message}
            </Alert>
        )
    } else {
        return null
    }


}

export default ErrorNotification