/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import WelcomeSection from "../components/WelcomeSection";
import AccountInfo from "../components/AccountInfo";
import UpcomingSession from "../components/UpcomingSession";
import SubscriptionPlan from "../components/SubscriptionPlan";
import Settings from "../components/Settings";
import MentorsList from "../components/MentorsList";
import LogoutButton from "../components/LogoutButton";  // Import LogoutButton component
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    // If no user is logged in, redirect to login page
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto p-8">
        {user ? (
          <>
            {/* Welcome Section */}
            <WelcomeSection name={user.email} />

            {/* Account Info Section */}
            <AccountInfo email={user.email} subscription="Premium" />

            {/* Upcoming Session Section */}
            <UpcomingSession nextSession="January 20, 2025 - 3:00 PM" />

            {/* Subscription Plan Section */}
            <SubscriptionPlan subscription="Premium" />

            {/* Settings Section */}
            <Settings />

            {/* Mentors List Section */}
            <MentorsList mentors={[]} />

            {/* Logout Button Section */}
            <LogoutButton />
          </>
        ) : (
          <div className="text-center text-white">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
