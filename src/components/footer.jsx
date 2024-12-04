import "./styles/footer.css";


function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="news-letter">
                    <h2>NEWSLETTER</h2>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <button className="btn btn-large btn-outline-danger">Sign-Up</button>
                </div>
                <div className="help">
                    <h2>HELP</h2>
                    <a href="">Order Status</a>
                    <a href="">Returns</a>
                    <a href="">FAQs</a>
                    <a href="">Military Dicounts</a>
                </div>
                <div className="contact">
                    <h2>CONTACT US</h2>
                    <a href="">damian.savage@sdgku.edu</a>
                    <a href="">+1(800) 867-5309</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
