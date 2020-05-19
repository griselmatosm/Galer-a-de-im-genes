import React from 'react';
import {connect} from 'react-redux';
import '../../styles/Card.scss';

function Card({images}) {
  return (
    <div className="Card">
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  images: state.images

});

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps) (Card);
