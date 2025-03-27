export default function Dates() {
    const currentYear = new Date().getFullYear();
    let dates = {
        "months": {
            "short": [
                {
                    id:"1",
                    value:"JAN",
                },
                {
                    id:"2",
                    value:"FEB",
                },
                {
                    id:"3",
                    value:"MAR",
                },
                {
                    id:"4",
                    value:"APR",
                },
                {
                    id:"5",
                    value:"MAY",
                },
                {
                    id:"6",
                    value:"JUN",
                },
                {
                    id:"7",
                    value:"JUL",
                },
                {
                    id:"8",
                    value:"AUG",
                },
                {
                    id:"9",
                    value:"SEP",
                },
                {
                    id:"10",
                    value:"OCT",
                },
                {
                    id:"11",
                    value:"NOV",
                },
                {
                    id:"12",
                    value:"DEC",
                }
            ],
            "long": [
                {
                    id:"1",
                    value:"January",
                },
                {
                    id:"2",
                    value:"February",
                },
                {
                    id:"3",
                    value:"March",
                },
                {
                    id:"4",
                    value:"April",
                },
                {
                    id:"5",
                    value:"MAY",
                },
                {
                    id:"6",
                    value:"June",
                },
                {
                    id:"7",
                    value:"July",
                },
                {
                    id:"8",
                    value:"August",
                },
                {
                    id:"9",
                    value:"September",
                },
                {
                    id:"10",
                    value:"October",
                },
                {
                    id:"11",
                    value:"November",
                },
                {
                    id:"12",
                    value:"December",
                }
            ]
        },
        "days": [
            {
                id:1,
                value:1
            },
            {
                id:2,
                value:2
            },
            {
                id:3,
                value:3
            },
            {
                id:4,
                value:4
            },
            {
                id:5,
                value:5
            },
            {
                id:6,
                value:6
            },
            {
                id:7,
                value:7
            },
            {
                id:8,
                value:8
            },
            {
                id:9,
                value:9
            },
            {
                id:10,
                value:10
            },
            {
                id:11,
                value:11
            },
            {
                id:12,
                value:12
            },
            {
                id:13,
                value:13
            },
            {
                id:14,
                value:14
            },
            {
                id:15,
                value:15
            },
            {
                id:16,
                value:16
            },
            {
                id:17,
                value:17
            },
            {
                id:18,
                value:18
            },
            {
                id:19,
                value:19
            },
            {
                id:20,
                value:20
            },
            {
                id:21,
                value:21
            },
            {
                id:22,
                value:22
            },
            {
                id:23,
                value:23
            },
            {
                id:24,
                value:24
            },
            {
                id:25,
                value:25
            },
            {
                id:26,
                value:26
            },
            {
                id:27,
                value:27
            },
            {
                id:28,
                value:28
            },
            {
                id:29,
                value:29
            },
            {
                id:30,
                value:30
            },
            {
                id:31,
                value:31
            }
        ],
        "year": []
    }

    for(let i=currentYear-18; i>=1969;i--){
        let year = {
            id:i,
            value:i
        }
        dates.year.push(year)
    }
    return dates;
}
