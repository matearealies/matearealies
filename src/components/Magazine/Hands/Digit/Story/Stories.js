import React, { useEffect } from 'react'


export function Stories (props) {
    useEffect(() =>
        fetch('https://spreadsheets.google.com/feeds/spreadsheets/private/full')
        .then((response) => {
            console.log(response)
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
    );
    
}