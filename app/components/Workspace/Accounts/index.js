import React, { Component } from 'react';
import Table from './Table';
import AccountsModal from './AccountsModal';

class Accounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalType: ''
    };
    this.handleModalToggle = this.handleModalToggle.bind(this);
    this.handleCreateAccount = this.handleCreateAccount.bind(this);
    this.handleValidateModalOpen = this.handleValidateModalOpen.bind(this);
  }

  handleModalToggle(modalType) {
    this.setState({
      showModal: !this.state.showModal,
      modalType
    });
  }

  handleValidateModalOpen(modalType) {
    this.setState({
      modalType
    });
  }

  handleCreateAccount({ ...accounts }) {
    this.props.createAccountsAction({ ...accounts, ...this.props });
  }

  render() {
    return (
      <>
        <div className="accounts-container">
          <div className="cards-container">
            <div className="cards button-card accounts-button-container">
              <div className="button-accounts">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => this.handleModalToggle('restore-accounts')}
                >
                  Restore Account
                </button>
              </div>
              <div className="button-accounts">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => this.handleModalToggle('create-accounts')}
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </div>
        <Table {...this.props} />
        {this.state.showModal ? (
          <AccountsModal
            {...this.props}
            modalType={this.state.modalType}
            showModal={this.state.showModal}
            handleModalToggle={this.handleModalToggle}
            handleCreateAccount={this.handleCreateAccount}
            handleValidateModalOpen={this.handleValidateModalOpen}
          />
        ) : (
          <React.Fragment />
        )}
      </>
    );
  }
}

export default Accounts;
