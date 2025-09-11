import Title from './Title';
import TimelineItem from './TimelineItem';
import timeline from '../data/timeline';
import React from "react";

function Timeline() {
    return (
        <div className="flex flex-col md:flex-row justify-center my-20">
            <div className="w-full md:w-7/12">
                <Title children={"Timeline"} id={"timeline_id"}/>
                {timeline.map(item => (
                    <TimelineItem
                        year={item.year}
                        title={item.title}
                        duration={item.duration}
                        details={item.details}
                    />
                ))}
            </div>
        </div>
    )
}

export default Timeline;