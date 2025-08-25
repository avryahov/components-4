import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/field.module.css';

const FieldLayout = ({field, onCellClick}) => {
    return (
        <div className={styles.field}>
            {field.map((cell, index) => (
                <button
                    key={index}
                    className={styles.cell}
                    onClick={() => onCellClick(index)}
                    disabled={!!cell} // активна только если ячейка пустая
                >
                    {cell}
                </button>
            ))}
        </div>
    );
};

FieldLayout.propTypes = {
    field: PropTypes.arrayOf(PropTypes.string).isRequired,
    onCellClick: PropTypes.func.isRequired,
};

export default FieldLayout;