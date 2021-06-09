import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';
import 'font-awesome/css/font-awesome.min.css';


const Card=(props)=>{
    return(
        <section class="pricing py-5">
           <div class="container">
              <div class="row">
              {
                  props.jsonCard.map((card)=>{
                      return(
                          <div className="col-lg-3">
                          <div className="card mb-5 mb-lg-0">
                          <div className="card-body">
                             <h5 className="card-title text-muted text-uppercase text-center">{card.title}</h5>
                               <h6 className="card-price text-center">${card.price}<span className="period">/month</span></h6>
                               <hr/>
                        <ul class="fa-ul">
                        {card.facilities.map((facility)=>{
                            return(
                              facility.muted?
                              <li className='fa fa-times'>{facility.name}</li>:
                              <li><i className="fa fa-check"></i>{facility.name}</li>
                            )
                        })}
                        </ul>
            <a href="#" className="btn btn-block btn-primary text-uppercase">Button</a>
          </div>
      </div>
      </div>
    )
})  
 } </div>
</div>
</section>
    )
   
}
export default Card;