import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import React from 'react';

    function RenderDish({dish}) {
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

    function RenderComments({dish}) {
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

    const DishDetail = (props) => {
        return (
            <div className="container">
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        <RenderDish dish = {props.dish} />
                     </div>
                    <div  className="col-12 col-md-5 m-1">
                        <RenderComments dish = {props.dish} /> 
                    </div>
                </div>
            </div>
        );
    }

export default DishDetail