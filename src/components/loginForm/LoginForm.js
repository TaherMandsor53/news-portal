import React, { Component } from 'react';
import { Button, Form, Grid, Message, Segment, Modal, ModalHeader, Icon, Label } from 'semantic-ui-react';
import RegisterUser from '../../container/RegisterUserDetailsContainer';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// // import { requestUserDetails } from '../../action/action';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			registerModalOpen: false,
			emailValue: '',
			passValue: '',
			loggedIn: false,
			errorCheck: false,
			label: '',
		};

		this.Reset = this.Reset.bind(this);
		this.openRegister = this.openRegister.bind(this);
		this.onRegisterClose = this.onRegisterClose.bind(this);
		this.emailHandleChange = this.emailHandleChange.bind(this);
		this.passHandleChange = this.passHandleChange.bind(this);
		this.validateUser = this.validateUser.bind(this);
		this.onLoginClick = this.onLoginClick.bind(this);
	}

	componentDidMount() {
		const { requestUserDetails } = this.props;
		requestUserDetails();
	}

	emailHandleChange(event) {
		this.setState({ emailValue: event.target.value });
	}

	passHandleChange(event) {
		this.setState({ passValue: event.target.value });
	}

	validateUser() {
		const { userDetailsData } = this.props;
		const { passValue, emailValue } = this.state;
		const loginStatus = userDetailsData.find(item =>
			item.email === emailValue && item.password === passValue ? true : false,
		);
		if (loginStatus) {
			this.setState({ loggedIn: true });
			this.Reset();
		} else {
			this.setState({ errorCheck: true, label: 'Please enter valid UserName/Password', loggedIn: false });
		}
	}

	onLoginClick() {
		this.validateUser();
	}

	openRegister() {
		const { modalClose } = this.props;
		modalClose();
		this.setState({ registerModalOpen: true });
	}

	Reset() {
		const { modalClose } = this.props;
		modalClose();
		this.setState({ errorCheck: false, label: '' });
	}

	onRegisterClose() {
		this.setState({ registerModalOpen: false });
	}
	render() {
		const { loginModalOpen, userDetailsData, loginStatus } = this.props;
		const { registerModalOpen, errorCheck, loggedIn } = this.state;
		loginStatus(loggedIn);
		console.log('UserDetails :', userDetailsData);
		return (
			<div>
				<Modal open={loginModalOpen} closeIcon onClose={this.Reset}>
					<Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
						<Grid.Column style={{ maxWidth: 450 }}>
							<ModalHeader className="login-header">
								<Icon name="newspaper outline" size="big" className="login-model-icon" />
								<label>Log-in to NewsHunt</label>
							</ModalHeader>
							<Form size="large" className="login-form">
								<Segment stacked className="login-box">
									<Form.Input
										fluid
										icon="user"
										iconPosition="left"
										placeholder="E-mail address"
										className="login-input"
										onChange={this.emailHandleChange}
										error={errorCheck}
										label={this.state.label}
									/>
									<Form.Input
										fluid
										icon="lock"
										iconPosition="left"
										placeholder="Password"
										type="password"
										className="login-input"
										onChange={this.passHandleChange}
										error={errorCheck}
									/>

									<Button
										color="teal"
										fluid
										size="large"
										className="login-button"
										onClick={this.onLoginClick}
									>
										Login
									</Button>
								</Segment>
							</Form>
							<Message className="login-message">
								<Label className="login-signup-label" onClick={this.openRegister}>
									New to us? {'  '}
									<b>Register</b>
								</Label>
							</Message>
						</Grid.Column>
					</Grid>
				</Modal>

				<RegisterUser registerModalOpen={registerModalOpen} onRegisterClose={this.onRegisterClose} />
			</div>
		);
	}
}

// const mapStateToProps = state => ({
//   userDetailsData: state.userDetails.userDetailsData,
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       requestUserDetails,
//     },
//     dispatch,
//   );

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(LoginForm);

export default LoginForm;
