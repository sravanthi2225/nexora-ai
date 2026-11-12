import React from 'react';
import { CheckCircle2, Sparkles, AlertCircle, X } from 'lucide-react';

export default function Toast({ toasts = [], onDismiss }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-portal-container" aria-live="polite" aria-atomic="true">
      {toasts.map((toast) => {
        const isSuccess = toast.type === 'success' || !toast.type;
        const isInfo = toast.type === 'info';
        const isWarning = toast.type === 'warning';

        return (
          <div
            key={toast.id}
            className={`toast-notification-item toast-${toast.type || 'success'}`}
            role="alert"
          >
            <div className="toast-icon-wrap">
              {isSuccess && <CheckCircle2 size={18} className="toast-icon-check" />}
              {isInfo && <Sparkles size={18} className="toast-icon-info" />}
              {isWarning && <AlertCircle size={18} className="toast-icon-warn" />}
            </div>

            <div className="toast-content-wrap">
              {toast.title && <strong className="toast-title">{toast.title}</strong>}
              <span className="toast-message">{toast.message}</span>
            </div>

            <button
              type="button"
              className="toast-close-btn"
              onClick={() => onDismiss && onDismiss(toast.id)}
              aria-label="Dismiss notification"
            >
              <X size={14} />
            </button>
          </div>
        );
      })}
    </div>
  );
}

