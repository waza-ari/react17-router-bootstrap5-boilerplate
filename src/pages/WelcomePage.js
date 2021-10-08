const Content = () => {
    return (
        <div className="site-index">

            <div className="bg-light p-5 rounded-start m-3">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra
                    attention to featured content or information.</p>
                <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger
                        container.</p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>

            <div className="body-content">

                <div className="row">
                    <div className="col-lg-4">
                        <h2>Heading</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur.</p>

                        <p><a className="btn btn-outline-secondary" href="http://www.yiiframework.com/doc/">Yii
                            Documentation &raquo;</a></p>
                    </div>
                    <div className="col-lg-4">
                        <h2>Heading</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur.</p>

                        <p><a className="btn btn-outline-secondary" href="http://www.yiiframework.com/forum/">Yii Forum &raquo;</a>
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <h2>Heading</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur.</p>

                        <p><a className="btn btn-outline-secondary" href="http://www.yiiframework.com/extensions/">Yii
                            Extensions &raquo;</a></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Content