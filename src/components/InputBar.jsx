import React from 'react'

function csvToJSON(data) {
    
    var data = './Data.csv';
    var lines = data.split("\n");
    var result = [];
    var headers;
    headers = lines[0].split(",");

    for (var i = 1; i < lines.length; i++) {
        var obj = {};

        if(lines[i] === undefined || lines[i].trim() === "") {
            continue;
        }

        var words = lines[i].split(",");
        for(var j = 0; j < words.length; j++) {
            obj[headers[j].trim()] = words[j];
        }

        result.push(obj);
    }
    console.log(result);
}

export default function InputBar() {
    return (
        <>
            <form>
                <h1>Demographic Breakdown</h1>
                <p>How many Male participants are in this study?</p>
                <input type="number"></input>
                <p>How many Female participants are in this study?</p>
                <input type="number"></input>
                <p>How many Caucasion participants are in this study?</p>
                <input type="number"></input>
                <p>How many non-Caucisian participants are in this study?</p>
                <input type="number"></input> <br/>
                <button className="calculate" onClick={ csvToJSON }>Generate Demographics</button>
            </form>
        </>
    )
}
