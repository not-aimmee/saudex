import { Component, type ErrorInfo, type ReactNode } from "react";

interface AsyncErrorBoundaryProps {
  children: ReactNode;
  fallbackMessage?: string;
}

interface AsyncErrorBoundaryState {
  hasError: boolean;
}

export default class AsyncErrorBoundary extends Component<
  AsyncErrorBoundaryProps,
  AsyncErrorBoundaryState
> {
  state: AsyncErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): AsyncErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Unable to render asynchronous content:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" className="bg-[#77aca2]/10 px-8 py-32 text-center text-[#254d58]">
          <p className="font-generalsans text-lg">
            {this.props.fallbackMessage ?? "This section could not load."}
          </p>
          <button
            type="button"
            className="mt-4 underline underline-offset-4"
            onClick={() => window.location.reload()}
          >
            Reload the page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
