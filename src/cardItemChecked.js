import React from 'react';

function cardItemChecked(){

let facilities=[
    {
        title:'Free',
        price:'0',
        facilities:[{muted:false, name:'Single User'},
        {muted:false, name:'5GB storage '},
        {muted:false, name:'Unlimited Public Projects'},
        {muted:false, name:'Community Access'}]
    },
    {
        title:'Plus',
        price:'9',
        facilities:[{muted:false, name:'5 Users'},
        {muted:false, name:'50GB storage '},
        {muted:false, name:'Unlimited Public Projects'},
        {muted:false, name:'Community Access'},
        {muted:false, name:'Unlimited Private Projects'},
        {muted:false, name:'Dedicated Phone Support'},
        {muted:false, name:'Free Subdomain'}]
    },
    {
        title:'Pro',
        price:'49',
        facilities:[{muted:false, name:'unlimited users'},
        {muted:false, name:'150GB storage '},
        {muted:false, name:'Unlimited Public Projects'},
        {muted:false, name:'Community Access'},
        {muted:false, name:'Unlimited Private Projects'},
        {muted:false, name:'Dedicated Phone Support'},
        {muted:false, name:'Free Subdomain'},
        {muted:true, name:'Monthly Status Reports'}]
    }
];
}
export default cardItemChecked;