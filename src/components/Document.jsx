export default function Document(props) {
    return (
        <>
            <div>
                <iframe src={props.data} type="application/pdf" width="100%" height="600px"></iframe>
            </div>
        </>
    )
}