import React from 'react';
import ProtoTypes from 'prop-types';

const Link = ({ active, children, onClick }) => {
    if(active) {
        return <span>{ children }</span>
    }

    return (
        <a
            href=""
            onClick={e => {
                e.preventDefault;
                onClick();
            }}
        >
            { children }
        </a>
    );
}

// [프로퍼티] 유형체크 -> node 타입 확인
Link.protoTypes = {
    active: ProtoTypes.bool.isRequired,
    children: ProtoTypes.node.isRequired,
    onClick: ProtoTypes.func.isRequired
}

export default Link;