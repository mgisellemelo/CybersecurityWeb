import Navbar from '../components/Navbar';


function Home (){
    return (
        <div>

            {/* HERO*/}
            <section className= "hero">
                <div>
                    <h2>Taking good care of your data</h2>
                    <p>
                        Good and trusted solution in cybersecurity for your company.
                    </p>
                    <a href="/register">
                        <button>Start now</button>
                    </a>
                </div>
            </section>


            {/* FOOTER */}
            <footer className="footer">
                <div className="container">
                <p>&copy; 2025 CyberShield Security. Todos los derechos reservados.</p>
                </div>
            </footer>           

        </div>
    )
}

export default Home;