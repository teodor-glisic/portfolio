
import WorkItem from "./WorkItem";
import Accordion from 'react-bootstrap/Accordion';
import { nanoid } from "nanoid"
import { experience } from "../data/experience";
import { training } from "../data/training";
import TrainingItem from "./TrainingItem";

export default function Resume() {
    return (
        <>
            <main className="main-container" id="resume-container">



                <article>
                    <h2>Work Experience</h2>

                    <Accordion defaultActiveKey="0" className="accordion-container">
                        {experience.map((item) => {
                            return <WorkItem item={item} key={nanoid()} />
                        })}
                    </Accordion>
                </article>

                <article>
                    <h2>Training</h2>

                    <Accordion defaultActiveKey="1" className="accordion-container">
                        {training.map((item) => {
                            return <TrainingItem item={item} key={nanoid()} />
                        })}
                    </Accordion>
                </article>

                <article>
                    <h2>Documents</h2>

                </article>


            </main>
        </>
    )
}