import Accordion from 'react-bootstrap/Accordion';

export default function TrainingItem(props) {
    return (
        <>
            <Accordion.Item eventKey={props.item.id}>
                <Accordion.Header>{props.item.institution}</Accordion.Header>
                <Accordion.Body>
                    <table width="100%">
                        <tr><td><em>{props.item.degree}</em></td><td style={{textAlign: "right",}}><em>{props.item.duration}</em></td></tr>
                    </table>
                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}