
import * as React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { changeTitle } from '../../../redux/actions';
import { Store } from "../../../redux/store"

interface HomeProps {
    title: string;
    changeTitle: any;
    subdomain?: string
}

const Home = ({title, changeTitle, subdomain}:HomeProps) => {
    const [counter, setCounter] = React.useState(0)

    const modifyTitle = () => {
        changeTitle(title + subdomain)
    }

    return (
        <>
            <div className={'w-full h-20 bg-red-300'}>
                <Link to="/test">Go to test</Link>
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
        title: state.title,
        subdomain: state.subdomain
    }
}

const mapDispatchToProps = {
    changeTitle
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)