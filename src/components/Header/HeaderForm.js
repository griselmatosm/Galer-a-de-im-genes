import React from 'react';
import { connect } from 'react-redux';
import '../../styles/HeaderForm.scss';

function HeaderForm() {
  return (
    <div className="HeaderForm">
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1"></label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Busca imágenes" />
        </div>
        <button type="button" class="btn btn-dark">Buscar</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  images: state.images,
});

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderForm);
