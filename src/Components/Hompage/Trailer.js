import React from 'react';


const Trailer = () => {
    return (
        <div>
            {/* <!--  video --> */}
            <video playsinline autoplay muted loop class="trailer">
                <source src="../../asset/picture/trailer.mp4" type="video/mp4"></source>
            </video>
        </div>
    )
}

export default Trailer;