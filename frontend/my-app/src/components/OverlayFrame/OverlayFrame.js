import React, { Component } from 'react';


import './OverlayFrame.css';

import Snowflake from './Snowflake';

class OverlayFrame extends Component {
    state = {
        id: 0,
        snowflakes: []
    }
    
    constructor(props) {
        super(props);
        this.floatList = [ 
            // ....... 30 diff
            "float--10-20",
            "float-5-35",
            "float-20-50",
            "float-35-65",
            "float-50-80",
            "float-65-95",
            "float-80-110",
            // ....... 20 diff
            "float--10-10",
            "float-0-20",
            "float-10-30",
            "float-20-40",
            "float-30-50",
            "float-40-60",
            "float-50-70",
            "float-60-80",
            "float-70-90",
            "float-80-100",
            "float-90-110",
            // ....... 10 diff
            "float--15--5",
            "float--5-5",
            "float-5-15",
            "float-15-25",
            "float-25-35",
            "float-35-45",
            "float-45-55",
            "float-55-65",
            "float-65-75",
            "float-75-85",
            "float-85-95",
            "float-95-105"
        ];
    }


    componentDidMount() {
        const self = this;
        self.createFlake(50); 
        setTimeout(function() {
            self.createFlake(50);
        }, 15000);
    }

    createFlake = async (count) => {
        const self = this;
        let id = self.state.id;
        const flakeList = self.state.snowflakes;
        let trimmedList = self.floatList.slice();

        Array.from({length: count}, (v, k) => k+1).forEach(function(item, i) {
            
        });

        for(let i = 0; i < count; i++) {
            let refreshList = await self.asynchronousAddition(self, id++, flakeList, trimmedList);
            if(refreshList) trimmedList = self.floatList.slice();
            self.setState({
                id : id,
                snowflakes: flakeList
            });
        }
    };

    asynchronousAddition = (self, id, flakeList, trimmedList) => {
        return new Promise((resolve) => {
            const horizontalPosition = self.getHorizontalPosition(trimmedList);
            let refreshList = false;
            flakeList.push({
                id: id,
                leftPos: trimmedList[horizontalPosition],
                floatDuration: self.getFloatDuration(),
                icon: self.getIcon(),
                size: self.getClassNameForSize(),
                rotationDuration: self.getRotateDuration()
            });
            
            trimmedList.splice(horizontalPosition, 1);
            if(trimmedList.length === 0) {
                refreshList = true;
            }
            setTimeout(function() {
                resolve(refreshList);
            }, 500);
        });
        
    }

    getIcon = () => {
        const iconList = ["faStarOfLife", "faDharmachakra", "faSnowflake"];
        const iconInd = Math.floor(Math.random() * (iconList.length - 0) + 0);
        return iconList[iconInd];
    }

    getClassNameForSize = () => {
        const sizeList = ["flake-size-s", "flake-size-m", "flake-size-l"];
        const sizeInd = Math.floor(Math.random() * (sizeList.length - 0) + 0);
        return sizeList[sizeInd];
    }

    getFloatDuration = () => {
        // 10 - 40 all even numbers
        const durationInd = Math.floor(Math.random() * (20 - 5) + 5) * 2;
        return durationInd;
    };

    getRotateDuration = () => {
        // 4 - 20 all even numbers
        const durationInd = Math.floor(Math.random() * (10 - 2) + 2) * 2;
        return durationInd;
    }

    getHorizontalPosition = (trimmedList) => {
        return Math.floor(Math.random() * (trimmedList.length - 0) + 0);
    };

    addAnimation = () => {
        // going left - going right
        // 5 step falling speed
        // 3 step rotating speed
        // 3 step size
        // 3 types of stars
        // translate - (L-R) different percentage.
        return "rotate";
    }

    render() {
        return (
            <div className="overlay-frame">
                {this.state.snowflakes.map(snowflake => (
                    <Snowflake 
                        key={snowflake.id}
                        snowflake={snowflake}
                    />
                ))}
            </div>
        )
    }

}

export default OverlayFrame;