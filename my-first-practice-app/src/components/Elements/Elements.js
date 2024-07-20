import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import './Elements.css'

const Elements = () => {
  return (
    <div>
      <Header />
      
      <section id="main">
        <div className="inner">
          <header className="major special">
            <h1>Elements</h1>
            <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
          </header>

          <div className="6u 12u$(xsmall)">
            <h4>Unordered</h4>
            <ul>
              <li>Dolor pulvinar etiam magna etiam.</li>
              <li>Sagittis adipiscing lorem eleifend.</li>
              <li>Felis enim feugiat dolore viverra.</li>
            </ul>
            <h4>Alternate</h4>
            <ul className="alt">
              <li>Dolor pulvinar etiam magna etiam.</li>
              <li>Sagittis adipiscing lorem eleifend.</li>
              <li>Felis enim feugiat dolore viverra.</li>
            </ul>
          </div>
          
          <div className="6u$ 12u$(xsmall)">
            <h4>Ordered</h4>
            <ol>
              <li>Dolor pulvinar etiam magna etiam.</li>
              <li>Etiam vel felis at lorem sed viverra.</li>
              <li>Felis enim feugiat dolore viverra.</li>
              <li>Dolor pulvinar etiam magna etiam.</li>
              <li>Etiam vel felis at lorem sed viverra.</li>
              <li>Felis enim feugiat dolore viverra.</li>
            </ol>
            <h4>Icons</h4>
            <ul className="icons">
              <li><Link to="#" className="icon fa-twitter"><span className="label">Twitter</span></Link></li>
              <li><Link to="#" className="icon fa-facebook"><span className="label">Facebook</span></Link></li>
              <li><Link to="#" className="icon fa-instagram"><span className="label">Instagram</span></Link></li>
              <li><Link to="#" className="icon fa-github"><span className="label">Github</span></Link></li>
              <li><Link to="#" className="icon fa-dribbble"><span className="label">Dribbble</span></Link></li>
              <li><Link to="#" className="icon fa-tumblr"><span className="label">Tumblr</span></Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Actions Section */}
      <section>
        <h4>Actions</h4>
        <ul className="actions">
          <li><Link to="#" className="button special">Special</Link></li>
          <li><Link to="#" className="button">Default</Link></li>
          <li><Link to="#" className="button alt">Alternate</Link></li>
        </ul>
        <ul className="actions small">
          <li><Link to="#" className="button special small">Small</Link></li>
          <li><Link to="#" className="button small">Small</Link></li>
          <li><Link to="#" className="button alt small">Small</Link></li>
        </ul>
        <div className="row">
          <div className="3u 6u(small) 12u$(xsmall)">
            <ul className="actions vertical">
              <li><Link to="#" className="button special">Vertical</Link></li>
              <li><Link to="#" className="button">Vertical</Link></li>
              <li><Link to="#" className="button alt">Vertical</Link></li>
            </ul>
          </div>
          <div className="3u 6u$(small) 12u$(xsmall)">
            <ul className="actions vertical small">
              <li><Link to="#" className="button special small">Small</Link></li>
              <li><Link to="#" className="button small">Small</Link></li>
              <li><Link to="#" className="button alt small">Small</Link></li>
            </ul>
          </div>
          <div className="3u 6u(small) 12u$(xsmall)">
            <ul className="actions vertical">
              <li><Link to="#" className="button special fit">Fit</Link></li>
              <li><Link to="#" className="button fit">Fit</Link></li>
              <li><Link to="#" className="button alt fit">Fit</Link></li>
            </ul>
          </div>
          <div className="3u$ 6u$(small) 12u$(xsmall)">
            <ul className="actions vertical small">
              <li><Link to="#" className="button special small fit">Small</Link></li>
              <li><Link to="#" className="button small fit">Small</Link></li>
              <li><Link to="#" className="button alt small fit">Small</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Table Section */}
      <section>
        <h3>Table</h3>
        <h4>Default</h4>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Item 1</td>
                <td>Ante turpis integer aliquet porttitor.</td>
                <td>29.99</td>
              </tr>
              <tr>
                <td>Item 2</td>
                <td>Vis ac commodo adipiscing arcu aliquet.</td>
                <td>19.99</td>
              </tr>
              <tr>
                <td>Item 3</td>
                <td>Morbi faucibus arcu accumsan lorem.</td>
                <td>29.99</td>
              </tr>
              <tr>
                <td>Item 4</td>
                <td>Vitae integer tempus condimentum.</td>
                <td>19.99</td>
              </tr>
              <tr>
                <td>Item 5</td>
                <td>Ante turpis integer aliquet porttitor.</td>
                <td>29.99</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2"></td>
                <td>100.00</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <h4>Alternate</h4>
        <div className="table-wrapper">
          <table className="alt">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Item 1</td>
                <td>Ante turpis integer aliquet porttitor.</td>
                <td>29.99</td>
              </tr>
              <tr>
                <td>Item 2</td>
                <td>Vis ac commodo adipiscing arcu aliquet.</td>
                <td>19.99</td>
              </tr>
              <tr>
                <td>Item 3</td>
                <td>Morbi faucibus arcu accumsan lorem.</td>
                <td>29.99</td>
              </tr>
              <tr>
                <td>Item 4</td>
                <td>Vitae integer tempus condimentum.</td>
                <td>19.99</td>
              </tr>
              <tr>
                <td>Item 5</td>
                <td>Ante turpis integer aliquet porttitor.</td>
                <td>29.99</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2"></td>
                <td>100.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Elements;
