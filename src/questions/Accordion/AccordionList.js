import React, { Component } from 'react'
import Accordion from './Accordion'

export class AccordionList extends Component {
    render() {
        return (
            <div>
                <div>AccordionList</div>
                <Accordion title = {'Chus lo mera'} description = {'Muh me lelo mera'}/>
                <Accordion title = {'Gaand mara lo'} description = {'Kholke mara lo apni gaand wwwww22wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'}/>
                <Accordion title = {'CHut mara lo'} description = {'Kholke mara lo apni chut wwwww22wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'}/>
            </div>
        )
    }
}

export default AccordionList