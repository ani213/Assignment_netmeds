import React, { Component } from 'react'
class CardPlay extends Component {
    state = {  }
    render() { 
        return ( 
            <section class="card heart" value="2">
		<div class="card__inner centered">
			<div class="card__column">
				<div class="card__symbol"></div>
				<div class="card__symbol"></div>
			</div>
		</div>
	</section>
         );
    }
}
 
export default CardPlay;