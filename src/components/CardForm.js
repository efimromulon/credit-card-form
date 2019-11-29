import React from 'react';
import './../styles/CardForm.sass';

class CardForm extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			data: null,
		}
	}

	render(){

		return (
			<div className="card-form">
				<div className="card-list">
					<div className="card-item">
						<div className="card-item__side -front">
							<div className="card-item__focus"></div>
							<div className="card-item__cover">
								<img src="bg1.jpg" className="card-item__bg"></img>
							</div>
							<div className="card-item__wrapper"></div>
						</div>
						<div className="card-item__side -back"></div>
					</div>
				</div>
				<div className="card-form__inner"></div>
			</div>
		);

	}

}

export default CardForm;