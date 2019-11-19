import React from 'react';

class Card extends React.Component {
    render() {
        return <div className="col-md-4 p-3 my-1">
            <li key={this.props.index.toString()} className="card">
                <img className="card-img-top p-3" alt="" style={{ "width": "130px", "height": "150px", "margin": "0 auto" }} src={this.props.item.img_src} />
                <div className="card-body">
                    <h6 className="card-title">{this.props.item.name}</h6>
                    <span className="card-text text-muted">{this.props.item.reviews}</span>
                </div>
            </li>
        </div>

    }
}

export default Card;