import React from 'react';
interface State {
  hasError: boolean;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}
class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  componentDidCatch(error: any, errorInfo: any) {
    console.log(error, errorInfo);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'column',
          }}
        >
          <a href='/'>首页</a>
          <h1>Something went wrong.</h1>
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
