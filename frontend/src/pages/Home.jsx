import Navbar from '../components/Navbar';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../App.css"



function Home (){
    return (
        <div>
            {/*Carousel*/}
            <section className="carousel-section" style={{ marginTop:'2rem'}}>
                <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} centerMode>
                    <div>
                        <img src="/images/cyber3.jpg" alt="Cybersecurity image 3"/>
                        <p className="legend">Total Protection</p>
                    </div>
                    <div>
                        <img src="/images/cyber2.jpg" alt="Cybersecurity image 1"/>
                        <p className="legend">Secure Infrastructure</p>
                    </div>
                    <div>
                        <img src="/images/cyber1.jpg" alt="Cybersecurity image 2"/>
                        <p className="legend">24/7 Monitory</p>
                    </div>
                </Carousel>
            </section>
            

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

            {/*SERVICES*/}
            <section id="services" className="section">
                <h2>SERVICES</h2>
                <p>We offer cybersecurity solution that can adapt to your needs: 24/7 monitory, data protection, network protection and more.</p>
                <p className="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula ex at vehicula egestas. Nulla vitae nulla sodales, tincidunt dui eget, condimentum arcu. Phasellus dui enim, efficitur vitae odio vitae, tristique maximus diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque iaculis finibus nisl a pellentesque. Cras sed fermentum justo. Vivamus laoreet lacus eu semper ultrices. Nam mollis metus quam, non viverra lorem luctus sed.

                Cras tempus mattis felis. Cras commodo quam nec magna interdum, ut mattis lorem vehicula. Sed pharetra, lectus ut convallis eleifend, massa leo gravida erat, eget eleifend nulla mauris quis ex. Phasellus vel faucibus est, et ornare purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec blandit nibh ut commodo auctor. Donec placerat laoreet accumsan. Aliquam venenatis vehicula faucibus. Maecenas vel placerat tellus. Maecenas id ante augue. Morbi id arcu elit. In hac habitasse platea dictumst.

                Mauris ac eros vel arcu fermentum sagittis sit amet ac libero. Ut interdum lacus sit amet ex varius, porta eleifend lectus suscipit. Sed volutpat dolor nec purus aliquam consectetur. Suspendisse in maximus mi. Nulla quis lectus blandit, facilisis dui a, tincidunt turpis. Aenean iaculis eu nunc ut mollis. Praesent egestas lacus ipsum, id vestibulum leo tristique eget. Ut aliquam tortor a tortor rhoncus interdum. Proin dignissim libero in hendrerit blandit. Vestibulum laoreet, tellus id malesuada tempus, turpis ligula faucibus lorem, eget vehicula libero odio a massa. Maecenas gravida turpis vel est porttitor, nec bibendum leo ullamcorper.

                Morbi cursus est at placerat porta. Donec in erat quis arcu fringilla vehicula ut nec dui. Donec nec finibus mi. Nulla eleifend consectetur imperdiet. Sed egestas urna scelerisque, facilisis lacus nec, dignissim tortor. Etiam quis tristique velit. Maecenas dictum auctor varius. Duis quis neque rhoncus, tempor purus sit amet, posuere orci.

                Etiam cursus eros quam, eget placerat diam volutpat sed. Cras tincidunt odio id ligula sollicitudin vestibulum. Fusce porta interdum enim non volutpat. Proin egestas, enim a suscipit pellentesque, justo arcu mattis nulla, ut scelerisque lorem sem sit amet odio. Suspendisse a metus congue, cursus ante ac, tincidunt mauris. Maecenas vulputate eu neque vitae tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit ligula sed leo ornare blandit ut at odio. Vivamus hendrerit, tellus eu commodo efficitur, metus enim varius odio, consectetur fringilla erat lectus sed nibh.

                Generated 5 paragraphs, 387 words, 2619 bytes of Lorem Ipsum</p>
            </section>

            {/*CONTACT*/}
            <section id="contact">
                <h2>Contact us</h2>
                <p>Send us a email:cybershield@cybershield.com or by phone at the 0800-cybershield</p>
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