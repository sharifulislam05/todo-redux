import React from "react";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../../store/actions/visibilityActions";
import "./_footer.scss";

const FooterLink = ({ onClick, children, isVisible }) => {
  return (
    <button
      disabled={isVisible}
      onClick={onClick}
      className="btn__visibility ml-5"
    >
      {children}
    </button>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    isVisible: state.visibility === ownProps.filter,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FooterLink);
