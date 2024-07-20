import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Section from '../Section/Section';
import Footer from '../Footer/Footer';

function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <Section 
                id="one" 
                title="Magna Etiam Lorem" 
                content="Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscin sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, faucibus non, congue vel, arcu, erisque hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida tristique. Nunc iaculis mi in ante." 
            />
            <Section 
                id="two" 
                title="Pellentesque adipis" 
                content="Cumsan mollis eros. Pellentesque a diam sit amet mi magna ullamcorper vehicula. Integer adipiscin sem. Nullam quis massa sit amet lorem ipsum feugiat tempus." image="/images/pic01.jpg" 
            />
            <Section 
                id="three" 
                title="Tempus Feugiat" 
                content="Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna lorem ullamcorper laoreet, lectus arcu." 
            />
            <Footer />
        </div>
    );
}

export default Home;

