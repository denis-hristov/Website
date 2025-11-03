import React from "react";
export default class ErrorBoundary extends React.Component {
  constructor(p){ super(p); this.state = { hasError:false }; }
  static getDerivedStateFromError(){ return { hasError:true }; }
  componentDidCatch(err, info){ console.error(err, info); }
  render(){
    if (this.state.hasError) return <div style={{padding:16}}>Something went wrong. Please reload the page.</div>;
    return this.props.children;
  }
}