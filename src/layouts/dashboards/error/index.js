import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // エラーが発生した場合、次のレンダリングでフォールバックUIを表示する
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // エラーレポートを行う、またはエラー情報を外部サービスにログとして送信する
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // エラーが発生した場合に表示するカスタムUIを返す
      return <h1>ブラウザの戻るボタンでTopページに戻り、更新してバージョン情報を設定してください。</h1>;
    }

    // エラーがない場合は、子コンポーネントをそのままレンダリングする
    return this.props.children;
  }
}

export default ErrorBoundary;




