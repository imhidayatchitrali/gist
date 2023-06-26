import Octicon from 'react-octicon';
import moment from 'moment/moment';

const Gist = ({ gist }) => {
    const getilesName = () => {
        if (gist.files) {
            return Object.keys(gist.files).map(key => {
                return (
                    gist.files[key].filename
                )
            })
        }
    }


    return (
        <>
            <div style={{ width: "40%", margin: "20px auto" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div
                        style={{
                            width: "50%",
                            height: "auto",
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        <img
                            src={gist.owner.avatar_url}
                            style={{
                                verticalAlign: "middle",
                                width: 40,
                                height: 40,
                                borderRadius: "50%",
                                marginRight: 5
                            }}
                            alt="Avatar"
                            className="avatar"
                        />
                        <div
                            style={{ fontSize: 14, color: "rgb(58, 127, 255)", fontWeight: 700 }}
                        >
                            {gist.owner.login}
                        </div>
                    </div>
                    <div
                        style={{
                            width: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "end"
                        }}
                    >
                        <div
                            style={{
                                fontSize: 14,
                                color: "rgb(58, 127, 255)",
                                fontWeight: 500,
                                marginRight: 10,
                                display: "flex",
                                alignItems: "center"
                            }}
                        >
                            <Octicon style={{ marginRight: "5px" }} name="code" />
                            1 Files
                        </div>
                        <div
                            style={{
                                fontSize: 14,
                                color: "rgb(58, 127, 255)",
                                fontWeight: 500,
                                marginRight: 10,
                                display: "flex",
                                alignItems: "center"
                            }}
                        >
                            <Octicon style={{ marginRight: "5px" }} name="repo-forked" />
                            Forks
                        </div>
                        <div
                            style={{
                                fontSize: 14,
                                color: "rgb(58, 127, 255)",
                                fontWeight: 500,
                                marginRight: 10,
                                display: "flex",
                                alignItems: "center"
                            }}
                        >
                            <Octicon style={{ marginRight: "5px" }} name="comment" />

                            Comments
                        </div>
                        <div
                            style={{
                                fontSize: 14,
                                color: "rgb(58, 127, 255)",
                                fontWeight: 500,
                                marginRight: 10,
                                display: "flex",
                                alignItems: "center"
                            }}
                        >
                            <Octicon style={{ marginRight: "5px" }} name="star" />
                            Stars
                        </div>
                    </div>
                </div>
                <br />
                <div style={{ display: "flex", alignItems: "center" }}>
                    Created at: {moment(gist.created_at).format("MM/DD/YYYY")} &nbsp; Last updated: {moment(gist.updated_at).format("MM/DD/YYYY")}
                </div>
                <br />
                <div style={{ display: "flex", alignItems: "center", fontSize: 15, fontWeight: "bold" }}>
                    {gist.description}
                </div>
                <br />
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        color: "rgb(58, 127, 255)",
                        marginBottom: "20px",
                        marginLeft: "10px"
                    }}
                >
                    {getilesName().map((e, i) => {
                        return (
                            <div key={i} style={{ padding: "5px" }}>
                                <Octicon name="file" />
                                {e}
                            </div>
                        )
                    })
                    }
                </div>
                <hr style={{
                    height: "1px", backgroundColor: "#ccc", border: "none"
                }} />
            </div >

        </>
    )

}

export default Gist

