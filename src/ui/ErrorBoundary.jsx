import React from "react";
export default class ErrorBoundary extends React.Component {
  constructor(p){ super(p); this.state = { hasError:false }; }
  static getDerivedStateFromError(){ return { hasError:true }; }
  componentDidCatch(err, info){ console.error(err, info); }
  render(){
    if (this.state.hasError) return <div style={{padding:16}}>Нещо се обърка. Релоудни страницата.</div>;
    return this.props.children;
  }
}