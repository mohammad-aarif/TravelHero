import React from 'react';

const FooterImg = (props) => {
    const {img} = props.img;
    return (
        <div className="col-4">
            <div className="footer-img ">
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default FooterImg;