import React, { useState, useRef, useEffect } from 'react';
import { Bell, CheckCheck, Trash2, Zap, DollarSign, TrendingUp, RefreshCw, X } from 'lucide-react';
import { sampleNotifications } from '../data/mockData';

export default function NotificationDropdown({ onNotify }) {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(sampleNotifications);
  const dropdownRef = useRef(null);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const markAllAsRead = (e) => {
    e.stopPropagation();
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
    if (onNotify) {
      onNotify('All notifications marked as read', 'info');
    }
  };

  const clearAllNotifications = (e) => {
    e.stopPropagation();
    setNotifications([]);
    if (onNotify) {
      onNotify('All notifications cleared', 'info');
    }
  };

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  // Close on click outside or Escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const getIcon = (type) => {
    switch (type) {
      case 'deal':
        return <DollarSign size={14} className="notif-icon-deal" />;
      case 'bot':
        return <Zap size={14} className="notif-icon-bot" />;
      case 'kpi':
        return <TrendingUp size={14} className="notif-icon-kpi" />;
      case 'sync':
        return <RefreshCw size={14} className="notif-icon-sync" />;
      default:
        return <Bell size={14} />;
    }
  };

  return (
    <div className="notif-dropdown-wrapper" ref={dropdownRef}>
      <button
        type="button"
        className={`notif-bell-btn ${isOpen ? 'bell-btn-active' : ''}`}
        onClick={toggleDropdown}
        aria-label={`Notifications (${unreadCount} unread)`}
        aria-expanded={isOpen}
      >
        <Bell size={17} />
        {unreadCount > 0 && <span className="notif-unread-badge">{unreadCount}</span>}
      </button>

      {isOpen && (
        <div className="notif-panel-box" role="dialog" aria-label="Notifications panel">
          <div className="notif-panel-header">
            <div className="notif-header-title-row">
              <strong className="notif-header-title">Notifications</strong>
              {unreadCount > 0 && (
                <span className="notif-unread-pill">{unreadCount} new</span>
              )}
            </div>

            <div className="notif-header-actions">
              {unreadCount > 0 && (
                <button
                  type="button"
                  className="notif-action-text-btn"
                  onClick={markAllAsRead}
                  title="Mark all as read"
                >
                  <CheckCheck size={14} />
                  <span>Mark read</span>
                </button>
              )}
              {notifications.length > 0 && (
                <button
                  type="button"
                  className="notif-action-text-btn danger"
                  onClick={clearAllNotifications}
                  title="Clear all"
                >
                  <Trash2 size={13} />
                </button>
              )}
              <button
                type="button"
                className="notif-close-x"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          <div className="notif-list-container">
            {notifications.length === 0 ? (
              <div className="notif-empty-state">
                <Bell size={24} className="notif-empty-icon" />
                <p className="notif-empty-text">No active notifications</p>
                <span className="notif-empty-sub">All AI events are currently clear.</span>
              </div>
            ) : (
              notifications.map((item) => (
                <div
                  key={item.id}
                  className={`notif-item-card ${!item.read ? 'notif-unread' : ''}`}
                  onClick={() => markAsRead(item.id)}
                >
                  <div className={`notif-icon-circle type-${item.type}`}>
                    {getIcon(item.type)}
                  </div>
                  <div className="notif-item-content">
                    <div className="notif-item-title-row">
                      <span className="notif-item-title">{item.title}</span>
                      <span className="notif-item-time">{item.time}</span>
                    </div>
                    <p className="notif-item-msg">{item.message}</p>
                  </div>
                  {!item.read && <span className="notif-unread-dot" title="Unread" />}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

