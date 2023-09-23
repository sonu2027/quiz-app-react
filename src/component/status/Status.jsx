function Status({ status }) {
    return (

        status == true ?
            (
                <div id="para">
                    <p id="status">Status:Right</p>
                </div>
            ) :
            (
                <div id="para">
                    <p id="status">Status:Wrong</p>
                </div>
            )
    )
}

export default Status
