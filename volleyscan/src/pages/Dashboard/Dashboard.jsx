import { useState } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardHeader from "../../components/Header/DashboardHeader";
import StatsGrid from "../../components/Stats/StatsGrid";
import AnalysisCard from "../../components/Analysis/AnalysisCard";
import RoutineCard from "../../components/Routine/RoutineCard";
import QuickAccess from "../../components/QuickAccess/QuickAccess";
import '../Dashboard/Dashboard.css'

function Dashboard() {

  // ===== TOAST =====
  const [toast, setToast] = useState("");

  // ===== QUICK BUTTONS =====
  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  return (
    <div className="app-wrapper">

          <main className="main-content">

        <DashboardHeader />

        <StatsGrid />

        <section className="mid-row">
          <AnalysisCard />
          <RoutineCard />
        </section>

        {/* PASAMOS LA FUNCIÓN */}
        <QuickAccess showToast={showToast} />

      </main>

      {/* TOAST */}
      {
        toast && (
          <div className="vs-toast">
            {toast}
          </div>
        )
      }

    </div>
  );
}

export default Dashboard;