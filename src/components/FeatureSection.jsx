
import React from 'react';
import './css/FeatureSection.css';

const FeatureSection = () => {
    const features = [ 
        {
            icon: '🌎',
            title: 'All Over Bangladesh Shipping',
            details: [
                'Inside Dhaka - 80 Taka',
                'Outside Dhaka - 120 Taka',
                'Inside Rajshahi City - 60 Taka'
            ]
        },
        {
            icon: '🧵',
            title: 'Best Quality',
            details: [
                '180+ GSM 100% cotton Fabric',
                'with premium DTF print. 100%',
                'wash and color guarantee.'
            ]
        },
        {
            icon: '🏷️',
            title: 'Best Offers',
            details: [
                'Buy our premium black t-shirts in',
                'more them 30% discount.',
                'Production partners logo added.'
            ]
        },
        {
            icon: '🔒',
            title: 'Secure Payments',
            details: [
                'Just pay your delivery cost and',
                'confirm your order today to get',
                'our best collections.'
            ]
        }
    ];

    return <>
    <div className="feature-section">
            <div className="feature-container">
                {features.map((feature, index) => (
                    <div key={index} className="feature-box">
                        <div className="feature-icon">{feature.icon}</div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <div  className="feature-details">
                            {feature.details.map((detail, i) => (
                                <p key={i}>{detail}</p>
                            ))}
                        </div >
                    </div>
                ))}
            </div>
        </div>
        <div className="space"></div>
    </>
};

export default FeatureSection;
