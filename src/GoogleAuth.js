import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "./features/auth/authSlice";

class GoogleAuth extends React.Component {
  // state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "73610370551-pk5nnjofa5pjmvirg8862vhshqb64if9.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "streamy",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return <button onClick={this.onSignOutClick}>Sign out</button>;
    } else {
      return <button onClick={this.onSignInClick}>Sign in with google</button>;
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  onAuthChange = (isSigned) => {
    if (isSigned) {
      this.props.signIn(isSigned);
    } else {
      this.props.signOut(isSigned);
    }
    // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
