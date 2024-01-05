import PropTypes from 'prop-types';
import "./Layout.css"

function Layout({ children }) {
  return (
    <main className='layout mx-auto xl:w-[1280px] lg:w-[1024px] sm:w-[640px] ' >
      {children}
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;