const MonthlyTarget = () => {
    return (
        <div className="monthlyTarget">
            <div className="monthlyTargetGraph">
                <div
                    className="widget-circle"
                    style={{
                        background: `conic-gradient(#FFF ${
                            (Math.abs(80) / 100) * 360
                        }deg, rgb(236,243,255) 0)`,
                    }}>
                    <span>{80}%</span>
                </div>
            </div>
            <div className="monthlyTargetChartData">
                <div className="monthlyTargetNumber">
                    <span>₹360K/</span>₹ 1K
                </div>
                <div className="monthlyTargetTitle">Closed Won</div>
            </div>
        </div>
    );
};

export default MonthlyTarget;
