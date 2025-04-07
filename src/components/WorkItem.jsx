import Accordion from 'react-bootstrap/Accordion';

export default function WorkItem(props) {
    return (
        <>
            <Accordion.Item eventKey={props.item.id}>
                <Accordion.Header>{props.item.company_name}</Accordion.Header>
                <Accordion.Body>
                    <table width="100%">
                        <tr><td><em>{props.item.position}</em></td><td style={{textAlign: "right",}}><em>{props.item.duration}</em></td></tr>
                    </table>
                    <ul>
                        {props.item.work_tasks.map((x) => {
                            return (
                                <li>{x}</li>
                            )
                        })}
                    </ul>

                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}