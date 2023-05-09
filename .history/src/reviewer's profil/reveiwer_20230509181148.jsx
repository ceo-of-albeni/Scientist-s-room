import "./reviewer.scss";

export default function Reviewer() {
    return (
        <>
            <section className="reviewer_section">
                <div className="reviewer_thema">
                CREATIVITY iS CONTAGIOUS, <p>pass it on</p> 
                </div>
                <div className="reviewer_user">
                    <div className="user_logo">@</div>
                    <div className="user_data">
                        <p>First name</p>
                        <p>Last name</p>
                        <p>email</p>
                    </div>
                </div>
                <div className="button_publish">
                    publish
                </div>
                <div className="table">
                    <table>
                        <tr>
                            <th>#</th>
                            <td>Publication title </td>
                            <td>Updated</td>
                            <td>Status</td>
                            <td>Accept</td>
                            <td>Reject</td>
                            <td>Submit</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Scientific and technological progress</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>ы</td>
                        </tr>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>Francisco Chang</td>
                            <td>Mexico</td>
                        </tr>
                    </table>
                </div>
            </section>
        </>
    )
}