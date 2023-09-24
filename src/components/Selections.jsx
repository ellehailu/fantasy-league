// display that weeks selected drafts by the user

// connect to weekly draft button in the header

function Selections(){
    return(
        <div className="selectionContainer">
            <p>These are your weekly selection</p>
            <ul>
                <li>
                    - first contestant 
                </li>
            </ul>
            {/* <ul className="selectionList">
                <li className="selectionPhoto"><img src="https://cdn1.edgedatg.com/aws/v2/abc/BachelorinParadise/person/4292042/e00e354fe7bce194bba130edb606b033/1600x640-Q90_e00e354fe7bce194bba130edb606b033.jpg"/></li>
            </ul> */}
        </div>
    )
}

export default Selections;


// make api call to retrieve the available cast members for the selected season.
// could be displayed in a drop down menu
