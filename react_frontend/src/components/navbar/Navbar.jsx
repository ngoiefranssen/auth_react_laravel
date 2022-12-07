
export const Navbar = () =>{
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light navbar-fixed px-4" style={{ background:"#3b5998", justifyContent:"center"}}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">#</a>
                    <button class="navbar-toggler" type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" style={{ textDecoration:"with" }} href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                        </ul>
                        <button class="btn btn-outline-success " type="submit"><i class="fa fa-sign-in" aria-hidden="true"></i></button>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </div>
                </div>
            </nav>
        </>
       
    );
};