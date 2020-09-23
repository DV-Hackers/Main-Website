import React from 'react'

function MeetingLinks(props) {
    let returnHtml = [<div id={"subtitle"}>Links</div>]
    for (let i = 0; i < props.links.size(); i++) {
        if (props.links[i] == "")
            continue;

        returnHtml.push(<div className={"meeting-link"}>&#8226;&nbsp;<a href={props.links[i]}>{props.links[i]}</a></div>)
    }
    console.log(returnHtml)
    return <div className={"meeting-links"}>{returnHtml}</div>
}

function Schedule(props) {
    let returnHtml = [<div id={"subtitle"}>Schedule</div>]
    for (let i = 0; i < props.data.size(); i++) {
        if (props.data[i] == "")
            continue;

        returnHtml.push(<div className={"meeting-data"}>&#8226;&nbsp;{props.data[i]}</div>)
    }

    console.log(returnHtml)
    return <div className={"meeting-schedule"}>{returnHtml}</div>
}

function Notes(props) {
    let returnHtml = [<div id={"subtitle"}>Notes</div>]
    for (let i = 0; i < props.data.size(); i++) {
        if (props.data[i] == "")
            continue;

        returnHtml.push(<div className={"meeting-data"}>&#8226;&nbsp;{props.data[i]}</div>)
    }

    console.log(returnHtml)
    return <div className={"meeting-notes"}>{returnHtml}</div>
}

export default class MeetingInfo extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className={"meeting-container"}>
                <div className={"meeting-title"}>{this.props.title}</div>
                <div className={"meeting-body"}>
                    { this.props.links ? <MeetingLinks links={this.props.links}/> : "" }
                    { this.props.schedule ? <Schedule data={this.props.schedule}/> : "" }
                    { this.props.notes ? <Notes data={this.props.notes}/> : "" }
                </div>
            </div>
        )}

}
