import React from 'react'
import MobileNav from '../components/MobileNav';
import Navbar from '../components/Navbar';

import Preloader from '../components/Preloader';
import Hero from '../components/Hero';

function Blog() {
    return (
        <>
            <MobileNav />
            <Navbar />
            <Hero />
            <div class="section search-result-wrap">
                <div class="container">
                    <div class="row posts-entry">
                        <div class="col-lg-8">

                        </div>
                    </div>
                </div>
            </div>
                            {/* <Preloader /> */}
        </>
    )
}

export default Blog;
