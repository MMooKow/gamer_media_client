import PropTypes from 'prop-types';
import Button from './Button';


const Header = ({ title }) => {
    const onClick = (e) => {
        
    }

    return (
        <header>
            <h1>{title}</h1>
            <Button color='green' text='Hello' onClick={onClick}/>
        </header>
    )
};

Header.defaultProps = {
    title: 'Gamer Media Client'
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header;
