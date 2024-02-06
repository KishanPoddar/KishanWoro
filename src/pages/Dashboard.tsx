import AdminSidePanel from "../components/AdminSidePanel";
import DashboardTables from "../components/DashboardTables";

const Dashboard = () => {
    return (
        <div className="mainSection">
            <AdminSidePanel />
            <DashboardTables />
        </div>
    );
};

export default Dashboard;
