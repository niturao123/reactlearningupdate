import '../styling.css/Tree.css'
export const Tree = () => {
    return (
        <div className='main-div'>
            <div>
                <img src="treeimg.png" alt="A tree and river image" />
            </div>
            <div>
                <h3 className="heading" onClick={() => handleClick(0)}>
                    How Can Aria Help Your Business
                </h3>
                {activeIndex === 0 && (
                    <p className="para">
                        At Aria solutions, we've taken the consultancy concept one step further by offering a full-service management organization with expertise.
                    </p>
                )}
            </div>
        </div>

    )

}