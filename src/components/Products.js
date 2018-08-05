import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col, Modal, Button, Carousel} from 'react-bootstrap';

class Products extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.productList = [];
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            currentProduct: {}
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    getProduct(id){
        let product = this.productList.filter( product => {
            return product.id === id ? product : null;
        })
        return product[0];
    }

    openRelatedImages(id, e) {
        e.preventDefault();
        console.log(this.getProduct(id));
        this.setState({
            currentProduct: this.getProduct(id)
        });
        this.handleShow();
    }

    getProductRows(list) {
        const products = list.map((product, index) => {
            if(index%3 == 0){
                return (<Row key={index} className="tiles-row">
                    {list[index] && <Col xs={12} md={4}>
                        <a href="#" onClick={this.openRelatedImages.bind(this, list[index].id)} className="product-tile" data-id={list[index].id}>
                            <img src={list[index].thumbnail.href} alt={list[index].thumbnail.alt}/>
                            <div>{list[index].name}</div>
                            <div>Price Range : {list[index].priceRange.selling.low}$ - {list[index].priceRange.selling.high}$</div>
                        </a>
                    </Col>}
                    {list[index+1] && <Col xs={12} md={4}>
                        <a href="#" onClick={this.openRelatedImages.bind(this, list[index+1].id)} className="product-tile" data-id={list[index+1].id}>
                            <img src={list[index+1].thumbnail.href} alt={list[index+1].thumbnail.alt}/>
                            <div>{list[index+1].name}</div>
                            <div>Price Range : {list[index+1].priceRange.selling.low}$ - {list[index+1].priceRange.selling.high}$</div>
                        </a>
                    </Col>}
                    {list[index+2] && <Col xs={12} md={4}>
                        <a href="#" onClick={this.openRelatedImages.bind(this, list[index+2].id)} className="product-tile" data-id={list[index+2].id}>
                            <img src={list[index+2].thumbnail.href} alt={list[index+2].thumbnail.alt}/>
                            <div>{list[index+2].name}</div>
                            <div>Price Range : {list[index+2].priceRange.selling.low}$ - {list[index+2].priceRange.selling.high}$</div>
                        </a>
                    </Col>}
                </Row>)
            }
        });
        return products;
    }
    
    render = () => {
        console.log("Render : ",this.props);
        this.productList = this.props.newProducts.groups;
        if(!this.productList){
            return <div className="loader">Loading...</div>;
        }
        const carouselImageList = this.state.currentProduct.images;
        return (
        <React.Fragment>
            <Grid>
                {this.getProductRows(this.productList)}
            </Grid>
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Related Images</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel>
                        {carouselImageList && carouselImageList.map((image, index) => {
                            return (
                                <Carousel.Item>
                                    <img className="carousel-img" width={363} src={image.href} alt={image.alt}/>
                                </Carousel.Item>
                            );
                        })}
                    </Carousel>                
                </Modal.Body>
            </Modal>
        </React.Fragment>
      );
    }
}

Products.propTypes = {
    newProducts: PropTypes.object,
    getNewProducts: PropTypes.func
}

Products.defaultProps = {
    newProducts: {},
    getNewProducts: () => console.log('Get New Product Api Called !!!')
}

export default Products;