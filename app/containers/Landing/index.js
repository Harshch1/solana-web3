import React, { Fragment } from 'react';
import i18next from 'i18next';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withTranslation } from 'react-i18next';
import { Welcome } from 'Components';
import { setNotif } from 'Actions';

class Landing extends React.Component {
  componentDidMount() {
    const { t } = this.props;

    this.props.setNotif({
      message: t('WEL_MSG'),
      variant: 'success'
    });
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <html lang={i18next.language} dir={i18next.dir(i18next.language)} />
        </Helmet>

        <Welcome />
      </Fragment>
    );
  }
}

Landing.propTypes = {
  setNotif: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  setNotif: bindActionCreators(setNotif, dispatch)
});

const LandingMapped = connect(
  null,
  mapDispatchToProps
)(Landing);

export default withTranslation()(LandingMapped);
