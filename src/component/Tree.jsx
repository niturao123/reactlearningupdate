import { useState } from 'react';
import '../styling.css/Tree.css'    
export const Tree = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle activeIndex
    };
    return (
        <div className='main-div'>
            <div>
                <img className='treeImg' src="treeimg.png" alt="A tree and river image" />
            </div>
            <div>
                <h2>Accelerate Business Growth To Improve Revenue Numbers</h2>
                <h3 className="heading" onClick={() => handleClick(0)}>
                    How Can Aria Help Your Business
                </h3>
                {activeIndex === 0 && (
                    <p className="para">
                        At Aria solutions, we've taken the consultancy concept one step further by offering a full-service management organization with expertise.
                    </p>
                )}
                <h3 className="heading" onClick={() => handleClick(1)}>
                    Great Strategic Business Planning
                </h3>
                {activeIndex === 1 && (
                    <p className="para">
                        Aria partners with businesses to business growth and development ideas including environment analysis, plan execution, and evaluation.
                    </p>
                )}
                <h3 className="heading" onClick={() => handleClick(2)}>
                    Online Marketing Campaigns
                </h3>
                {activeIndex === 2 && (
                    <p className="para">
                        An awesome online marketing plan won't save your bad product, but paired with a good product, the sky is the limit for what can be achieved.
                    </p>
                )}
            </div>
        </div>

    )

}