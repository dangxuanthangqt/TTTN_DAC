import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { LinearProgress } from '@material-ui/core';

Error.propTypes = {
    
};

function Error(props) {
    return (
        <div>
            <Suspense fallback={<LinearProgress></LinearProgress>}>
            {props.children}
            </Suspense>
        </div>
    );
}

export default Error;