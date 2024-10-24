import {CORE_CONCEPTS, EXAMPLES} from "./data"
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import {useState} from "react";

function App() {
    const [tabContent, setTabContent] = useState('')
    const handlerClick = (selectedButton) => {
        console.log(selectedButton)
        return setTabContent(selectedButton);
    }
    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((item, index) => (
                            <CoreConcept
                                key={index}
                                {...item}
                            />
                        ))}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton isSelected={tabContent === 'components'} onSelect={() => handlerClick('components')}>Components</TabButton>
                        <TabButton isSelected={tabContent === 'jsx'} onSelect={() => handlerClick('jsx')}>JSX</TabButton>
                        <TabButton isSelected={tabContent === 'props'} onSelect={() => handlerClick('props')}>Props</TabButton>
                        <TabButton isSelected={tabContent === 'state'} onSelect={() => handlerClick('state')}>State</TabButton>
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
                </section>
            </main>
        </div>
    );
}


export default App;
