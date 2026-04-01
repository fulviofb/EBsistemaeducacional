import { PlannerProvider, usePlanner } from './context/PlannerContext';
import UnitSelection from './components/tabs/UnitSelection';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Toast from './components/ui/Toast';
import RoutinePlanner from './components/tabs/RoutinePlanner';
import ActivityBank from './components/tabs/ActivityBank';
import ExperienceFields from './components/tabs/ExperienceFields';
import WeeklyJourney from './components/tabs/WeeklyJourney';
import SpiritualContent from './components/tabs/SpiritualContent';
import TeacherGuidance from './components/tabs/TeacherGuidance';
import BeyondActivities from './components/tabs/BeyondActivities';

function ActiveTab() {
  const { state } = usePlanner();
  switch (state.activeTab) {
    case 'rotina':   return <RoutinePlanner />;
    case 'banco':    return <ActivityBank />;
    case 'campos':   return <ExperienceFields />;
    case 'jornada':  return <WeeklyJourney />;
    case 'espirita': return <SpiritualContent />;
    case 'orient':   return <TeacherGuidance />;
    case 'alem':     return <BeyondActivities />;
    default:         return <RoutinePlanner />;
  }
}

function AppContent() {
  const { state } = usePlanner();

  if (!state.selectedUnit) {
    return <UnitSelection />;
  }

  return (
    <div className="min-h-screen bg-cream-100">
      <Header />
      <div className="flex relative">
        {/* Main — no mobile ocupa 100%; no desktop dá espaço para a sidebar */}
        <main className="flex-1 min-w-0 p-4 md:p-6 pb-24 lg:mr-96">
          <ActiveTab />
        </main>
        <Sidebar />
      </div>
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <PlannerProvider>
      <AppContent />
    </PlannerProvider>
  );
}
