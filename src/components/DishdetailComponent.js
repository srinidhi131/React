import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import { Component } from 'react';

class DishDetail extends Component{

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(dish) {
        if (dish != null) 
            return(
                <div>
                    <h4>Comments</h4>
                    <ul class = "list-unstyled">
                    {dish.comments.map(res => (
                        <li>
                            <p>{res.comment}</p>
                            <p>-- {res.author} , {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(res.date))}</p>
                        </li>
                    ))}
                    </ul>
                </div>
            )
        else
            return(
                <div></div>
            );
}

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                     </div>
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish)}  
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail