
import * as React from 'react';
import { connect } from "react-redux";
import { changeTitle } from '../../../redux/actions';
import { Store } from "../../../redux/store"

interface HomeProps {
    title: string;
    changeTitle: any;
}

const Home = ({title, changeTitle}:HomeProps) => {
    const [counter, setCounter] = React.useState(0)

    const modifyTitle = () => {
        changeTitle(title + title)
    }

    return (
        <>
            <div>
                <h1>{title}</h1>
                {counter}
            </div>
            <button onClick={() => 
                {
                modifyTitle()
                setCounter(counter + 1)}
            }>Testing</button>
        </>

    )
}

const mapStateToProps = (state: Store) => {
    return {
        title: state.title
    }
}

const mapDispatchToProps = {
    changeTitle
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)