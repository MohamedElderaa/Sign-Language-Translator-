import PropTypes from 'prop-types';

function Header({ title, subtitle }) {
  return (
    <header className="header">
      <div className="logo-title">
        <span className="logo">🤟</span>
        <h1>{title}</h1>
      </div>
      <p className="subtitle">{subtitle}</p>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default Header;