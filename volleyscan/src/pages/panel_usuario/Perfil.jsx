import { useState } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileSidebar from "../../components/Profile/ProfileSidebar";

import PersonalInfo from "../../components/Profile/PersonalInfo";
import Objetivos from "../../components/Profile/Objetivos";
import Preferencias from "../../components/Profile/Preferencias";
import Seguridad from "../../components/Profile/Seguridad";
import DeleteModal from "../../components/Profile/DeleteModal";

import "../../styles/perfil.css";

const Perfil = () => {
  const [activeSection, setActiveSection] = useState("personal");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app-wrapper">    

      {/* MAIN */}
      <main className="main-content">

        <ProfileHeader />

        <div className="profile-layout">

          <ProfileSidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />

          <div className="profile-content">

            {activeSection === "personal" && (
              <PersonalInfo />
            )}

            {activeSection === "objetivos" && (
              <Objetivos />
            )}

            {activeSection === "preferencias" && (
              <Preferencias />
            )}

            {activeSection === "seguridad" && (
              <Seguridad setShowModal={setShowModal} />
            )}

          </div>
        </div>

        {showModal && (
          <DeleteModal setShowModal={setShowModal} />
        )}

      </main>
    </div>
  );
};

export default Perfil;