import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";

export type DashboardType = {
  className?: string;
};

const Dashboard: FunctionComponent<DashboardType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onBackToHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSearchFlightsClick = useCallback(() => {
    navigate("/results");
  }, [navigate]);

  return (
    <div className={[styles.dashboard, className].join(" ")}>
      <header className={styles.topHeader}>
        <div className={styles.topContainer}>
          <button className={styles.fickleflightLogo} onClick={onBackToHomeClick}>
            <img className={styles.symbolsIcon} alt="" src="/symbols.svg" />
          </button>
          <div className={styles.navigationRight}>
            <div className={styles.welcomeText}>Welcome back!</div>
            <img
              className={styles.unsplashd1upkifd04aIcon}
              alt=""
              src="/top_avatar@2x.png"
            />
          </div>
        </div>
      </header>
      
      <div className={styles.dashboardContent}>
        <div className={styles.welcomeSection}>
          <h1 className={styles.welcomeTitle}>Dashboard</h1>
          <p className={styles.welcomeSubtitle}>Manage your flights and bookings</p>
        </div>
        
        <div className={styles.quickActions}>
          <div className={styles.actionCard} onClick={onSearchFlightsClick}>
            <div className={styles.actionIcon}>✈️</div>
            <h3 className={styles.actionTitle}>Search Flights</h3>
            <p className={styles.actionDescription}>Find and book your next flight</p>
          </div>
          
          <div className={styles.actionCard}>
            <div className={styles.actionIcon}>📋</div>
            <h3 className={styles.actionTitle}>My Bookings</h3>
            <p className={styles.actionDescription}>View your current reservations</p>
          </div>
          
          <div className={styles.actionCard}>
            <div className={styles.actionIcon}>👤</div>
            <h3 className={styles.actionTitle}>Profile</h3>
            <p className={styles.actionDescription}>Update your personal information</p>
          </div>
          
          <div className={styles.actionCard}>
            <div className={styles.actionIcon}>💳</div>
            <h3 className={styles.actionTitle}>Payment Methods</h3>
            <p className={styles.actionDescription}>Manage your payment options</p>
          </div>
        </div>
        
        <div className={styles.recentActivity}>
          <h2 className={styles.sectionTitle}>Recent Activity</h2>
          <div className={styles.activityList}>
            <div className={styles.activityItem}>
              <div className={styles.activityDate}>Dec 15, 2024</div>
              <div className={styles.activityText}>Flight search: Singapore to Los Angeles</div>
            </div>
            <div className={styles.activityItem}>
              <div className={styles.activityDate}>Dec 10, 2024</div>
              <div className={styles.activityText}>Booking confirmed: SIN → LAX</div>
            </div>
            <div className={styles.activityItem}>
              <div className={styles.activityDate}>Dec 5, 2024</div>
              <div className={styles.activityText}>Profile updated</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;