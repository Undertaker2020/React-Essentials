import React, {useState} from 'react';
import TabButton from "./TabButton";
import {EXAMPLES} from "../data";
import Section from "./Section";

export default function Examples() {
    const [tabContent, setTabContent] = useState('')
    const handlerClick = (selectedButton) => {
        console.log(selectedButton)
        return setTabContent(selectedButton);
    }
    return (
        <Section title="Examples" id="examples">
            <menu>
                <TabButton isSelected={tabContent === 'components'}
                           onSelect={() => handlerClick('components')}>Components</TabButton>
                <TabButton isSelected={tabContent === 'jsx'}
                           onSelect={() => handlerClick('jsx')}>JSX</TabButton>
                <TabButton isSelected={tabContent === 'props'}
                           onSelect={() => handlerClick('props')}>Props</TabButton>
                <TabButton isSelected={tabContent === 'state'}
                           onSelect={() => handlerClick('state')}>State</TabButton>
            </menu>
            {!tabContent ? <p>Please select a topic.</p> :
                <div id="tab-content">
                    <h3>{EXAMPLES[tabContent].title}</h3>
                    <p>{EXAMPLES[tabContent].description}</p>
                    <pre>
                                <code>
                                    {EXAMPLES[tabContent].code}
                                </code>
                            </pre>
                </div>}
        </Section>
    );
}