import React from 'react';

const Trailer = () => {
    return (
        <div>
            {/* <!--  video --> */}
            <video playsInline autoPlay muted loop className="trailer">
                <source src="video/trailer.mp4" type="video/mp4"></source>
            </video>
        </div>
    )
}

export default Trailer;