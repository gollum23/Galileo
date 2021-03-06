import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../components/commons/Layout';
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';

class Transaction extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
  }

  render() {
    const { match } = this.props;
    return (
      <Layout className='Transaction'>
        <Header chain={match.params.chain} />
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        Transaction
        <Footer />
      </Layout>
    );
  }
}

export default hot(module)(Transaction)
