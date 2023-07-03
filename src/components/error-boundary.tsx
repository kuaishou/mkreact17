import React from "react";

type FallbackRender = (props: { error: Error | null }) => React.ReactElement;
export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallbackRender: FallbackRender }>,
  { error: Error | null }
> {
  stat = { error: null };
  //当子组件抛出异常，这里会接收并调用
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  render(): React.ReactNode {
    const { error } = this.stat;
    const { fallbackRender, children } = this.props;
    if (error) {
      return fallbackRender({ error });
    }
    return children;
  }
}
