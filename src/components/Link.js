import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick }) => (
    <button
      onClick={onClick}
      disabled={active}
      style={{
        marginLeft: '4px'
      }}
    >
      {children}
    </button>
)

// [프로퍼티] 유형체크 -> node 타입 확인
Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link;