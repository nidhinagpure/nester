import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  // Update state when an error is thrown
  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  // Optional: log the error info (component stack) to console
  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      // Customize this UI as you like
      return (
        <div style={{ padding: "50px", textAlign: "center" }}>
          <h2>Something went wrong.</h2>
          <p>{this.state.errorMessage}</p>
          <p>Please refresh the page or contact support.</p>
        </div>
      );
    }

    // Render children normally if no error
    return this.props.children;
  }
}

export default ErrorBoundary;
