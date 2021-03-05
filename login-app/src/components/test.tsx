import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../../redux/store';

interface TestProps {
    title: string;
}

const Test = ({title}:TestProps) => {
    return (
        <div>
            This is a test page! {title}
        </div>
    )
}


const mapStateToProps = (state: Store) => {
    return {
        title: state.title
    }
}


export default connect(mapStateToProps)(Test)
