




const tripTime = (arr) => {
    let result = {
        avgSpeedLimits: [],
        segmentTimes: [],
        totalTime: 0,
        stopNames: []
    }
    for (let i = 0; i < arr.length; i++) {
        let totalDistance = 0;
        let avgSpeedLimit = 0;
        let totalTime = 0;
        for (let j = 0; j < arr[i].speedLimits.length; j++) {
            let segment = arr[i].speedLimits[j];
            totalDistance += segment.distance;
            avgSpeedLimit += (segment.distance * segment.speedLimit);
            totalTime += (segment.distance / segment.speedLimit) * 60;
        }
        avgSpeedLimit = avgSpeedLimit / totalDistance;
        result.stopNames.push(arr[i].name);
        result.avgSpeedLimits.push(avgSpeedLimit);
        result.segmentTimes.push(Math.round(totalTime / 60));
        result.totalTime += (Math.round(totalTime / 60));
    }
    console.log(result);
    }


const stops = [
    {
        name: `Gus's Gas`, 
        speedLimits: [
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 97,
                speedLimit: 65
            },
            {
                distance: 72,
                speedLimit: 70
            },
            {
                distance: 25,
                speedLimit: 50
            }
        ], 
        traffic: 12
    }, 
    {
        name: `Halle's House of Pancakes`, 
        speedLimits: [
            {
                distance: 36,
                speedLimit: 50
            },
            {
                distance: 141,
                speedLimit: 75
            }
        ], 
        traffic: 0
    }, 
    {
        name: `Jake's Great Shakes`, 
        speedLimits: [
            {
                distance: 100,
                speedLimit: 75
            },
            {
                distance: 84,
                speedLimit: 70
            },
            {
                distance: 20,
                speedLimit: 75
            }
        ], 
        traffic: 30
    }, 
    {
        name: `Luna's Lunch Counter`, 
        speedLimits: [
            {
                distance: 3,
                speedLimit: 35
            },
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 20,
                speedLimit: 65
            },
            {
                distance: 85,
                speedLimit: 75
            },
            {
                distance: 3,
                speedLimit: 65
            },
            {
                distance: 5,
                speedLimit: 55
            }
        ], 
        traffic: 7
    }, 

    {
        name: `Ralph's Restaurant`,
        speedLimits: [
        {
        distance: 12,
        speedLimit: 55
        },
        {
        distance: 50,
        speedLimit: 65
        },
        {
        distance: 28,
        speedLimit: 55
        }
        ],
        traffic: 15
        },
        {
        name: `Samantha's Sweet Shop`,
        speedLimits: [
        {
        distance: 15,
        speedLimit: 35
        },
        {
        distance: 25,
        speedLimit: 45
        },
        {
        distance: 40,
        speedLimit: 55
        },
        {
        distance: 20,
        speedLimit: 35
        }
        ],
        traffic: 20
        },
        {
        name: `Tim's Tasty Treats`,
        speedLimits: [
        {
        distance: 25,
        speedLimit: 55
        },
        {
        distance: 15,
        speedLimit: 45
        },
        {
        distance: 10,
        speedLimit: 35
        },
        {
        distance: 30,
        speedLimit: 55
        }
        ],
        traffic: 10
        },
        {
        name: `Victors Vegetarian Cafe`,
        speedLimits: [
        {
        distance: 10,
        speedLimit: 55
        },
        {
        distance: 20,
        speedLimit: 65
        },
        {
        distance: 30,
        speedLimit: 75
        },
        {
        distance: 40,
        speedLimit: 85
        }
        ],
        traffic: 5
        },
        {
        name: `Wendy's Waffle House`,
        speedLimits: [
        {
        distance: 20,
        speedLimit: 55
        },
        {
        distance: 30,
        speedLimit: 45
        },
        {
        distance: 40,
        speedLimit: 35
        },
        {
        distance: 10,
        speedLimit: 25
        }
        ],
        traffic: 18
        }





]


tripTime(stops)
