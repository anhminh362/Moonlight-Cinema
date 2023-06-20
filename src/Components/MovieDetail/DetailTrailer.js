import { nodeName } from 'jquery';
import React from 'react';


const DetailTrailer = () => {
    return (
        <div>
            <div class="video-player" id="videoPlayer" style={{ display: "none" }}>
                <video width="100%" controls="" autoplay="" id="myVideo" src="https://youtu.be/gq2xKJXYZ80">
                    <source src="https://youtu.be/gq2xKJXYZ80"></source>
                </video>
                <ion-icon name="close-circle" class="close-btn md hydrated" onclick="stopVideo()" role="img"></ion-icon>
            </div>
        </div>
    )
}
export default DetailTrailer;