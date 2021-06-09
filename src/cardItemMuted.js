import React from 'react';

function cardItemMuted(){

let facilities=[
    {
        title:'Free',
        price:'0',
        facilities:[
        {muted:false, name:'Unlimited Private Projects'},
        {muted:false, name:'Dedicated Phone Support'},
        {muted:false, name:'Free Subdomain'},
        {muted:true, name:'Monthly Status Reports'}]
    },
    {
        title:'Plus',
        price:'9',
        facilities:[
        {muted:true, name:'Monthly Status Reports'}]
    }
];
}
export default cardItemMuted;