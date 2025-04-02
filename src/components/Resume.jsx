
import WorkItem from "./WorkItem";
import Accordion from 'react-bootstrap/Accordion';
import {nanoid} from "nanoid"
import { experience } from "../data/experience";

export default function Resume() {
    return (
        <>
            <main className="main-container" id="resume-container">



                <article>
                    <h2>Work Experience</h2>

                    <Accordion defaultActiveKey="0" className="accordion-container">
                        {experience.map((item) => {
                            return <WorkItem item={item} key={nanoid()}/>
                        })}
                    </Accordion>
                </article>

                {/* <article>
                    <h2>Formation</h2>

                    <Accordion defaultActiveKey="1" className="accordion-container">
                        {[8, 9].map((x) => {
                            return <WorkItem eventKey={x} key={x} />
                        })}
                    </Accordion>
                </article> */}

                
            </main>
        </>
    )
}